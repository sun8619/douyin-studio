'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

// ============================================================
// Types
// ============================================================

type MaterialType = 'cover' | 'discount' | 'danmaku' | 'follow';
type ThemeType = 'hotpot' | 'bubble_tea' | 'bbq' | 'bakery' | 'crayfish' | 'noodles';

interface MaterialResult {
  id: string;
  type: MaterialType;
  title: string;
  subtitle: string;
  preview: string; // emoji/text shown on stream overlay
  overlayStyle: string; // CSS class for overlay position
}

// ============================================================
// Static data
// ============================================================

const LIVE_THEMES: { value: ThemeType; label: string; emoji: string; gradient: string }[] = [
  { value: 'hotpot', label: '火锅/串串', emoji: '🍲', gradient: 'from-red-900/80 to-orange-900/60' },
  { value: 'bubble_tea', label: '奶茶/茶饮', emoji: '🧋', gradient: 'from-pink-900/80 to-purple-900/60' },
  { value: 'bbq', label: '烤肉/烧烤', emoji: '🥩', gradient: 'from-amber-900/80 to-red-950/60' },
  { value: 'bakery', label: '烘焙/甜品', emoji: '🍰', gradient: 'from-yellow-900/80 to-pink-900/60' },
  { value: 'crayfish', label: '小龙虾', emoji: '🦞', gradient: 'from-red-950/80 to-orange-950/60' },
  { value: 'noodles', label: '面馆/小吃', emoji: '🍜', gradient: 'from-orange-950/80 to-yellow-950/60' },
];

const MATERIAL_TYPES: { value: MaterialType; label: string; emoji: string; description: string }[] = [
  { value: 'cover', label: '直播封面', emoji: '🖼️', description: '吸引点击的高点击率封面图' },
  { value: 'discount', label: '优惠卡片', emoji: '🎟️', description: '限时优惠、活动预告展示卡' },
  { value: 'danmaku', label: '弹幕提示卡', emoji: '💬', description: '引导弹幕互动，提升活跃度' },
  { value: 'follow', label: '关注引导图', emoji: '❤️', description: '引导关注，提升粉丝转化' },
];

