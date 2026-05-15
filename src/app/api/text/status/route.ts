import { NextRequest, NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = 'sun8619/douyin-studio';
const GITHUB_API = `https://api.github.com/repos/${GITHUB_REPO}`;

export async function GET(request: NextRequest) {
  const jobId = request.nextUrl.searchParams.get('jobId');

  if (!jobId) {
    return NextResponse.json({ error: '缺少 jobId 参数' }, { status: 400 });
  }

  if (!GITHUB_TOKEN) {
    return NextResponse.json({
      jobId,
      status: 'pending_fallback',
      message: '后台正在处理中，请稍候...',
    });
  }

  try {
    const res = await fetch(`${GITHUB_API}/contents/jobs/${jobId}.json`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!res.ok) {
      if (res.status === 404) {
        return NextResponse.json({ jobId, status: 'pending', message: '处理中，请稍候...' });
      }
      return NextResponse.json({ error: '查询失败' }, { status: 502 });
    }

    const data = await res.json();
    const job = JSON.parse(Buffer.from(data.content, 'base64').toString('utf8'));

    return NextResponse.json({
      jobId: job.id,
      status: job.status, // pending | success | failed
      result: job.result || null,
      error: job.error || null,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '未知错误';
    return NextResponse.json({ error: `服务器错误: ${message}` }, { status: 500 });
  }
}
