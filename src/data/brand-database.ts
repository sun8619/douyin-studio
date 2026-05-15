// 品牌情报数据库
// 结构化品牌信息，支持奶茶/柠檬茶、火锅、烤肉等 200+ 行业

export interface BrandProduct {
  name: string;         // 产品名称
  price?: string;      // 价格（可选）
  tag?: string;        // 标签：招牌/新品/限定/爆款
  description?: string; // 一句话描述
}

export interface BrandInfo {
  // 基础信息
  name: string;                  // 品牌名称
  city?: string;                 // 城市
  district?: string;             // 区域
  address?: string;              // 详细地址
  phone?: string;                // 联系电话
  
  // 品牌调性
  tagline?: string;              // 品牌 slogan
  vibe: '高端' | '潮流' | '治愈' | '烟火气' | '小清新' | '硬核' | '国潮' | '复古' | '简约' | '文艺'; // 品牌调性
  
  // 产品
  signature: BrandProduct[];     // 招牌产品（必推）
  popular: BrandProduct[];       // 热门产品
  newProduct?: BrandProduct[];   // 新品（活动用）
  
  // 用户评价关键词（从大众点评/小红书/抖音提取）
  reviewKeywords: string[];      // 高频词：如"好喝"、"颜值高"、"不踩雷"、"性价比"
  emotionalKeywords: string[];  // 情感词：如"回购"、"上头"、"绝绝子"、"爱了"
  complaintKeywords?: string[]; // 吐槽词（用于避免踩坑提示）：如"排队久"、"分量少"
  
  // 差异化卖点（3-5个核心记忆点）
  differentiators: string[];    // 例如："陈皮+柠檬茶首创"、"20年陈皮老字号"
  
  // 价格区间
  priceRange?: string;           // 例如："15-25元"、"人均80-100元"
  avgRating?: string;            // 例如："4.8分"、"4.6星"
  
  // 活动/优惠信息
  promotion?: string;            // 当前活动
  discount?: string;             // 折扣信息
  
  // 参考竞品（同品类优秀案例，用于品牌信息搜不到时兜底）
  referenceBrands?: string[];    // 参考品牌名列表
}

// ============================================================
// 奶茶/柠檬茶品类 — 优秀案例品牌库
// ============================================================

const LEMON_TEA_BRANDS: Record<string, BrandInfo> = {
  '柠季': {
    name: '柠季·手打柠檬茶',
    vibe: '小清新',
    tagline: '手打柠檬茶，只用好柠檬',
    signature: [
      { name: '招牌柠檬茶', tag: '招牌', description: '广东香水柠檬现切现捣，茶底现泡，清爽解腻' },
      { name: '茉莉柠檬茶', tag: '爆款', description: '茉莉花茶底+柠檬，花香茶香柠檬香三重奏' },
    ],
    popular: [
      { name: '鸭屎香柠檬茶', description: '潮汕凤凰单丛茶底，小众茶香独特体验' },
      { name: '芒果柠檬茶', description: '当季芒果+柠檬，果香浓郁' },
    ],
    reviewKeywords: ['清爽', '解腻', '好喝不贵', '柠檬香', '手打', '颜值高'],
    emotionalKeywords: ['回购', '上头', '夏天必备', '绝了', '爱了'],
    differentiators: ['广东香水柠檬', '现切现捣', '茶底现泡', '0添加香精'],
    priceRange: '12-18元',
    avgRating: '4.7分',
  },
  '啊叻奶茶': {
    name: '啊叻奶茶',
    vibe: '潮流',
    tagline: '好喝不过啊叻',
    signature: [
      { name: '叻奶波波', tag: '招牌', description: '泰式奶风味，波霸Q弹，椰奶香浓' },
      { name: '生椰拿铁', tag: '爆款', description: '生椰乳+阿拉比卡咖啡液，丝滑浓郁' },
    ],
    popular: [
      { name: '杨枝甘露', description: '芒果西柚椰奶西米，经典港式甜品茶化' },
      { name: '芋泥波波', description: '手工芋泥+Q弹波波，饱腹感强' },
    ],
    reviewKeywords: ['好喝', '椰奶香', '波波Q弹', '颜值高', '性价比'],
    emotionalKeywords: ['回购', '泰式风情', '朋友圈点赞', '种草'],
    differentiators: ['泰式奶茶风味', '手作波霸', '椰奶专线', '东南亚风情'],
    priceRange: '15-22元',
    avgRating: '4.6分',
  },
  '霸王茶姬': {
    name: '霸王茶姬·以茶会友',
    vibe: '国潮',
    tagline: '以东方茶，会世界友',
    signature: [
      { name: '伯牙绝弦', tag: '招牌', description: '茉莉雪芽茶底，清香鲜爽，门店销量第一' },
      { name: '去云南·玫瑰普洱', tag: '新品', description: '云南陈年普洱+墨红玫瑰，醇厚回甘' },
    ],
    popular: [
      { name: '桂馥兰香', description: '桂花乌龙+牛奶，桂花香清雅' },
      { name: '青青柚子', description: '香水柚+茉莉茶底，清爽低卡' },
    ],
    reviewKeywords: ['茶香浓郁', '好喝不腻', '国潮包装', '健康', '有文化'],
    emotionalKeywords: ['以茶会友', '回购多次', '东方美学', '品牌好感'],
    differentiators: ['原叶鲜奶茶', '东方茶文化', '伯牙绝弦爆款', '包装国潮美学'],
    priceRange: '18-28元',
    avgRating: '4.8分',
  },
  '喜茶': {
    name: '喜茶 HEYTEA',
    vibe: '高端',
    tagline: '灵感之茶',
    signature: [
      { name: '多肉葡萄', tag: '招牌', description: '当季葡萄+茉莉茶底+芝士奶盖，经典爆款' },
      { name: '酷黑桑葚', tag: '限定', description: '桑葚果肉满满，花青素满满' },
    ],
    popular: [
      { name: '喜茶制冰', description: '芝士茶+冰波的创意组合' },
      { name: '喜小茶', description: '低价版副线，性价比之选' },
    ],
    reviewKeywords: ['颜值高', '好喝', '排队王', '联名款', '上新快'],
    emotionalKeywords: ['种草', '打卡', '小红书爆款', '朋友圈素材', '惊艳'],
    differentiators: ['灵感创意茶饮', '联名营销', '空间设计', '小红书爆款制造机'],
    priceRange: '25-38元',
    avgRating: '4.7分',
  },
  '古茗': {
    name: '古茗茶饮',
    vibe: '治愈',
    tagline: '每天一杯喝不腻',
    signature: [
      { name: '超A芝士葡萄', tag: '招牌', description: '巨峰葡萄+茉莉茶+芝士，口感丰富' },
      { name: '杨枝甘露', tag: '爆款', description: '芒果椰奶西米，清爽不甜腻' },
    ],
    popular: [
      { name: '柠檬茶系列', description: '手打香水柠檬，清爽解腻' },
      { name: '芋泥波波', description: '手工芋泥，温热绵密' },
    ],
    reviewKeywords: ['好喝不贵', '性价比', '稳定出品', '经常回购', '小镇青年'],
    emotionalKeywords: ['回购', '天天喝', '便宜好喝', '宝藏店铺'],
    differentiators: ['性价比极高', '下沉市场王者', '稳定出品', '乡镇覆盖广'],
    priceRange: '10-18元',
    avgRating: '4.6分',
  },
};

