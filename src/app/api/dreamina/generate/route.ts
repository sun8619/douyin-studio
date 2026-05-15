import { NextRequest, NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = 'sun8619/douyin-studio';
const GITHUB_API = `https://api.github.com/repos/${GITHUB_REPO}`;

// 行业视频提示词模板（与豆包共享逻辑，但 Dreamina 更适合创意类）
const DREAMINA_VIDEO_PROMPTS: Record<string, string> = {
  '火锅': '第一人称视角火锅探店，镜头推进铜锅红油沸腾，毛肚在沸腾汤中七上八下，蘸上油碟一口入魂，香气扑面而来，门店排队盛况，烟火气十足，电影感暖色调',
  '奶茶': '第一人称手持渐变星空杯，芝士奶盖小山堆积，冰块折射彩虹光斑，猛吸一口果茶满足表情，慢镜头展示拉丝特效，店内氛围感，甜美清新风格',
  '烧烤': '第一人称撸串视角，炭火通红羊肉串滋滋作响，孜然辣椒洒落香气爆炸，油脂在嘴里爆开，配合冰啤碰杯，深夜烧烤摊热闹氛围，电影感暖色调',
  '烘焙': '法式烘焙店氛围，手持精致马卡龙，酥皮层层碎裂慢镜头，店内温暖灯光，优雅法式装潢，阳光洒落窗边下午茶时光，治愈清新风格',
  '小龙虾': '夜市大排档视角，戴手套掰开麻辣小龙虾，虾黄满溢虾肉Q弹，蒜蓉麻辣双重暴击，啤酒碰杯，深夜放毒食欲感，高能电影感',
  '快捷': '快餐门店氛围，第一人称点餐取餐，金黄薯条小山汉堡横切面肉饼厚实，干净明亮标准化门店环境，年轻活力快节奏',
  '海鲜': '高端海鲜酒楼氛围，帝王蟹在水族箱游动，师傅现场蒸制蟹腿肉洁白，大理石地面水晶吊灯，雍容华贵高端感',
  '自助餐': '俯拍自助餐台全景，中西日泰美食琳琅满目，铁板区热气腾腾，食客穿梭取餐，丰盛祥和氛围',
  '面馆': '日式面馆氛围，师傅甩面动作热气腾腾，深褐骨汤浓郁，大片叉烧溏心蛋，温暖治愈烟火气',
  '酒店': '豪华套房全景，落地窗城市夜景璀璨，2米大床柔软，浴缸透明玻璃分割，雍容华贵奢华感',
  '民宿': '超大海景/山景落地窗，乳白床品柔软蓬松，阳光洒落窗边，藤编座椅，逃离城市诗意栖居，治愈清新',
  '景区': '无人机航拍云海日出，金色阳光穿透云缝，山峦层叠延时摄影，震撼壮观壁纸级画面',
  '健身房': '动感单车团课红色灯光闪烁，教练激情领骑，汗水光影，年轻燃脂活力氛围，高能运动感',
  '美容院': '高端美容院氛围，柔和暖黄灯光，精致美容床铺，镜前高端护肤产品陈列，女性精致仪式感',
  '通用': '多场景快剪门店展示，产品特写质感，顾客满意表情，热闹氛围，抖音爆款快节奏',
};

function buildDreaminaPrompt(industry: string, customPrompt?: string): string {
  if (customPrompt) return customPrompt;
  return DREAMINA_VIDEO_PROMPTS[industry] || `${industry}商家营销视频，抖音风格，专业质感`;
}

async function createJobInGithub(jobId: string, payload: Record<string, unknown>): Promise<boolean> {
  if (!GITHUB_TOKEN) return false;
  const path = `jobs/${jobId}.json`;
  const content = JSON.stringify({ id: jobId, ...payload, created_at: new Date().toISOString() });
  const encoded = Buffer.from(content).toString('base64');

  try {
    // 检查文件是否存在
    await fetch(`${GITHUB_API}/contents/${path}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}`, Accept: 'application/vnd.github.v3+json' },
    }).then(r => r.json()).then(existing => {
      // 如果存在则更新
      if (existing.sha) {
        fetch(`${GITHUB_API}/contents/${path}`, {
          method: 'PUT',
          headers: { Authorization: `token ${GITHUB_TOKEN}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: `update job ${jobId}`, sha: existing.sha, content: encoded }),
        });
      }
    }).catch(() => {});

    // 尝试创建
    const res = await fetch(`${GITHUB_API}/contents/${path}`, {
      method: 'PUT',
      headers: { Authorization: `token ${GITHUB_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: `create job ${jobId}`, content: encoded }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { type, prompt, industry, ratio = '16:9', duration = 5, referenceImageUrl } = await request.json();

    if (!type || !prompt) {
      return NextResponse.json({ error: '缺少 type 或 prompt 参数' }, { status: 400 });
    }

    if (!['text2video', 'image2video', 'text2image'].includes(type)) {
      return NextResponse.json({ error: '不支持的 type，仅支持 text2video / image2video / text2image' }, { status: 400 });
    }

    const jobId = `dreamina_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    const jobPayload = {
      type,
      prompt: type === 'text2video' ? buildDreaminaPrompt(industry || '通用', prompt) : prompt,
      industry,
      ratio,
      duration: Math.min(Math.max(duration, 4), 15),
      referenceImageUrl,
      status: 'pending',
      result: null,
    };

    // 尝试写入 GitHub 作为任务队列
    await createJobInGithub(jobId, jobPayload);

    // 同时返回 jobId，让前端可以轮询状态
    return NextResponse.json({
      success: true,
      jobId,
      status: 'pending',
      message: '任务已提交，请通过 /api/dreamina/status 轮询结果',
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '未知错误';
    return NextResponse.json({ error: `服务器错误: ${message}` }, { status: 500 });
  }
}
