import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const favorites = [
  { id: 'f1', title: '火锅店周年庆脚本模板', type: 'text', tags: ['脚本', '火锅'], createdAt: '2026-05-10', usage: 8 },
  { id: 'f2', title: '烤肉店促销海报模板', type: 'image', tags: ['海报', '促销'], createdAt: '2026-05-08', usage: 5 },
];

export default function FavoritesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-8 py-5">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-bold text-slate-900">⭐ 我的收藏</h1>
          <p className="text-slate-500 mt-1 text-sm">收藏常用的模板和创作，方便快速复用</p>
        </div>
      </header>

      <div className="px-8 py-7 max-w-5xl">
        {favorites.length === 0 ? (
          <Card className="border-slate-100 shadow-sm">
            <CardContent className="p-10 text-center">
              <span className="text-4xl mb-4 block">⭐</span>
              <h3 className="text-base font-semibold text-slate-800 mb-2">暂无收藏</h3>
              <p className="text-sm text-slate-500 mb-4">在创作结果中点击「收藏」按钮，即可保存到此处</p>
              <Button variant="outline" className="text-sm">去创作</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {favorites.map((fav) => (
              <Card key={fav.id} className="border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                    fav.type === 'text' ? 'bg-blue-50' : 'bg-purple-50'
                  }`}>
                    {fav.type === 'text' ? '✍️' : '🖼️'}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-slate-800">{fav.title}</h3>
                    <div className="flex gap-1.5 mt-1">
                      {fav.tags.map((tag) => (
                        <Badge key={tag} className="bg-slate-100 text-slate-500 hover:bg-slate-100 text-xs px-1.5 py-0">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-slate-400">已使用 {fav.usage} 次</p>
                    <p className="text-xs text-slate-400 mt-0.5">{fav.createdAt}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs text-red-400 hover:text-red-500">移除</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
