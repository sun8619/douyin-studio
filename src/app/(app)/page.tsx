import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { historyRecords } from '@/data/mock-data';

const modules = [
  {
    href: '/create/text',
    icon: '✍️',
    title: '文案创作',
    description: 'AI 生成短视频脚本、直播话术、种草文、评论回复',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    tag: '免费',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    href: '/create/image',
    icon: '🖼️',
    title: '图片设计',
    description: 'AI 生成营销海报、活动图、店铺环境展示',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
    tag: '付费',
    tagColor: 'bg-orange-100 text-orange-700',
  },
  {
    href: '/create/video',
    icon: '🎬',
    title: '短视频',
    description: '输入主题，AI 生成完整短视频（脚本+画面+配音）',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-100',
    tag: '付费',
    tagColor: 'bg-orange-100 text-orange-700',
  },
  {
    href: '/create/livestream',
    icon: '📺',
    title: '直播物料',
    description: '直播封面、弹幕提示、优惠卡片等直播配套素材',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100',
    tag: '付费',
    tagColor: 'bg-orange-100 text-orange-700',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-5">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-bold text-slate-900">欢迎回来，商家用户 👋</h1>
          <p className="text-slate-500 mt-1 text-sm">今天想创作什么内容？试试输入营销主题开始吧</p>
        </div>
      </header>

      <div className="px-8 py-7 max-w-5xl">
        {/* Quick Input Section */}
        <Card className="mb-7 border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">💡</span>
                <Input
                  placeholder="输入营销主题，快速开始创作（如：火锅店周年庆促销、奶茶店新品上市）..."
                  className="pl-10 h-12 text-sm border-slate-200 bg-slate-50 focus:bg-white transition-colors rounded-xl"
                />
              </div>
              <Link
                href="/create/text"
                className="h-12 px-6 bg-gradient-to-r from-red-500 to-orange-400 text-white font-medium text-sm rounded-xl flex items-center gap-2 hover:from-red-600 hover:to-orange-500 transition-all shadow-sm flex-shrink-0"
              >
                <span>开始创作</span>
                <span>→</span>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs text-slate-400">试试：</span>
              {['火锅店周年庆', '奶茶新品推广', 'KTV周末优惠', '民宿618促销'].map((tag) => (
                <button
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Module Cards */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-slate-800">内容创作模块</h2>
            <span className="text-xs text-slate-400">点击卡片直接进入</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {modules.map((mod) => (
              <Link key={mod.href} href={mod.href}>
                <Card className={`border ${mod.borderColor} shadow-sm hover:shadow-md transition-all cursor-pointer hover:-translate-y-0.5 group`}>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${mod.bgColor} flex items-center justify-center text-2xl flex-shrink-0`}>
                        {mod.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-slate-800 group-hover:text-slate-900">{mod.title}</h3>
                          <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${mod.tagColor}`}>{mod.tag}</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">{mod.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Grid: Stats + History */}
        <div className="grid grid-cols-3 gap-5">
          {/* Stats Cards */}
          <div className="col-span-1 space-y-3">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">本月创作数据</h3>
            {[
              { label: '文案生成', value: '23', unit: '篇', color: 'text-blue-600', bg: 'bg-blue-50' },
              { label: '图片设计', value: '8', unit: '张', color: 'text-purple-600', bg: 'bg-purple-50' },
              { label: '视频生成', value: '3', unit: '个', color: 'text-pink-600', bg: 'bg-pink-50' },
            ].map((stat) => (
              <div key={stat.label} className={`${stat.bg} rounded-xl p-4 flex items-center gap-3`}>
                <div className="flex-1">
                  <p className="text-xs text-slate-500">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}<span className="text-sm font-normal ml-0.5">{stat.unit}</span></p>
                </div>
              </div>
            ))}
          </div>

          {/* History Records */}
          <div className="col-span-2">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-slate-700">最近创作</h3>
              <Link href="/history" className="text-xs text-red-500 hover:text-red-600 font-medium">查看全部 →</Link>
            </div>
            <div className="space-y-2">
              {historyRecords.slice(0, 5).map((record) => (
                <div key={record.id} className="bg-white rounded-xl p-3.5 border border-slate-100 hover:border-slate-200 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${
                      record.type === 'text' ? 'bg-blue-50 text-blue-600' :
                      record.type === 'image' ? 'bg-purple-50 text-purple-600' :
                      'bg-pink-50 text-pink-600'
                    }`}>
                      {record.type === 'text' ? '✍️' : record.type === 'image' ? '🖼️' : '🎬'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-slate-800 truncate group-hover:text-slate-900">{record.title}</p>
                        <Badge className="bg-green-50 text-green-600 hover:bg-green-50 text-xs px-1.5 py-0 flex-shrink-0">已完成</Badge>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5 truncate">{record.preview}</p>
                    </div>
                    <span className="text-xs text-slate-400 flex-shrink-0">{record.createdAt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-7 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100 p-5">
          <div className="flex items-start gap-3">
            <span className="text-xl mt-0.5">💡</span>
            <div>
              <h4 className="text-sm font-semibold text-amber-800 mb-1">创作小贴士</h4>
              <p className="text-xs text-amber-700 leading-relaxed">
                文案创作是<strong>免费功能</strong>，每天可生成多次。输入越具体，AI 生成效果越好！例如：输入"成都玉林路火锅店周年庆，3周年，低至5折，主打毛肚和牛肉"比单纯输入"火锅店周年庆"效果提升 40%。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
