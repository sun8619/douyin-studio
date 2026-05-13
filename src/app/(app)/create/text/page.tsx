'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { mockTextResults, industries, categories, textTypes } from '@/data/mock-data';
import type { TextType } from '@/data/mock-data';

export default function TextCreationPage() {
  const [selectedType, setSelectedType] = useState<TextType>('script');
  const [industry, setIndustry] = useState('');
  const [category, setCategory] = useState('');
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCategories = categories.filter((c) => !industry || c.industry === industry);

  const handleGenerate = async () => {
    if (!industry || !category || !topic.trim()) return;
    setIsGenerating(true);
    setResults([]);
    setSelectedVersion(null);

    // Simulate AI generation delay
    await new Promise((r) => setTimeout(r, 1800));

    const mockResults = mockTextResults[selectedType] || [];
    setResults(mockResults.map((r) => r.content));
    if (mockResults.length > 0) setSelectedVersion(mockResults[0].id);
    setIsGenerating(false);
  };

  const handleCopy = async (content: string, id: string) => {
    await navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const selectedTypeInfo = textTypes.find((t) => t.value === selectedType);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-5">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-bold text-slate-900">✍️ 文案创作</h1>
          <p className="text-slate-500 mt-1 text-sm">AI 智能生成抖音内容文案，支持多种类型，免费使用</p>
        </div>
      </header>

      <div className="px-8 py-7 max-w-5xl">
        {/* Free Badge */}
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-6">
          <span className="text-green-600 text-sm">🎁</span>
          <span className="text-sm text-green-700 font-medium">免费功能</span>
          <span className="text-xs text-green-600">· 每日可生成 20 次 · 无广告</span>
        </div>

        {/* Type Selection */}
        <div className="mb-6">
          <Label className="text-sm font-semibold text-slate-700 mb-3 block">选择文案类型</Label>
          <div className="grid grid-cols-2 gap-3">
            {textTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => { setSelectedType(type.value); setResults([]); setSelectedVersion(null); }}
                className={`text-left p-4 rounded-xl border-2 transition-all ${
                  selectedType === type.value
                    ? 'border-red-400 bg-red-50 shadow-sm'
                    : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="text-xl">{type.icon}</span>
                  <span className="text-sm font-semibold text-slate-800">{type.label}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{type.description}</p>
              </button>
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        {/* Input Form */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-slate-700 mb-4">填写创作信息</h3>
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs text-slate-600">所在行业 <span className="text-red-400">*</span></Label>
                  <Select value={industry} onValueChange={(v) => { setIndustry(v as string); setCategory(''); }}>
                    <SelectTrigger className="h-10 text-sm border-slate-200 bg-slate-50">
                      <SelectValue placeholder="请选择行业" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((ind) => (
                        <SelectItem key={ind.value} value={ind.value}>{ind.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs text-slate-600">品类 <span className="text-red-400">*</span></Label>
                  <Select value={category} onValueChange={(v) => setCategory(v as string)} disabled={!industry}>
                    <SelectTrigger className="h-10 text-sm border-slate-200 bg-slate-50">
                      <SelectValue placeholder="请选择品类" />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredCategories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs text-slate-600">
                  营销主题 / 创作需求 <span className="text-red-400">*</span>
                </Label>
                <Textarea
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder={`描述你的创作需求，越详细生成效果越好！\n\n例如：${selectedTypeInfo?.value === 'script' ? '成都玉林路火锅店3周年庆，主打毛肚和鲜切牛肉，限时5折优惠' : selectedTypeInfo?.value === 'livestream' ? '新开业奶茶店直播，主推杨枝甘露和芋泥波波，目标是引导到店' : selectedTypeInfo?.value === 'recommend' ? '周末和朋友去了一家氛围感超棒的烤肉店，肉质超嫩，值得推荐' : '回复顾客关于排队等位、菜品推荐的常见问题'}`}
                  className="min-h-24 text-sm border-slate-200 bg-slate-50 resize-none"
                />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">描述越具体，AI 生成质量越高</span>
                  <span className="text-xs text-slate-400">{topic.length}/500</span>
                </div>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={!industry || !category || !topic.trim() || isGenerating}
                className={`w-full h-11 text-sm font-medium transition-all ${
                  !industry || !category || !topic.trim()
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-red-500 to-orange-400 hover:from-red-600 hover:to-orange-500 text-white shadow-sm'
                }`}
              >
                {isGenerating ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    AI 正在生成中，请稍候...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    🚀 {selectedType === 'script' ? '生成脚本' : selectedType === 'livestream' ? '生成话术' : selectedType === 'recommend' ? '生成文案' : '生成回复'} ({topic.length > 0 ? '3' : '0'}/3 次)
                  </span>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        {(isGenerating || results.length > 0) && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-slate-700">生成结果</h3>
              {results.length > 0 && (
                <Badge className="bg-blue-50 text-blue-600 hover:bg-blue-50 text-xs">
                  {results.length} 个版本可选
                </Badge>
              )}
            </div>

            {isGenerating && (
              <div className="space-y-3">
                {[1, 2].map((i) => (
                  <Card key={i} className="border-slate-100 shadow-sm">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-5 w-20 bg-slate-100 rounded animate-pulse" />
                      </div>
                      <div className="space-y-2">
                        {[100, 80, 90, 70, 85, 60].map((w, j) => (
                          <div key={j} className="h-3 bg-slate-50 rounded animate-pulse" style={{ width: `${w}%` }} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {!isGenerating && results.map((content, idx) => {
              const versionId = mockTextResults[selectedType]?.[idx]?.id || String(idx);
              const versionLabel = mockTextResults[selectedType]?.[idx]?.version || `版本 ${idx + 1}`;
              const versionTags = mockTextResults[selectedType]?.[idx]?.tags || [];
              return (
                <Card
                  key={versionId}
                  className={`border-2 transition-all cursor-pointer shadow-sm ${
                    selectedVersion === versionId
                      ? 'border-red-300 bg-red-50/30'
                      : 'border-slate-100 hover:border-slate-200'
                  }`}
                  onClick={() => setSelectedVersion(versionId)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          idx === 0 ? 'bg-red-500 text-white' : idx === 1 ? 'bg-orange-400 text-white' : 'bg-slate-300 text-white'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <CardTitle className="text-sm font-semibold text-slate-800">{versionLabel}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2">
                        {versionTags.map((tag) => (
                          <Badge key={tag} className="bg-slate-100 text-slate-500 hover:bg-slate-100 text-xs">{tag}</Badge>
                        ))}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => { e.stopPropagation(); handleCopy(content, versionId); }}
                          className={`h-7 text-xs transition-all ${
                            copiedId === versionId
                              ? 'text-green-600 bg-green-50'
                              : 'text-slate-400 hover:text-slate-600'
                          }`}
                        >
                          {copiedId === versionId ? '✓ 已复制' : '📋 复制'}
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed font-mono bg-white rounded-lg p-4 border border-slate-100">
                      {content}
                    </pre>
                  </CardContent>
                </Card>
              );
            })}

            {!isGenerating && results.length > 0 && (
              <div className="flex items-center justify-center gap-3 py-3">
                <span className="text-xs text-slate-400">生成结果不满意？</span>
                <button
                  onClick={handleGenerate}
                  className="text-xs text-red-500 hover:text-red-600 font-medium"
                >
                  重新生成 ↻
                </button>
                <span className="text-xs text-slate-300">|</span>
                <button
                  onClick={() => { setTopic(''); setIndustry(''); setCategory(''); setResults([]); setSelectedVersion(null); }}
                  className="text-xs text-slate-400 hover:text-slate-600 font-medium"
                >
                  清空重来
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
