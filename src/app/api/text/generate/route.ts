import { NextRequest, NextResponse } from 'next/server';
import {
  findBrand,
  getBrandsByCategory,
  getReferenceBrand,
  type BrandInfo,
} from '@/data/brand-database';

// ============================================================
// 联网搜索品牌信息（预留扩展接口）
// ============================================================
async function searchBrandOnline(brandName: string, category: string): Promise<Partial<BrandInfo> | null> {
  // 预留接入点：实际部署时接入以下任一平台API
  // 1. 抖音开放平台品牌搜索 API（需申请资质）
  // 2. 大众点评商家搜索 API（需申请资质）
  // 3. 小红书品牌数据 API（需申请资质）
  // 当前返回 null，由本地品牌数据库兜底
  return null;
}

// ============================================================
// 品类 × 文案类型 → 脚本结构定义
// ============================================================

interface ScriptSection {
  title: string;
  prompt: string;  // AI 生成提示词片段
}

interface ScriptTemplate {
  hookVariants: string[];   // 开场钩子变体（3-5个）
  bodySections: ScriptSection[];
  endingVariants: string[];
}

// 脚本模板库：16行业 × 4种文案类型
const SCRIPT_TEMPLATES: Record<string, Record<string, ScriptTemplate>> = {
  '奶茶': {
    script: {
      hookVariants: [
        '这杯奶茶，竟然会「拉丝」？！',
        '一口下去，隔壁桌都在问我链接……',
        '这杯奶茶治好了我的选择困难症！',
        'OMG！这杯奶茶好喝到我想哭……',
        '姐妹们！这杯奶茶我不允许你们不知道！',
      ],
      bodySections: [
        {
          title: '产品特写',
          prompt: `手持奶茶，介绍{product}：外观（颜色/杯型/奶盖状态）+ 口感描述（香气/甜度/茶感）+ 制作过程（若有亮点：手打/现切/现泡）`,
        },
        {
          title: '场景共鸣',
          prompt: `营造饮用场景：什么心情喝（下午茶/上班续命/闺蜜分享）+ 搭配什么吃（甜品/小食）+ 适合什么季节（清爽/温暖）`,
        },
        {
          title: '节奏剪辑',
          prompt: `画面节奏：慢镜头展示{product}外观 → 特写吸管戳破封口膜 → 奶盖/果肉拉丝特写 → 大口饮用表情 → 门店/新品海报收尾`,
        },
      ],
      endingVariants: [
        '{brand}新品买一送一，戳图下单 →',
        '{brand}·今天第几杯了？评论区告诉我！',
        '关注{brand}，解锁更多神仙喝法 👉',
        '{promotion} 限时抢，手慢无！',
      ],
    },
    livestream: {
      hookVariants: [
        '刚进来的宝宝别划走！今天直播间这杯奶茶，我赌你没见过！',
        '欢迎进来的宝宝！今天给你们的福利，我都不敢播……',
        '这杯奶茶今天直播间专属价，错过我真的会哭！',
      ],
      bodySections: [
        {
          title: '产品介绍',
          prompt: `今天主推{product}：门店招牌第1名，用的是{key_material}，口感{flavor_profile}，适合{target}人群`,
        },
        {
          title: '互动话术',
          prompt: `引导互动：「觉得好喝的扣1」「想要优惠的扣666」「把这杯奶茶打在公屏上，我给你们上链接」`,
        },
        {
          title: '促单话术',
          prompt: `限时限量：「这杯今天直播间专属价，原价{original_price}，今天直播价{直播价}，仅限今天！还有3分钟恢复原价！」`,
        },
      ],
      endingVariants: [
        '还没拍的宝宝赶紧下手，卖完即止！下次见～',
        '关注主播，每天一杯好喝不贵的奶茶！拜拜～',
      ],
    },
    recommend: {
      hookVariants: [
        '在{city}！被问了100遍的奶茶店……',
        '喝完这杯奶茶，我直接把其他家拉黑了……',
        '{city}奶茶党集合！这家我不允许你们不知道！',
      ],
      bodySections: [
        {
          title: '个人体验',
          prompt: `真实饮用感受：外观评价（拍照技巧建议）+ 口味描述（分层口感/甜度/茶感）+ 和别家对比（差异化亮点）+ 个人评价`,
        },
        {
          title: '产品推荐',
          prompt: `必点清单：{signature_products} + 个人隐藏菜单（若有）+ 避雷提示（若有不好喝的）`,
        },
        {
          title: '实用攻略',
          prompt: `到店攻略：最佳点单方式 + 甜度/冰度建议 + 人均价格 + 拍照出片技巧 + 营业时间`,
        },
      ],
      endingVariants: [
        '总体：还会回购！已经带了3波朋友去，都说绝！',
        '总之：{brand}我给4.8颗星，扣的0.2给排队太久……',
      ],
    },
    comment: {
      hookVariants: [],
      bodySections: [],
      endingVariants: [],
    },
  },
  '柠檬茶': {
    script: {
      hookVariants: [
        '这杯柠檬茶，喝完我「上头」了一整天……',
        '广东香水柠檬做的柠檬茶，你们喝过吗？',
        '柠檬茶我只喝「手打」的，你们呢？',
        '这杯柠檬茶太解腻了，我一口气喝了3杯……',
        '谁发明的陈皮柠檬茶，我谢谢他！',
      ],
      bodySections: [
        {
          title: '产品特写',
          prompt: `手打柠檬茶展示：柠檬切片特写 + 爆锤出汁过程（慢镜头） + 茶汤倒入澄清分层 + 冰块入杯清脆声 + 吸管戳破封口膜`,
        },
        {
          title: '口感描述',
          prompt: `详细口感：酸甜比例（解腻不酸牙）+ 香气层次（柠檬香+茶香）+ 喉韵回甘 + 冰凉解暑程度 + {differentiator}亮点`,
        },
        {
          title: '节奏剪辑',
          prompt: `画面节奏：柠檬爆锤慢镜头 → 茶汤倒入分层 → 冰块入杯清脆声 → 大口饮用满足表情 → 朋友碰杯场景 → 新品海报`,
        },
      ],
      endingVariants: [
        '{brand}·手打柠檬茶，夏日续命神器！戳图下单 →',
        '关注{brand}，解锁更多神仙喝法！{promotion}',
        '这杯柠檬茶，戒不掉，根本戒不掉……',
      ],
    },
    livestream: {
      hookVariants: [
        '进来的宝宝！今天给你们炸一个夏日续命神器——手打柠檬茶！',
        '夏天就要喝柠檬茶！这杯我一个人能喝三杯！',
      ],
      bodySections: [
        {
          title: '产品引入',
          prompt: `主推{product}：用的是广东香水柠檬，不是普通黄柠檬，柠檬香气浓郁3倍，茶底是{tea_base}，解腻又解渴`,
        },
        {
          title: '对比话术',
          prompt: `和别家对比：我们家柠檬茶用的是{key_material}，每杯现切2颗柠檬现打，别家是用浓缩液兑的，口感完全不一样`,
        },
        {
          title: '互动与促单',
          prompt: `引导互动+促单：「喜欢酸的扣1」「想要清凉的扣2」「好，想喝的宝宝把柠檬茶打在公屏上，链接马上来！」`,
        },
      ],
      endingVariants: [
        '今天这杯柠檬茶我强烈推荐给大家！拜拜～',
        '关注主播，下期教你们在家做手打柠檬茶！',
      ],
    },
    recommend: {
      hookVariants: [
        '夏天到了！这杯手打柠檬茶我按头推荐！',
        '在{city}喝到了人生柠檬茶！这家店我服了……',
      ],
      bodySections: [
        {
          title: '种草体验',
          prompt: `真实体验：柠檬茶外观（杯型/颜色/分层）+ 口感（酸度/甜度/解腻程度/茶感）+ {differentiator}亮点 + 和其他柠檬茶对比`,
        },
        {
          title: '推荐菜单',
          prompt: `必点推荐：{signature_products} + 个人口味加点建议 + 踩雷提醒（若有）`,
        },
        {
          title: '实用信息',
          prompt: `实用信息：人均价格 + 最佳饮用时间（出杯即饮）+ 冰度甜度建议 + 拍照技巧`,
        },
      ],
      endingVariants: [
        '总之：柠檬茶脑袋直接冲！好喝不贵，解腻神器！',
        '总体推荐指数：⭐⭐⭐⭐⭐，满分选手！',
      ],
    },
    comment: {
      hookVariants: [],
      bodySections: [],
      endingVariants: [],
    },
  },
  // 火锅品类模板（框架同奶茶，变量替换）
  '火锅': {
    script: {
      hookVariants: [
        '这锅红油翻滚的声音，我馋了整整一年！',
        '在{city}吃火锅，我只认这家！',
        '这口锅底，让我一口穿越到成都……',
        '这顿火锅吃完，我直接哭了……',
        '姐妹们！这家火锅我吃了12年还没腻！',
      ],
      bodySections: [
        {
          title: '产品特写',
          prompt: `{signature_product}特写：{product_desc} + 沸腾红油/清汤翻滚慢镜头 + 食材入锅瞬间 + 七上八下/涮煮时间标注 + 蘸料碟特写`,
        },
        {
          title: '场景共鸣',
          prompt: `火锅场景：多人聚餐氛围（朋友碰杯/欢笑）+ 烟火气氛围（热气升腾/热闹声）+ {differentiator}亮点`,
        },
        {
          title: '节奏剪辑',
          prompt: `画面节奏：红油翻滚慢镜头 → 食材特写 → 蘸料碗 → 食客大口吃表情 → 排队盛况 → 门店招牌`,
        },
      ],
      endingVariants: [
        '去{brand}吃火锅，请客倍有面！点击下方链接订座 →',
        '{brand}{周年庆}限时{discount}，今晚就冲！',
        '关注{brand}，带你吃遍{city}地道火锅！',
      ],
    },
    livestream: {
      hookVariants: [
        '欢迎进来的宝宝！今天给你们炸一个我老家{city}的超火火锅！',
        '刚进来的别走！今天直播间专属福利，原价188的双人套餐……',
      ],
      bodySections: [
        {
          title: '产品介绍',
          prompt: `今天主推：{signature_product}，用的是{key_material}，{product_desc}，门店开了{years}年，回头客超过{repeat_rate}`,
        },
        {
          title: '互动话术',
          prompt: `引导互动：「能吃辣的扣1」「怕辣的扣2」「喜欢吃毛肚的扣666」+ 根据弹幕调整推荐`,
        },
        {
          title: '促单话术',
          prompt: `直播间专属优惠：原价{original_price} → 直播价{直播价} + 限时赠品（冰粉/小菜）+ 仅限今天！`,
        },
      ],
      endingVariants: [
        '好了宝宝们，今天直播就到这里，记得收货给好评！拜拜～',
      ],
    },
    recommend: {
      hookVariants: [
        '在{city}！被问了100遍的火锅店！',
        '吃遍{city}所有火锅，这家我服了……',
      ],
      bodySections: [
        {
          title: '种草体验',
          prompt: `真实体验：{signature_product}详细评价（口感/分量/性价比）+ {differentiator}亮点 + 环境/服务评价`,
        },
        {
          title: '推荐菜单',
          prompt: `必点清单：{signature_products} + 隐藏吃法（若有）+ 人均价格 + 避雷提示`,
        },
        {
          title: '实用攻略',
          prompt: `实用攻略：提前预约技巧 + 最佳就餐时间 + 停车信息 + 拍照出片攻略 + 优惠购买渠道`,
        },
      ],
      endingVariants: [
        '总之：还会回购！已经带了3波朋友去，都说好吃！闭眼冲！',
      ],
    },
    comment: {
      hookVariants: [],
      bodySections: [],
      endingVariants: [],
    },
  },
};