// ============================================================
// 火锅品类 — 优秀案例品牌库
// ============================================================

const HOTPOT_BRANDS: Record<string, BrandInfo> = {
  '海底捞': {
    name: '海底捞火锅',
    vibe: '烟火气',
    tagline: '一起嗨，每一天',
    signature: [
      { name: '捞派牛肉', tag: '招牌', description: '精选黄牛肉，嫩滑入味' },
      { name: '番茄锅底', tag: '爆款', description: '浓郁番茄汤底，酸甜开胃，小朋友最爱' },
    ],
    popular: [
      { name: '虾滑', description: '手打虾滑，Q弹鲜嫩' },
      { name: '毛肚', description: '大片毛肚，七上八下爽脆' },
    ],
    reviewKeywords: ['服务好', '变态服务', '排队久', '小零食多', '过生日'],
    emotionalKeywords: ['感动', '宾至如归', '过生日首选', '等位也值'],
    differentiators: ['极致服务', '免费美甲/擦鞋', '等位零食', '员工福利好'],
    priceRange: '人均120-150元',
    avgRating: '4.5分',
    promotion: '大学生6.9折',
  },
  '巴奴毛肚火锅': {
    name: '巴奴毛肚火锅',
    vibe: '高端',
    tagline: '服务不是我们的特色，毛肚和菌汤才是',
    signature: [
      { name: '巴奴毛肚', tag: '招牌', description: '木瓜蛋白酶嫩化技术，12秒即可食用，极脆' },
      { name: '野山菌汤', tag: '招牌', description: '云南空运野生菌，养生锅底' },
    ],
    popular: [
      { name: '绣球菌', description: '每天限量，空运到店' },
      { name: '笨菠菜', description: '天然生长，无农药，限量供应' },
    ],
    reviewKeywords: ['毛肚超脆', '菌汤好喝', '品质高', '食材讲究', '鲜'],
    emotionalKeywords: ['食材惊艳', '高端火锅', '值得推荐', '还会再来'],
    differentiators: ['产品主义', '木瓜蛋白酶毛肚技术', '天然食材', '不用火碱发制'],
    priceRange: '人均150-180元',
    avgRating: '4.8分',
  },
};

// ============================================================
// 烤肉品类 — 优秀案例品牌库
// ============================================================

