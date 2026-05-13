// Mock data for Douyin Content Studio

export type TextType = 'script' | 'livestream' | 'recommend' | 'comment';

export type Industry = 'catering' | 'hotel' | 'entertainment';
export type Category = 'hotpot' | 'bbq' | 'cafe' | 'noodle' | 'hotel' | 'ktv' | 'bar' | 'spa';

export interface TextGenerationResult {
  id: string;
  version: string;
  content: string;
  tags: string[];
  wordCount: number;
}

export interface HistoryRecord {
  id: string;
  type: 'text' | 'image' | 'video';
  title: string;
  preview: string;
  createdAt: string;
  status: 'completed' | 'pending';
}

// 会员状态
export const memberStatus = {
  isVip: false,
  freeCredits: 3,
  usedCredits: 0,
  vipExpireDate: null,
};

// 文案类型配置
export const textTypes = [
  {
    value: 'script' as TextType,
    label: '📋 短视频脚本',
    description: '生成15-60秒抖音短视频脚本，含开场、转折、结尾',
    icon: '🎬',
  },
  {
    value: 'livestream' as TextType,
    label: '🎙️ 直播话术',
    description: '生成互动式直播话术脚本，提升观众停留和转化',
    icon: '📺',
  },
  {
    value: 'recommend' as TextType,
    label: '✨ 种草文案',
    description: '生成吸引眼球的种草笔记，突出产品卖点和氛围感',
    icon: '💡',
  },
  {
    value: 'comment' as TextType,
    label: '💬 评论回复',
    description: '批量生成针对常见问题的回复话术，提升互动率',
    icon: '💬',
  },
];

// 行业选项
export const industries = [
  { value: 'catering' as Industry, label: '餐饮美食' },
  { value: 'hotel' as Industry, label: '酒店民宿' },
  { value: 'entertainment' as Industry, label: '休闲娱乐' },
];

// 品类选项
export const categories = [
  { value: 'hotpot' as Category, label: '火锅/串串', industry: 'catering' },
  { value: 'bbq' as Category, label: '烤肉/烧烤', industry: 'catering' },
  { value: 'cafe' as Category, label: '咖啡/茶饮', industry: 'catering' },
  { value: 'noodle' as Category, label: '面馆/小吃', industry: 'catering' },
  { value: 'hotel' as Category, label: '酒店/民宿', industry: 'hotel' },
  { value: 'ktv' as Category, label: 'KTV/酒吧', industry: 'entertainment' },
  { value: 'bar' as Category, label: '清吧/酒馆', industry: 'entertainment' },
  { value: 'spa' as Category, label: '足疗/SPA', industry: 'entertainment' },
];

