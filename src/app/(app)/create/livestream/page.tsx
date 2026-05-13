'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
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
  preview: string;
  overlayStyle: string;
}

// ============================================================
// Theme Configurations
// ============================================================

type ThemeConfigValue = {
  label: string;
  emoji: string;
  bgGradient: string;
  bgSolid: string;
  accentPrimary: string;
  accentSecondary: string;
  textPrimary: string;
  bannerBg: string;
  bannerText: string;
  cardBg: string;
  couponBg: string;
  couponText: string;
  productBg: string;
  productText: string;
  danmaku: string[];
  institution: string;
  sessionTag: string;
  brandText: string;
  coverText: string;
};

const THEME_CONFIG: Record<ThemeType, ThemeConfigValue> = {
  hotpot: {
    label: '火锅/串串',
    emoji: '🍲',
    bgGradient: 'from-red-900 via-rose-950 to-red-950',
    bgSolid: '#7f1d1d',
    accentPrimary: '#FF2020',
    accentSecondary: '#FFD700',
    textPrimary: '#FFD700',
    bannerBg: 'bg-gradient-to-r from-red-700 to-amber-600',
    bannerText: 'text-yellow-200',
    cardBg: 'bg-white',
    couponBg: 'bg-gradient-to-br from-red-600 to-orange-500',
    couponText: 'text-white',
    productBg: 'bg-white',
    productText: 'text-red-700',
    institution: '🏆 中国火锅协会认证',
    sessionTag: '🔥 周年庆专场',
    brandText: '翻滚红油·12年老字号',
    danmaku: ['这家店太香了！', '毛肚必点！', '想去吃！', '回复"想吃"上精选', '排了多久？', '辣不辣？', '好想吃啊', '地址在哪', '性价比高吗', '老板来一份', '今天就冲！', '正宗吗？', '几个人吃合适', '有套餐吗', '求地址！'],
    coverText: '热辣鲜锅·翻滚红油',
  },
  bubble_tea: {
    label: '奶茶/茶饮',
    emoji: '🧋',
    bgGradient: 'from-pink-200 via-pink-100 to-purple-100',
    bgSolid: '#fce7f3',
    accentPrimary: '#FF69B4',
    accentSecondary: '#98D8AA',
    textPrimary: '#FF69B4',
    bannerBg: 'bg-gradient-to-r from-pink-400 to-rose-400',
    bannerText: 'text-white',
    cardBg: 'bg-white',
    couponBg: 'bg-gradient-to-br from-pink-500 to-rose-400',
    couponText: 'text-white',
    productBg: 'bg-white',
    productText: 'text-pink-600',
    institution: '🌸 新锐茶饮品牌',
    sessionTag: '✨ 新品首发专场',
    brandText: '手捣芋泥·杨枝甘露',
    danmaku: ['好喝好喝！', '芋泥波波！', '已下单！', '好喝！再来一杯', '地址发一下', '有团购吗', '好心动', '杨枝甘露！', '太绝了！', '已关注！', '第二杯半价！', '颜值好高', '好想喝！', '哪里有店', '好便宜！'],
    coverText: '新品上市·手捣芋泥',
  },
  bbq: {
    label: '烤肉/烧烤',
    emoji: '🥩',
    bgGradient: 'from-amber-900 via-orange-950 to-neutral-950',
    bgSolid: '#451a03',
    accentPrimary: '#FF4500',
    accentSecondary: '#FFD700',
    textPrimary: '#FFD700',
    bannerBg: 'bg-gradient-to-r from-amber-700 to-orange-600',
    bannerText: 'text-yellow-100',
    cardBg: 'bg-white',
    couponBg: 'bg-gradient-to-br from-amber-600 to-red-600',
    couponText: 'text-white',
    productBg: 'bg-white',
    productText: 'text-amber-700',
    institution: '🔥 中国烤肉连锁品牌',
    sessionTag: '🥩 炭火飘香专场',
    brandText: '炭火烤肉·新鲜现切',
    danmaku: ['太香了！', '想吃烤肉！', '地址在哪', '价格怎么样', '有套餐吗', '冲！冲！冲！', '帮我留个位', '周末去！', '好饿啊！', '排队吗？', '五花肉！', '好想吃！', '牛肉推荐', '性价比高', '好饿好饿'],
    coverText: '炭火烤肉·新鲜现切',
  },
  bakery: {
    label: '烘焙/甜品',
    emoji: '🍰',
    bgGradient: 'from-pink-100 via-rose-50 to-pink-50',
    bgSolid: '#fff1f2',
    accentPrimary: '#FF69B4',
    accentSecondary: '#F5DEB3',
    textPrimary: '#FF69B4',
    bannerBg: 'bg-gradient-to-r from-pink-300 to-rose-300',
    bannerText: 'text-white',
    cardBg: 'bg-white',
    couponBg: 'bg-gradient-to-br from-pink-400 to-rose-300',
    couponText: 'text-white',
    productBg: 'bg-white',
    productText: 'text-rose-500',
    institution: '🎂 网红烘焙品牌',
    sessionTag: '🍰 甜蜜时光专场',
    brandText: '当日现烤·法式甜品',
    danmaku: ['好精致！', '甜品控！', '好想吃！', '好可爱！', '地址在哪', '怎么买', '好幸福', '太诱人了', '心动！', '已收藏！', '马卡龙！', '好好看！', '好想吃！', '好甜！', '蛋糕！'],
    coverText: '甜蜜时光·法式甜品',
  },
  crayfish: {
    label: '小龙虾',
    emoji: '🦞',
    bgGradient: 'from-red-950 via-neutral-950 to-red-900',
    bgSolid: '#1c0a0a',
    accentPrimary: '#FF2020',
    accentSecondary: '#FFD700',
    textPrimary: '#FFD700',
    bannerBg: 'bg-gradient-to-r from-red-700 to-orange-600',
    bannerText: 'text-yellow-200',
    cardBg: 'bg-white',
    couponBg: 'bg-gradient-to-br from-red-600 to-amber-500',
    couponText: 'text-white',
    productBg: 'bg-white',
    productText: 'text-red-700',
    institution: '🦞 麻辣小龙虾专家',
    sessionTag: '🔥 开海季特惠专场',
    brandText: '麻辣鲜香·鲜活现做',
    danmaku: ['好馋！', '够辣吗', '好便宜！', '想去！', '配啤酒！', '周末冲！', '地址在哪', '新鲜吗', '个头大吗', '好饿！', '🦞🦞🦞', '辣不辣', '几斤起卖', '好想吃！', '性价比高！'],
    coverText: '麻辣小龙虾·鲜活现做',
  },
  noodles: {
    label: '面馆/小吃',
    emoji: '🍜',
    bgGradient: 'from-orange-50 via-amber-50 to-yellow-50',
    bgSolid: '#fef3c7',
    accentPrimary: '#F59E0B',
    accentSecondary: '#FFFFFF',
    textPrimary: '#D97706',
    bannerBg: 'bg-gradient-to-r from-orange-400 to-amber-400',
    bannerText: 'text-white',
    cardBg: 'bg-white',
    couponBg: 'bg-gradient-to-br from-orange-500 to-amber-400',
    couponText: 'text-white',
    productBg: 'bg-white',
    productText: 'text-orange-600',
    institution: '🍜 传统面食品牌',
    sessionTag: '☀️ 早市优惠专场',
    brandText: '手擀现拉·老汤慢炖',
    danmaku: ['好香！', '好想吃！', '在哪！', '贵不贵', '好吃吗', '量多吗', '下次去！', '太饿了！', '冲！', '好诱人！', '加辣！', '加个蛋！', '牛肉面！', '刀削面！', '好饿好饿'],
    coverText: '地道面馆·老汤慢炖',
  },
};