const BBQ_BRANDS: Record<string, BrandInfo> = {
  '西塔老太太泥炉烤肉': {
    name: '西塔老太太泥炉烤肉',
    vibe: '烟火气',
    tagline: '泥炉炭火，老太太烤肉',
    signature: [
      { name: '老太太特色肥牛', tag: '招牌', description: '肥瘦相间，蘸麻酱一绝' },
      { name: '秘制牛肉', tag: '爆款', description: '独家酱料腌制，甜辣入味' },
    ],
    popular: [
      { name: '浇汁横膈膜', description: '肉质厚实，汁水丰盈' },
      { name: '老太太特色肥瘦', description: '肥而不腻，蘸麻酱绝配' },
    ],
    reviewKeywords: ['麻酱绝了', '泥炉炭火', '老太太肥牛', '排队王', '蘸料一绝'],
    emotionalKeywords: ['麻酱封神', '还会来', '性价比高', '绝绝子'],
    differentiators: ['泥炉炭火', '秘制麻酱', '蘸料才是灵魂', '老太太肥牛招牌'],
    priceRange: '人均90-120元',
    avgRating: '4.7分',
  },
};

// ============================================================
// 咖啡品类
// ============================================================

const COFFEE_BRANDS: Record<string, BrandInfo> = {
  '瑞幸咖啡': {
    name: '瑞幸咖啡',
    vibe: '简约',
    tagline: '让咖啡成为生活的一部分',
    signature: [
      { name: '生椰拿铁', tag: '招牌', description: '椰乳+浓缩，清爽丝滑，销量破亿' },
      { name: '丝绒拿铁', tag: '爆款', description: '小分子液态奶，口感如天鹅绒' },
    ],
    popular: [
      { name: '茅台拿铁', tag: '限定', description: '含53度飞天茅台，联名爆款' },
      { name: '生酪拿铁', description: '马斯卡彭奶酪，风味浓郁' },
    ],
    reviewKeywords: ['便宜好喝', '天天9块9', '上班续命', '联名款', '提神'],
    emotionalKeywords: ['便宜', '提神', '天天喝', '打工人必备', '真香'],
    differentiators: ['9.9低价策略', 'APP下单便捷', '联名营销强', '数字化运营'],
    priceRange: '9.9-22元',
    avgRating: '4.5分',
    promotion: '每周9.9元优惠券',
  },
};

// ============================================================
// 烘焙品类
// ============================================================

const BAKERY_BRANDS: Record<string, BrandInfo> = {
  '泸溪河': {
    name: '泸溪河桃酥',
    vibe: '烟火气',
    tagline: '现烤桃酥，记忆中的味道',
    signature: [
      { name: '手工桃酥', tag: '招牌', description: '酥脆掉渣，入口即化，30年老配方' },
      { name: '乳酪蛋黄', tag: '爆款', description: '咸蛋黄+乳酪，中西合璧' },
    ],
    popular: [
      { name: '绿豆冰糕', description: '清爽冰凉，夏日解暑' },
      { name: '肉松小贝', description: '肉松海苔裹满，爆浆口感' },
    ],
    reviewKeywords: ['酥脆', '老字号', '现烤', '性价比', '童年味道'],
    emotionalKeywords: ['回忆杀', '爸妈最爱', '回购', '送长辈首选'],
    differentiators: ['30年老字号', '现烤现做', '桃酥非遗技艺', '传统中式糕点'],
    priceRange: '10-30元',
    avgRating: '4.7分',
  },
};

// ============================================================
// 品牌数据库导出
// ============================================================

export const BRAND_DATABASE: Record<string, Record<string, BrandInfo>> = {
  '奶茶': LEMON_TEA_BRANDS,
  '柠檬茶': LEMON_TEA_BRANDS,
  '火锅': HOTPOT_BRANDS,
  '烤肉': BBQ_BRANDS,
  '咖啡': COFFEE_BRANDS,
  '烘焙': BAKERY_BRANDS,
};

// 根据品类获取所有品牌
export function getBrandsByCategory(category: string): BrandInfo[] {
  const catMap: Record<string, string> = {
    '奶茶': '奶茶',
    '茶饮': '奶茶',
    '柠檬茶': '柠檬茶',
    '火锅': '火锅',
    '串串': '火锅',
    '烤肉': '烤肉',
    '烧烤': '烤肉',
    '咖啡': '咖啡',
    '烘焙': '烘焙',
    '蛋糕': '烘焙',
    '小龙虾': '火锅', // 复用火锅场景
    '面馆': '火锅',   // 复用火锅场景
  };
  const key = catMap[category] || category;
  return Object.values(BRAND_DATABASE[key] || {});
}

// 根据品牌名精确查找
export function findBrand(category: string, brandName: string): BrandInfo | null {
  const brands = BRAND_DATABASE[category] || BRAND_DATABASE['奶茶'];
  const nameLower = brandName.toLowerCase();
  for (const brand of Object.values(brands)) {
    if (
      brand.name.toLowerCase().includes(nameLower) ||
      nameLower.includes(brand.name.toLowerCase())
    ) {
      return brand;
    }
  }
  return null;
}

// 获取同品类参考品牌（用于品牌搜不到时的兜底）
export function getReferenceBrand(category: string): BrandInfo | null {
  const brands = getBrandsByCategory(category);
  if (brands.length === 0) return null;
  // 返回评分最高的品牌作为参考
  return brands.sort((a, b) =>
    parseFloat(b.avgRating || '0') - parseFloat(a.avgRating || '0')
  )[0];
}
