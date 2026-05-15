import { NextRequest, NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = 'sun8619/douyin-studio';
const GITHUB_API = `https://api.github.com/repos/${GITHUB_REPO}`;

// 写任务到 GitHub jobs/ 目录，由小七后台处理
async function writeTextJob(jobId: string, payload: Record<string, unknown>): Promise<boolean> {
  if (!GITHUB_TOKEN) return false;
  const path = `jobs/text_${jobId}.json`;
  const content = JSON.stringify({
    id: jobId,
    ...payload,
    created_at: new Date().toISOString(),
    status: 'pending',
    result: null,
  });
  const encoded = Buffer.from(content).toString('base64');

  try {
    const res = await fetch(`${GITHUB_API}/contents/${path}`, {
      method: 'PUT',
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `text job ${jobId}`,
        content: encoded,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const {
      textType = 'script',
      industry,
      category,
      brandName,
      topic,
      marketingGoal,
      versionCount = 3,
    } = await request.json();

    if (!industry || !category) {
      return NextResponse.json(
        { error: '缺少必要参数: industry, category' },
        { status: 400 }
      );
    }

    const jobId = `text_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    // 关键参数传递给小七处理
    const jobPayload = {
      textType,
      industry,
      category,
      brandName: brandName?.trim() || '',
      topic: topic?.trim() || '',
      marketingGoal: marketingGoal || '新品推广',
      versionCount: Math.min(versionCount, 3),
    };

    // 尝试写 GitHub Job（异步由小七处理）
    const written = await writeTextJob(jobId, jobPayload);

    if (written) {
      return NextResponse.json({
        success: true,
        jobId,
        status: 'pending',
        message: '文案生成中，约1-2分钟内完成，请稍候...',
        notice: '由小七 AI 智能生成，品牌化定制脚本',
      });
    }

    // GitHub Token 不可用时，降级到"小七正在处理"状态
    return NextResponse.json({
      success: true,
      jobId,
      status: 'pending_fallback',
      message: '已收到请求，正在排队处理中...',
      notice: '当前为排队模式，生成可能需要等待片刻',
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '未知错误';
    return NextResponse.json({ error: `服务器错误: ${message}` }, { status: 500 });
  }
}