// Mock 生成结果
export const mockTextResults: Record<string, TextGenerationResult[]> = {
  script: [
    {
      id: 's1',
      version: '版本 A · 剧情型',
      content: `【开场 0-3秒】
镜头对准翻滚的红油锅底，特写蒸汽升腾
配音："在成都，找一家让人上瘾的火锅店，只需要3秒——"

【主体 4-45秒】
老板出镜，端着招牌毛肚："我们店开了12年，靠的就是这口锅底"
切换镜头：鲜毛肚在红汤七上八下，蘸上油碟
特写蘸料碗，配文："油碟才是灵魂"
食客表情镜头：大口吃肉，满脸幸福
字幕弹出："每日新鲜配送 · 拒绝冻品"

【结尾 46-60秒】
老板举杯："欢迎来尝，来了就是朋友"
门店全貌 + 字幕："XX火锅 · 成都玉林店"\n地址：成都武侯区玉林路30号\n电话：028-XXXXXXX`,
      tags: ['剧情型', '情感共鸣', '强转化'],
      wordCount: 186,
    },
    {
      id: 's2',
      version: '版本 B · 探店型',
      content: `【开场 0-5秒】
博主推门进入，画面快切门店门头
同期声："哇，这家店排队也太多了吧！"

【主体 6-50秒】
跟随镜头穿过排队人群，捕捉等位区热闹氛围
点餐环节：特写菜单，突出"双人套餐128元"性价比
后厨展示：明档操作，新鲜食材一目了然
品尝镜头：大口吃毛肚 + 鸭肠，声音带入感强
字幕标注：菜品分量、价格、推荐指数

【结尾 51-60秒】
博主竖起大拇指
字幕 + 配音："本地人推荐 · 回头客超80%"\n门店信息快速闪过`,
      tags: ['探店型', '高性价比', '真实感'],
      wordCount: 162,
    },
    {
      id: 's3',
      version: '版本 C · 福利型',
      content: `【开场 0-3秒】
大字体字幕："XX火锅 · 周年庆福利来啦！"\n配激烈背景音乐

【主体 4-55秒】
字幕快闪：招牌菜优惠价 → 到店礼 → 会员专享
轮播店内实拍图：锅底、招牌菜、环境
数字动画："12年 · 100万+食客 · 4.8星好评"
旁白配音："周年庆期间，招牌菜6.8折，还能免费领甜品！"

【结尾 56-60秒】
门店门头 + 字幕："周年庆限时：X月X日-X月X日"\n行动号召："点击左下角链接 · 立即预约"`,
      tags: ['福利型', '限时促销', '高转化'],
      wordCount: 148,
    },
  ],
  livestream: [
    {
      id: 'l1',
      version: '版本 A · 暖场话术',
      content: `【开播前5分钟】
"欢迎进来的宝宝们！点点关注不迷路，今天直播间福利超级大！"

【开场暖场】
"欢迎 XXX 宝宝进来！今天给大家带来一款我自己都在用的好东西"
"刚进来的宝宝别划走，今天全程都有福利放出来"
"评论区扣个'想要'，等会抽奖的时候我会点名哦"

【产品介绍】
"来来来，给大家看一下这个细节——"
"这一款我们主打的是 XXX，适合 XXX 人群"
"拍了的宝宝记得把尺码打在公屏上，等会给你们发专属优惠券"

【催单环节】
"好了宝宝们，这个库存真的不多了"
"倒计时3分钟，3分钟后恢复原价"
"还没拍的宝宝不要再犹豫了，错过今天要等一年！"`,
      tags: ['暖场型', '互动性强', '适合新手主播'],
      wordCount: 210,
    },
    {
      id: 'l2',
      version: '版本 B · 餐饮专版',
      content: `【开场】
"欢迎宝宝们来到XX火锅直播间！我是你们的老朋友XXX"
"今天直播间专属福利：原价188的双人套餐，今天只要128！还送两份冰粉！"

【产品引入】
"大家看这个锅底，是我们师傅当天现炒的牛油锅底，辣而不燥"
"这个毛肚是我们从成都空运过来的，七上八下烫15秒，口感超级脆"
"喜欢吃辣的直接选这个红油锅底，怕辣的宝宝我们也有鸳鸯锅可以选"

【互动】
"有宝宝问有没有优惠套餐？来，把'套餐'打在公屏上，我给你们上链接"
"有忌口或者过敏的宝宝，下单前一定要看清楚详情页的说明哦"

【收尾】
"好了宝宝们，今天的直播就到这里，记得收货后给个好评"\n"我们下次见，拜拜~"`,
      tags: ['餐饮专版', '产品力强', '高转化'],
      wordCount: 228,
    },
  ],
  recommend: [
    {
      id: 'r1',
      version: '版本 A · 氛围感',
      content: `🔥 在成都！被问了一百遍的火锅店！

每次路过这家店都在排队，终于在一个工作日下午4点去吃了，结果还是排了20分钟😭

📍 店名：XX火锅（玉林路店）
💰 人均：80-100元
⭐ 推荐指数：⭐⭐⭐⭐⭐

【必点清单🗒️】

1️⃣ 招牌毛肚
服务员会帮你涮，七上八下，15秒刚刚好。入口脆到怀疑人生！

2️⃣ 现切牛肉
超大一片，下锅5秒就熟，蘸上特制干碟绝了

3️⃣ 冰汤圆
解辣神器！醪糟味超浓，吃完辣来一口，整个人都升华了

🔥 锅底：
中辣刚好，不会吃完胃疼。辣度可以免费调，很人性化～

📷 拍照建议：
门口的红灯笼超级出片！穿浅色衣服去，随手一拍就是大片感

⚠️ 小tips：
👉 提前在抖音上买套餐，比到店便宜30%
👉 晚上6点后人很多，建议错峰
👉 停车不方便，建议打车或者停路边停车楼

总的来说：下次还来！已经带了三波朋友去吃，都说好吃！闭眼冲！💪`,
      tags: ['氛围感', '真实体验', '高赞模板'],
      wordCount: 285,
    },
    {
      id: 'r2',
      version: '版本 B · 福利导向',
      content: `📢 成都火锅党集合！这家我回购了8次的店，今天必须给你们安排上！

🔥 XX火锅 · 周年庆限时活动 🔥

⏰ 活动时间：5月18日-5月31日
💰 福利内容：
  ✅ 双人套餐：原价188 → 128（省60！）
  ✅ 四人套餐：原价368 → 268（省100！）
  ✅ 会员充值：充300送50，充500送100
  ✅ 到店礼：每人送一份手工冰粉

【个人回购清单 🛒】
1. 招牌毛肚 ⭐必点
2. 鲜切牛肉 ⭐必点
3. 鸭肠
4. 手工豆皮

👉 去之前先在抖音搜"XX火锅旗舰店"领券，到店直接用！

人均80+，吃到撑！成都的火锅脑袋们，这个羊毛必须薅！🐛`,
      tags: ['福利型', '活动引流', '高转化'],
      wordCount: 198,
    },
  ],
  comment: [
    {
      id: 'c1',
      version: '版本 A · 通用回复',
      content: `【常见问题回复库】

🙋 问：需要提前预约吗？
答：您好，建议您提前通过抖音/美团预约哦，周末和节假日人流量较大，当天空降可能需要等位～

🙋 问：有儿童座椅吗？
答：有的！我们提供儿童座椅和儿童餐具，带小朋友来也没问题👶

🙋 问：可以自带酒水吗？
答：店内酒水种类丰富且价格与超市持平，建议直接店内购买～如果确有需要自带，收取少量开瓶费

🙋 问：有停车场吗？
答：门店旁边有公共停车场，停车方便。或者您也可以停在对面商场的地下车库，步行2分钟即到

🙋 问：能开发票吗？
答：可以的！消费后联系前台或服务员开具发票，纸质/电子均可

🙋 问：有没有团购套餐？
答：有的！抖音、美团、大众点评都有套餐，比单点更划算，点击左下角链接查看~`,
      tags: ['通用型', '覆盖高频', '可复制使用'],
      wordCount: 256,
    },
    {
      id: 'c2',
      version: '版本 B · 差评挽回',
      content: `【差评回复话术】

⭐⭐ 服务投诉类：
"亲爱的顾客您好，非常抱歉给您带来了不好的体验，我们非常重视每一位顾客的用餐感受。已将您的情况反馈给门店负责人，后续会加强培训。您的宝贵意见是我们进步的动力，期待下次为您带来更好的服务！"

⭐⭐⭐⭐ 等待时间过长类：
"感谢您的耐心等待！节假日人流量确实比较大，我们深感抱歉。目前门店已实行预约制，建议下次提前预约，可以大幅缩短等位时间。我们也会持续优化流程，争取让您下次等待时间减半！"

⭐⭐⭐⭐⭐ 菜品投诉类：
"非常抱歉您对菜品不满意，我们始终坚持食材新鲜、用料实在。对于您提到的具体问题，我们已记录并反馈给厨师长，会在第一时间改进。真诚邀请您再次光临，我们准备了诚意满满的专属优惠，感谢您的支持！"`,
      tags: ['差评挽回', '高情商', '品牌形象'],
      wordCount: 308,
    },
  ],
};

