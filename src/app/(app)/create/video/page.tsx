'use client';

import { useState, useRef, useCallback } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { videoSteps } from '@/data/mock-data';

const INDUSTRIES = [
  '火锅', '奶茶', '烧烤', '烘焙', '小龙虾',
  '海鲜', '自助餐', '面馆', '快捷',
  '酒店', '民宿', '景区',
  '健身房', '美容院', 'KTV',
];

const RATIOS = [
  { value: '16:9', label: '横屏 16:9', desc: '抖音短视频、小红书' },
  { value: '9:16', label: '竖屏 9:16', desc: '抖音竖版内容、Story' },
  { value: '1:1', label: '方形 1:1', desc: '小红书、朋友圈' },
];

const DURATIONS = [5, 11];

interface VideoResult {
  videoUrl: string;
  coverUrl?: string;
  audioUrl?: string;
}

type GenState = 'idle' | 'submitting' | 'polling' | 'success' | 'error';
type GenEngine = 'doubao' | 'dreamina';

export default function VideoCreationPage() {
  const [industry, setIndustry] = useState('奶茶');
  const [script, setScript] = useState('');
  const [useTemplate, setUseTemplate] = useState(true);
  const [ratio, setRatio] = useState('16:9');
  const [duration, setDuration] = useState(5);
  const [referenceImage, setReferenceImage] = useState<File | null>(null);
  const [referenceImageUrl, setReferenceImageUrl] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const [state, setState] = useState<GenState>('idle');
  const [taskId, setTaskId] = useState('');
  const [pollCount, setPollCount] = useState(0);
  const [result, setResult] = useState<VideoResult | null>(null);
  const [error, setError] = useState('');

  const uploadReferenceImage = useCallback(async (file: File): Promise<string> => {
    // 简化：直接用本地 URL 预览
    return new Promise((resolve) => {
      const url = URL.createObjectURL(file);
      setReferenceImageUrl(url);
      setUploadStatus('ready');
      resolve(url);
    });
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setUploadStatus('error');
      setError('图片大小不能超过 5MB');
      return;
    }
    setUploadStatus('uploading');
    try {
      await uploadReferenceImage(file);
    } catch {
      setUploadStatus('error');
      setError('图片上传失败');
    }
  };

  const [engine, setEngine] = useState<GenEngine>('doubao');
  const [dreaminaJobId, setDreaminaJobId] = useState('');

  const submitGeneration = async () => {
    const finalScript = useTemplate
      ? `第一人称视角${industry}商家宣传，${script || '展示门店环境、产品特色、服务过程，背景音配合文字字幕，营造专业温馨氛围。'}`
      : script;

    if (!finalScript.trim()) {
      setError('请输入视频脚本内容');
      return;
    }

    setState('submitting');
    setError('');
    setResult(null);
    setDreaminaJobId('');

    // ── 即梦通道 ──
    if (engine === 'dreamina') {
      try {
        const res = await fetch('/api/dreamina/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'text2video',
            prompt: finalScript,
            industry,
            ratio,
            duration,
            referenceImageUrl: referenceImageUrl || undefined,
          }),
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.error || '提交失败');
        }
        setDreaminaJobId(data.jobId);
        setTaskId(data.jobId);
        setState('polling');
        setPollCount(0);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : '未知错误';
        setError(msg);
        setState('error');
      }
      return;
    }

    // ── 豆包通道 ──
    try {
      const res = await fetch('/api/video/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          script: finalScript,
          industry,
          ratio,
          duration,
          referenceImageUrl: referenceImageUrl || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        // 特殊处理额度超限
        if (data.code === 'SetLimitExceeded' || data.error?.includes?.('SetLimitExceeded')) {
          setError('视频生成额度已用完，请去火山引擎控制台开启模型服务：https://console.volcengine.com/ark');
          setState('error');
          return;
        }
        throw new Error(data.error || '提交失败');
      }

      setTaskId(data.taskId);
      setState('polling');
      setPollCount(0);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : '未知错误';
      setError(msg);
      setState('error');
    }
  };

  const pollStatus = async () => {
    if (!taskId) return;
    setPollCount(c => c + 1);

    // ── 即梦轮询 ──
    if (dreaminaJobId && engine === 'dreamina') {
      try {
        const res = await fetch(`/api/dreamina/status?jobId=${dreaminaJobId}`);
        const data = await res.json();

        if (data.status === 'success' && data.result) {
          setResult({
            videoUrl: data.result.videoUrl,
            coverUrl: data.result.coverUrl,
          });
          setState('success');
        } else if (data.status === 'failed') {
          setError(`生成失败: ${data.error || '未知错误'}`);
          setState('error');
        }
        // else still polling
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : '轮询失败';
        setError(msg);
        setState('error');
      }
      return;
    }

    // ── 豆包轮询 ──
    try {
      const res = await fetch(`/api/video/status?taskId=${taskId}`);
      const data = await res.json();

      if (data.status === 'succeed') {
        setResult({
          videoUrl: data.videoUrl,
          coverUrl: data.coverUrl,
          audioUrl: data.audioUrl,
        });
        setState('success');
      } else if (data.status === 'failed') {
        if (data.errorCode === 'SetLimitExceeded') {
          setError('视频生成额度已用完，请去火山引擎控制台开启模型服务');
          setState('error');
        } else {
          setError(`生成失败: ${data.error}`);
          setState('error');
        }
      }
      // else still polling
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : '轮询失败';
      setError(msg);
      setState('error');
    }
  };

  // 自动轮询
  if (state === 'polling') {
    const timer = setTimeout(() => {
      pollStatus();
    }, 5000);
    // 注意：React 规则不允许在 render 中调用副作用，这里用 useEffect 模式简化为直接调用
    // 实际用 useEffect，这里为简化每次状态变更后手动触发
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-5">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-slate-900">🎬 短视频生成</h1>
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 text-xs">付费功能</Badge>
          </div>
          <p className="text-slate-500 mt-1 text-sm">
            AI 生成完整短视频（脚本 → 画面 → 配音）· 支持🔥豆包·跃创 & ✨即梦 Dreamina
          </p>
        </div>
      </header>

      <div className="px-8 py-7 max-w-5xl space-y-7">

        {/* Process Flow */}
        <div>
          <h2 className="text-sm font-semibold text-slate-700 mb-5">视频生成流程</h2>
          <div className="grid grid-cols-4 gap-4">
            {videoSteps.map((step, idx) => (
              <div key={step.step} className="relative">
                <Card className={`border-2 ${idx === 0 ? 'border-red-200 bg-red-50/30' : 'border-slate-100 bg-white'} shadow-sm`}>
                  <CardContent className="p-5 text-center">
                    <div className="relative inline-flex mb-3">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${
                        idx === 0 ? 'bg-red-100 shadow-sm' : 'bg-slate-100'
                      }`}>
                        {step.icon}
                      </div>
                      <div className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                        idx === 0 ? 'bg-red-500 text-white' : 'bg-slate-300 text-white'
                      }`}>
                        {step.step}
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-1.5">{step.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                {idx < videoSteps.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                      <span className="text-xs text-slate-400">→</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Generator Card */}
        <Card className="border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-red-400 px-6 py-3">
            <h2 className="text-white font-semibold text-sm">🤖 AI 短视频生成器</h2>
          </div>
          <CardContent className="p-6 space-y-5">

            {/* Step 1: Industry */}
            <div>
              <Label className="text-sm font-semibold text-slate-700 mb-2 block">1️⃣ 选择行业</Label>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map(ind => (
                  <button
                    key={ind}
                    onClick={() => setIndustry(ind)}
                    className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                      industry === ind
                        ? 'bg-red-500 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Script */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label className="text-sm font-semibold text-slate-700">2️⃣ 视频脚本</Label>
                <button
                  onClick={() => setUseTemplate(v => !v)}
                  className={`text-xs px-3 py-1 rounded-full border transition-all ${
                    useTemplate ? 'bg-blue-50 border-blue-300 text-blue-600' : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}
                >
                  {useTemplate ? '✓ 使用模板脚本' : '+ 使用模板脚本'}
                </button>
              </div>

              {useTemplate ? (
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    将使用 <span className="font-semibold text-slate-700">{industry}</span> 行业模板脚本，可自定义补充描述：
                  </p>
                  <Textarea
                    value={script}
                    onChange={e => setScript(e.target.value)}
                    placeholder="补充描述，如：突出性价比、展示门店环境、加入老板IP...（不填则使用默认模板）"
                    className="min-h-[80px] text-sm border-slate-200 resize-none"
                  />
                  <p className="text-xs text-slate-400 mt-2">
                    💡 建议先在「文案创作」模块生成脚本，再粘贴到这里
                  </p>
                </div>
              ) : (
                <Textarea
                  value={script}
                  onChange={e => setScript(e.target.value)}
                  placeholder="输入完整视频脚本，描述场景、动作、画面、旁白，如：开场展示门店外观 → 进店点餐 → 食物上桌 → 用餐场景..."
                  className="min-h-[120px] text-sm border-slate-200 resize-none"
                />
              )}
            </div>

            {/* Step 3: Settings */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label className="text-sm font-semibold text-slate-700 mb-2 block">3️⃣ 视频比例</Label>
                <div className="space-y-2">
                  {RATIOS.map(r => (
                    <button
                      key={r.value}
                      onClick={() => setRatio(r.value)}
                      className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                        ratio === r.value ? 'border-red-300 bg-red-50' : 'border-slate-100 hover:border-slate-200 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-7 rounded flex items-center justify-center text-xs font-bold ${
                          ratio === r.value ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'
                        } ${r.value === '9:16' ? 'h-10 w-7' : ''}`}>
                          {r.value}
                        </div>
                        <div>
                          <div className={`text-xs font-semibold ${ratio === r.value ? 'text-red-700' : 'text-slate-700'}`}>{r.label}</div>
                          <div className="text-xs text-slate-400">{r.desc}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-sm font-semibold text-slate-700 mb-2 block">4️⃣ 参考图片（可选）</Label>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  onClick={() => fileRef.current?.click()}
                  className="w-full p-4 rounded-xl border-2 border-dashed border-slate-200 hover:border-red-300 hover:bg-red-50/30 transition-all text-center"
                >
                  {uploadStatus === 'uploading' ? (
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-6 h-6 border-2 border-red-200 border-t-red-500 rounded-full animate-spin" />
                      <span className="text-xs text-slate-500">上传中...</span>
                    </div>
                  ) : referenceImageUrl ? (
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={referenceImageUrl} alt="预览" className="w-12 h-12 object-cover rounded-lg" />
                      <div className="text-left">
                        <p className="text-xs font-semibold text-slate-700">已选择图片</p>
                        <p className="text-xs text-slate-400">点击可更换</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl">🖼️</span>
                      <span className="text-xs text-slate-500">点击上传参考图片</span>
                      <span className="text-xs text-slate-400">支持 JPG/PNG，不超过 5MB</span>
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Step 5: Duration */}
            <div>
              <Label className="text-sm font-semibold text-slate-700 mb-2 block">5️⃣ 视频时长</Label>
              <div className="flex gap-3">
                {DURATIONS.map(d => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`flex-1 p-3 rounded-xl border-2 text-center transition-all ${
                      duration === d ? 'border-red-300 bg-red-50' : 'border-slate-100 hover:border-slate-200 bg-white'
                    }`}
                  >
                    <div className={`text-lg font-bold ${duration === d ? 'text-red-600' : 'text-slate-700'}`}>{d}秒</div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {d === 5 ? '快剪版' : '完整版'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Engine Selector + Submit */}
            {state === 'idle' || state === 'error' ? (
              <div className="space-y-3">
                {/* 引擎选择 */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 font-medium">生成引擎：</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEngine('doubao')}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                        engine === 'doubao'
                          ? 'bg-orange-50 border-orange-300 text-orange-700 font-semibold'
                          : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      🔥 豆包·跃创
                    </button>
                    <button
                      onClick={() => setEngine('dreamina')}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                        engine === 'dreamina'
                          ? 'bg-pink-50 border-pink-300 text-pink-700 font-semibold'
                          : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      ✨ 即梦 Dreamina
                    </button>
                  </div>
                  {engine === 'dreamina' && (
                    <span className="text-xs text-pink-500">由小七提供 · 创意风格更丰富</span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-slate-400">
                    {engine === 'doubao'
                      ? `模型：豆包·跃创视频 · ${ratio} · ${duration}秒${referenceImageUrl ? ' · 含参考图片' : ''}`
                      : `引擎：即梦 AI · ${ratio} · ${duration}秒 · 由小七生成${referenceImageUrl ? ' · 含参考图片' : ''}`
                    }
                  </div>
                  <Button
                    onClick={submitGeneration}
                    className={engine === 'dreamina'
                      ? 'bg-gradient-to-r from-pink-500 to-purple-400 hover:from-pink-600 hover:to-purple-500 text-white shadow-sm px-8'
                      : 'bg-gradient-to-r from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 text-white shadow-sm px-8'
                    }
                  >
                    {engine === 'dreamina' ? '✨ 即梦生成视频' : '🎬 开始生成视频'}
                  </Button>
                </div>
              </div>
            ) : null}
          </CardContent>
        </Card>

        {/* Polling State */}
        {state === 'submitting' && (
          <Card className="border-blue-200 bg-blue-50/50">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-10 h-10 border-3 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto" />
              <div>
                <p className="font-semibold text-blue-800">正在提交生成任务...</p>
                <p className="text-sm text-blue-600 mt-1">约需 2-3 分钟，请稍候</p>
              </div>
            </CardContent>
          </Card>
        )}

        {state === 'polling' && (
          <Card className="border-pink-200 bg-pink-50/50">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border-3 border-pink-200 border-t-pink-500 rounded-full animate-spin flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-pink-800">🎬 视频生成中（已等待 {pollCount * 5} 秒）</p>
                  <p className="text-sm text-pink-600 mt-1">
                    {engine === 'dreamina'
                      ? `✨ 即梦 AI 正在生成中，通常需要 2-4 分钟，请稍候...`
                      : `豆包 AI 正在生成中，通常需要 1-3 分钟`
                    }
                  </p>
                  <Progress value={Math.min((pollCount * 5 / 180) * 100, 90)} className="h-2 mt-3 bg-pink-100 [&>div]:bg-gradient-to-r [&>div]:from-pink-400 [&>div]:to-red-400" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={pollStatus}
                  className="border-pink-300 text-pink-600 hover:bg-pink-100"
                >
                  🔄 立即刷新状态
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Success */}
        {state === 'success' && result && (
          <Card className="border-green-200 bg-green-50/50">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎉</span>
                <div>
                  <p className="font-bold text-green-800">视频生成成功！</p>
                  <p className="text-sm text-green-600">总耗时约 {pollCount * 5} 秒</p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <video
                  src={result.videoUrl}
                  controls
                  className="w-full"
                  poster={result.coverUrl}
                />
              </div>

              <div className="flex gap-3">
                <a href={result.videoUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    ↗ 下载视频
                  </Button>
                </a>
                {result.coverUrl && (
                  <a href={result.coverUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-green-300 text-green-700">
                      🖼️ 下载封面
                    </Button>
                  </a>
                )}
                <Button
                  variant="outline"
                  className="border-slate-300"
                  onClick={() => { setState('idle'); setResult(null); setTaskId(''); setDreaminaJobId(''); }}
                >
                  🔄 再生成一条
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Error */}
        {state === 'error' && error && (
          <Card className="border-red-200 bg-red-50/50">
            <CardContent className="p-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div className="flex-1">
                  <p className="font-semibold text-red-800">生成失败</p>
                  <p className="text-sm text-red-600 mt-1 whitespace-pre-wrap">{error}</p>
                  {error.includes('额度') && (
                    <div className="mt-3 p-3 bg-white rounded-xl border border-red-200">
                      <p className="text-xs text-red-700">
                        👉 <a href="https://console.volcengine.com/ark/region:ark+cn-beijing/doubao" target="_blank" rel="noopener noreferrer" className="underline">点击这里去火山引擎控制台 → 模型激活</a>，开启 doubao-seedance 模型后重试
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => { setState('idle'); setError(''); setDreaminaJobId(''); }}
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  🔄 重试
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Feature Preview */}
        <div>
          <h2 className="text-sm font-semibold text-slate-700 mb-4">📋 即将支持的视频类型</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: '🍲', title: '产品展示', desc: '30-60秒美食/产品展示视频，突出卖点' },
              { icon: '🎙️', title: '探店 vlog', desc: '第一人称探店体验视频，含转场和字幕' },
              { icon: '📢', title: '促销广告', desc: '节日促销、开业活动等高转化带货视频' },
              { icon: '👨‍🍳', title: '门店故事', desc: '品牌故事、厨师介绍等品牌背书视频' },
              { icon: '📱', title: '直播预告', desc: '短视频预告片，引导预约直播' },
              { icon: '🎁', title: 'UGC 模板', desc: '用户生成内容的模板，支持批量分发' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-4 border border-slate-100 flex items-start gap-3">
                <span className="text-2xl mt-0.5 flex-shrink-0">{item.icon}</span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
