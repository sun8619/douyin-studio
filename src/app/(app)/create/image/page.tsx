'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';

const INDUSTRIES = [
  '火锅', '奶茶', '烧烤', '烘焙', '小龙虾',
  '快捷', '海鲜', '自助餐', '面馆',
  '酒店', '民宿', '景区',
  '健身房', '美容院', 'KTV', '棋牌',
];

const IMAGE_TYPES = [
  { value: '商品主图', desc: '菜品/产品特写，适合外卖/大众点评' },
  { value: '场景氛围图', desc: '门店环境、用餐氛围展示' },
  { value: '营销海报', desc: '节日/促销海报，适配抖音风格' },
  { value: '店铺装修图', desc: '门头图/菜单封面/导视系统' },
  { value: '直播背景图', desc: '直播间背景板、贴片设计' },
];

type GenerationState = 'idle' | 'loading' | 'success' | 'error';

interface GenerationResult {
  imageUrl: string;
  prompt: string;
  size: string;
}

export default function ImageDesignPage() {
  const [industry, setIndustry] = useState('火锅');
  const [imageType, setImageType] = useState('商品主图');
  const [customPrompt, setCustomPrompt] = useState('');
  const [showCustom, setShowCustom] = useState(false);
  const [state, setState] = useState<GenerationState>('idle');
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [error, setError] = useState('');
  const [useCount, setUseCount] = useState(0);
  const [history, setHistory] = useState<GenerationResult[]>([]);

  const generate = async () => {
    setState('loading');
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/images/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ industry, imageType, customPrompt: showCustom ? customPrompt : undefined }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || '生成失败');
      }

      setResult({ imageUrl: data.imageUrl, prompt: data.prompt, size: data.size });
      setHistory(prev => [data, ...prev.slice(0, 4)]);
      setUseCount(c => c + 1);
      setState('success');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : '未知错误';
      setError(msg);
      setState('error');
    }
  };

  const copyPrompt = () => {
    if (result?.prompt) navigator.clipboard.writeText(result.prompt);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-5">
        <div className="max-w-5xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">🖼️ 图片设计</h1>
              <p className="text-slate-500 mt-1 text-sm">AI 生成营销海报 · 商品主图 · 店铺氛围图</p>
            </div>
            <Badge className="bg-red-50 text-red-600 border-red-200 text-xs">
              🔥 已生成 {useCount} 张
            </Badge>
          </div>
        </div>
      </header>

      <div className="px-8 py-7 max-w-5xl space-y-6">

        {/* Pro Banner */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl flex-shrink-0">
              👑
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-bold text-amber-900">体验模式 · 每日 5 张免费</h3>
                <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 text-xs">测试版</Badge>
              </div>
              <p className="text-xs text-amber-700 leading-relaxed">
                当前为内测体验版，接入字节·豆包跃创 AI 绘画模型，可生成 2K 高清图片。
                正式版将支持 4K 无水印、200+ 行业模板、批量生成。
              </p>
            </div>
          </div>
        </div>

        {/* Generator */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-orange-400 px-6 py-3">
            <h2 className="text-white font-semibold text-sm">🎨 AI 图片生成器</h2>
          </div>

          <div className="p-6 space-y-5">
            {/* Step 1: Industry */}
            <div>
              <Label className="text-sm font-semibold text-slate-700 mb-2 block">
                1️⃣ 选择行业
              </Label>
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

            <Separator />

            {/* Step 2: Image Type */}
            <div>
              <Label className="text-sm font-semibold text-slate-700 mb-2 block">
                2️⃣ 选择图片类型
              </Label>
              <div className="grid grid-cols-5 gap-3">
                {IMAGE_TYPES.map(it => (
                  <button
                    key={it.value}
                    onClick={() => setImageType(it.value)}
                    className={`p-3 rounded-xl border-2 text-left transition-all ${
                      imageType === it.value
                        ? 'border-red-400 bg-red-50'
                        : 'border-slate-100 hover:border-slate-200 bg-white'
                    }`}
                  >
                    <div className={`text-xs font-semibold ${
                      imageType === it.value ? 'text-red-600' : 'text-slate-700'
                    }`}>{it.value}</div>
                    <div className="text-xs text-slate-400 mt-0.5 leading-tight">{it.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <Separator />

            {/* Step 3: Custom Prompt Toggle */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label className="text-sm font-semibold text-slate-700">
                  3️⃣ 自定义提示词（可选）
                </Label>
                <button
                  onClick={() => setShowCustom(v => !v)}
                  className={`text-xs px-3 py-1 rounded-full border transition-all ${
                    showCustom ? 'bg-blue-50 border-blue-300 text-blue-600' : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}
                >
                  {showCustom ? '✓ 使用自定义' : '+ 添加自定义描述'}
                </button>
              </div>

              {showCustom && (
                <Textarea
                  value={customPrompt}
                  onChange={e => setCustomPrompt(e.target.value)}
                  placeholder="补充更多描述，如：主色调金色、加入品牌Logo位置、突出性价比..."
                  className="min-h-[72px] text-sm border-slate-200 resize-none"
                />
              )}

              {!showCustom && (
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-slate-500">将使用模板提示词</span>
                    <span className="text-xs text-slate-400">（行业通用风格）</span>
                  </div>
                  <p className="text-xs text-slate-400 italic leading-relaxed">
                    选择「{imageType}」后，系统将根据 {industry} 行业特点匹配专业提示词模板
                  </p>
                </div>
              )}
            </div>

            <Separator />

            {/* Generate Button */}
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-400">
                行业：<span className="text-slate-600 font-medium">{industry}</span>
                {' · '}
                类型：<span className="text-slate-600 font-medium">{imageType}</span>
                {' · '}
                模型：豆包·跃创（2K高清）
              </div>
              <Button
                onClick={generate}
                disabled={state === 'loading'}
                className="bg-gradient-to-r from-red-500 to-orange-400 hover:from-red-600 hover:to-orange-500 text-white shadow-sm px-8"
              >
                {state === 'loading' ? '🤖 生成中（10-20秒）...' : '🎨 立即生成'}
              </Button>
            </div>

            {/* Loading */}
            {state === 'loading' && (
              <div className="bg-slate-50 rounded-xl p-8 flex flex-col items-center justify-center gap-3">
                <div className="w-8 h-8 border-3 border-red-200 border-t-red-500 rounded-full animate-spin" />
                <p className="text-sm text-slate-500">AI 正在生成图片，请稍候...</p>
              </div>
            )}

            {/* Error */}
            {state === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-sm text-red-600">❌ 生成失败：{error}</p>
                <p className="text-xs text-red-400 mt-1">请重试或联系技术支持</p>
              </div>
            )}

            {/* Result */}
            {state === 'success' && result && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                  <span className="text-green-500 text-lg">✅</span>
                  <div>
                    <p className="text-sm font-semibold text-green-800">生成成功！</p>
                    <p className="text-xs text-green-600 mt-0.5">
                      {result.size} · 豆包·跃创模型 · {industry}/{imageType}
                    </p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={result.imageUrl}
                    alt="生成的图片"
                    className="w-full object-contain max-h-[480px] bg-slate-100"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Button size="sm" className="bg-white text-slate-700 hover:bg-slate-100 shadow-sm text-xs h-8">
                      <a href={result.imageUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        ↗ 下载原图
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/80 hover:bg-white shadow-sm text-xs h-8" onClick={copyPrompt}>
                      📋 复制提示词
                    </Button>
                  </div>
                </div>

                <details className="bg-slate-50 rounded-xl border border-slate-100 p-3">
                  <summary className="text-xs text-slate-500 cursor-pointer">查看实际使用的提示词</summary>
                  <div className="mt-2 p-3 bg-white rounded-lg border border-slate-100">
                    <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap">{result.prompt}</p>
                  </div>
                </details>
              </div>
            )}
          </div>
        </div>

        {/* History */}
        {history.length > 0 && (
          <div>
            <h2 className="text-base font-semibold text-slate-800 mb-4">📋 生成历史</h2>
            <div className="grid grid-cols-5 gap-3">
              {history.map((h, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden border border-slate-200 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={h.imageUrl} alt={`历史${i + 1}`} className="w-full h-24 object-cover bg-slate-100" />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={h.imageUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-white text-slate-700 text-xs h-7">↗</Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Template Gallery (read-only reference) */}
        <div>
          <h2 className="text-base font-semibold text-slate-800 mb-4">📚 模板参考（正式版可用）</h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              { id: 't1', title: '618大促主视觉', category: '促销活动', style: '促销风', preview: '🔥 618 大促 · 全场5折起！' },
              { id: 't2', title: '新品上市海报', category: '新品发布', style: '简约风', preview: '✨ 新品上市 · 限时尝鲜' },
              { id: 't3', title: '节假日活动横幅', category: '节日营销', style: '节日风', preview: '🎉 端午佳节 · 粽情回馈' },
              { id: 't4', title: '店铺环境展示', category: '品牌宣传', style: '品质风', preview: '🏠 舒适环境 · 品质享受' },
              { id: 't5', title: '周年庆主视觉', category: '庆典', style: '庆典风', preview: '🎂 12周年 · 感恩回馈' },
            ].map((tmpl) => (
              <Card key={tmpl.id || tmpl.title} className="border-slate-100 shadow-sm overflow-hidden">
                <div className="h-28 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center relative">
                  <div className="text-center p-3">
                    <p className="text-sm font-bold text-slate-700 leading-snug">{tmpl.preview}</p>
                  </div>
                  <div className="absolute top-2 right-2">
                    <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-xs shadow-sm">🔒</div>
                  </div>
                </div>
                <CardContent className="p-2.5">
                  <p className="text-xs font-semibold text-slate-700">{tmpl.title}</p>
                  <p className="text-xs text-slate-400">{tmpl.category} · {tmpl.style}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
