import { NextRequest, NextResponse } from 'next/server';
import {
  findBrand,
  getBrandsByCategory,
  getReferenceBrand,
  type BrandInfo,
} from '@/data/brand-database';

export { type BrandInfo };

// 联网搜索品牌信息（模拟真实场景，实际部署时可接入抖音/小红书/大众点评API）
async function searchBrandOnline(brandName: string, category: string): Promise<Partial<BrandInfo> | null> {
  // 方案A: 接入抖音开放平台品牌搜索API（需申请资质）
  // const douyinRes = await fetch(`https://open.douyin.com/...`, { headers: { 'access-token': '...' } });
  
  // 方案B: 接入大众点评开发者API（需申请资质）
  // const dianpingRes = await fetch(`https://www.dianping.com/api/v1/shop/search?...`);
  
  // 方案C: 接入小红书品牌数据（需申请资质）  
  // const xhsRes = await fetch(`https://ad.xiaohongshu.com/...`);
  
  // 当前实现：返回 null，由本地品牌数据库兜底
  // 如需真实联网，可在此处实现调用逻辑
  return null;
}

// 将搜索结果结构化为 BrandInfo
function buildBrandInfo(raw: Partial<BrandInfo> & { name: string }): BrandInfo {
  return {
    name: raw.name,
    city: raw.city,
    district: raw.district,
    address: raw.address,
    phone: raw.phone,
    tagline: raw.tagline,
    vibe: raw.vibe || '简约',
    signature: raw.signature || [],
    popular: raw.popular || [],
    newProduct: raw.newProduct || [],
    reviewKeywords: raw.reviewKeywords || [],
    emotionalKeywords: raw.emotionalKeywords || [],
    complaintKeywords: raw.complaintKeywords || [],
    differentiators: raw.differentiators || [],
    priceRange: raw.priceRange,
    avgRating: raw.avgRating,
    promotion: raw.promotion,
    discount: raw.discount,
    referenceBrands: raw.referenceBrands,
  };
}

// GET: 查询同品类品牌列表（供用户选择参考）
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  if (!category) {
    return NextResponse.json({ error: '缺少参数: category' }, { status: 400 });
  }

  const brands = getBrandsByCategory(category);
  const reference = getReferenceBrand(category);

  return NextResponse.json({
    success: true,
    category,
    brandCount: brands.length,
    brands: brands.map((b) => ({
      name: b.name,
      tagline: b.tagline,
      vibe: b.vibe,
      signatureProducts: b.signature.map((p) => p.name),
      priceRange: b.priceRange,
      avgRating: b.avgRating,
      differentiators: b.differentiators.slice(0, 2),
    })),
    recommended: reference ? {
      name: reference.name,
      tagline: reference.tagline,
      vibe: reference.vibe,
      priceRange: reference.priceRange,
      avgRating: reference.avgRating,
    } : null,
  });
}

// POST: 搜索指定品牌信息
export async function POST(request: NextRequest) {
  try {
    const { brandName, category } = await request.json();

    if (!brandName || !category) {
      return NextResponse.json(
        { error: '缺少必要参数: brandName, category' },
        { status: 400 }
      );
    }

    const brandNameClean = brandName.trim();
    
    // Step 1: 先从本地数据库精确查找
    let brand: BrandInfo | null = findBrand(category, brandNameClean);

    // Step 2: 如果本地有，标记来源
    let source: 'local' | 'online' | 'reference' = brand ? 'local' : 'online';

    // Step 3: 本地找不到，联网搜索
    if (!brand) {
      const onlineData = await searchBrandOnline(brandNameClean, category);
      if (onlineData) {
        brand = buildBrandInfo({ name: brandNameClean, ...onlineData });
        source = 'online';
      }
    }

    // Step 4: 联网也找不到，使用同品类参考品牌（作为写作参考）
    if (!brand) {
      const refBrand = getReferenceBrand(category);
      if (refBrand) {
        brand = refBrand;
        source = 'reference';
      }
    }

    // Step 5: 完全无数据，返回空结构
    if (!brand) {
      return NextResponse.json({
        success: true,
        found: false,
        source: null,
        message: `未找到"${brandNameClean}"的品牌信息，将使用通用脚本模板。`,
        brand: null,
        referenceBrand: null,
      });
    }

    return NextResponse.json({
      success: true,
      found: source !== 'reference',
      source,
      message: source === 'local'
        ? `已在本地数据库找到"${brand.name}"`
        : source === 'online'
        ? `联网搜索到"${brand.name}"信息`
        : `未找到"${brandNameClean}"，已使用同类参考品牌"${brand.name}"作为脚本生成参考`,
      brand: {
        name: brand.name,
        city: brand.city,
        address: brand.address,
        phone: brand.phone,
        tagline: brand.tagline,
        vibe: brand.vibe,
        signature: brand.signature,
        popular: brand.popular,
        newProduct: brand.newProduct,
        reviewKeywords: brand.reviewKeywords,
        emotionalKeywords: brand.emotionalKeywords,
        differentiators: brand.differentiators,
        priceRange: brand.priceRange,
        avgRating: brand.avgRating,
        promotion: brand.promotion,
        discount: brand.discount,
      },
      // 同时返回参考品牌信息，供 AI 生成时借鉴
      referenceBrand: source === 'reference' ? {
        name: brand.name,
        vibe: brand.vibe,
        signatureProducts: brand.signature.map((p) => p.name),
        differentiators: brand.differentiators,
        priceRange: brand.priceRange,
        avgRating: brand.avgRating,
      } : null,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '未知错误';
    return NextResponse.json({ error: `服务器错误: ${message}` }, { status: 500 });
  }
}