const MATERIAL_TYPES: { value: MaterialType; label: string; emoji: string; description: string }[] = [
  { value: 'cover', label: '直播封面', emoji: '🖼️', description: '吸引点击的高点击率封面图' },
  { value: 'discount', label: '优惠卡片', emoji: '🎟️', description: '限时优惠、活动预告展示卡' },
  { value: 'danmaku', label: '弹幕提示卡', emoji: '💬', description: '引导弹幕互动，提升活跃度' },
  { value: 'follow', label: '关注引导图', emoji: '❤️', description: '引导关注，提升粉丝转化' },
];

const MATERIAL_RESULTS: Record<ThemeType, MaterialResult[]> = {
  hotpot: [
    { id: 'h-c1', type: 'cover', title: '热辣鲜锅', subtitle: '翻滚的红油·12年老字号', preview: '🍲 周年庆特惠', overlayStyle: 'cover' },
    { id: 'h-d1', type: 'discount', title: '299代500', subtitle: '全店通用·限时抢', preview: '🎉 299代500', overlayStyle: 'coupon-right' },
    { id: 'h-d2', type: 'discount', title: '招牌套餐6.8折', subtitle: '含毛肚+虾滑+牛肉卷', preview: '💰 6.8折套餐', overlayStyle: 'coupon-left' },
    { id: 'h-b1', type: 'danmaku', title: '回复"想吃"上精选', subtitle: '主播翻牌·送招牌毛肚', preview: '💬 想吃', overlayStyle: 'danmaku-card' },
    { id: 'h-f1', type: 'follow', title: '点关注送毛肚', subtitle: '关注店铺·立享会员价', preview: '❤️ 关注', overlayStyle: 'follow-card' },
  ],
  bubble_tea: [
    { id: 'b-c1', type: 'cover', title: '新品上市', subtitle: '杨枝甘露·手捣芋泥', preview: '🧋 新品尝鲜', overlayStyle: 'cover' },
    { id: 'b-d1', type: 'discount', title: '第二杯半价', subtitle: '限时3天·新品全系', preview: '🧋 第二杯半价', overlayStyle: 'coupon-right' },
    { id: 'b-d2', type: 'discount', title: '三杯拼单减15', subtitle: '爆款套餐·超值优惠', preview: '💰 拼单减15', overlayStyle: 'coupon-left' },
    { id: 'b-b1', type: 'danmaku', title: '扣"好喝"抽免单', subtitle: '每10分钟抽1名免单', preview: '💬 好喝', overlayStyle: 'danmaku-card' },
    { id: 'b-f1', type: 'follow', title: '关注立领5元券', subtitle: '无门槛·全场通用', preview: '❤️ 5元券', overlayStyle: 'follow-card' },
  ],
  bbq: [
    { id: 'q-c1', type: 'cover', title: '炭火烤肉', subtitle: '新鲜现切·炭火飘香', preview: '🥩 炭火烤肉', overlayStyle: 'cover' },
    { id: 'q-d1', type: 'discount', title: '五花肉免费送', subtitle: '进店礼·限前50名', preview: '🥩 免费送', overlayStyle: 'coupon-right' },
    { id: 'q-d2', type: 'discount', title: '4人套餐328', subtitle: '含酒水·超值划算', preview: '💰 328套餐', overlayStyle: 'coupon-left' },
    { id: 'q-b1', type: 'danmaku', title: '扣"想吃"上墙', subtitle: '主播翻牌·送牛肉', preview: '💬 想吃', overlayStyle: 'danmaku-card' },
    { id: 'q-f1', type: 'follow', title: '关注享VIP价', subtitle: '会员专享·更低折扣', preview: '❤️ VIP价', overlayStyle: 'follow-card' },
  ],
  bakery: [
    { id: 'k-c1', type: 'cover', title: '甜蜜时光', subtitle: '当日现烤·法式甜品', preview: '🍰 甜蜜时光', overlayStyle: 'cover' },
    { id: 'k-d1', type: 'discount', title: '爆浆蛋糕19.9', subtitle: '限时秒杀·抢完即止', preview: '🍰 19.9元', overlayStyle: 'coupon-right' },
    { id: 'k-d2', type: 'discount', title: '充200送50', subtitle: '再享9折·会员福利', preview: '💰 充200送50', overlayStyle: 'coupon-left' },
    { id: 'k-b1', type: 'danmaku', title: '扣"想要"上车', subtitle: '手慢无·限时抢购', preview: '💬 想要', overlayStyle: 'danmaku-card' },
    { id: 'k-f1', type: 'follow', title: '关注送马卡龙', subtitle: '每日前20名关注', preview: '🍪 送马卡龙', overlayStyle: 'follow-card' },
  ],
  crayfish: [
    { id: 'x-c1', type: 'cover', title: '麻辣小龙虾', subtitle: '鲜活现做·吃到爽', preview: '🦞 麻辣鲜香', overlayStyle: 'cover' },
    { id: 'x-d1', type: 'discount', title: '3斤仅78元', subtitle: '鲜活肥美·个头超大', preview: '🦞 3斤78', overlayStyle: 'coupon-right' },
    { id: 'x-d2', type: 'discount', title: '虾+啤酒148', subtitle: '套餐特惠·超值组合', preview: '🍺 148套餐', overlayStyle: 'coupon-left' },
    { id: 'x-b1', type: 'danmaku', title: '扣"够辣"送虾钳', subtitle: '主播翻牌·送霸王餐', preview: '💬 够辣', overlayStyle: 'danmaku-card' },
    { id: 'x-f1', type: 'follow', title: '关注抽霸王餐', subtitle: '每晚8点开奖·必中', preview: '🦞 霸王餐', overlayStyle: 'follow-card' },
  ],
  noodles: [
    { id: 'n-c1', type: 'cover', title: '地道面馆', subtitle: '手擀现拉·老汤慢炖', preview: '🍜 地道面馆', overlayStyle: 'cover' },
    { id: 'n-d1', type: 'discount', title: '豆浆免费续', subtitle: '早市特惠·7-9点', preview: '☕ 免费续杯', overlayStyle: 'coupon-right' },
    { id: 'n-d2', type: 'discount', title: '面+小菜22元', subtitle: '套餐特惠·吃饱吃好', preview: '💰 22元套餐', overlayStyle: 'coupon-left' },
    { id: 'n-b1', type: 'danmaku', title: '扣"加辣"上精选', subtitle: '主播翻牌·送卤蛋', preview: '💬 加辣', overlayStyle: 'danmaku-card' },
    { id: 'n-f1', type: 'follow', title: '关注送卤蛋', subtitle: '进店消费即可使用', preview: '🥚 送卤蛋', overlayStyle: 'follow-card' },
  ],
};