// 获取默认通用模板（品牌库找不到时的兜底）
function getGenericTemplate(category: string, textType: string): ScriptTemplate | null {
  // 回退到 VIDEO_SCRIPTS 中定义的品类
  const fallback: Record<string, ScriptTemplate> = {
    '小龙虾': {
      hookVariants: ['隔壁桌点了三盆小龙虾，我看了一眼，直接馋哭了……'],
      bodySections: [
        { title: '产品特写', prompt: '小龙虾特写：掰开虾头、虾黄满溢、蒜蓉/麻辣双重暴击' },
        { title: '场景共鸣', prompt: '啤酒碰杯、朋友大快朵颐、夜市场景' },
        { title: '节奏剪辑', prompt: '快剪+激昂鼓点，虾壳堆积营造吃到就是赚' },
      ],
      endingVariants: ['{brand}·买三斤送一斤，今晚就冲！'],
    },
    '快捷': {
      hookVariants: ['19块9，堡+薯条+可乐全带走？这也太划算了！'],
      bodySections: [
        { title: '产品特写', prompt: '套餐横切面展示：肉饼厚实、薯条金黄、可乐冰凉' },
        { title: '场景共鸣', prompt: '干净明亮门店、快速出餐、上班族刚需' },
        { title: '节奏剪辑', prompt: '快节奏剪辑+电子音乐，30秒完整用餐体验' },
      ],
      endingVariants: ['{brand}·附近门店导航，限时特惠！'],
    },
  };
  return fallback[category] || null;
}

