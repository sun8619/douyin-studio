import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function LivestreamPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-8 py-5">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-slate-900">📺 直播物料</h1>
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 text-xs">付费功能</Badge>
          </div>
          <p className="text-slate-500 mt-1 text-sm">AI 生成直播封面、弹幕提示卡、优惠展示图等直播配套素材</p>
        </div>
      </header>

      <div className="px-8 py-7 max-w-5xl">
        {/* Coming Soon */}
        <Card className="border-2 border-dashed border-slate-200 bg-white shadow-sm mb-7">
          <CardContent className="p-10 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mx-auto mb-5">
              <span className="text-4xl">🚧</span>
            </div>
            <Badge className="bg-green-50 text-green-600 hover:bg-green-50 text-xs mb-3">功能开发中</Badge>
            <h3 className="text-lg font-bold text-slate-800 mb-2">直播物料生成</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed mb-6">
              AI 将自动生成与直播主题匹配的封面图、弹幕互动提示、优惠卡片等全套物料，让你的直播更专业。上线时间：2026 年 6 月底。
            </p>
            <div className="flex flex-col items-center gap-3">
              <div className="grid grid-cols-3 gap-3 w-full max-w-md">
                {[
                  { icon: '🖼️', name: '直播封面', done: true },
                  { icon: '💬', name: '弹幕提示卡', done: false },
                  { icon: '🎟️', name: '优惠展示卡', done: false },
                ].map((item) => (
                  <div key={item.name} className="bg-slate-50 rounded-xl p-3 text-center">
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-xs text-slate-600 mt-1 font-medium">{item.name}</p>
                    <p className="text-xs mt-0.5">{item.done ? '✓ 完成' : '⏳ 开发中'}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Preview */}
        <h2 className="text-sm font-semibold text-slate-700 mb-4">专业版功能一览</h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: '🖼️', title: '直播封面设计', desc: '输入直播主题，自动生成高点击率封面图' },
            { icon: '💬', title: '弹幕互动提示', desc: 'AI 生成引导弹幕话术，提升直播间活跃度' },
            { icon: '🎟️', title: '优惠卡片生成', desc: '一键生成限时优惠、活动预告等展示卡片' },
            { icon: '📋', title: '直播流程卡', desc: '生成直播环节提示卡片，不卡播不断档' },
            { icon: '🏷️', title: '弹幕互动贴纸', desc: '生成引导关注、点赞、分享的弹幕装饰' },
            { icon: '📊', title: '数据回顾模板', desc: '直播结束后一键生成数据回顾视频模板' },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-xl p-4 border border-slate-100 flex items-start gap-3">
              <span className="text-2xl mt-0.5 flex-shrink-0">{f.icon}</span>
              <div>
                <h4 className="text-sm font-semibold text-slate-800">{f.title}</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