const MATERIAL_RESULTS: Record<ThemeType, MaterialResult[]> = {
  hotpot: [
    { id: 'h-c1', type: 'cover', title: '热辣鲜锅', subtitle: '翻滚的红油·12年老字号', preview: '🍲', overlayStyle: 'cover' },
    { id: 'h-d1', type: 'discount', title: '周年庆福利', subtitle: '招牌菜6.8折·免费送冰粉', preview: '🎉 6.8折', overlayStyle: 'discount-top' },
    { id: 'h-d2', type: 'discount', title: '双人套餐', subtitle: '128元吃遍招牌菜', preview: '💰 128元套餐', overlayStyle: 'discount-bottom' },
    { id: 'h-b1', type: 'danmaku', title: '弹幕引导', subtitle: '回复"想吃"上精选评论', preview: '💬 想吃', overlayStyle: 'danmaku-center' },
    { id: 'h-f1', type: 'follow', title: '关注福利', subtitle: '点关注送招牌毛肚一份', preview: '❤️ 关注', overlayStyle: 'follow-right' },
  ],
  bubble_tea: [
    { id: 'b-c1', type: 'cover', title: '新品上市', subtitle: '杨枝甘露·手捣芋泥', preview: '🧋', overlayStyle: 'cover' },
    { id: 'b-d1', type: 'discount', title: '新品尝鲜价', subtitle: '第二杯半价·限时3天', preview: '🧋 第二杯半价', overlayStyle: 'discount-top' },
    { id: 'b-d2', type: 'discount', title: '套餐优惠', subtitle: '三杯拼单立减15元', preview: '💰 拼单减15', overlayStyle: 'discount-bottom' },
    { id: 'b-b1', type: 'danmaku', title: '弹幕互动', subtitle: '扣"好喝"抽取免单名额', preview: '💬 好喝', overlayStyle: 'danmaku-center' },
    { id: 'b-f1', type: 'follow', title: '关注得券', subtitle: '关注立领5元无门槛券', preview: '❤️ 关注领券', overlayStyle: 'follow-right' },
  ],
  bbq: [
    { id: 'q-c1', type: 'cover', title: '炭火烤肉', subtitle: '新鲜现切·炭火飘香', preview: '🥩', overlayStyle: 'cover' },
    { id: 'q-d1', type: 'discount', title: '进店礼', subtitle: '五花肉免费送·限时抢', preview: '🥩 免费送', overlayStyle: 'discount-top' },
    { id: 'q-d2', type: 'discount', title: '团购套餐', subtitle: '4人套餐328元·含酒水', preview: '💰 328套餐', overlayStyle: 'discount-bottom' },
    { id: 'q-b1', type: 'danmaku', title: '弹幕互动', subtitle: '"想吃"上墙·主播翻牌', preview: '💬 想吃', overlayStyle: 'danmaku-center' },
    { id: 'q-f1', type: 'follow', title: '关注福利', subtitle: '关注享会员专属价', preview: '❤️ VIP价', overlayStyle: 'follow-right' },
  ],
  bakery: [
    { id: 'k-c1', type: 'cover', title: '甜蜜时光', subtitle: '当日现烤·法式甜品', preview: '🍰', overlayStyle: 'cover' },
    { id: 'k-d1', type: 'discount', title: '限时秒杀', subtitle: '爆浆蛋糕19.9元·抢', preview: '🍰 19.9元', overlayStyle: 'discount-top' },
    { id: 'k-d2', type: 'discount', title: '会员专享', subtitle: '充值200送50·再享9折', preview: '💰 充200送50', overlayStyle: 'discount-bottom' },
    { id: 'k-b1', type: 'danmaku', title: '弹幕互动', subtitle: '扣"想要"上车·手慢无', preview: '💬 想要', overlayStyle: 'danmaku-center' },
    { id: 'k-f1', type: 'follow', title: '关注得甜品', subtitle: '关注送马卡龙一枚', preview: '🍪 送马卡龙', overlayStyle: 'follow-right' },
  ],
  crayfish: [
    { id: 'x-c1', type: 'cover', title: '麻辣小龙虾', subtitle: '鲜活现做·吃到爽', preview: '🦞', overlayStyle: 'cover' },
    { id: 'x-d1', type: 'discount', title: '开海季特惠', subtitle: '3斤78元·5斤118元', preview: '🦞 3斤78', overlayStyle: 'discount-top' },
    { id: 'x-d2', type: 'discount', title: '啤酒套餐', subtitle: '小龙虾+啤酒仅需148', preview: '🍺 148套餐', overlayStyle: 'discount-bottom' },
    { id: 'x-b1', type: 'danmaku', title: '弹幕互动', subtitle: '"够辣"上精选·送虾钳', preview: '💬 够辣', overlayStyle: 'danmaku-center' },
    { id: 'x-f1', type: 'follow', title: '关注福利', subtitle: '关注抽霸王餐名额', preview: '🦞 霸王餐', overlayStyle: 'follow-right' },
  ],
  noodles: [
    { id: 'n-c1', type: 'cover', title: '地道面馆', subtitle: '手擀现拉·老汤慢炖', preview: '🍜', overlayStyle: 'cover' },
    { id: 'n-d1', type: 'discount', title: '早市优惠', subtitle: '7-9点豆浆免费续', preview: '☕ 免费续杯', overlayStyle: 'discount-top' },
    { id: 'n-d2', type: 'discount', title: '套餐特惠', subtitle: '面+小菜+饮品仅22元', preview: '💰 22元套餐', overlayStyle: 'discount-bottom' },
    { id: 'n-b1', type: 'danmaku', title: '弹幕互动', subtitle: '"老板加辣"上精选', preview: '💬 加辣', overlayStyle: 'danmaku-center' },
    { id: 'n-f1', type: 'follow', title: '关注福利', subtitle: '关注送卤蛋一枚', preview: '🥚 送卤蛋', overlayStyle: 'follow-right' },
  ],
};