// ============================================================
// 品牌信息填充脚本模板
// ============================================================

interface FillResult {
  script: string;
  brandInfo: Partial<BrandInfo>;
  source: string;
}

function fillTemplate(
  template: ScriptTemplate,
  brand: BrandInfo,
  topic: string,
  source: string
): FillResult {
  // 随机选择钩子（避免每次重复）
  const hook = template.hookVariants.length > 0
    ? template.hookVariants[Math.floor(Math.random() * template.hookVariants.length)]
    : '这家店的好东西，忍不住要分享给你们！';

  // 填充品牌变量
  const vars = {
    brand: brand.name,
    city: brand.city || '本地',
    district: brand.district || '',
    address: brand.address || '',
    tagline: brand.tagline || '',
    vibe: brand.vibe || '',
    priceRange: brand.priceRange || '',
    avgRating: brand.avgRating || '',
    promotion: brand.promotion || '',
    discount: brand.discount || '',
    // 产品相关
    signature_product: brand.signature[0]?.name || '招牌产品',
    product_desc: brand.signature[0]?.description || '',
    signature_products: brand.signature.map((p) => p.name).join('、') || '招牌产品',
    key_material: brand.differentiators[0] || '优质食材',
    differentiator: brand.differentiators.slice(0, 2).join('、') || '',
    // 情感词
    review_keywords: brand.reviewKeywords.slice(0, 3).join('、') || '好喝',
    emotional_keywords: brand.emotionalKeywords[0] || '回购',
    // 主题
    topic: topic || '',
  };

  // 替换变量
  function replace(text: string): string {
    return text
      .replace(/\{brand\}/g, vars.brand)
      .replace(/\{city\}/g, vars.city)
      .replace(/\{district\}/g, vars.district)
      .replace(/\{address\}/g, vars.address)
      .replace(/\{tagline\}/g, vars.tagline)
      .replace(/\{vibe\}/g, vars.vibe)
      .replace(/\{priceRange\}/g, vars.priceRange)
      .replace(/\{avgRating\}/g, vars.avgRating)
      .replace(/\{promotion\}/g, vars.promotion)
      .replace(/\{discount\}/g, vars.discount)
      .replace(/\{signature_product\}/g, vars.signature_product)
      .replace(/\{product_desc\}/g, vars.product_desc)
      .replace(/\{signature_products\}/g, vars.signature_products)
      .replace(/\{key_material\}/g, vars.key_material)
      .replace(/\{differentiator\}/g, vars.differentiator)
      .replace(/\{review_keywords\}/g, vars.review_keywords)
      .replace(/\{emotional_keywords\}/g, vars.emotional_keywords)
      .replace(/\{topic\}/g, vars.topic);
  }

  // 拼接主体内容
  const bodyContent = template.bodySections
    .map((section) => {
      const filledContent = replace(section.prompt);
      return `【${section.title}】\n${filledContent}`;
    })
    .join('\n\n');

  // 随机选择结尾
  const ending = template.endingVariants.length > 0
    ? template.endingVariants[Math.floor(Math.random() * template.endingVariants.length)]
    : `关注{brand}，更多优惠戳店铺主页 →`;

  const finalHook = replace(hook);
  const finalEnding = replace(ending);

  const script = `【开场 0-3秒】\n${finalHook}\n\n${bodyContent}\n\n【结尾】\n${finalEnding}`;

  return {
    script,
    brandInfo: {
      name: brand.name,
      tagline: brand.tagline,
      vibe: brand.vibe,
      signature: brand.signature,
      differentiators: brand.differentiators,
      reviewKeywords: brand.reviewKeywords,
      emotionalKeywords: brand.emotionalKeywords,
    },
    source,
  };
}

