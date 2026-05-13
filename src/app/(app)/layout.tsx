'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const navItems = [
  {
    group: '工作台',
    items: [
      { label: '首页工作台', href: '/', icon: '🏠' },
    ],
  },
  {
    group: '内容创作',
    items: [
      { label: '文案创作', href: '/create/text', icon: '✍️', badge: '免费', badgeColor: 'bg-green-100 text-green-700' },
      { label: '图片设计', href: '/create/image', icon: '🖼️' },
      { label: '短视频', href: '/create/video', icon: '🎬' },
      { label: '直播物料', href: '/create/livestream', icon: '📺' },
    ],
  },
  {
    group: '我的创作',
    items: [
      { label: '历史记录', href: '/history', icon: '📋' },
      { label: '我的收藏', href: '/favorites', icon: '⭐' },
    ],
  },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-white border-r border-slate-200 flex flex-col">
        {/* Logo */}
        <div className="px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center">
              <span className="text-white text-sm font-bold">🎵</span>
            </div>
            <div>
              <h1 className="text-sm font-semibold text-slate-900 leading-tight">抖店内容工坊</h1>
              <p className="text-xs text-slate-400">Douyin Content Studio</p>
            </div>
          </div>
        </div>

        {/* Member Status */}
        <div className="px-4 py-3 bg-gradient-to-r from-orange-50 to-red-50 border-b border-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500">会员状态</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-sm font-medium text-slate-800">体验用户</span>
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 text-xs px-1.5 py-0">免费版</Badge>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400">剩余次数</p>
              <p className="text-lg font-bold text-orange-500 leading-none">3</p>
            </div>
          </div>
          <div className="mt-2.5 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full" style={{ width: '30%' }} />
          </div>
          <p className="text-xs text-slate-400 mt-1.5">
            今日已使用 7 次 · 升级解锁无限次数 →
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 px-3">
          {navItems.map((group) => (
            <div key={group.group} className="mb-4">
              <p className="px-2 mb-1.5 text-xs font-medium text-slate-400 uppercase tracking-wider">{group.group}</p>
              {group.items.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors mb-0.5 ${
                      isActive
                        ? 'bg-red-50 text-red-600 font-medium'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Upgrade CTA */}
        <div className="px-4 py-4 border-t border-slate-100">
          <div className="bg-gradient-to-r from-red-500 to-orange-400 rounded-xl p-4 text-white">
            <p className="text-sm font-semibold mb-0.5">升级专业版</p>
            <p className="text-xs text-red-100 mb-3">解锁全部功能，无限次数使用</p>
            <button className="w-full bg-white text-red-600 text-xs font-semibold py-2 rounded-lg hover:bg-red-50 transition-colors">
              立即升级 ¥99/月
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