// ============================================================
// Utility: random int
// ============================================================

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ============================================================
// Floating Heart Component
// ============================================================

const HEART_COLORS = [
  'text-red-400',
  'text-pink-400',
  'text-red-300',
  'text-orange-300',
  'text-rose-300',
];

const HEART_EMOJIS = ['❤️', '👍', '🧡', '💗', '✨'];

function FloatingHeart({
  id,
  startX,
  startY,
  onDone,
}: {
  id: number;
  startX: number;
  startY: number;
  onDone: () => void;
}) {
  const [x, setX] = useState(startX);
  const [y, setY] = useState(startY);
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(0.5 + Math.random() * 0.8);
  const colorClass = HEART_COLORS[id % HEART_COLORS.length];
  const emoji = HEART_EMOJIS[id % HEART_EMOJIS.length];
  const drift = (Math.random() - 0.5) * 60;

  useEffect(() => {
    let frame = 0;
    const totalFrames = 80;
    const interval = setInterval(() => {
      frame++;
      setY((prev) => prev - 3);
      setX((prev) => prev + drift / totalFrames);
      setOpacity(1 - frame / totalFrames);
      if (frame >= totalFrames) {
        clearInterval(interval);
        onDone();
      }
    }, 30);
    return () => clearInterval(interval);
  }, [drift, onDone]);

  return (
    <div
      className={`absolute pointer-events-none text-xl font-bold transition-all ${colorClass}`}
      style={{
        left: x,
        top: y,
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      {emoji}
    </div>
  );
}

// ============================================================
// Floating Heart Button Area
// ============================================================

function LikeButton({
  onClick,
  count,
}: {
  onClick: () => void;
  count: number;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 group cursor-pointer"
    >
      <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center
        group-hover:bg-white/20 transition-all group-active:scale-90">
        <span className="text-xl">👍</span>
      </div>
      <span className="text-white/80 text-xs font-medium tabular-nums">
        {count.toLocaleString()}
      </span>
    </button>
  );
}

// ============================================================
// Danmaku Component
// ============================================================

interface DanmakuMessage {
  id: number;
  text: string;
  color: string;
  x: number;
  y: number;
}

const DANMAKU_TEXTS: Record<ThemeType, string[]> = {
  hotpot: ['这家店太香了！', '毛肚必点！', '想去吃！', '回复想吃', '排了多久？', '辣不辣？', '好想吃啊', '地址在哪', '性价比高吗', '老板来一份', '今天就冲！'],
  bubble_tea: ['好喝好喝！', '芋泥波波！', '已下单！', '好喝！再来一杯', '地址发一下', '有团购吗', '好心动', '杨枝甘露！', '太绝了！', '已关注！'],
  bbq: ['太香了！', '想吃烤肉！', '地址在哪', '价格怎么样', '有套餐吗', '冲！冲！冲！', '帮我留个位', '周末去！', '好饿啊！', '排队吗？'],
  bakery: ['好精致！', '甜品控！', '好想吃！', '好可爱！', '地址在哪', '怎么买', '好幸福', '太诱人了', '心动！', '已收藏！'],
  crayfish: ['好馋！', '够辣吗', '好便宜！', '想去！', '配啤酒！', '周末冲！', '地址在哪', '新鲜吗', '个头大吗', '好饿！'],
  noodles: ['好香！', '好想吃！', '在哪！', '贵不贵', '好吃吗', '量多吗', '下次去！', '太饿了！', '冲！', '好诱人！'],
};

const DANMAKU_COLORS = [
  'text-white',
  'text-yellow-300',
  'text-pink-300',
  'text-green-300',
  'text-orange-300',
  'text-red-300',
  'text-blue-300',
];

function Danmaku({
  messages,
}: {
  messages: DanmakuMessage[];
}) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`absolute font-semibold text-sm whitespace-nowrap drop-shadow-lg ${msg.color}`}
          style={{
            left: msg.x,
            top: msg.y,
            animation: `danmakuFloat-${msg.id % 5} ${8 + (msg.id % 4)}s linear forwards`,
          }}
        >
          <span className="bg-black/40 px-3 py-1 rounded-full">{msg.text}</span>
        </div>
      ))}
      {/* Danmaku animation keyframes injected via style tag */}
      <style>{`
        @keyframes danmakuFloat-0 {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100vw - 200px)); }
        }
        @keyframes danmakuFloat-1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100vw - 200px)); }
        }
        @keyframes danmakuFloat-2 {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100vw - 200px)); }
        }
        @keyframes danmakuFloat-3 {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100vw - 200px)); }
        }
        @keyframes danmakuFloat-4 {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100vw - 200px)); }
        }
      `}</style>
    </div>
  );
}