// ============================================================
// 搜索品牌（优先本地 → 联网 → 参考品牌兜底）
// ============================================================

async function resolveBrand(
  brandName: string,
  category: string
): Promise<{ brand: BrandInfo; source: 'local' | 'online' | 'reference' }> {
  // Step 1: 本地数据库
  let brand = findBrand(category, brandName);
  if (brand) return { brand, source: 'local' };

  // Step 2: 联网搜索
  const onlineData = await searchBrandOnline(brandName, category);
  if (onlineData) {
    const built: BrandInfo = {
      name: brandName,
      vibe: '简约',
      tagline: '',
      signature: [],
      popular: [],
      newProduct: [],
      reviewKeywords: [],
      emotionalKeywords: [],
      differentiators: [],
      ...onlineData,
    };
    return { brand: built, source: 'online' };
  }

  // Step 3: 参考品牌兜底
  const ref = getReferenceBrand(category);
  if (ref) return { brand: ref, source: 'reference' };

  // Step 4: 完全无数据，返回最小结构
  return {
    brand: {
      name: brandName,
      vibe: '简约',
      tagline: '',
      signature: [],
      popular: [],
      newProduct: [],
      reviewKeywords: [],
      emotionalKeywords: [],
      differentiators: [],
    },
    source: 'reference',
  };
}