const DANMAKU_COLORS = [
  'text-white',
  'text-yellow-300',
  'text-pink-300',
  'text-green-300',
  'text-orange-300',
  'text-red-300',
  'text-blue-300',
  'text-rose-200',
  'text-cyan-200',
];

// ============================================================
// Utility
// ============================================================

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ============================================================
// Torn Paper Edge SVG Clip
// ============================================================

function TornPaperClip({ className }: { className: string }) {
  return (
    <svg className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} preserveAspectRatio="none">
      <defs>
        <clipPath id="torn-top" clipPathUnits="objectBoundingBox">
          <path d="M0,1 L0,0.72 Q0.05,-0.02 0.1,0.15 Q0.15,-0.01 0.2,0.1 Q0.25,-0.03 0.3,0.08 Q0.35,0.02 0.4,0.12 Q0.45,-0.01 0.5,0.05 Q0.55,0.01 0.6,0.08 Q0.65,-0.02 0.7,0.06 Q0.75,0.02 0.8,0.1 Q0.85,-0.01 0.9,0.07 Q0.95,0.01 1,0.08 L1,1 Z" />
        </clipPath>
        <clipPath id="torn-bottom" clipPathUnits="objectBoundingBox">
          <path d="M0,0 L0,0.25 Q0.05,1.05 0.1,0.85 Q0.15,1.03 0.2,0.92 Q0.25,1.06 0.3,0.95 Q0.35,0.99 0.4,0.88 Q0.45,1.04 0.5,0.93 Q0.55,0.98 0.6,0.90 Q0.65,1.02 0.7,0.92 Q0.75,0.97 0.8,0.87 Q0.85,1.01 0.9,0.91 Q0.95,0.96 1,0.88 L1,0 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

// ============================================================
// Live Stream Panel (9:16 Portrait)
// ============================================================

interface LiveStreamPanelProps {
  theme: ThemeType;
  generatedResults: MaterialResult[];
  selectedMaterialType: MaterialType;
  onGenerateClick: () => void;
  isGenerating: boolean;
}

function LiveStreamPanel({
  theme,
  generatedResults,
  selectedMaterialType,
  onGenerateClick,
  isGenerating,
}: LiveStreamPanelProps) {
  const [viewerCount, setViewerCount] = useState(5820);
  const [likeCount, setLikeCount] = useState(34500);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number; emoji: string; color: string }[]>([]);
  const [danmakuMessages, setDanmakuMessages] = useState<{ id: number; text: string; color: string; y: number }[]>([]);
  const [productCardVisible, setProductCardVisible] = useState(false);
  const [couponCardsVisible, setCouponCardsVisible] = useState(false);
  const [danmakuCardVisible, setDanmakuCardVisible] = useState(false);
  const [followCardVisible, setFollowCardVisible] = useState(false);
  const heartIdRef = useRef(0);
  const danmakuIdRef = useRef(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const cfg = THEME_CONFIG[theme];

  // Viewer count auto-refresh
  useEffect(() => {
    const iv = setInterval(() => {
      setViewerCount((v) => Math.max(2000, v + randInt(-20, 30)));
    }, 2000);
    return () => clearInterval(iv);
  }, []);

  // Like count auto-tick
  useEffect(() => {
    const iv = setInterval(() => {
      setLikeCount((v) => v + randInt(1, 8));
    }, 500);
    return () => clearInterval(iv);
  }, []);

  // Auto hearts from like button
  useEffect(() => {
    const iv = setInterval(() => {
      if (Math.random() < 0.4) {
        const newHeart = {
          id: ++heartIdRef.current,
          x: 85 + randInt(-5, 5),
          y: 80 + randInt(-10, 20),
          emoji: ['❤️', '👍', '🧡', '💗', '✨', '🔥'][randInt(0, 5)],
          color: ['text-red-400', 'text-pink-400', 'text-orange-300', 'text-rose-300'][randInt(0, 3)],
        };
        setHearts((p) => [...p.slice(-15), newHeart]);
      }
    }, 700);
    return () => clearInterval(iv);
  }, []);

  // Auto danmaku
  useEffect(() => {
    const texts = cfg.danmaku;
    const iv = setInterval(() => {
      const newMsg = {
        id: ++danmakuIdRef.current,
        text: texts[Math.floor(Math.random() * texts.length)],
        color: DANMAKU_COLORS[Math.floor(Math.random() * DANMAKU_COLORS.length)],
        y: 52 + Math.random() * 20,
      };
      setDanmakuMessages((p) => [...p.slice(-12), newMsg]);
    }, 1600);
    return () => clearInterval(iv);
  }, [cfg.danmaku]);

  // Move & remove danmaku
  useEffect(() => {
    const iv = setInterval(() => {
      setDanmakuMessages((p) =>
        p
          .map((m) => ({ ...m, x: (m as any).x !== undefined ? (m as any).x - 1.2 : 0 }))
          .filter((m) => (m as any).x === undefined || (m as any).x > -30)
      );
    }, 60);
    return () => clearInterval(iv);
  }, []);

  // Init danmaku x positions
  useEffect(() => {
    const iv = setInterval(() => {
      setDanmakuMessages((p) =>
        p.map((m) => ({
          ...m,
          x: (m as any).x !== undefined ? (m as any).x : 105,
        }))
      );
    }, 100);
    setTimeout(() => clearInterval(iv), 500);
    return () => clearInterval(iv);
  }, []);

  // Show overlay cards when results exist
  useEffect(() => {
    if (generatedResults.length > 0) {
      const timer = setTimeout(() => {
        setProductCardVisible(true);
        setCouponCardsVisible(true);
        setDanmakuCardVisible(true);
        setFollowCardVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setProductCardVisible(false);
      setCouponCardsVisible(false);
      setDanmakuCardVisible(false);
      setFollowCardVisible(false);
    }
  }, [generatedResults.length]);

  const activeResult = generatedResults.find((r) => r.type === selectedMaterialType) || null;

  // Active coupon results
  const couponRight = generatedResults.find((r) => r.overlayStyle === 'coupon-right');
  const couponLeft = generatedResults.find((r) => r.overlayStyle === 'coupon-left');
  const danmakuCard = generatedResults.find((r) => r.overlayStyle === 'danmaku-card');
  const followCard = generatedResults.find((r) => r.overlayStyle === 'follow-card');
  const coverResult = generatedResults.find((r) => r.overlayStyle === 'cover');

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* 9:16 Portrait Container */}
      <div
        ref={panelRef}
        className="relative flex-1 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        style={{ aspectRatio: '9/16', maxHeight: '100%', margin: '0 auto' }}
      >
        {/* ===== BACKGROUND ===== */}
        <div className={`absolute inset-0 bg-gradient-to-b ${cfg.bgGradient}`} />

        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          {theme === 'hotpot' && (
            <div className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 60%, rgba(255,50,0,0.4) 0%, transparent 60%)`,
              }}
            />
          )}
          {theme === 'crayfish' && (
            <div className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(ellipse at 50% 80%, rgba(200,30,0,0.5) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(255,100,0,0.2) 0%, transparent 40%)`,
              }}
            />
          )}
          {theme === 'bubble_tea' && (
            <div className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 80% 20%, rgba(255,105,180,0.2) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(152,216,170,0.2) 0%, transparent 40%)`,
              }}
            />
          )}
          {theme === 'bbq' && (
            <div className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(ellipse at 50% 70%, rgba(255,100,0,0.3) 0%, transparent 50%)`,
              }}
            />
          )}
          {theme === 'bakery' && (
            <div className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,105,180,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(245,222,179,0.2) 0%, transparent 50%)`,
              }}
            />
          )}
          {theme === 'noodles' && (
            <div className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(245,158,11,0.2) 0%, transparent 60%)`,
              }}
            />
          )}
        </div>

        {/* ===== TOP INFO BAR ===== */}
        <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-3 py-2 bg-black/40 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="text-sm">🏠</span>
            <span className="text-white/70 text-xs">山河屯铁锅炖</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-pink-400 text-sm animate-pulse">♡</span>
              <span className="text-white text-xs font-medium tabular-nums">{likeCount.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-0.5">
              <span className="text-white text-xs">👥</span>
              <span className="text-white text-xs font-medium tabular-nums">{viewerCount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* ===== TOP BANNER (Torn Paper Effect) ===== */}
        <div className="absolute top-9 left-0 right-0 z-20">
          {/* Banner */}
          <div className={`mx-2 px-4 py-1.5 ${cfg.bannerBg} relative`} style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}>
            <div className="flex items-center justify-center gap-3">
              <span className={`text-xs font-bold ${cfg.bannerText}`}>{cfg.institution}</span>
              <div className={`w-px h-3 ${theme === 'hotpot' || theme === 'crayfish' ? 'bg-yellow-400' : 'bg-white/40'}`} />
              <span className={`text-xs font-bold ${cfg.bannerText}`}>{cfg.sessionTag}</span>
            </div>
            {/* Torn shadow */}
            <div className="absolute -bottom-1 left-0 right-0 h-2 bg-black/10" style={{ clipPath: 'polygon(0 0, 5% 100%, 10% 30%, 15% 100%, 20% 40%, 25% 100%, 30% 50%, 35% 100%, 40% 30%, 45% 100%, 50% 45%, 55% 100%, 60% 35%, 65% 100%, 70% 40%, 75% 100%, 80% 30%, 85% 100%, 90% 45%, 95% 100%, 100% 0)' }} />
          </div>
        </div>

        {/* ===== LIVE BADGE ===== */}
        <div className="absolute top-16 right-3 z-30 flex items-center gap-1 bg-red-600 text-white px-2 py-0.5 rounded text-xs font-bold shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
          LIVE
        </div>

        {/* ===== CENTER: STREAM CONTENT ===== */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-5">
          <div className="relative">
            <div className="text-[80px]">{cfg.emoji}</div>
            <div className="absolute -inset-8 rounded-full bg-white/5 animate-ping" />
          </div>
        </div>

        {/* ===== PRODUCT CARD (Upper Left) ===== */}
        {generatedResults.length > 0 && (
          <div className={`absolute top-20 left-2 z-20 transition-all duration-500 ${productCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <div className={`w-32 ${cfg.productBg} rounded-xl shadow-xl p-2 flex flex-col items-center gap-1`}>
              <div className="w-full h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-2xl">
                {cfg.emoji}
              </div>
              <div className={`${cfg.productText} text-xs font-bold text-center leading-tight`}>
                {theme === 'hotpot' ? '招牌铁锅炖' : theme === 'bubble_tea' ? '杨枝甘露' : theme === 'bbq' ? '五花肉拼盘' : theme === 'bakery' ? '法式蛋糕' : theme === 'crayfish' ? '麻辣小龙虾' : '牛肉刀削面'}
              </div>
              <div className={`${cfg.productText} text-sm font-bold`}>¥{theme === 'hotpot' ? '88' : theme === 'bubble_tea' ? '22' : theme === 'bbq' ? '68' : theme === 'bakery' ? '35' : theme === 'crayfish' ? '78' : '18'}</div>
              <div className="w-full bg-red-500 text-white text-[10px] text-center py-0.5 rounded-md font-bold">
                去购买 →
              </div>
            </div>
          </div>
        )}

        {/* ===== COUPON CARDS (Middle Right + Left) ===== */}
        {generatedResults.length > 0 && (
          <>
            {/* Coupon Right */}
            <div className={`absolute top-32 right-2 z-20 transition-all duration-500 ${couponCardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: '100ms' }}>
              <div className={`${cfg.couponBg} rounded-xl shadow-xl p-2.5 w-36 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.1) 5px, rgba(255,255,255,0.1) 10px)`,
                  }}
                />
                {couponRight ? (
                  <>
                    <div className="text-white/80 text-[10px] font-medium mb-0.5">{couponRight.title}</div>
                    <div className="text-white/60 text-[9px]">{couponRight.subtitle}</div>
                    <div className="mt-1.5 bg-white/20 rounded-md px-2 py-0.5 text-white text-xs font-bold text-center">
                      {couponRight.preview}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-white/80 text-xs font-bold">🎉 限时优惠</div>
                    <div className="text-white/60 text-[9px] mt-0.5">立即抢购</div>
                  </>
                )}
                {/* Pulse animation */}
                <div className="absolute -inset-1 border-2 border-white/30 rounded-xl animate-pulse" />
              </div>
            </div>

            {/* Coupon Left */}
            <div className={`absolute top-44 left-2 z-20 transition-all duration-500 ${couponCardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '150ms' }}>
              <div className={`bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-xl p-2.5 w-32 relative`}>
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(255,255,255,0.1) 5px, rgba(255,255,255,0.1) 10px)`,
                  }}
                />
                {couponLeft ? (
                  <>
                    <div className="text-white/80 text-[10px] font-medium mb-0.5">{couponLeft.title}</div>
                    <div className="text-white/60 text-[9px]">{couponLeft.subtitle}</div>
                    <div className="mt-1.5 bg-white/20 rounded-md px-2 py-0.5 text-white text-xs font-bold text-center">
                      {couponLeft.preview}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-white/80 text-xs font-bold">💰 超值套餐</div>
                    <div className="text-white/60 text-[9px] mt-0.5">实惠首选</div>
                  </>
                )}
                <div className="absolute -inset-1 border-2 border-white/30 rounded-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </>
        )}

        {/* ===== ANCHOR AREA + HANDHELD COUPON ===== */}
        <div className="absolute bottom-28 left-0 right-0 z-15 flex items-end justify-center pointer-events-none">
          {/* Simulated anchor holding coupon */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center text-3xl shadow-xl">
              {cfg.emoji}
            </div>
            {/* Handheld coupon below anchor */}
            <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 ${cfg.couponBg} px-3 py-1 rounded-lg shadow-lg border-2 border-white/40 animate-bounce`}>
              <span className="text-white text-xs font-bold whitespace-nowrap">
                {theme === 'hotpot' ? '🔥 299代500' : theme === 'bubble_tea' ? '🧋 第二杯半价' : theme === 'bbq' ? '🥩 五花肉免费' : theme === 'bakery' ? '🍰 19.9秒杀' : theme === 'crayfish' ? '🦞 3斤78元' : '☕ 豆浆免费'}
              </span>
            </div>
          </div>
        </div>

        {/* ===== TORN PAPER DIVIDER ===== */}
        <div className="absolute bottom-20 left-0 right-0 z-15">
          <div className="relative h-3">
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/20" />
            {/* Torn edge top */}
            <div className="absolute inset-x-0 top-0 h-2"
              style={{
                clipPath: 'polygon(0 100%, 5% 0%, 10% 80%, 15% 0%, 20% 70%, 25% 0%, 30% 90%, 35% 0%, 40% 75%, 45% 0%, 50% 85%, 55% 0%, 60% 70%, 65% 0%, 70% 80%, 75% 0%, 80% 65%, 85% 0%, 90% 75%, 95% 0%, 100% 100%)',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)',
              }}
            />
          </div>
        </div>

        {/* ===== DANMAKU AREA (Bottom) ===== */}
        <div className="absolute bottom-10 left-0 right-0 z-20">
          {/* Danmaku messages */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {danmakuMessages.map((msg) => (
              <div
                key={msg.id}
                className={`absolute font-semibold text-xs whitespace-nowrap drop-shadow-lg ${msg.color}`}
                style={{
                  left: `${(msg as any).x ?? 105}%`,
                  top: `${msg.y}%`,
                  animation: `danmakuScroll-${msg.id % 10}s linear forwards`,
                }}
              >
                <span className="bg-black/40 px-3 py-0.5 rounded-full">{msg.text}</span>
              </div>
            ))}
          </div>
          <style>{`
            @keyframes danmakuScroll-0 { 0% { transform: translateX(0); } 100% { transform: translateX(-120vw); } }
            @keyframes danmakuScroll-1 { 0% { transform: translateX(0); } 100% { transform: translateX(-120vw); } }
            @keyframes danmakuScroll-2 { 0% { transform: translateX(0); } 100% { transform: translateX(-120vw); } }
            @keyframes danmakuScroll-3 { 0% { transform: translateX(0); } 100% { transform: translateX(-120vw); } }
            @keyframes danmakuScroll-4 { 0% { transform: translateX(0); } 100% { transform: translateX(-120vw); } }
            @keyframes danmakuScroll-5 { 0% { transform: translateX(0); } 100% { transform: translateX(-120vw); } }
            @keyframes danmakuScroll-6 { 0% { transform: translateX(0); } 100% { transform: translateX(-120vw); } }
            @keyframes danmakuScroll-7 { 0% { transform: translateX(0); } 100% { transform: translateX(-120vw); } }
            @keyframes danmakuScroll-8 { 0% { transform: translateX(0); } 100% { transform: translateX(-120vw); } }
            @keyframes danmakuScroll-9 { 0% { transform: translateX(0); } 100% { transform: translateX(-120vw); } }
          `}</style>

          {/* Danmaku card overlay (when generated) */}
          {generatedResults.length > 0 && danmakuCardVisible && (
            <div className={`absolute left-2 bottom-0 z-30 transition-all duration-500 ${danmakuCardVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-black/70 backdrop-blur-md rounded-t-xl px-3 py-2 border border-white/10 max-w-[55%]">
                <div className="text-white/50 text-[9px] mb-0.5">💬 弹幕精选</div>
                <div className="text-white text-xs font-bold">{danmakuCard?.title || '扣666上车'}</div>
                <div className="text-white/60 text-[9px] mt-0.5">{danmakuCard?.subtitle || '主播翻牌'}</div>
              </div>
            </div>
          )}
        </div>

        {/* ===== BOTTOM INFO BAR ===== */}
        <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-8 pb-2 px-3 flex items-end justify-between">
          {/* Brand text */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm">
              {cfg.emoji}
            </div>
            <div>
              <div className="text-white text-xs font-semibold">山河屯铁锅炖</div>
              <div className="text-white/40 text-[9px]">{cfg.brandText}</div>
            </div>
          </div>

          {/* Follow card (when generated) */}
          {generatedResults.length > 0 && followCardVisible && (
            <div className={`transition-all duration-500 ${followCardVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '250ms' }}>
              <div className="bg-gradient-to-br from-pink-600 to-red-500 rounded-xl px-2.5 py-1.5 shadow-xl border border-white/20 flex flex-col items-center min-w-[60px]">
                <span className="text-white text-lg">❤️</span>
                <span className="text-white text-[9px] font-bold">{followCard?.title || '点关注'}</span>
                <span className="text-white/70 text-[8px]">{followCard?.subtitle || '享福利'}</span>
              </div>
            </div>
          )}

          {/* Right: mini image preview */}
          {generatedResults.length > 0 && (
            <div className="absolute bottom-12 right-2 z-30 w-14 h-14 rounded-lg overflow-hidden border border-white/20 shadow-lg bg-black/60 backdrop-blur-sm">
              <div className="w-full h-full flex items-center justify-center text-2xl">{cfg.emoji}</div>
            </div>
          )}
        </div>

        {/* ===== FLOATING HEARTS ===== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-40">
          {hearts.map((h) => (
            <FloatingHeart
              key={h.id}
              id={h.id}
              x={h.x}
              y={h.y}
              emoji={h.emoji}
              color={h.color}
              onDone={() => setHearts((p) => p.filter((x) => x.id !== h.id))}
            />
          ))}
        </div>

        {/* ===== EMPTY STATE OVERLAY ===== */}
        {generatedResults.length === 0 && (
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="text-4xl mb-3 opacity-60">{cfg.emoji}</div>
            <div className="text-white/70 text-sm font-medium mb-1">{cfg.coverText}</div>
            <div className="text-white/40 text-xs mb-4">点击右侧「立即生成」预览效果</div>
            <Button
              onClick={onGenerateClick}
              className={`text-xs font-bold px-4 py-2 rounded-full shadow-xl ${
                theme === 'hotpot' || theme === 'crayfish' || theme === 'bbq'
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : theme === 'bakery' || theme === 'bubble_tea'
                  ? 'bg-pink-500 hover:bg-pink-600 text-white'
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              }`}
            >
              ✨ 快速生成物料
            </Button>
          </div>
        )}
      </div>

      {/* Label */}
      <div className="text-center text-[10px] text-white/30 mt-2">9:16 竖屏直播预览 · 实时模拟</div>
    </div>
  );
}

// ============================================================
// Floating Heart
// ============================================================

function FloatingHeart({
  id,
  x,
  y,
  emoji,
  color,
  onDone,
}: {
  id: number;
  x: number;
  y: number;
  emoji: string;
  color: string;
  onDone: () => void;
}) {
  const [posY, setPosY] = useState(y);
  const [opacity, setOpacity] = useState(1);
  const drift = (Math.random() - 0.5) * 20;

  useEffect(() => {
    let frame = 0;
    const iv = setInterval(() => {
      frame++;
      setPosY((v) => v - 2.5);
      setOpacity(1 - frame / 60);
      if (frame >= 60) {
        clearInterval(iv);
        onDone();
      }
    }, 40);
    return () => clearInterval(iv);
  }, [onDone]);

  return (
    <div
      className={`absolute text-xl font-bold transition-all ${color}`}
      style={{
        left: `${x + drift}%`,
        top: `${posY}%`,
        opacity,
        transform: `scale(${0.6 + Math.random() * 0.6})`,
      }}
    >
      {emoji}
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
  cfg,
}: {
  result: MaterialResult;
  isActive: boolean;
  onSelect: () => void;
  cfg: ThemeConfigValue;
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
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse inline-block" />
          <span className="text-red-300 text-[10px]">已应用到直播画面</span>
        </div>
      )}
    </button>
  );
}

// ============================================================
// Main Page
// ============================================================

export default function LivestreamPage() {
  const [theme, setTheme] = useState<ThemeType>('hotpot');
  const [materialType, setMaterialType] = useState<MaterialType>('cover');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResults, setGeneratedResults] = useState<MaterialResult[]>([]);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [selectedResult, setSelectedResult] = useState<MaterialResult | null>(null);

  const cfg = THEME_CONFIG[theme];

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedResults([]);
    setSelectedResult(null);
    setGenerationProgress(0);

    const totalSteps = 5;
    for (let i = 1; i <= totalSteps; i++) {
      await new Promise((r) => setTimeout(r, 380));
      setGenerationProgress((i / totalSteps) * 100);
    }

    const results = MATERIAL_RESULTS[theme];
    setGeneratedResults(results);
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

  const handleThemeChange = (newTheme: ThemeType) => {
    setTheme(newTheme);
    // Clear results when theme changes
    setGeneratedResults([]);
    setSelectedResult(null);
    setGenerationProgress(0);
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
          </div>
          <p className="text-white/40 mt-1 text-sm">AI 生成直播封面、优惠卡片、弹幕提示卡、关注引导图，实时预览效果</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-8 py-7 max-w-[1600px]">
        <div className="flex gap-5" style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}>
          {/* LEFT: Live Stream Simulation (60%) */}
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
                    🎨 {cfg.emoji} {cfg.label}
                  </span>
                  <span className="bg-white/5 px-2 py-1 rounded-md border border-white/10">
                    📐 9:16
                  </span>
                </div>
              </div>

              {/* Stream Panel */}
              <div className="flex-1 min-h-0 flex items-center justify-center">
                <LiveStreamPanel
                  theme={theme}
                  generatedResults={generatedResults}
                  selectedMaterialType={materialType}
                  onGenerateClick={handleGenerate}
                  isGenerating={isGenerating}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Control Console (40%) */}
          <div className="flex-[4] min-w-0 flex flex-col gap-4 overflow-y-auto">
            {/* Panel Header */}
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-xs font-medium">🎛️ 物料生成控制台</span>
            </div>

            {/* Theme Selection */}
            <div className="bg-[#1a1a22] rounded-2xl border border-white/5 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-sm font-semibold">直播主题</span>
                <span className="text-white/30 text-xs">切换背景</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(THEME_CONFIG) as ThemeType[]).map((key) => {
                  const t = THEME_CONFIG[key];
                  return (
                    <button
                      key={key}
                      onClick={() => handleThemeChange(key)}
                      className={`p-3 rounded-xl border-2 text-center transition-all ${
                        theme === key
                          ? 'border-red-500 bg-red-500/10'
                          : 'border-white/8 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="text-xl mb-1">{t.emoji}</div>
                      <div className={`text-xs font-medium ${theme === key ? 'text-white' : 'text-white/60'}`}>
                        {t.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Material Type Selection */}
            <div className="bg-[#1a1a22] rounded-2xl border border-white/5 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-sm font-semibold">物料类型</span>
                <span className="text-white/30 text-xs">预览位置</span>
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
                      <span className={`text-xs font-semibold ${materialType === mt.value ? 'text-white' : 'text-white/60'}`}>
                        {mt.label}
                      </span>
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
                className={`w-full h-12 text-sm font-bold transition-all border-0 shadow-lg disabled:opacity-60 ${
                  theme === 'hotpot' || theme === 'crayfish' || theme === 'bbq'
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 shadow-red-900/30'
                    : theme === 'bakery' || theme === 'bubble_tea'
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-pink-900/30'
                    : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-orange-900/30'
                }`}
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
                <Progress
                  value={generationProgress}
                  className="mt-3 h-1.5 bg-white/10"
                  style={
                    {
                      '--progress-bg': 'transparent',
                    } as React.CSSProperties
                  }
                />
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
              <div className="bg-[#1a1a22] rounded-2xl border border-white/5 p-4 overflow-hidden flex flex-col">
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

                {/* Type filter pills */}
                <div className="flex gap-2 mb-3 flex-wrap">
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
                      {MATERIAL_TYPES.find((mt) => mt.value === r.type)?.emoji}{' '}
                      {r.type === 'cover' ? '封面' : r.type === 'discount' ? '优惠' : r.type === 'danmaku' ? '弹幕' : '关注'}
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
                      cfg={cfg}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {generatedResults.length === 0 && !isGenerating && (
              <div className="bg-[#1a1a22] rounded-2xl border border-white/5 p-4 flex flex-col items-center justify-center gap-3">
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
