import { NextRequest, NextResponse } from 'next/server';

const VIDEO_API_URL = 'https://ark.cn-beijing.volces.com/api/v3/contents/generations/tasks';
const VIDEO_API_KEY = process.env.DOUBO_API_KEY;
if (!VIDEO_API_KEY) {
  return NextResponse.json({ error: '未配置 API Key，请联系管理员' }, { status: 500 });
}
const VIDEO_MODEL = 'doubao-seedance-2-0-fast-260128';

// 视频生成脚本文案库
const VIDEO_SCRIPTS: Record<string, string> = {
  '火锅': '第一人称视角火锅店宣传广告，红油翻滚的铜锅，蒸汽氤氲，你拿起筷子夹起一片毛肚，在沸腾的红油中轻涮，背景音："鲜香麻辣，唇齿留香"，结尾展示门店招牌。',
  '奶茶': '第一人称视角奶茶店宣传，手持一杯渐变色果茶，在阳光下特写，冰块晶莹剔透，轻吸一口，背景音："清爽一夏"，结尾展示产品海报。',
  '烧烤': '第一人称视角深夜烧烤摊，炭火通红，你拿起羊肉串大口咬下，油脂香气扑鼻，背景音："深夜食堂，烟火气"，结尾展示门店霓虹招牌。',
  '烘焙': '第一人称视角面包店，新出炉的牛角面包金黄酥脆，你掰开一个，酥皮纷纷落下，背景音："麦香四溢"，结尾展示店铺陈列。',
  '酒店': '第一人称视角豪华客房，落地窗外城市夜景，躺在床上感受柔软床品，背景音："尊享品质，舒适体验"，结尾展示酒店外观。',
  '民宿': '第一人称视角民宿，清晨阳光洒进房间，你推开窗，大海/山景一览无余，背景音："远离喧嚣，诗意栖居"，结尾展示民宿全景。',
  '健身房': '第一人称视角健身房，你挥汗如雨训练，跑步机上的城市夜景，背景音："突破自我，遇见更好的自己"，结尾展示健身房全景。',
  '通用': '商家宣传视频，画面展示门店环境、产品特色、服务过程，背景音配合文字字幕，营造专业温馨氛围。',
};

export async function POST(request: NextRequest) {
  try {
    const { script, industry, ratio = '16:9', duration = 5, referenceImageUrl, referenceVideoUrl } = await request.json();

    if (!script) {
      return NextResponse.json({ error: '缺少视频脚本内容' }, { status: 400 });
    }

    // 构建内容
    const content: Array<Record<string, unknown>> = [{ type: 'text', text: script }];

    if (referenceImageUrl) {
      content.push({ type: 'image_url', image_url: { url: referenceImageUrl }, role: 'reference_image' });
    }
    if (referenceVideoUrl) {
      content.push({ type: 'video_url', video_url: { url: referenceVideoUrl }, role: 'reference_video' });
    }

    const response = await fetch(VIDEO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${VIDEO_API_KEY}`,
      },
      body: JSON.stringify({
        model: VIDEO_MODEL,
        content,
        ratio,
        duration: Math.min(duration, 11),
        watermark: false,
        generate_audio: true,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({
        error: data.error?.message || '视频生成API调用失败',
        code: data.error?.code,
      }, { status: 502 });
    }

    return NextResponse.json({
      success: true,
      taskId: data.id,
      status: data.status,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '未知错误';
    return NextResponse.json({ error: `服务器错误: ${message}` }, { status: 500 });
  }
}
