import { NextRequest, NextResponse } from 'next/server';

const STATUS_API_URL = 'https://ark.cn-beijing.volces.com/api/v3/contents/generations/tasks';
const VIDEO_API_KEY = process.env.DOUBO_API_KEY;

function requireVideoKey() {
  if (!VIDEO_API_KEY) {
    return NextResponse.json(
      { error: 'Server misconfiguration: DOUBO_API_KEY environment variable is not set' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const keyErr = requireVideoKey();
  if (keyErr) return keyErr;
  const taskId = request.nextUrl.searchParams.get('taskId');

  if (!taskId) {
    return NextResponse.json({ error: '缺少 taskId 参数' }, { status: 400 });
  }

  try {
    const response = await fetch(`${STATUS_API_URL}/${taskId}`, {
      headers: {
        'Authorization': `Bearer ${VIDEO_API_KEY}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({
        error: data.error?.message || '查询失败',
        code: data.error?.code,
      }, { status: 502 });
    }

    // 返回关键字段
    return NextResponse.json({
      taskId: data.id,
      status: data.status, // pending | running | succeed | failed
      videoUrl: data.content?.video_url || null,
      coverUrl: data.content?.cover_url || null,
      audioUrl: data.content?.audio_url || null,
      resolution: data.resolution || null,
      duration: data.duration || null,
      fps: data.framespersecond || null,
      error: data.error?.message || null,
      errorCode: data.error?.code || null,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '未知错误';
    return NextResponse.json({ error: `服务器错误: ${message}` }, { status: 500 });
  }
}
