import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { historyRecords } from '@/data/mock-data';

export default function HistoryPage() {
  const records = historyRecords;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-8 py-5">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-bold text-slate-900">📋 历史创作记录</h1>
          <p className="text-slate-500 mt-1 text-sm">查看和管理你所有的创作内容</p>
        </div>
      </header>

      <div className="px-8 py-7 max-w-5xl">
        {/* Filter Bar */}
        <div className="flex items-center gap-3 mb-6">
          <Input placeholder="搜索创作标题..." className="h-9 w-64 text-sm border-slate-200 bg-white" />
          <div className="flex gap-2">
            {['全部', '文案', '图片', '视频'].map((tab) => (
              <button
                key={tab}
                className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                  tab === '全部' ? 'bg-red-500 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="outline" size="sm" className="h-8 text-xs">最近7天</Button>
            <Button variant="outline" size="sm" className="h-8 text-xs">导出全部</Button>
          </div>
        </div>

        {/* Records */}
        <div className="space-y-3">
          {records.map((record) => (
            <Card key={record.id} className="border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${
                    record.type === 'text' ? 'bg-blue-50' :
                    record.type === 'image' ? 'bg-purple-50' : 'bg-pink-50'
                  }`}>
                    {record.type === 'text' ? '✍️' : record.type === 'image' ? '🖼️' : '🎬'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-slate-800 group-hover:text-slate-900">{record.title}</h3>
                      <Badge className={`text-xs px-1.5 py-0 ${
                        record.status === 'completed' ? 'bg-green-50 text-green-600 hover:bg-green-50' : 'bg-amber-50 text-amber-600 hover:bg-amber-50'
                      }`}>
                        {record.status === 'completed' ? '已完成' : '生成中'}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-400 truncate">{record.preview}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-slate-400">{record.createdAt}</p>
                    <div className="flex gap-2 mt-2">
                      <button className="text-xs text-slate-400 hover:text-red-500 transition-colors">查看</button>
                      <button className="text-xs text-slate-400 hover:text-red-500 transition-colors">复制</button>
                      <button className="text-xs text-slate-400 hover:text-red-500 transition-colors">删除</button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <Button variant="outline" size="sm" className="h-8 text-xs" disabled>← 上一页</Button>
          <Button variant="outline" size="sm" className="h-8 w-8 text-xs p-0 bg-red-50 border-red-200 text-red-600">1</Button>
          <Button variant="outline" size="sm" className="h-8 text-xs">2</Button>
          <Button variant="outline" size="sm" className="h-8 text-xs">3</Button>
          <Button variant="outline" size="sm" className="h-8 text-xs">下一页 →</Button>
        </div>
      </div>
    </div>
  );
}