// ============================================================
// Material Overlay Component (shown on live stream)
// ============================================================

function MaterialOverlay({
  result,
  visible,
}: {
  result: MaterialResult | null;
  visible: boolean;
}) {
  if (!result || !visible) return null;

  const overlayStyles: Record<string, string> = {
    'cover': 'bottom-4 left-4 w-24 h-16 rounded-xl bg-gradient-to-br from-red-600/80 to-orange-600/80 backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center shadow-2xl',
    'discount-top': 'top-4 right-4 w-48 p-3 rounded-2xl bg-gradient-to-br from-red-600/90 to-pink-600/80 backdrop-blur-md border border-white/20 shadow-2xl',
    'discount-bottom': 'bottom-4 right-4 w-48 p-3 rounded-2xl bg-gradient-to-br from-amber-600/90 to-orange-600/80 backdrop-blur-md border border-white/20 shadow-2xl',
    'danmaku-center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 p-4 rounded-2xl bg-black/70 backdrop-blur-lg border border-white/20 shadow-2xl flex flex-col items-center gap-2',
    'follow-right': 'bottom-20 right-4 w-36 p-3 rounded-2xl bg-gradient-to-br from-pink-600/90 to-red-600/80 backdrop-blur-md border border-white/20 shadow-2xl',
  };

  const style = overlayStyles[result.overlayStyle] || overlayStyles['cover'];

  return (
    <div className={`absolute ${style} transition-all duration-500 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      {result.overlayStyle === 'danmaku-center' ? (
        <>
          <div className="text-white/60 text-xs mb-1">💬 弹幕精选</div>
          <div className="text-white font-bold text-base text-center">{result.title}</div>
          <div className="text-white/80 text-xs text-center mt-1">{result.subtitle}</div>
          <div className="mt-2 bg-white/20 rounded-full px-3 py-1 text-xs text-white/90">{result.preview}</div>
        </>
      ) : result.overlayStyle === 'follow-right' ? (
        <>
          <div className="text-white text-xs font-bold flex items-center gap-1 justify-center mb-1">
            <span>❤️</span> <span>关注主播</span>
          </div>
          <div className="text-white font-bold text-sm text-center">{result.title}</div>
          <div className="text-white/80 text-xs text-center mt-0.5">{result.subtitle}</div>
        </>
      ) : result.overlayStyle === 'discount-top' ? (
        <>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-white text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">限时</span>
            <span className="text-white font-bold text-sm">{result.title}</span>
          </div>
          <div className="text-white/80 text-xs">{result.subtitle}</div>
          <div className="mt-2 bg-white/20 rounded-full px-3 py-1 text-xs text-white/90 font-bold text-center">{result.preview}</div>
        </>
      ) : result.overlayStyle === 'discount-bottom' ? (
        <>
          <div className="text-white font-bold text-sm mb-1">{result.title}</div>
          <div className="text-white/80 text-xs">{result.subtitle}</div>
          <div className="mt-2 bg-white/20 rounded-full px-3 py-1 text-xs text-white/90 font-bold text-center">{result.preview}</div>
        </>
      ) : (
        <>
          <div className="text-2xl mb-1">{result.preview}</div>
          <div className="text-white font-bold text-xs text-center">{result.title}</div>
        </>
      )}
    </div>
  );
}

// ============================================================
// Mini Preview Window (shown in bottom-right of stream)
// ============================================================

function MiniPreviewWindow({
  results,
}: {
  results: MaterialResult[];
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = results[activeIdx];

  useEffect(() => {
    if (results.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % results.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [results.length]);

  if (!active) return null;

  return (
    <div className="absolute bottom-16 right-3 w-40 h-24 rounded-xl overflow-hidden border-2 border-white/30 shadow-2xl bg-black/80 backdrop-blur-sm">
      <div className="text-[10px] text-white/60 px-2 py-1 bg-black/60 border-b border-white/10 flex items-center justify-between">
        <span>🎬 物料预览</span>
        <span className="bg-white/20 px-1.5 rounded text-white/80">{activeIdx + 1}/{results.length}</span>
      </div>
      <div className="p-2 flex flex-col gap-1">
        <div className="text-base text-center">{active.preview}</div>
        <div className="text-white text-[10px] font-medium text-center truncate">{active.title}</div>
        <div className="text-white/60 text-[9px] text-center truncate">{active.subtitle}</div>
      </div>
    </div>
  );
}

// ============================================================
// Live Stream Simulation Panel
// ============================================================

function LiveStreamPanel({
  theme,
  generatedResults,
  selectedMaterialType,
}: {
  theme: ThemeType;
  generatedResults: MaterialResult[];
  selectedMaterialType: MaterialType;
}) {
  const [viewerCount, setViewerCount] = useState(3284);
  const [likeCount, setLikeCount] = useState(12560);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [danmakuMessages, setDanmakuMessages] = useState<DanmakuMessage[]>([]);
  const heartIdRef = useRef(0);
  const danmakuIdRef = useRef(0);
  const danmakuRef = useRef<HTMLDivElement>(null);

  const themeData = LIVE_THEMES.find((t) => t.value === theme)!;

  // Auto-tick viewer count
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount((prev) => {
        const delta = randInt(-5, 12);
        return Math.max(1000, prev + delta);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Auto-tick like count
  useEffect(() => {
    const interval = setInterval(() => {
      setLikeCount((prev) => prev + randInt(1, 8));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Auto-fire hearts
  useEffect(() => {
    const interval = setInterval(() => {
      const btn = document.getElementById('like-btn-area');
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const parentRect = btn.offsetParent?.getBoundingClientRect();
      if (!parentRect) return;
      const newHeart = {
        id: ++heartIdRef.current,
        x: rect.left - parentRect.left + randInt(0, rect.width),
        y: rect.top - parentRect.top,
      };
      setHearts((prev) => [...prev, newHeart]);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  // Auto-fire danmaku
  useEffect(() => {
    const texts = DANMAKU_TEXTS[theme];
    const interval = setInterval(() => {
      const newMsg: DanmakuMessage = {
        id: ++danmakuIdRef.current,
        text: texts[Math.floor(Math.random() * texts.length)],
        color: DANMAKU_COLORS[Math.floor(Math.random() * DANMAKU_COLORS.length)],
        x: typeof window !== 'undefined' ? window.innerWidth : 800,
        y: 60 + Math.random() * 180,
      };
      setDanmakuMessages((prev) => [...prev.slice(-20), newMsg]);
    }, 1400);
    return () => clearInterval(interval);
  }, [theme]);

  // Auto-remove old danmaku
  useEffect(() => {
    const interval = setInterval(() => {
      setDanmakuMessages((prev) =>
        prev.filter((m) => m.x > -300)
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Move danmaku
  useEffect(() => {
    const interval = setInterval(() => {
      setDanmakuMessages((prev) =>
        prev.map((m) => ({ ...m, x: m.x - 8 }))
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleLike = () => {
    const btn = document.getElementById('like-btn-area');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const parentRect = btn.offsetParent?.getBoundingClientRect();
    if (!parentRect) return;
    const newHeart = {
      id: ++heartIdRef.current,
      x: rect.left - parentRect.left + randInt(0, rect.width),
      y: rect.top - parentRect.top,
    };
    setHearts((prev) => [...prev, newHeart]);
    setLikeCount((prev) => prev + randInt(5, 20));
  };

  const activeResult = generatedResults.find((r) => r.type === selectedMaterialType) || null;

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* 16:9 Live Stream Area */}
      <div className="relative flex-1 bg-gradient-to-br from-red-950 via-neutral-900 to-neutral-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        {/* Background Pattern */}
        <div className={`absolute inset-0 bg-gradient-to-br ${themeData.gradient} opacity-60`} />
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
              repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.02) 40px, rgba(255,255,255,0.02) 41px),
              repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.02) 40px, rgba(255,255,255,0.02) 41px)`,
          }}
        />

        {/* Center emoji (simulating stream) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative">
            <div className="text-[120px] animate-pulse">{themeData.emoji}</div>
            <div className="absolute -inset-8 rounded-full bg-white/5 animate-ping" />
          </div>
        </div>

        {/* LIVE badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg z-10">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block" />
          LIVE
        </div>

        {/* Viewer count */}
        <div className="absolute top-4 left-24 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 z-10">
          <span>👁️</span>
          <span className="tabular-nums">{viewerCount.toLocaleString()}</span>
        </div>

        {/* Theme label */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-medium z-10">
          {themeData.emoji} {themeData.label}
        </div>

        {/* Danmaku Layer */}
        <Danmaku messages={danmakuMessages} />

        {/* Material Overlay */}
        <MaterialOverlay result={activeResult} visible={activeResult !== null} />

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12 pb-4 px-4 flex items-end justify-between z-10">
          {/* Left: stream info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-sm">
              {themeData.emoji}
            </div>
            <div>
              <div className="text-white text-xs font-semibold">店铺直播中</div>
              <div className="text-white/50 text-[10px]">{themeData.label} · 官方账号</div>
            </div>
          </div>

          {/* Right: like + share */}
          <div className="flex items-center gap-3" id="like-btn-area">
            <LikeButton onClick={handleLike} count={likeCount} />
            <button className="flex flex-col items-center gap-1">
              <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-lg">📤</span>
              </div>
              <span className="text-white/80 text-xs">分享</span>
            </button>
          </div>
        </div>

        {/* Floating Hearts */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {hearts.map((h) => (
            <FloatingHeart
              key={h.id}
              id={h.id}
              startX={h.x}
              startY={h.y}
              onDone={() => setHearts((prev) => prev.filter((x) => x.id !== h.id))}
            />
          ))}
        </div>

        {/* Mini Preview Window */}
        {generatedResults.length > 0 && <MiniPreviewWindow results={generatedResults} />}
      </div>

      {/* 16:9 Aspect Ratio Spacer label */}
      <div className="text-center text-[10px] text-white/30 mt-2">16:9 直播预览 · 实时效果模拟</div>
    </div>
  );
}

// ============================================================
// Material Result Card
// ============================================================

function MaterialResultCard({
  result,
  isActive,
  onSelect,
}: {
  result: MaterialResult;
  isActive: boolean;
  onSelect: () => void;
}) {
  const typeIcons: Record<MaterialType, string> = {
    cover: '🖼️',
    discount: '🎟️',
    danmaku: '💬',
    follow: '❤️',
  };

  return (
    <button
      onClick={onSelect}
      className={`w-full text-left p-3 rounded-xl border-2 transition-all ${
        isActive
          ? 'border-red-400 bg-red-500/10'
          : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
      }`}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-base">{typeIcons[result.type]}</span>
        <span className="text-white font-semibold text-xs">{result.title}</span>
      </div>
      <div className="text-white/50 text-[10px] leading-relaxed">{result.subtitle}</div>
      {isActive && (
        <div className="mt-2 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          <span className="text-red-300 text-[10px]">已应用到直播画面</span>
        </div>
      )}
    </button>
  );
}

// ============================================================
// Main Page Component
// ============================================================

export default function LivestreamPage() {
  const [theme, setTheme] = useState<ThemeType>('hotpot');
  const [materialType, setMaterialType] = useState<MaterialType>('cover');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResults, setGeneratedResults] = useState<MaterialResult[]>([]);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [selectedResult, setSelectedResult] = useState<MaterialResult | null>(null);

  const currentThemeData = LIVE_THEMES.find((t) => t.value === theme)!;

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedResults([]);
    setSelectedResult(null);
    setGenerationProgress(0);

    // Simulate AI generation with progress
    const totalSteps = 5;
    for (let i = 1; i <= totalSteps; i++) {
      await new Promise((r) => setTimeout(r, 400));
      setGenerationProgress((i / totalSteps) * 100);
    }

    const results = MATERIAL_RESULTS[theme];
    setGeneratedResults(results);
    // Auto-select the result matching the current material type
    const matched = results.find((r) => r.type === materialType) || results[0];
    setSelectedResult(matched);
    setIsGenerating(false);
  };

  const handleMaterialTypeChange = (val: MaterialType) => {
    setMaterialType(val);
    if (generatedResults.length > 0) {
      const matched = generatedResults.find((r) => r.type === val) || generatedResults[0];
      setSelectedResult(matched);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f14]">
      {/* Header */}
      <header className="bg-[#1a1a22] border-b border-white/5 px-8 py-5">
        <div className="max-w-[1600px]">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-white">📺 直播物料</h1>
            <Badge className="bg-orange-500/20 text-orange-400 border border-orange-500/30 hover:bg-orange-500/20 text-xs">
              🚀 AI 生成
            </Badge>
            <Badge className="bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/20 text-xs">
              付费功能
            </Badge>
          </div>
          <p className="text-white/40 mt-1 text-sm">AI 生成直播封面、优惠卡片、弹幕提示卡、关注引导图，实时预览效果</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-8 py-7 max-w-[1600px]">
        {/* Full-width two-column layout */}
        <div className="flex gap-5" style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}>
          {/* Left: Live Stream Simulation (60%) */}
          <div className="flex-[6] min-w-0">
            <div className="h-full flex flex-col gap-3">
              {/* Panel Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-white/60 text-xs font-medium">直播间实时模拟</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <span className="bg-white/5 px-2 py-1 rounded-md border border-white/10">
                    🎨 {currentThemeData.emoji} {currentThemeData.label}
                  </span>
                  <span className="bg-white/5 px-2 py-1 rounded-md border border-white/10">
                    📐 16:9
                  </span>
                </div>
              </div>

              {/* Stream Panel */}
              <div className="flex-1 min-h-0">
                <LiveStreamPanel
                  theme={theme}
                  generatedResults={generatedResults}
                  selectedMaterialType={materialType}
                />
              </div>
            </div>
          </div>

          {/* Right: Generation Console (40%) */}
          <div className="flex-[4] min-w-0 flex flex-col gap-4">
            {/* Panel Header */}
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-xs font-medium">🎛️ 物料生成控制台</span>
            </div>

            {/* Theme Selection */}
            <div className="bg-[#1a1a22] rounded-2xl border border-white/5 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-sm font-semibold">直播主题</span>
                <span className="text-white/30 text-xs">必选</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {LIVE_THEMES.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setTheme(t.value)}
                    className={`p-3 rounded-xl border-2 text-center transition-all ${
                      theme === t.value
                        ? 'border-red-500 bg-red-500/10'
                        : 'border-white/8 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xl mb-1">{t.emoji}</div>
                    <div className={`text-xs font-medium ${
                      theme === t.value ? 'text-white' : 'text-white/60'
                    }`}>{t.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Material Type Selection */}
            <div className="bg-[#1a1a22] rounded-2xl border border-white/5 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-sm font-semibold">物料类型</span>
                <span className="text-white/30 text-xs">多选轮播</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {MATERIAL_TYPES.map((mt) => (
                  <button
                    key={mt.value}
                    onClick={() => handleMaterialTypeChange(mt.value)}
                    className={`p-3 rounded-xl border-2 text-left transition-all ${
                      materialType === mt.value
                        ? 'border-red-500 bg-red-500/10'
                        : 'border-white/8 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base">{mt.emoji}</span>
                      <span className={`text-xs font-semibold ${
                        materialType === mt.value ? 'text-white' : 'text-white/60'
                      }`}>{mt.label}</span>
                    </div>
                    <div className="text-white/30 text-[10px] leading-relaxed">{mt.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <div className="bg-[#1a1a22] rounded-2xl border border-white/5 p-4">
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full h-12 text-sm font-bold transition-all bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white border-0 shadow-lg shadow-red-900/30 disabled:opacity-60"
              >
                {isGenerating ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    AI 正在生成中... {Math.round(generationProgress)}%
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    ✨ 立即生成 · 全套物料
                  </span>
                )}
              </Button>
              {isGenerating && (
                <Progress value={generationProgress} className="mt-3 h-1.5 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:from-red-500 [&>div]:to-orange-500" />
              )}
              <div className="flex items-center justify-center gap-4 mt-2 text-white/30 text-[10px]">
                <span>🖼️ 封面</span>
                <span>🎟️ 优惠卡</span>
                <span>💬 弹幕</span>
                <span>❤️ 关注</span>
              </div>
            </div>

            {/* Generated Results */}
            {generatedResults.length > 0 && (
              <div className="flex-1 bg-[#1a1a22] rounded-2xl border border-white/5 p-4 overflow-hidden flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-sm font-semibold">生成结果</span>
                    <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 text-[10px]">
                      {generatedResults.length} 个物料
                    </Badge>
                  </div>
                  <button
                    onClick={handleGenerate}
                    className="text-white/40 hover:text-white/70 text-xs transition-colors"
                  >
                    🔄 重新生成
                  </button>
                </div>

                <div className="flex gap-2 mb-3">
                  {generatedResults.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => { setSelectedResult(r); setMaterialType(r.type); }}
                      className={`px-3 py-1.5 rounded-full text-[10px] font-medium transition-all border ${
                        selectedResult?.id === r.id
                          ? 'bg-red-500/20 border-red-500/50 text-red-300'
                          : 'bg-white/5 border-white/10 text-white/50 hover:border-white/20'
                      }`}
                    >
                      {MATERIAL_TYPES.find((mt) => mt.value === r.type)?.emoji} {r.type === 'cover' ? '封面' : r.type === 'discount' ? '优惠' : r.type === 'danmaku' ? '弹幕' : '关注'}
                    </button>
                  ))}
                </div>

                {/* Selected Result Detail */}
                {selectedResult && (
                  <div className="bg-white/5 rounded-xl p-3 mb-3 border border-white/10">
                    <div className="text-white font-semibold text-sm mb-1">{selectedResult.title}</div>
                    <div className="text-white/50 text-xs">{selectedResult.subtitle}</div>
                    <div className="mt-2 bg-white/5 rounded-lg p-2 border border-white/5">
                      <div className="text-white/60 text-[10px] mb-1">预览文字</div>
                      <div className="text-white text-sm font-bold">{selectedResult.preview}</div>
                    </div>
                  </div>
                )}

                <Separator className="bg-white/5 my-2" />

                {/* Material List */}
                <div className="flex-1 overflow-y-auto space-y-2">
                  {generatedResults.map((r) => (
                    <MaterialResultCard
                      key={r.id}
                      result={r}
                      isActive={selectedResult?.id === r.id}
                      onSelect={() => { setSelectedResult(r); setMaterialType(r.type); }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {generatedResults.length === 0 && !isGenerating && (
              <div className="flex-1 bg-[#1a1a22] rounded-2xl border border-white/5 p-4 flex flex-col items-center justify-center gap-3">
                <div className="text-4xl opacity-30">🎬</div>
                <div className="text-white/30 text-xs text-center">
                  选择主题和物料类型<br />点击上方按钮开始生成
                </div>
                <div className="grid grid-cols-2 gap-2 w-full mt-2">
                  {[
                    { emoji: '🖼️', name: '直播封面' },
                    { emoji: '🎟️', name: '优惠卡片' },
                    { emoji: '💬', name: '弹幕提示' },
                    { emoji: '❤️', name: '关注引导' },
                  ].map((item) => (
                    <div key={item.name} className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                      <div className="text-lg mb-1">{item.emoji}</div>
                      <div className="text-white/40 text-[10px]">{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