// 历史记录
export const historyRecords: HistoryRecord[] = [
  { id: 'h1', type: 'text', title: '火锅店周年庆短视频脚本', preview: '【开场】镜头对准翻滚的红油锅底...', createdAt: '2026-05-12 14:23', status: 'completed' },
  { id: 'h2', type: 'text', title: '奶茶店新品推广种草文', preview: '在成都！这家奶茶店新品也太绝了！', createdAt: '2026-05-11 10:05', status: 'completed' },
  { id: 'h3', type: 'text', title: 'KTV直播话术', preview: '【开场】欢迎宝宝们来到XX KTV直播间...', createdAt: '2026-05-10 16:40', status: 'completed' },
  { id: 'h4', type: 'image', title: '烧烤店618活动海报', preview: '618大促模板', createdAt: '2026-05-09 09:15', status: 'completed' },
  { id: 'h5', type: 'text', title: '民宿评论区回复话术', preview: '【常见问题回复库】...', createdAt: '2026-05-08 11:30', status: 'completed' },
];

// 图片模板数据
export const imageTemplates = [
  { id: 't1', title: '618大促主视觉', category: '促销活动', style: '促销风', preview: '🔥 618 大促 · 全场5折起！' },
  { id: 't2', title: '新品上市海报', category: '新品发布', style: '简约风', preview: '✨ 新品上市 · 限时尝鲜' },
  { id: 't3', title: '节假日活动横幅', category: '节日营销', style: '节日风', preview: '🎉 端午佳节 · 粽情回馈' },
  { id: 't4', title: '店铺环境展示', category: '品牌宣传', style: '品质风', preview: '🏠 舒适环境 · 品质享受' },
  { id: 't5', title: '菜单/套餐推广', category: '套餐推广', style: '性价比', preview: '💰 超值套餐 · 性价比之选' },
  { id: 't6', title: '直播预告封面', category: '直播物料', style: '吸睛风', preview: '📺 今晚直播 · 福利不停' },
  { id: 't7', title: '会员招募海报', category: '会员营销', style: '会员专享', preview: '👑 会员专享 · 尊享权益' },
  { id: 't8', title: '周年庆主视觉', category: '周年庆典', style: '庆典风', preview: '🎂 12周年 · 感恩回馈' },
];

// 视频流程步骤
export const videoSteps = [
  {
    step: 1,
    title: '输入创作主题',
    description: '描述你的视频需求，如：推广火锅店新品毛肚，时长30秒',
    icon: '✍️',
    status: 'pending',
  },
  {
    step: 2,
    title: 'AI 生成脚本',
    description: '系统根据你的描述，自动生成2-3个可选脚本方案',
    icon: '🤖',
    status: 'pending',
  },
  {
    step: 3,
    title: '确认并优化',
    description: '选择喜欢的脚本版本，可在线编辑微调',
    icon: '✅',
    status: 'pending',
  },
  {
    step: 4,
    title: 'AI 生成视频',
    description: '一键生成配音+字幕+画面素材的完整视频',
    icon: '🎬',
    status: 'pending',
  },
];