// ============================================================
// 主 API 入口
// ============================================================

export async function POST(request: NextRequest) {
  try {
    const {
      textType = 'script',
      industry,
      category,
      brandName,
      topic,
      versionCount = 3,
    } = await request.json();

    if (!industry || !category) {
      return NextResponse.json(
        { error: '缺少必要参数: industry, category' },
        { status: 400 }
      );
    }

    // 搜索品牌信息
    const { brand, source } = await resolveBrand(brandName || '', category);

    // 获取品类对应的文案模板
    const categoryTemplate = SCRIPT_TEMPLATES[category]?.[textType]
      || getGenericTemplate(category, textType);

    if (!categoryTemplate) {
      // 完全通用模板兜底
      const genericScript = `【开场 0-3秒】
${topic || '这家店的好东西，忍不住要分享！'}
【主体】
${topic || '产品/服务特色'}
【结尾】
关注${brand.name || '我们'}，更多优惠戳店铺主页 →`;
      return NextResponse.json({
        success: true,
        brandSource: source,
        brand: {
          name: brand.name,
          vibe: brand.vibe,
        },
        versions: [
          {
            id: 'generic-1',
            version: '通用版',
            content: genericScript,
            tags: ['通用版', '基础模板'],
            wordCount: genericScript.length,
          },
        ],
      });
    }

    // 生成多个版本（随机种子不同）
    const versions = Array.from({ length: Math.min(versionCount, 3) }, (_, i) => {
      const { script, brandInfo } = fillTemplate(
        categoryTemplate,
        brand,
        topic || '',
        source
      );
      return {
        id: `brand-${source}-${i + 1}`,
        version: `版本 ${String.fromCharCode(65 + i)} · ${source === 'local' ? '品牌定制' : source === 'online' ? '联网匹配' : '品类参考'}`,
        content: script,
        tags: [
          source === 'local' ? '品牌定制' : source === 'online' ? '联网匹配' : '品类参考',
          brand.vibe,
          brand.differentiators[0] || '',
        ].filter(Boolean),
        wordCount: script.length,
        brandInfo,
      };
    });

    return NextResponse.json({
      success: true,
      brandSource: source,
      sourceMessage:
        source === 'local'
          ? `已使用"${brand.name}"的品牌信息定制脚本`
          : source === 'online'
          ? `联网搜索到"${brand.name}"，已生成品牌定制脚本`
          : `未找到"${brandName}"，已参考同类优秀品牌"${brand.name}"生成脚本`,
      brand: {
        name: brand.name,
        tagline: brand.tagline,
        vibe: brand.vibe,
        signature: brand.signature,
        popular: brand.popular,
        differentiators: brand.differentiators,
        reviewKeywords: brand.reviewKeywords,
        emotionalKeywords: brand.emotionalKeywords,
        priceRange: brand.priceRange,
        avgRating: brand.avgRating,
        promotion: brand.promotion,
      },
      versions,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '未知错误';
    return NextResponse.json({ error: `服务器错误: ${message}` }, { status: 500 });
  }
}
