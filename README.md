# 抖店内容工坊

面向抖音生活服务商家的 SaaS 内容创作平台。

## 功能模块

- ✍️ 文案创作（免费）：脚本、直播话术、种草文、评论回复
- 🖼️ 图片设计（付费）：商品套图、营销海报、店铺装修图（接入豆包跃创AI）
- 🎬 短视频（付费）：脚本→AI生成完整视频（接入豆包跃创AI）
- 📺 直播物料（付费）：直播间背景、贴片、预热视频

## 快速部署

\`\`\`bash
npm install
npm run build
npm start
\`\`\`

## 环境变量

创建 \`.env.local\` 文件：

\`\`\`
DOUBO_API_KEY=你的火山引擎API密钥
\`\`\`

## 技术栈

Next.js 16 + Tailwind CSS + shadcn/ui + TypeScript
