# 抖店内容工坊 · 图片生成提示词模板库

> **版本：** v1.0 | **适用平台：** Midjourney · Stable Diffusion · 即梦（中文）  
> **面向商家类型：** 餐饮 / 酒旅 / 休闲娱乐 抖音生活服务中小商家  
> **使用说明：** 每套模板按「主题标签 → 主体描述 → 环境光线 → 风格参考 → 技术参数」五段式结构编写，可直接复制到对应平台使用。

---

## 目录

- [使用说明](#使用说明)
- [一、餐饮行业](#一餐饮行业)
  - [1.1 火锅](#11-火锅)
  - [1.2 烧烤](#12-烧烤)
  - [1.3 奶茶](#13-奶茶)
  - [1.4 快餐](#14-快餐)
  - [1.5 烘焙](#15-烘焙)
  - [1.6 小龙虾](#16-小龙虾)
  - [1.7 海鲜](#17-海鲜)
  - [1.8 自助餐](#18-自助餐)
  - [1.9 面馆](#19-面馆)
  - [1.10 小吃](#110-小吃)
- [二、酒旅行业](#二酒旅行业)
  - [2.1 酒店](#21-酒店)
  - [2.2 民宿](#22-民宿)
  - [2.3 景区](#23-景区)
  - [2.4 旅行社](#24-旅行社)
- [三、休闲娱乐行业](#三休闲娱乐行业)
  - [3.1 美容院](#31-美容院)
  - [3.2 健身房](#32-健身房)
  - [3.3 KTV](#33-ktv)
  - [3.4 棋牌](#34-棋牌)
  - [3.5 电影院](#35-电影院)
  - [3.6 亲子](#36-亲子)
  - [3.7 足疗按摩](#37-足疗按摩)
- [四、平台适配速查](#四平台适配速查)
- [五、通用优化技巧](#五通用优化技巧)

---

## 使用说明

### 模板结构说明

每套模板包含以下字段：

| 字段 | 说明 |
|------|------|
| **主题标签** | `#标签1 #标签2` 格式，便于商家按标签检索 |
| **主体描述** | 画面核心主体，精确到材质、形态、状态 |
| **环境光线** | 光位、色温、氛围描述，摄影术语优先 |
| **风格参考** | 视觉风格关键词，可叠加 |
| **技术参数** | 构图比例、景深、视角、输出尺寸建议 |

### 平台差异速查

| 平台 | 语法特点 | 权重语法 | 负面提示词 |
|------|----------|----------|------------|
| **Midjourney** | 简洁意象，逗号分隔 | `--iw 1.5` | `--no` |
| **Stable Diffusion** | 长句可用，逗号/自然语言均可 | `(word:1.3)` | `Negative prompt:` |
| **即梦（中文）** | 中文描述效果最佳，可中英混合 | 中文化权重如 `(红色:1.2)` | 负面词输入框 |

> 💡 **通用原则：** 平台越依赖短词（Midjourney），越要用精准名词；平台越理解长句（即梦），越可以自然描述。不要在一个提示词里同时堆砌所有形容词——精准的 5 个词优于模糊的 20 个词。

---

# 一、餐饮行业

---

## 1.1 火锅

### 🖼️ 商品主图

#### 模板 C1-Hotpot-M1【经典红油锅底特写】

**主题标签：** `#火锅 #红油锅底 #商品主图 #外卖主图 #大众点评`

**主体描述：**
一锅沸腾的红油牛油火锅，汤面翻滚着辣椒段、花椒粒、蒜瓣，油光红亮，表面浮着一层鲜红的辣椒油，热气腾腾，中心有蒸汽上升，锅边有毛肚片、鸭肠、牛肉卷微微浸入汤中，背景虚化。

**环境光线：**
顶光（Top Lighting）打亮汤面油光，侧逆光勾勒蒸汽轮廓，暖色调（色温 3200K），背景为深色炭火纹理的桌面，光晕营造"辣"的视觉温度感。

**风格参考：**
美食摄影写实风格（Food Photography Realistic），高饱和度，Rembrandt 用光，明暗对比强烈，类似《风味人间》纪录片质感。

**技术参数：**

```
# Midjourney
Hot pot with boiling red oil soup, Sichuan chili peppers and Sichuan peppercorns floating,
steaming, top lighting on glossy oil surface, side backlight creating steam silhouettes,
shallow depth of field, background bokeh dark stone table, food photography,
hyperrealistic, 8K --ar 1:1 --style photo --v 6 --s 250 --q 2

# Stable Diffusion
(boiling red oil hot pot:1.4), (Sichuan peppercorns and red chilies floating on surface:1.2),
steaming hot soup, glossy oil sheen, top-down lighting, side backlight, shallow depth of field,
dark stone table background bokeh, food photography style, hyperrealistic, 8K
Negative: blurry, overexposed, cartoon, low quality

# 即梦（中文）
沸腾的红油牛油火锅，汤面翻滚着辣椒段和花椒粒，油光红亮，表面浮着一层鲜红辣椒油，
热气腾腾上升，一侧有毛肚片和牛肉卷浸入汤中，浅景深，背景暗色石桌虚化，
顶光打亮汤面油光，暖色调，美食摄影风格，超写实感，高清细节
```

---

#### 模板 C1-Hotpot-M2【鸳鸯锅阴阳双汤】

**主题标签：** `#鸳鸯锅 #红油清汤 #商品主图 #双人餐 #聚餐`

**主体描述：**
鸟瞰视角（Overhead Shot），一口太极形状的鸳鸯锅分格，左侧红油翻滚右侧菌汤清澈，中间隔板为S形太极图案，锅边整齐摆放毛肚、黄喉、嫩牛肉片、蔬菜拼盘，木质/大理石桌面，背景为暖光火锅店环境。

**环境光线：**
顶置柔光箱（Overhead Softbox），45° 入射角，无强烈阴影，色温偏暖 3500K，营造家庭聚餐温馨感，背景轻微虚化（Bokeh），有火锅蒸汽感但不过度模糊主体。

**风格参考：**
现代美食摄影（Modern Food Photography），Apple、肉超视频截图感，强调色彩对比（红 vs 清澈白/菌汤黄），干净明亮。

**技术参数：**

```
# Midjourney
Overhead shot of a split hot pot (yinyang style), left side with red spicy oil boiling,
right side with clear mushroom soup, scattered garnishes around the pot including pork slices,
beef, bok choy on wooden table, steam rising, overhead softbox lighting,
warm tone 3500K, shallow depth of field background bokeh, modern food photography,
clean bright aesthetic --ar 4:3 --style photo --v 6

# Stable Diffusion
(overhead view yinyang split hot pot:1.3), (red spicy oil on left side:1.1),
(clear mushroom soup on right:1.0), bamboo leaves, pork slices, bok choy around the pot,
wooden table, overhead softbox lighting, warm 3500K, shallow depth of field,
modern food photography, bright clean aesthetic, 8K
Negative: dark image, cluttered, messy background

# 即梦（中文）
鸟瞰视角下的太极鸳鸯火锅，左侧红油翻滚右侧菌汤清澈，锅边摆放整齐的毛肚、
黄喉、嫩牛肉片和蔬菜拼盘，木质桌面，暖色调，顶置柔光照明，浅景深，
背景虚化，现代美食摄影风格，画面明亮干净，超写实美食摄影质感
```

---

#### 模板 C1-Hotpot-M3【蘸料碗 + 食材组合摆盘】

**主题标签：** `#火锅蘸料 #油碟 #食材摆盘 #套餐图 #外卖展示`

**主体描述：**
平视视角（Eye-level），一排三个小蘸料碗：香油蒜泥碟、芝麻酱腐乳碟、干辣椒面碟，旁边配毛肚、鸭血、虾滑球、黄喉丝，置于黑色不反光背景，蘸料表面有细微油光，水珠凝结在冷盘边缘（冷热对比增加食欲感）。

**环境光线：**
双灯布光（Two-light Setup）：主灯 45° 侧光制造高光点，次灯对面补光降低阴影，色温 4000K（中性偏暖），背景为纯黑或深灰吸光布，无反光。

**风格参考：**
Studio Food Photography，杂志《食欲》风格，食材色彩饱和，蘸料层次分明，强调"香气可闻"的视觉暗示。

**技术参数：**

```
# Midjourney
Three small hot pot dipping sauce bowls - sesame oil garlic, sesame paste with fermented bean curd,
dried chili powder, beside them pork belly slices, duck blood, shrimp balls on black matte surface,
condensation on cold bowls, two-light setup 45 degree side key light, neutral 4000K,
pure black background, food magazine style, vibrant color saturation, ultra detailed --ar 4:5 --v 6

# Stable Diffusion
(three hot pot dipping sauces:1.3), (sesame oil garlic bowl:1.1), (sesame paste fermented bean curd:1.0),
(dried chili bowl:1.0), (pork belly duck blood shrimp balls:1.2), black matte background,
condensation drops on bowls, two-light 45 degree side light, 4000K neutral warm,
food magazine cover style, shallow depth of field, 8K
Negative: blurry, reflection, overexposed white background

# 即梦（中文）
三个火锅蘸料碗并排：香油蒜泥碟、芝麻酱腐乳碟、干辣椒面碟，旁边配毛肚、
鸭血、虾滑球，黑色哑光背景，碗壁有冷凝水珠，侧光45度打亮蘸料油光，
中性色温4000K，美食杂志风格，画面色彩饱和，细节清晰，食欲感强
```

---

### 🏠 场景氛围图

#### 模板 C1-Hotpot-A1【沸腾市井火锅店夜景】

**主题标签：** `#火锅店 #市井风 #夜景氛围 #烟火气 #门店展示`

**主体描述：**
从门口向内看，一家人气火锅店内部场景，红色灯笼串贯穿天花板，木质桌椅错落有致，桌上铜锅沸腾，白色蒸汽升腾，食客身影模糊，墙面有手写菜单和复古砖雕，地板为老式水磨石，服务员端着菜品穿梭，整体氛围热烈、接地气、烟火气十足。

**环境光线：**
混合光源：暖黄灯笼光（2200K）为主，局部 LED 暖白光补光，形成明暗错落的"市井光"层次，背景偏暗，人物剪影半虚化，整体氛围类似王家卫电影色调，低饱和度高对比。

**风格参考：**
市井烟火风（Cinematic Documentary），霓虹与灯笼光比冲突，追求"人在画中吃"的沉浸感。

**技术参数：**

```
# Midjourney
Interior of a bustling Chinese hot pot restaurant at night, red lanterns stringing across the ceiling,
copper hot pots boiling on wooden tables, white steam rising, vintage brick walls with hand-written menus,
terrazzo floor, warm amber lantern lighting 2200K mixed with soft LED white,
diners silhouettes in background bokeh, cinematic mood, high contrast, film grain,
Wong Kar-wai film aesthetic --ar 16:9 --style cinematic --v 6 --s 400

# Stable Diffusion
(bustling hot pot restaurant interior:1.3), (red Chinese lanterns:1.2), (copper boiling pots:1.1),
(steam rising:1.0), vintage brick walls, hand-written menu boards, terrazzo floor,
warm 2200K lantern light mixed with white LED, cinematic atmosphere,
people silhouettes background bokeh, Wong Kar-wai style, high contrast, film grain, 8K
Negative: bright daylight, sterile modern interior, cartoon style

# 即梦（中文）
热气腾腾的市井火锅店内部夜景，红色灯笼串贯穿天花板，木质方桌排列，
铜锅沸腾白烟升腾，墙面青砖配手写菜单，复古水磨石地面，暖黄灯笼光为主，
局部暖白补光，背景有食客身影虚化，电影感色调，高对比度，烟火气息
```

---

#### 模板 C1-Hotpot-A2【窗边双人小火锅日间】

**主题标签：** `#火锅店 #双人位 #日间 #窗景 #小清新 #打卡点`

**主体描述：**
日间，阳光透过落地玻璃窗照进火锅店，靠窗的双人位，桌上摆放精致小铜锅（一人一锅），窗外有绿植或城市街景，餐具为白色骨瓷，菜品为时蔬拼盘+手切牛肉，桌上有插花小瓶，整体风格明亮、清新、有品质感。

**环境光线：**
自然日光（窗光 5600K）为主，侧光打人像，柔焦感（SLR 虚化），窗外城市绿植背景，画面通透，类似日系生活杂志火锅专题图。

**风格参考：**
日系清新风（Japonisme Light），莫兰迪配色，强调"火锅也可以很优雅"的反差感，吸引年轻女性用户打卡。

**技术参数：**

```
# Midjourney
Cozy window-side table for two in a hot pot restaurant, two individual mini copper pots on white tablecloth,
beef slices and vegetable platter with fresh flowers in small vase, natural daylight through floor glass window,
soft bokeh of city street trees outside, bright airy interior, Japanese lifestyle magazine aesthetic,
soft 5600K daylight side lighting, warm tones, clean and fresh mood --ar 3:4 --style photo --v 6

# Stable Diffusion
(window-side hot pot table for two:1.4), (individual mini copper pots:1.2),
(fresh beef slices and vegetable plate:1.1), small flower vase, white tablecloth,
natural daylight 5600K through glass window, side lighting, city green trees background bokeh,
bright airy Japanese lifestyle aesthetic, soft and clean, 8K
Negative: dark interior, smoky, cluttered, low quality

# 即梦（中文）
靠窗双人小火锅位，日光透过落地玻璃窗照入，桌铺白色桌布，摆有两个精致小铜锅，
配手切牛肉和时蔬拼盘，小瓶插花装饰，窗外城市绿植虚化背景，
画面明亮通透，日系生活杂志风格，柔和自然光，清新优雅氛围
```

---

#### 模板 C1-Hotpot-A3【深夜食堂火锅角】

**主题标签：** `#火锅 #深夜食堂 #暖光 #孤独美食 #情绪氛围`

**主体描述：**
深夜 23:00，一个人坐在吧台角，一口小锅在面前沸腾，只有头顶一盏暖光射灯，背景全黑或极暗，桌上有一杯啤酒、一碟蘸料、一份羊肉卷，窗外是城市霓虹的模糊光晕，整体孤独而有治愈感。

**环境光线：**
单一顶置射灯光源（Spotlight），色温极暖 2400K（白炽灯感），明暗对比极端（Low Key Lighting），背景接近纯黑，蒸汽在光束中可见，营造"深夜独食"的私密感。

**风格参考：**
深夜食堂日剧风（Midnight Diner Style），情绪摄影，聚焦"一个人也要好好吃饭"的情感共鸣。

**技术参数：**

```
# Midjourney
Single diner at a hot pot bar counter late at night, one small pot boiling,
a glass of beer and a plate of lamb slices on the counter, single overhead warm spotlight 2400K,
background pitch black, steam visible in light beam, cinematic low-key lighting,
city neon bokeh through distant window, Midnight Diner Japanese drama mood,
moody and intimate, film grain --ar 9:16 --style cinematic --v 6

# Stable Diffusion
(late night hot pot for one:1.4), (small copper pot on bar counter:1.2),
(beer glass and dipping sauce:1.0), lamb slices, single overhead warm spotlight 2400K,
pitch black background, steam in light beam, low-key cinematic lighting,
city neon bokeh, Japanese midnight diner mood, intimate and lonely, film grain, 8K
Negative: daytime, bright, many people, crowded scene

# 即梦（中文）
深夜火锅吧台独食场景，一口小锅在面前沸腾，桌上有啤酒杯、蘸料碟、羊肉卷，
顶置单一射灯照明，暖黄色2400K色温，背景全黑，蒸汽在光束中可见，
窗外城市霓虹虚化，电影感低调光，深夜食堂日剧氛围，情绪感强
```

---

### 📣 营销海报

#### 模板 C1-Hotpot-P1【春节促销 — 鸿运当头火锅宴】

**主题标签：** `#春节 #过年 #火锅促销 #节日海报 #鸿运当头`

**主体描述：**
俯视角度，红色背景（纯色或传统纹样），一桌年夜饭火锅，锅上方悬浮金色对联/红包/铜钱元素，菜品包括龙虾、和牛、鱼片等高端食材，热气形成"祥云"形状，四周有红色灯笼、鞭炮、梅花点缀，整体喜庆、高端、有仪式感。

**环境光线：**
正面平光（Flat Front Light），整体均匀打亮，背景红偏暗（避免纯红刺眼），金色元素用高光点强调，色温偏暖 3200K，营造"团圆饭"氛围。

**风格参考：**
中国传统节庆设计（Chinese New Year Festival Design），融合国潮元素（Chinese Trends），红色+金色为主，类似国内一线餐饮品牌春节视觉。

**技术参数：**

```
# Midjourney
Chinese New Year hot pot feast, bird's eye view, deep red festive background with traditional patterns,
golden lanterns, red envelopes, gold coins floating above boiling hot pot, premium ingredients like
lobster and wagyu beef, steam forming auspicious cloud shapes, plum blossoms scattered around,
warm 3200K front lighting, festive Chinese New Year mood, high-end editorial style --ar 2:3 --v 6

# Stable Diffusion
(Chinese New Year hot pot banquet:1.4), (red festive background:1.2),
(golden lanterns red envelopes floating:1.1), (lobster wagyu beef ingredients:1.0),
auspicious steam clouds, plum blossoms, front flat lighting 3200K,
high-end Chinese New Year design, rich red and gold, festive and elegant, 8K
Negative: dark moody, black and white, cartoonish

# 即梦（中文）
春节火锅年夜饭俯视图，深红色节庆背景，传统纹样，金色灯笼、红包、金元宝悬浮于
沸腾火锅上方，食材包括龙虾、和牛等高端配置，蒸汽形成祥云状，四周有梅花点缀，
正面均匀打光，暖色3200K，中国传统节庆风格，喜庆高端
```

---

#### 模板 C1-Hotpot-P2【618 大促 — 火锅狂欢节】

**主题标签：** `#618 #大促 #火锅节 #促销海报 #年轻人 #嗨吃`

**主体描述：**
动态感画面，多个沸腾火锅锅叠加成"C"形或半圆形阵列，食材（毛肚、鸭肠、虾滑、牛肉）从锅中"飞溅"出来，背景为城市夜景霓虹光，色调为橙色+紫色（活力撞色），底部留白用于促销文案，整体年轻、动感、有冲击力。

**环境光线：**
强对比光（High Key Dynamic），橙紫撞色背景（Neon Sunset Palette），主体打亮，背景霓虹光形成色彩边缘光（Edge Light），蒸汽和食材有"动感模糊"（Motion Blur）。

**风格参考：**
潮流节庆设计（Festival Campaign Design），对比色冲撞，类似天猫/京东 618 视觉语言。

**技术参数：**

```
# Midjourney
Dynamic 618 Hot Pot Festival poster, multiple boiling hot pots arranged in semicircle,
ingredients like pork belly shrimp balls flying out with motion blur,
orange and purple neon city night background, bold splashy colors,
explosive energetic mood, young and trendy, high contrast dynamic lighting,
bottom space for promotional text, commercial campaign style --ar 2:3 --v 6

# Stable Diffusion
(dynamic 618 hot pot festival:1.4), (boiling pots semicircle arrangement:1.2),
(flying ingredients motion blur:1.1), neon city night purple orange,
high contrast dynamic lighting, energetic and youthful, commercial campaign,
bold typography space at bottom, vibrant colors, 8K
Negative: dull colors, static pose, dark background

# 即梦（中文）
618火锅狂欢节动态海报，多个沸腾火锅排列成半圆形，虾滑、毛肚、牛肉等食材
从锅中飞溅出来，橙色与紫色霓虹城市夜景背景，动感模糊，
活力撞色，年轻潮流感，底部留白用于促销文案，商业视觉冲击力强
```

---

#### 模板 C1-Hotpot-P3【周年庆 — 时光老火锅怀旧风】

**主题标签：** `#周年庆 #怀旧 #老火锅 #情怀 #复古 #时光`

**主体描述：**
画面为老式搪瓷锅或老铜锅，放置在旧报纸/旧木桌上，旁边有老式保温瓶、搪瓷杯等"年代感"道具，光线为泛黄旧日光质感（类似老照片褪色感），整体有"开了XX年，这味道没变过"的叙事感，主视觉调色偏向棕黄色怀旧滤镜。

**环境光线：**
单光源侧光（Single Side Light），色温偏黄 2800K，模拟老式白炽灯或自然夕阳，旧照片质感（Film Degradation / Grain），整体氛围怀旧、温暖、有故事。

**风格参考：**
复古怀旧风（Retro Nostalgia），类似《舌尖上的中国》怀旧镜头，"时间沉淀"的信任感。

**技术参数：**

```
# Midjourney
Retro vintage hot pot on old wooden table, antique enamel pot with old newspaper underneath,
vintage thermos flask and enamel cup beside it, warm yellow single side light 2800K,
aged paper texture background, film grain and light leakage, nostalgic Chinese restaurant vibe,
timeless and authentic, warm brown-yellow tones, emotional storytelling, documentary style --ar 4:5 --v 6

# Stable Diffusion
(vintage enamel hot pot:1.3), (old wooden table with newspaper:1.2),
(vintage thermos flask enamel cup:1.0), single side warm light 2800K,
aged paper texture, film grain, nostalgic warm tones, authentic old restaurant,
timeless storytelling, documentary photography, 8K
Negative: modern stainless steel pot, bright white lighting, digital clean look

# 即梦（中文）
老式搪瓷火锅置于旧木桌上，桌下垫旧报纸，旁边有老式保温瓶和搪瓷杯，
单侧暖黄光源2800K，旧报纸质感背景，胶片颗粒感，怀旧棕黄色调，
老字号火锅店叙事感，温暖有故事，时光沉淀质感，纪实摄影风格
```

---

### 🏗️ 店铺装修图

#### 模板 C1-Hotpot-S1【火锅店门头 — 国潮霓虹风】

**主题标签：** `#门头图 #火锅店 #国潮 #霓虹 #街景 #招牌`

**主体描述：**
街景视角，门头招牌为立体字或发光字，背景为城市傍晚天空（蓝紫色调），门头有龙凤图腾或辣椒/锅图案的霓虹灯带，两侧有绿植装饰，玻璃门上贴有营业时间贴纸，整体辨识度高、过目不忘。

**环境光线：**
傍晚天然光（天空蓝紫色 4500K）+ 门头霓虹灯光（粉色/橙色 2500K），形成冷暖对比，画面右侧留白供商家替换人物。

**风格参考：**
国潮街拍风（Guochao Street Photography），门头即内容，参考熊猫老火锅、野萃山等品牌门头设计语言。

**技术参数：**

```
# Midjourney
Chinese hot pot restaurant facade at dusk, glowing neon sign with dragon and pepper motifs,
warm pink orange neon tube lights against blue-purple evening sky, green plant flanking entrance,
glass door with opening hours sticker, street scene perspective, natural evening ambient light
4500K mixed with neon 2500K, people space on right side for branding replacement,
cinematic urban photography, high saturation --ar 9:16 --style photo --v 6

# Stable Diffusion
(hot pot restaurant entrance facade:1.3), (glowing neon dragon pepper sign:1.2),
(blue-purple evening sky:1.0), (green plants:0.8), glass door with stickers,
evening ambient 4500K mixed with warm neon 2500K, street scene angle,
cinematic urban photography, right side space for people overlay, high saturation, 8K
Negative: daytime bright, boring plain sign, low quality storefront

# 即梦（中文）
傍晚时分火锅店门头正面街景，发光霓虹招牌，龙凤与辣椒图案灯带，
蓝紫色傍晚天空，冷暖光线对比，玻璃门上营业贴纸，
两侧绿植点缀，自然街拍感，构图右侧预留人物替换空间，
国潮风格，高辨识度，抖音小红书门头展示专用
```

---

#### 模板 C1-Hotpot-S2【菜单封面 — 古法火锅】

**主题标签：** `#菜单封面 #古法 #火锅 #设计感 #品质感 #菜品展示`

**主体描述：**
竖版菜单封面，背景为宣纸/竹简质感，主体为一口老铜锅特写，锅上方以毛笔书法写着招牌菜名，四周点缀手绘风格食材图标（毛肚、鸭肠、花椒、辣椒），底部有店铺名称和地址。

**环境光线：**
左上方自然光（窗光）斜照，色温 4500K，整体素雅、有文化感。

**风格参考：**
新中式设计（Neo-Chinese Design），手绘插画+书法，参考鼎泰丰菜单、小吊梨汤视觉系统。

**技术参数：**

```
# Midjourney
Vertical menu cover for traditional hot pot restaurant, rice paper texture background,
close-up of antique copper pot with patina, Chinese brush calligraphy for signature dish name above pot,
hand-drawn ingredients illustrations scattered around,
店名和地址 at bottom, natural window light from upper left 4500K,
elegant neo-Chinese design, ink painting style, high quality print material feel --ar 3:4 --v 6

# Stable Diffusion
(hot pot menu cover vertical:1.4), (rice paper texture background:1.2),
(antique copper pot close-up:1.3), (Chinese brush calligraphy:1.2),
(hand-drawn ingredient icons:1.0), elegant neo-Chinese aesthetic,
natural upper left window light 4500K, ink painting quality, refined and cultural, 8K
Negative: modern minimalist, bright white, corporate chain look

# 即梦（中文）
竖版火锅菜单封面，宣纸纹理背景，古法老铜锅特写，锅面有使用包浆感，
毛笔书法写招牌菜名于锅上方，四周手绘风格食材图标点缀，
底部店铺名地址，左上窗光斜照，新中式设计，书法水墨质感，高品质印刷感
```

---

#### 模板 C1-Hotpot-S3【店内导视 — 桌位/区域指示牌】

**主题标签：** `#导视牌 #区域指示 #店内导视 #火锅店 #设计统一`

**主体描述：**
导视图设计稿，风格与店铺整体视觉统一，主视觉为铜锅简笔图标 + 桌位编号（如"12号桌"），配色为品牌标准色（推荐红+黑/红+金），包含菜品分类指示（"肉类区""蔬菜区""蘸料台"），适合印刷 KT 板或墙贴。

**风格参考：**
品牌系统设计（Brand System Design），导视图需要风格统一、符号直观、指意清晰，参考西贝莜面村、太二酸菜鱼等连锁品牌导视系统。

**技术参数：**

```
# Midjourney
Clean indoor wayfinding sign design for hot pot restaurant, minimalist copper pot icon with table number,
red and black brand color scheme, vertical format, sections for meat area vegetable area dipping station,
clean sans-serif Chinese font, vector illustration style, brand identity system design,
modern Chinese restaurant aesthetic --ar 3:4 --style flat --v 6

# Stable Diffusion
(hot pot restaurant wayfinding signage design:1.3), (copper pot icon:1.2),
(table number display:1.1), red black color scheme, vertical layout,
area indicators for meat vegetables dipping, clean brand identity design,
modern Chinese restaurant wayfinding, vector quality, 8K
Negative: hand-drawn messy, low resolution, cluttered design

# 即梦（中文）
火锅店店内导视图设计稿，简约铜锅图标+桌位编号，品牌红黑配色竖版设计，
包含肉类区蔬菜区蘸料台区域指示，字体规范清晰，现代中式品牌视觉系统，
导视牌矢量设计质感，适合印刷KT板或墙贴，品牌统一风格
```

---

### 📺 直播背景图

#### 模板 C1-Hotpot-L1【火锅直播背景板 — 热闹火锅城】

**主题标签：** `#直播背景 #火锅 #背景板 #抖音直播 #热闹氛围 #引流`

**主体描述：**
竖版直播间背景板（9:16），整体为火锅店半景，中央大铜锅占据画面中下部分，锅沸腾有蒸汽，背景墙上挂满手写菜品牌和红色灯笼，左右两侧留白区域供主播站立，底部有品牌 LOGO 和今日直播福利信息栏。

**环境光线：**
背景光为主（Backlit Background），正面偏暗，由内向外打光（From Behind），灯笼和菜品牌自发光感，锅上方有顶光打亮蒸汽，色温偏暖 3000K，整体有舞台感。

**风格参考：**
抖音直播背景板风格（Live Stream Backdrop Design），信息分层清晰（背景氛围 + 品牌 LOGO + 促销信息 + 主播位），视觉冲击力强但不抢镜。

**技术参数：**

```
# Midjourney
Vertical Douyin live stream backdrop for hot pot restaurant, 9:16 aspect ratio,
semi-panoramic hot pot restaurant interior as background, large copper pot center lower half boiling,
red lanterns and hand-written menu boards on back wall, left and right space for streamer positioning,
brand LOGO and today's promotion banner at bottom, warm backlit atmosphere 3000K,
steam visible with top light, stage-like dramatic lighting, commercial live stream ready --ar 9:16 --v 6

# Stable Diffusion
(live stream backdrop hot pot:1.4), (vertical 9:16 format:1.2),
(large copper pot center bottom:1.2), (boiling steam:1.0),
(red lanterns menu boards background:1.1), (brand LOGO promotion bar:1.0),
backlit warm 3000K atmosphere, stage lighting, Douyin live streaming backdrop design, 8K
Negative: bright frontal lighting, no depth, flat white background

# 即梦（中文）
竖版抖音直播间火锅店背景板，9比16比例，火锅店半景作为背景，
中央大铜锅位于画面中下方沸腾冒烟，背景墙挂满红色灯笼和手写菜品牌，
左右预留主播站立空间，底部品牌LOGO+今日福利信息栏，
暖色背光3000K，蒸汽有顶光打亮，舞台感，抖音直播场景专用
```

---

#### 模板 C1-Hotpot-L2【深夜档口火锅直播背景】

**主题标签：** `#深夜火锅 #直播背景 #档口风 #烟火气 #深夜美食 #氛围`

**主体描述：**
深夜档口视角直播间背景，窗外城市深夜霓虹（紫色调），档口玻璃窗上有手写价目表贴纸，窗内大灶台，一口铁锅猛火爆炒或铜锅小炒，火焰和油烟有"锅气"感，档口上方挂有"XX老火锅"布帘招牌，整体氛围：深夜、真实、下沉市场烟火气。

**环境光线：**
暖黄灶火光（2100K）为主，窗外城市霓虹蓝紫光（5000K）为辅，火焰在画面中形成橙黄色"热点"（Highlight Point），整体反差大、氛围强。

**风格参考：**
深夜街头风（Night Market Street Style），真实感优先，追求"烟火气"和"深夜感"，参考地方美食纪录片拍摄手法。

**技术参数：**

```
# Midjourney
Late night street food stall live stream backdrop, night city neon purple sky outside window,
hand-written price list stickers on glass, wok with fire and smoke, iron pot in kitchen,
cloth sign hanging above reading old hot pot brand name, warm wok fire light 2100K mixed
with cool neon blue 5000K, high contrast dramatic, authentic night market atmosphere,
street food documentary feel, vertical 9:16 Douyin format --ar 9:16 --style cinematic --v 6

# Stable Diffusion
(night hot pot stall backdrop:1.4), (night city neon purple:1.2),
(hand-written price stickers on glass:1.1), (wok fire smoke:1.2),
(old cloth brand sign:1.0), warm 2100K wok fire mixed with cool 5000K neon,
high contrast dramatic, authentic night market street food, documentary style, 8K
Negative: clean bright daytime, sterile kitchen, polished restaurant interior

# 即梦（中文）
深夜档口火锅直播间背景板，窗外城市深夜紫调霓虹，玻璃上有手写价目表，
窗内大灶台铁锅猛火爆炒有火焰油烟，档口上方挂"XX老火锅"布帘招牌，
灶火暖黄2100K与霓虹蓝紫5000K混合光，高对比戏剧感，
真实深夜路边摊氛围，烟火气强，抖音下沉市场风格，竖版9比16
```

---

#### 模板 C1-Hotpot-L3【品牌高端火锅直播背景】

**主题标签：** `#高端火锅 #直播背景 #品牌感 #品质 #轻奢 #精致`

**主体描述：**
轻奢火锅品牌直播间背景，浅灰或米白主背景（不抢镜），一侧有精致铜锅陈列，锅面有品牌 LOGO 浮雕，另一侧为品牌视觉系统（标准色+字体+标语），点缀绿植和射灯，整体有品牌感、有设计、有品质。

**环境光线：**
展厅布光（Showroom Lighting），均匀无阴影，射灯精准打亮铜锅和品牌 LOGO（Gallery Spotlight），色温 4000K，画面干净、有质感。

**风格参考：**
品牌展厅风（Brand Showroom），极简高级，参考喜茶/乐乐茶品牌视觉语言，传递"这品牌有品质"的潜意识信任感。

**技术参数：**

```
# Midjourney
Luxury hot pot brand live stream backdrop, light gray background, elegant copper pot with
brand logo embossing on one side, brand visual identity system with logo color and slogan on other side,
minimalist green plant accents with gallery spotlight, even 4000K showroom lighting,
no shadows clean and premium, modern Chinese luxury brand aesthetic, vertical 9:16 format --ar 9:16 --v 6

# Stable Diffusion
(luxury hot pot live backdrop:1.4), (light gray background:1.2),
(elegant copper pot brand logo:1.3), (brand visual identity display:1.2),
(gallery spotlight green plants:1.0), even 4000K showroom lighting, shadowless clean premium,
modern Chinese luxury brand, showroom aesthetic, Douyin vertical format, 8K
Negative: dark background, cluttered, discount promotion heavy text, street food look

# 即梦（中文）
轻奢火锅品牌直播间背景，浅灰米白主色调，一侧精致铜锅陈列配品牌LOGO浮雕，
另一侧品牌视觉系统标准色加标语，射灯精准打亮，点缀绿植，
4000K均匀展厅光无阴影，干净有品质感，现代中式轻奢品牌展厅风格，
竖版9比16，适合连锁高端火锅直播
```

---

## 1.2 烧烤

### 🖼️ 商品主图

#### 模板 C2-BBQ-M1【炭火羊肉串特写 — 油脂滴落瞬间】

**主题标签：** `#烧烤 #羊肉串 #炭火 #商品主图 #滋滋冒油 #食欲感`

**主体描述：**
特写视角，一串羊肉串垂直持握或斜靠，肉块表面焦褐微黑，油脂从肉块底部滴落，炭火余烬在底部发出橙红色光，烟雾轻微，背景为黑色吸光布，主体为画面中心焦点。

**环境光线：**
单侧炭火光为主（暗色环境），补光为冷色反光板（降低暖色溢出），色温 2600K（炭火橙黄），焦点在肉块中段，浅景深，背景全黑。

**风格参考：**
美食特写写实风（Food Close-up Photography），突出"油脂滋滋作响"的听觉暗示感（用视觉传递听觉）。

**技术参数：**

```
# Midjourney
Close-up of lamb skewers on charcoal grill, fat dripping from meat, charred brown surface,
glowing charcoal embers orange red underneath, slight smoke, single side charcoal fire lighting 2600K,
cool reflector on opposite side, pure black background, shallow depth of field on meat chunks,
mouth-watering food photography, hyperrealistic 8K detail --ar 1:1 --style photo --v 6

# Stable Diffusion
(lamb skewer close-up:1.4), (charred brown surface:1.2), (fat dripping:1.3),
(glowing charcoal embers:1.1), slight smoke, black background,
single side charcoal fire light 2600K, cool reflector, shallow depth of field,
appetizing food photography, hyperrealistic, 8K
Negative: overexposed, blurry, cartoon

# 即梦（中文）
炭火羊肉串特写，肉块表面焦褐微黑，油脂从底部滴落，
炭火余烬发出橙红色光，少许烟雾缭绕，单侧炭火光2600K，
黑色纯背景，浅景深聚焦肉块，食欲感美食摄影，超写实细节
```

---

#### 模板 C2-BBQ-M2【锡纸烤生蚝 — 蒜蓉粉丝】

**主题标签：** `#烤生蚝 #蒜蓉 #锡纸烤 #海鲜烧烤 #外卖主图 #夜宵`

**主体描述：**
俯视角度，锡纸包裹烤生蚝，壳内蒜蓉粉丝铺底，整只生蚝肉饱满嫩白，表面淋有热油蒜蓉酱汁，酱汁有油光，热气轻微升腾，底部锡纸边缘微焦，画面构图居中偏下（上方留白供文案）。

**环境光线：**
顶置柔光（Overhead Softbox），向下打亮食物表面油光，无侧影，色温 4000K，主体色彩饱和。

**风格参考：**
外卖平台主图风（Food Delivery Platform Cover），高食欲感、高辨识度、文案区留白。

**技术参数：**

```
# Midjourney
Overhead shot of roasted oyster in foil, garlic and glass noodle base, plump oyster meat,
hot oil garlic sauce on top, steam rising slightly, golden oil sheen, charred foil edges,
top-down softbox lighting 4000K, vibrant saturated colors, text space upper third,
food delivery platform cover style, appetizing and commercial --ar 4:5 --v 6

# Stable Diffusion
(roasted oyster foil wrap:1.3), (garlic glass noodle:1.2), (plump oyster meat:1.2),
(oil garlic sauce:1.1), steam rising, overhead softbox 4000K, text space top,
commercial food delivery photo style, vibrant appetizing, 8K
Negative: dark dull colors, messy composition, overexposed white

# 即梦（中文）
俯视锡纸烤生蚝，蒜蓉粉丝铺底，整只生蚝肉饱满嫩白，
表面淋热油蒜蓉酱汁有油光，热气轻微上升，锡纸边缘微焦，
顶置柔光4000K，色彩饱和，上方三分之一留白供文案，
外卖平台主图风格，高食欲感商业感
```

---

#### 模板 C2-BBQ-M3【烤羊排战斧 — 大份量霸气款】

**主题标签：** `#烤羊排 #战斧羊排 #大份量 #霸气 #聚会 #聚餐 #肉食者`

**主体描述：**
45° 斜俯视角，一整块战斧羊排置于黑色/木质托盘，表面有焦化纹路（Grill Marks），肉块纹理清晰可见，配菜有迷迭香、小番茄、土豆块，背景虚化，整体份量感强、霸气、有"肉食者天堂"的感觉。

**环境光线：**
三点布光（Three-point Lighting）：主光侧上方 45°，补光对面 30%，轮廓光（Hair Light）从后方偏上，色温 3800K。

**风格参考：**
西餐厅牛排风格（Western Steak House），高级感，强调"大份量"和"品质感"的双重满足。

**技术参数：**

```
# Midjourney
45-degree angle of tomahawk lamb chop on black wooden serving board, charred grill marks on surface,
juicy meat texture visible, rosemary sprigs cherry tomatoes potato cubes garnish,
three-point lighting key light upper 45 degree, fill light opposite 30 percent, hair light from upper back,
warm 3800K, background bokeh, dramatic and premium, steakhouse quality, appetizing --ar 4:3 --v 6

# Stable Diffusion
(tomahawk lamb chop:1.4), (black serving board:1.1), (charred grill marks:1.2),
(rosemary cherry tomatoes garnish:1.0), three-point lighting 3800K, meat texture detail,
background bokeh, premium steakhouse aesthetic, dramatic and appetizing, 8K
Negative: small portion, cheap plastic plate, dark

# 即梦（中文）
45度斜俯视角战斧羊排置于黑色木质托盘，表面焦化纹理清晰，
肉块纹理质感可见，配菜迷迭香小番茄土豆块点缀，
三点布光侧上方主光补光轮廓光，暖色3800K，
背景虚化，高级牛排馆品质感，霸气大份量，食欲感强
```

---

### 🏠 场景氛围图

#### 模板 C2-BBQ-A1【露营烧烤 — 星空篝火夜】

**主题标签：** `#露营烧烤 #篝火 #星空 #氛围 #打卡 #周末经济 #年轻人`

**主体描述：**
夜晚户外露营地，帐篷旁篝火燃烧，烤架上肉串滋滋作响，三五好友围坐，火光映照笑脸，背景为满天繁星银河，木桌椅、串灯（Fairylights）、户外装备散落，整体：浪漫、自由、有"说走就走"的冲动感。

**环境光线：**
篝火光（Campfire 2200K）为主，星光/月光（Starlight 6000K）为辅，火光打人脸形成自然"美颜光"（暖色肤感好），背景星空有冷暖对比。

**风格参考：**
露营生活方式（Camping Lifestyle），精致露营（Glamping）美学，追求"不是在拍照，是生活在画面里"的感觉。

**技术参数：**

```
# Midjourney
Night camping glamping site, campfire burning beside tent, skewers sizzling on grill,
friends sitting around fire, warm firelight on faces, starry Milky Way sky background,
fairy lights strung between trees, wooden camping furniture, romantic and free atmosphere,
campfire light 2200K mixed with starlight 6000K, cinematic low-key lighting, warm skin tones,
high contrast sky vs foreground, glamping lifestyle, dreamy and adventurous --ar 16:9 --style cinematic --v 6

# Stable Diffusion
(night camping BBQ scene:1.4), (campfire:1.3), (skewers on grill:1.2),
(friends around fire:1.2), (starry Milky Way:1.1), fairy lights, tent,
campfire 2200K mixed with starlight 6000K, cinematic low-key, warm skin tones,
high contrast, glamping lifestyle, romantic and adventurous, 8K
Negative: daytime, city scene, indoor, gloomy

# 即梦（中文）
夜晚户外露营地，帐篷旁篝火燃烧，烤架上肉串滋滋作响，
三五好友围坐火光映照笑脸，满天繁星银河背景，
串灯挂树、木质露营桌椅、户外装备散落，
篝火暖光2200K与星光6000K混合，Low Key电影感，
冷暖对比强烈，精致露营生活方式，浪漫自由氛围
```

---

#### 模板 C2-BBQ-A2【室内烧烤店 — 烟火气大众脸】

**主题标签：** `#烧烤店 #室内 #烟火气 #热闹 #聚餐 #市井 #门店展示`

**主体描述：**
室内烧烤店全景视角，食客满座，木质桌椅密布，桌上烤架炭火通红，肉串排列，服务员端着托盘穿梭，背景墙有手写价格牌，油烟缭绕但不刺眼，整体接地气、有烟火气、客单价适中。

**环境光线：**
顶置暖光白炽灯（2200K）为主，烤架炭火为辅，多点光源形成明暗碎片光，有轻微烟雾感但不遮挡主体，色温暖偏黄，整体低对比接近人眼真实感受。

**风格参考：**
市井生活风（Life-style Documentary），参考《人生一串》纪录片真实感，追求"这家店看起来生意真好"的视觉暗示。

**技术参数：**

```
# Midjourney
Interior of a popular indoor BBQ restaurant, wooden tables packed, guests dining,
charcoal grills on tables with red-hot coals, skewers arranged on grill,
waiters serving trays, hand-written price boards on wall, slight smoke in air,
warm overhead incandescent lighting 2200K mixed with charcoal glow,
lively and authentic atmosphere, life documentary style, golden tones --ar 16:9 --v 6

# Stable Diffusion
(bustling indoor BBQ restaurant:1.3), (wooden tables packed:1.2),
(charcoal grills:1.2), skewers, warm overhead 2200K, slight smoke,
hand-written price boards, lively authentic atmosphere, life documentary,
golden warm tones, moderate contrast, 8K
Negative: empty restaurant, polished upscale, dark moody

# 即梦（中文）
人气室内烧烤店全景，木质桌椅密布，食客满座，
桌上炭火烤架通红，肉串排列，服务员端着托盘穿梭，
背景墙有手写价格牌，轻微油烟感，暖色白炽灯照明2200K，
市井生活纪录片风格，画面有生活气息，生意兴隆的视觉暗示
```

---

#### 模板 C2-BBQ-A3【日式烧鸟屋 — 深夜一人食】

**主题标签：** `#烧鸟 #日式 #深夜 #一人食 #居酒屋 #氛围 #小酌`

**主体描述：**
日式烧鸟居酒屋吧台视角，单人坐在吧台边，面前一串提灯、一串鸡翅、一杯清酒，师傅在吧台另一侧炭火烤串，背光剪影，墙面有日式海报、清酒酒瓶，整体原木色调，有私密感但不孤独，是"独处的高级感"。

**环境光线：**
暖黄灯笼光（2200K）为主，吧台有射灯打亮烤串，背光勾勒师傅剪影，背景墙面稍暗（Spotlight Effect），色温偏暖。

**风格参考：**
日式居酒屋风（Japanese Izakaya Style），参考《深夜食堂》或日剧《孤独的美食家》烧鸟特辑，追求"一个人也要好好吃"的优雅感。

**技术参数：**

```
# Midjourney
Japanese yakitori izakaya bar counter view, single diner sitting at counter,
one skewer of tori no tekkamori and chicken wing and glass of sake on counter,
chef silhouette on opposite side grilling over charcoal, Japanese posters and sake bottles on back wall,
warm lantern lighting 2200K, backlit chef silhouette, spotlight on grilled skewers,
Japanese izakaya atmosphere, intimate and refined, cinematic mood --ar 16:9 --style cinematic --v 6

# Stable Diffusion
(Japanese yakitori izakaya:1.4), (bar counter:1.2), (single diner:1.2),
(grilled skewers and sake:1.3), chef silhouette backlit, charcoal grill,
Japanese posters sake bottles wall, warm 2200K lantern, spotlight effect,
intimate refined solo dining, Japanese drama aesthetic, 8K
Negative: busy loud restaurant, bright fluorescent lighting, American diner style

# 即梦（中文）
日式烧鸟居酒屋吧台视角，单人坐在吧台边，面前一串提灯一串鸡翅一杯清酒，
师傅在吧台另一侧炭火烤串，背光剪影，墙面有日式海报和清酒酒瓶，
暖黄灯笼光2200K为主，吧台射灯打亮烤串，背光勾勒师傅剪影，
日式居酒屋氛围，私密有质感，日剧氛围，一个人独处的优雅感
```

---

### 📣 营销海报

#### 模板 C2-BBQ-P1【七夕烧烤节 — "烤"TA的心】

**主题标签：** `#七夕 #情人节 #烧烤 #浪漫 #甜蜜 #双人套餐 #节日促销`

**主体描述：**
情侣视角，烛光烧烤野餐布置（草地/露台），两人对坐，烤架上有爱心形肉排，有玫瑰花束、红酒、气泡酒点缀，背景有七夕星星或灯笼装饰，整体氛围：浪漫、甜蜜、有仪式感。

**环境光线：**
烛光（2200K）+ 串灯（Fairylights 2700K）+ 天然星光（6000K），形成烛光晚餐氛围（Rooftop BBQ Candle Dinner），暖光打人像。

**风格参考：**
浪漫节庆风（Romantic Festival Campaign），情感营销，参考星巴克七夕视觉、喜茶节庆设计语言。

**技术参数：**

```
# Midjourney
Romantic couple BBQ picnic setup, two people sitting opposite each other,
heart-shaped meat on grill, rose bouquet, red wine, string lights overhead,
Qixi star decorations in background, candlelight 2200K mixed with fairy lights 2700K,
starry night sky backdrop, romantic and sweet Qixi atmosphere, couple lifestyle,
golden warm tones, dreamy lighting --ar 2:3 --v 6

# Stable Diffusion
(romantic couple BBQ:1.4), (heart-shaped meat on grill:1.3),
(roses and red wine:1.2), (fairy lights candles:1.2), Qixi star decorations,
candlelight 2200K, starry night, romantic Qixi atmosphere, couple lifestyle, dreamy, 8K
Negative: group dining, casual messy, dark gloomy

# 即梦（中文）
情侣七夕烧烤野餐场景，两人对坐，烤架上有爱心形肉排，
玫瑰花束、红酒、气泡酒点缀，串灯烛光照明，七夕星星装饰背景，
烛光加串灯2200K暖色，夜空背景，浪漫甜蜜有仪式感，
适合七夕双人套餐促销，美食与爱情元素融合的视觉
```

---

#### 模板 C2-BBQ-P2【国庆黄金周 — 户外烧烤派对】

**主题标签：** `#国庆 #黄金周 #户外 #烧烤派对 #团聚 #聚餐 #节日促销`

**主体描述：**
户外草坪/庭院，多个家庭烧烤聚会场景，多个烤架同时运作，桌上摆满烤好的食材（牛排、香肠、玉米、蔬菜），儿童在旁嬉戏，背景为节日装饰（气球、横幅"欢度国庆"），天空湛蓝（白天场景），整体氛围：热闹、团聚、家庭感。

**环境光线：**
自然日光为主（Bright Daylight 5600K），户外蓝天白云，烤架有炭火橙光点缀，多点光源形成明亮欢快氛围，High Key 明亮调。

**风格参考：**
家庭团聚风（Family Gathering Campaign），正面积极，强调"团聚""分享""欢乐"的情感主题。

**技术参数：**

```
# Midjourney
Outdoor BBQ party on grass lawn during National Day holiday, multiple families gathering,
several grills working simultaneously, tables loaded with grilled steaks sausages corn vegetables,
children playing nearby, National Day decorations balloons banners in background,
bright natural daylight 5600K, blue sky, charcoal glow accents, high-key bright cheerful mood,
family reunion and celebration atmosphere --ar 16:9 --v 6

# Stable Diffusion
(outdoor National Day BBQ party:1.4), (multiple grills:1.3),
(families gathering:1.2), (loaded BBQ food tables:1.2), children playing,
National Day decorations balloons banners, bright daylight 5600K blue sky,
charcoal orange glow, high-key bright cheerful, family reunion celebration, 8K
Negative: rainy day, dark indoor, single person, gloomy

# 即梦（中文）
国庆黄金周户外草坪烧烤派对，多个家庭聚会，多个烤架同时运作，
桌上摆满烤好的牛排香肠玉米蔬菜，儿童嬉戏玩耍，
背景节日气球横幅"欢度国庆"装饰，蓝天白云，
自然日光为主5600K明亮，炭火橙光点缀，高调明亮欢快氛围，
家庭团聚节日感，适合国庆黄金周聚餐促销
```

---

#### 模板 C2-BBQ-P3【周年庆 — 老味道传承】

**主题标签：** `#周年庆 #传承 #老味道 #情怀 #烧烤 #怀旧 #故事感`

**主体描述：**
炭火特写视角（情感渲染），一只手（老师傅的手，布满皱纹/老茧）正在翻动肉串，炭火通红，背景虚化为老店门头（斑驳的招牌、老式砖墙），上方有手写"开业XX年"字样，整体叙事感强："一双手，烤了XX年，一把火，传了XX年。"

**环境光线：**
主光源为炭火（2500K暖橙），侧逆光勾勒手的轮廓，背景完全虚化为暖色光斑，形成强烈的前景/背景对比，低调光（LFI）戏剧感。

**风格参考：**
人物纪录片特写（Documentary Portrait Close-up），叙事感第一，参考《风味人间》《舌尖上的中国》师傅手部特写，制造"手艺传承"的情感价值。

**技术参数：**

```
# Midjourney
Close-up of experienced chef hands turning skewers over glowing charcoal fire,
weathered hands with calluses and wrinkles, charcoal embers orange red glow,
background completely blurred showing old shop facade weathered sign brick wall,
handwritten text saying opening year, cinematic documentary close-up,
charcoal fire light 2500K, dramatic side backlight on hands, low-key mood,
emotional storytelling, master craftsmanship, film grain --ar 4:5 --style cinematic --v 6

# Stable Diffusion
(chef experienced hands turning BBQ skewers:1.4), (charcoal embers glow:1.3),
(weathered hands with calluses:1.2), blurred old shop facade background,
weathered sign brick wall, handwritten opening year text, charcoal fire light 2500K,
dramatic side backlight, low-key cinematic, emotional documentary storytelling,
master craftsmanship, film grain, 8K
Negative: young smooth hands, bright clean modern kitchen, no storytelling

# 即梦（中文）
炭火烧烤特写，老师傅的手布满老茧正在翻动肉串，炭火通红余烬橙红，
背景完全虚化为老店门头斑驳招牌和青砖墙，上方手写"开业XX年"字样，
炭火光为主2500K暖橙色，侧逆光勾勒手的轮廓，低调光戏剧感，
纪录片叙事风格，手艺传承情感价值，品牌故事感强
```

---

### 🏗️ 店铺装修图

#### 模板 C2-BBQ-S1【烧烤店门头 — 炭火霓虹夜店风】

**主题标签：** `#烧烤店 #门头 #霓虹 #夜店风 #街景 #招牌 #辨识度`

**主体描述：**
夜间门头视角，烧烤店招牌为霓虹灯管拼写的店名（英文或拼音），一侧有大块牛肉/羊肉的霓虹装饰画，背景为深蓝或黑色夜空，门头下方有炭火炉模型或真实小炭炉（冒烟效果），两侧有绿植和仿旧砖，整体辨识度极高。

**环境光线：**
纯霓虹灯光（Neon Glow 2500-3500K），门头发光体自发光，夜间城市背景（极暗），霓虹光反射到地面形成彩色光晕。

**风格参考：**
霓虹夜店风（Neon Nightclub + Street Food Fusion），将"烧烤的烟火气"和"霓虹的酷感"结合，吸引年轻人拍照打卡。

**技术参数：**

```
# Midjourney
Night facade of BBQ restaurant, glowing neon sign with restaurant name in tube lights,
one side has neon art of large beef or lamb, deep blue or black night sky background,
small charcoal grill model below sign with real smoke effect, flanking green plants and faux brick walls,
pure neon light 2500-3500K, neon glow reflecting on ground, urban night street scene,
highly recognizable signage, Douyin check-in ready --ar 9:16 --v 6

# Stable Diffusion
(BBQ restaurant neon night facade:1.4), (glowing neon sign tube lights:1.3),
(neon art of beef lamb:1.2), charcoal grill model with smoke, green plants faux brick,
pure neon glow 2500-3500K, night sky dark background, neon reflection on ground,
urban street night scene, highly recognizable, Douyin photo ready, 8K
Negative: daytime bright, plain white sign, low quality banner

# 即梦（中文）
夜间烧烤店门头，霓虹灯管拼写的招牌，一侧有大块牛羊肉霓虹装饰画，
深蓝或黑色夜空背景，门头下方有炭火炉模型冒烟效果，
两侧绿植和仿旧砖装饰，纯霓虹灯光发光体自发光，
夜间城市极暗背景，霓虹光反射地面彩色光晕，高辨识度抖音打卡门头
```

---

#### 模板 C2-BBQ-S2【手绘风格菜单板 — 涂鸦墙菜单】

**主题标签：** `#手绘菜单 #涂鸦墙 #烧烤 #风格 #个性 #有特色 #设计感`

**主体描述：**
墙面视角，一整面黑板墙（或仿真黑板）上手绘烧烤菜单，内容包含：店名LOGO（手绘风格）、分类（牛/羊/猪/海鲜/蔬菜）、价格、手绘食物图标（肉串、鸡翅、海鲜），配少量绿植/霓虹装饰，整体有艺术感、有个性。

**环境光线：**
室内暖光（3200K）打亮黑板，避免反光，自然书写质感（颜料笔触清晰可见），绿植点缀增加生活气息。

**风格参考：**
手绘涂鸦风（Hand-drawn Graffiti Menu Board），有态度有个性，参考文和友、老社区烧烤小店的手绘菜单，传递"这家店有性格"的信号。

**技术参数：**

```
# Midjourney
Full wall hand-drawn BBQ menu blackboard, restaurant name in hand-drawn logo style,
categories beef lamb pork seafood vegetables with hand-drawn food icons,
prices written in chalk, small green plants and neon accents beside board,
indoor warm lighting 3200K, no reflection on blackboard surface, clear chalk texture,
artistic and unique atmosphere, photo-worthy interior detail, authentic character --ar 9:16 --v 6

# Stable Diffusion
(hand-drawn BBQ menu blackboard wall:1.4), (restaurant hand-drawn logo:1.3),
(categories with food icons:1.2), chalk prices, green plants neon accents,
indoor warm 3200K lighting, no blackboard reflection, clear chalk texture,
artistic unique character, photo-worthy interior detail, authentic vibe, 8K
Negative: digital printed menu, corporate chain style, white boring wall

# 即梦（中文）
整面墙手绘烧烤菜单黑板，店名手绘LOGO风格，
分类牛羊猪海鲜蔬菜配手绘食物图标，价格用粉笔书写，
旁边点缀小绿植和霓虹装饰，室内暖光3200K照明无反光，
颜料笔触清晰可见，艺术感有个性，拍照发朋友圈素材，
传递有性格的店铺信号，与连锁品牌形成差异
```

---

#### 模板 C2-BBQ-S3【烤架/明档区 — 视觉表演区】

**主题标签：** `#明档 #烤架展示 #可视化 #表演区 #烧烤店 #核心卖点`

**主体描述：**
大视角展示烧烤店开放式明档/烤架区，烤架排列整齐，炭火旺盛，师傅正在烤制（动作姿态自然），上方有油烟净化设备和排烟罩（整洁感），烤架上方悬挂待烤食材（整齐排列，有食欲感），整体传达"看得见的干净，吃得出的品质"。

**环境光线：**
明档专用照明（食品展示灯 4000K），烤架上方射灯打亮食材，师傅面部有补光（Service Light），油烟区有专业排烟灯照明，画面清晰明亮。

**风格参考：**
开放式厨房展示风（Open Kitchen Display），卫生可视化，参考太二酸菜鱼、窑鸡王等品牌明档视觉语言，用"透明化操作"建立消费者信任感。

**技术参数：**

```
# Midjourney
Open BBQ display kitchen area, multiple grills in a row with burning charcoal,
chef in action grilling, professional exhaust hood and smoke purification equipment above,
hanging raw ingredients neatly arranged above grill, customers can see the cooking process,
bright food display lighting 4000K, chef face fill light, smoke-free clean visible area,
professional clean kitchen atmosphere, transparent food preparation trust-building --ar 16:9 --v 6

# Stable Diffusion
(open BBQ display kitchen:1.4), (grills with burning charcoal:1.3),
(chef grilling:1.2), professional exhaust hood, hanging raw ingredients,
bright display lighting 4000K, chef face light, clean smoke-free visible kitchen,
professional atmosphere, transparent food preparation, customer trust-building, 8K
Negative: dark messy kitchen, hidden kitchen, dirty equipment, no visibility

# 即梦（中文）
烧烤店开放式明档展示区，多个烤架排列炭火旺盛，
师傅正在烤制动作自然，上方有专业油烟净化排烟设备，
烤架上方悬挂整齐排列的待烤食材，
明档专用食品展示灯4000K，师傅面部补光，画面清晰明亮，
专业干净厨房感，透明化操作可视化，传达看得见的干净和品质感
```

---

### 📺 直播背景图

#### 模板 C2-BBQ-L1【户外深夜烧烤直播背景板】

**主题标签：** `#烧烤 #直播背景 #深夜 #户外 #氛围 #抖音直播 #引流`

**主体描述：**
竖版直播间背景板（9:16），户外深夜烧烤场景，烤架占据画面中下，炭火通红有火焰，背景为夜空或城市远景，一侧有串灯/灯笼装饰，左右预留主播位，底部有"今晚吃肉"类促销信息栏，整体：深夜烟火气、真实感强。

**环境光线：**
炭火光（2500K）为主，串灯/灯笼光（2700K）点缀，夜空深蓝（偏黑），炭火形成画面最亮区域，正面偏暗（适合手机前置摄像头）。

**风格参考：**
深夜烧烤直播风（Late Night BBQ Live Stream），真实感 > 精致感，"深夜+烧烤+炭火"是天然流量组合。

**技术参数：**

```
# Midjourney
Outdoor late night BBQ live stream backdrop, 9:16 vertical format,
charcoal grill center bottom with red-hot flame, night sky or cityscape background,
fairy lights lanterns on one side, streamer space left and right reserved,
promotion info bar at bottom, charcoal fire 2500K mixed with night scene,
primary bright zone charcoal flame, dark foreground suitable for phone camera,
authentic late night atmosphere --ar 9:16 --v 6

# Stable Diffusion
(late night BBQ live backdrop:1.4), (vertical 9:16:1.2),
(charcoal grill flame:1.3), night sky background, fairy lights lanterns,
promotion bar bottom, charcoal 2500K main light, night scene,
charcoal as brightest zone, dark foreground phone camera ready, authentic late night, 8K
Negative: daytime bright, clean indoor kitchen, corporate white background

# 即梦（中文）
户外深夜烧烤直播间背景板，9比16竖版，炭火烤架位于画面中下方通红有火焰，
夜空或城市远景背景，一侧串灯灯笼装饰，左右预留主播位，
底部促销信息栏，炭火光为主2500K，串灯点缀，夜空深蓝，
炭火为画面最亮区域，正面偏暗适合手机前置摄像头，深夜真实烟火气氛围
```

---

#### 模板 C2-BBQ-L2【日式烧鸟直播背景 — 极简精致】

**主题标签：** `#烧鸟 #日式 #直播背景 #极简 #精致 #高端 #品牌感`

**主体描述：**
竖版日式居酒屋风格直播间背景，极简留白，一侧有炭火烤架（精致小型）配串排列，另一侧为日式书法布帘"烧鸟"二字，点缀一枝枫叶或一盏纸灯，整体极简、禅意、有品质感。

**环境光线：**
柔光（3500K）均匀打亮，无强烈阴影，日式禅意光感，背景为素色墙面（米白/浅木色），整体干净简洁。

**风格参考：**
日式极简风（Japanese Minimalism / Wabi-Sabi），高端感，参考"鸟心""老干杯"等日式烧鸟品牌视觉，传递"精细食材+匠人精神"的品牌价值。

**技术参数：**

```
# Midjourney
Japanese yakitori live stream backdrop vertical 9:16, minimalist zen aesthetic,
one side small charcoal grill with neatly arranged skewers, other side Japanese calligraphy
cloth banner reading yakitori, single branch maple leaf or paper lantern accent,
soft 3500K uniform lighting, plain light wall background, clean simple elegant,
Japanese minimalist premium quality, wabi-sabi aesthetic --ar 9:16 --v 6

# Stable Diffusion
(Japanese yakitori live backdrop:1.4), (minimalist zen:1.3),
(small charcoal grill skewers:1.2), Japanese calligraphy cloth banner,
maple leaf paper lantern, soft 3500K uniform, plain light wall,
clean simple elegant, Japanese minimalist, wabi-sabi, premium quality, 8K
Negative: cluttered busy background, bright neon, fast food look

# 即梦（中文）
日式烧鸟直播间背景板竖版，极简禅意风格，
一侧精致小型炭火烤架配整齐排列的烧鸟串，另一侧日式书法布帘写"烧鸟"二字，
点缀一枝枫叶或一盏纸灯，柔光3500K均匀无阴影，
素色浅木色墙面背景，干净简洁极简高端，日式侘寂美学
```

---

## 1.3 奶茶

### 🖼️ 商品主图

#### 模板 C3-MilkTea-M1【芝士奶盖茶 — 分层渐变特写】

**主题标签：** `#奶茶 #芝士奶盖 #分层 #渐变 #商品主图 #外卖 #颜值`

**主体描述：**
竖版手持视角（Handheld Shot），一杯芝士奶盖茶竖立，杯身透明，茶底为渐变色（从浅到深或撞色分层），顶部有厚厚的奶盖，奶盖上有焦糖淋面或坚果碎装饰，有冷凝水珠挂在杯壁，吸管斜插，画面简洁背景虚化。

**环境光线：**
自然侧窗光（Window Light 5600K）透过半透明杯身制造折射光效，杯身侧面有高光点，色温偏暖 4000K，冷凝水珠有可见反光点。

**风格参考：**
小红书爆款饮品图（Little Red Book Bestseller Drink Photo），强调"颜值即正义"，莫兰迪/马卡龙配色，精致感强。

**技术参数：**

```
# Midjourney
Handheld vertical milk tea drink with creamy cheese foam top, gradient tea color from light to dark,
thick cream foam with caramel drizzle and crushed nuts, condensation water drops on transparent cup,
straw inserted at angle, soft background bokeh, natural window light 5600K refracting through cup,
warm 4000K tones, pastel aesthetic, ultra detailed product photography --ar 9:16 --style photo --v 6

# Stable Diffusion
(handheld milk tea with cheese foam:1.4), (gradient tea color:1.2),
(creamy foam with caramel drizzle nuts:1.3), (condensation drops transparent cup:1.1),
natural window light 5600K, refraction through cup, warm 4000K, shallow depth bokeh,
pastel aesthetic, Little Red Book style, ultra detailed, 8K
Negative: dull flat colors, plastic cheap cup, overexposed, cluttered background

# 即梦（中文）
手持芝士奶盖奶茶竖版，透明杯身，茶底从浅到深渐变色，
厚厚奶盖表面焦糖淋面和坚果碎装饰，杯壁有冷凝水珠，
吸管斜插，柔和背景虚化，自然窗光5600K透过杯身折射，
暖色4000K，莫兰迪色调，小红书爆款饮品图风格，超写实细节
```

---

#### 模板 C3-MilkTea-M2【杨枝甘露 — 水果茶特写】

**主题标签：** `#杨枝甘露 #水果茶 #芒果 #椰奶 #外卖主图 #颜值 #清爽`

**主体描述：**
45° 俯视角，一杯杨枝甘露置于白色/浅色托盘，杯内可见芒果粒、西柚果肉、椰奶冻分层，表面有芒果酱淋面和一片新鲜薄荷叶点缀，杯外有冷凝水珠，阳光下有通透感。

**环境光线：**
自然光（5600K）正面偏侧打亮，强调水果新鲜感，侧光勾勒杯壁轮廓，浅色背景，色温 4500K，画面清新、通透、干净。

**风格参考：**
Fresh & Clean 饮品摄影风格，强调水果新鲜度和色彩饱和度，参考喜茶、奈雪新品图，传递"一口热带风情"的感觉。

**技术参数：**

```
# Midjourney
45-degree overhead view of Yang Zhi Gan Lu fruit tea in transparent cup, mango chunks and pomelo flesh visible inside,
coconut milk jelly layers, mango sauce drizzle on top, fresh mint leaf garnish,
condensation drops on outer cup, white serving tray, natural daylight 5600K from front-side,
clean light background, 4500K warm natural, fresh and vibrant, ultra detailed product photo --ar 4:5 --v 6

# Stable Diffusion
(Yang Zhi Gan Lu fruit tea:1.4), (mango chunks pomelo flesh visible:1.3),
(coconut milk jelly layers:1.2), (mango sauce drizzle mint leaf:1.2),
condensation drops, natural daylight 5600K front-side, clean light background, 4500K,
fresh vibrant tropical aesthetic, ultra detailed product photography, 8K
Negative: dark dull, unclear ingredients, plastic artificial look

# 即梦（中文）
45度俯视角杨枝甘露水果茶，透明杯身内可见芒果粒和西柚果肉，
椰奶冻分层，表面芒果酱淋面配新鲜薄荷叶，杯外冷凝水珠，
白色托盘托底，自然光正面偏侧5600K打亮，浅色背景，
色温4500K，清新通透干净，热带风情，新鲜感强，饮品产品摄影超写实细节
```

---

#### 模板 C3-MilkTea-M3【珍珠奶茶系列 — 手持街拍风】

**主题标签：** `#珍珠奶茶 #街拍 #手持 #潮流 #年轻人 #打卡 #外卖`

**主体描述：**
真人手握奶茶杯视角（Hand-holding Shot），杯身为品牌标准色（白/黑/透明），杯身有品牌 LOGO 贴纸，珍珠透过杯壁可见，吸管上有咬痕或唇印（暗示人气），背景为城市街头/咖啡馆/校园，有生活感。

**环境光线：**
自然光街拍光（Street Light 5600K），侧光打人握杯的手，光线自然不过度修饰，色温 4500K，背景轻微虚化但保留城市纹理。

**风格参考：**
街头潮流风（Street Lifestyle Photography），参考 Supreme 联名奶茶、LV 奶茶快闪店视觉语言，强调"拿着这杯你就是街头最靓的仔"的潮流感。

**技术参数：**

```
# Midjourney
Hand holding bubble milk tea cup on city street, hand gripping whitemilk tea cup with visible tapioca pearls through transparent cup, brand logo sticker on cup,
straw with bite marks, natural urban street background with coffee shop facade,
hand in frame holding cup naturally, street photography natural light 5600K side light,
slight background bokeh preserving city texture, warm 4500K, lifestyle trendy vibe,
street style photography, authentic urban mood --ar 9:16 --style photo --v 6

# Stable Diffusion
(hand holding bubble milk tea cup:1.4), (tapioca pearls visible:1.2),
(brand logo cup:1.1), (straw bite marks:0.9), urban street background,
hand in natural grip, street photography natural light 5600K, side light on hand,
slight background bokeh, city texture, warm 4500K, lifestyle trendy, authentic urban mood, 8K
Negative: studio lighting, sterile white background, plastic fake look

# 即梦（中文）
真人手握珍珠奶茶杯于城市街头，透明杯壁内可见珍珠颗粒，
杯身有品牌LOGO贴纸，吸管有咬痕暗示人气，城市咖啡馆外景背景，
手握杯自然入镜，自然街拍光线5600K侧光，背景轻微虚化保留城市纹理，
暖色4500K，街头潮流生活方式，真实城市氛围感
```

---

### 🏠 场景氛围图

#### 模板 C3-MilkTea-A1【奶茶店 ins 风门店 — 少女粉白】

**主题标签：** `#奶茶店 #ins风 #少女心 #门店展示 #打卡点 #小清新 #高颜值`

**主体描述：**
奶茶店门口/内景视角，整体粉白色调（粉色/白色/金色），墙面有霓虹灯字牌、粉色火烈鸟或绿植装饰，木质桌椅或藤编椅子，圆拱形门洞或落地玻璃窗，整体风格：小公主/ ins 博主力捧的"高颜值奶茶店"，适合打卡拍照。

**环境光线：**
自然光为主（5600K），室内有补光灯（避免阴影），色温 4500K，整体明亮通透，画面干净无杂质。

**风格参考：**
ins 风少女心（Instagram Aesthetic / Pink Aesthetic），参考喜茶粉色主题店、鹿角巷粉店，传递"颜值即正义，这家店必须打卡"的信号。

**技术参数：**

```
# Midjourney
Pink and white aesthetic milk tea shop interior, pink neon sign on wall, flamingo pink decor,
floral arrangements, arch doorway, white and pink furniture, floor-to-ceiling windows,
natural daylight 5600K, bright and airy, Instagram-worthy aesthetic, youthful feminine,
clean and bright, ultra detailed interior photography --ar 9:16 --style photo --v 6

# Stable Diffusion
(pink white aesthetic milk tea shop:1.4), (pink neon sign:1.2),
(flamingo decor floral:1.1), (arch doorway:1.0), white pink furniture,
floor to ceiling windows, natural daylight 5600K, bright airy,
Instagram-worthy, youthful feminine, clean and bright, 8K
Negative: dark interior, dull colors, cluttered, old worn interior

# 即梦（中文）
粉白色调奶茶店内景，墙面粉色霓虹灯字牌，火烈鸟粉色装饰，
鲜花绿植点缀，圆拱形门洞，白色粉色家具，落地玻璃窗，
自然光5600K，明亮通透，ins风少女心，高颜值打卡点，
干净明亮，年轻女性风格，超写实室内摄影
```

---

#### 模板 C3-MilkTea-A2【茶饮制作过程 — 流水线仪式感】

**主题标签：** `#茶饮制作 #流水线 #仪式感 #可视化 #制茶过程 #展示区`

**主体描述：**
开放式吧台视角，奶茶师傅正在调制饮品，手持量杯/茶壶/摇杯，背景为透明流水线操作台（茶叶罐/糖浆瓶整齐排列），有蒸气或冰块特写，整体传达"专业制茶、真材实料、看得到"的信任感。

**环境光线：**
专业吧台灯（4000K色温），从上方均匀打亮操作台，光线偏白无色偏，师傅面部有补光，强调操作动作干净利落。

**风格参考：**
专业制茶可视化（Professional Tea Craft Visualization），参考喜茶制茶过程视频截图感，传递"每一杯都是匠心之作"的价值感。

**技术参数：**

```
# Midjourney
Open bar counter milk tea making process, barista pouring tea from shaker into cup,
transparent preparation counter with neatly arranged tea canisters and syrup bottles,
steam or ice cubes close-up, professional barista in motion, overhead uniform bar lamp 4000K,
clean professional atmosphere, trust-building transparent operation, ultra detailed --ar 16:9 --v 6

# Stable Diffusion
(milk tea making process open bar:1.4), (barista pouring tea:1.3),
(transparent counter tea canisters syrup bottles:1.2), (ice cubes steam:1.1),
professional bar lighting 4000K, overhead uniform, clean professional atmosphere,
transparent operation trust-building, professional craftsmanship, 8K
Negative: messy hidden kitchen, dirty equipment, blurry motion, unprofessional

# 即梦（中文）
开放式吧台奶茶制作过程，调茶师正在将摇杯中的茶倒入杯中，
透明操作台整齐排列茶叶罐和糖浆瓶，冰块蒸汽特写，
专业调茶师动作姿态，专业吧台灯上方均匀4000K打亮，
干净专业氛围，透明化操作信任感，匠心制茶可视化
```

---

#### 模板 C3-MilkTea-A3【窗边下午茶 — 闺蜜聚会】

**主题标签：** `#下午茶 #闺蜜 #奶茶 #聚会 #窗边 #生活感 #打卡`

**主体描述：**
靠窗位置，闺蜜两人/三人对坐，桌上摆满三四杯不同颜色奶茶、甜品（蛋糕/马卡龙/芝士挞），有干花装饰和杂志，阳光照进来有"丁达尔光"效果，窗外城市绿植，整体氛围：精致、有品质、岁月静好，适合发朋友圈。

**环境光线：**
自然窗光（5600K）+ 轻微反光板补光（降低阴影），阳光中有可见光束（God Ray / 丁达尔效应），色温偏暖 4500K，柔焦感，窗外绿植轻微虚化。

**风格参考：**
生活方式摄影（Lifestyle Photography），参考小红书下午茶打卡图，强调"精致生活"的氛围感，闺蜜社交传播属性强。

**技术参数：**

```
# Midjourney
Window-side afternoon tea scene, two friends sitting opposite, multiple colorful milk teas and desserts on table,
cake macarons fruit tarts, dried flower decoration, magazine, sunlight streaming through window with god ray effect,
city green trees outside window slightly blurred, natural daylight 5600K with reflector fill,
warm 4500K, soft focus, lifestyle photography, serene and elegant atmosphere,
Friends gathering aesthetic, ultra detailed --ar 4:3 --v 6

# Stable Diffusion
(window-side afternoon tea friends:1.4), (multiple milk teas desserts:1.3),
(cake macarons:1.2), (dried flowers magazine:1.1), (god ray sunlight:1.2),
window green trees bokeh, natural daylight 5600K reflector fill, warm 4500K,
soft focus, lifestyle photography, serene elegant, friends gathering, 8K
Negative: dark room, crowded messy, low-quality plastic furniture, dull colors

# 即梦（中文）
靠窗下午茶场景，闺蜜两人对坐，桌上摆满不同颜色奶茶和甜品蛋糕马卡龙，
干花装饰和杂志，阳光透过窗户有丁达尔光束效果，
窗外城市绿植轻微虚化，自然窗光5600K加反光板补光，暖色4500K，
柔焦感，生活方式摄影，岁月静好精致氛围，闺蜜聚会打卡感
```

---

### 📣 营销海报

#### 模板 C3-MilkTea-P1【六一儿童节 — 奶茶也可爱】

**主题标签：** `#六一 #儿童节 #奶茶 #可爱 #萌趣 #节日促销 #亲子`

**主体描述：**
萌趣风格，画面主体为一杯超可爱奶茶，杯套为卡通小熊/兔子/小黄鸭造型，顶部有棉花糖或卡通饼干装饰，整体配色为糖果粉+柠檬黄+薄荷绿，画面活泼可爱，底部留白供促销文案。

**环境光线：**
高调明亮（High Key），纯白背景或浅粉背景，均匀打光无阴影，色温 4500K，整体画面干净明亮，像糖果广告。

**风格参考：**
可爱萌趣风（Kawaii / Cute Illustration Style），参考Line Friends联名奶茶、卡通形象品牌视觉，儿童节亲子营销利器。

**技术参数：**

```
# Midjourney
Cute kawaii milk tea cup with cartoon bear bunny duck character cup sleeve,
cotton candy and biscuit decorations on top, candy pink and lemon yellow mint green color palette,
pure white or light pink background, high-key bright lighting, no shadows, 4500K clean bright,
playful and adorable children's day promotional poster, text space at bottom,
commercial product illustration style, ultra vibrant colors --ar 2:3 --v 6

# Stable Diffusion
(cute kawaii milk tea:1.4), (cartoon character cup sleeve bear bunny duck:1.3),
(cotton candy biscuit top:1.2), (candy pink lemon yellow mint green:1.2),
pure white background, high-key bright, no shadows 4500K,
playful adorable childrens day, commercial illustration, ultra vibrant, 8K
Negative: dark dull, adult serious mood, dull corporate colors

# 即梦（中文）
超可爱萌趣奶茶杯，卡通小熊兔子小黄鸭杯套，顶部棉花糖和卡通饼干装饰，
糖果粉柠檬黄薄荷绿配色，纯白或浅粉背景，高调明亮均匀打光无阴影，
4500K干净明亮，活泼可爱六一儿童节促销海报，底部留白供文案，
商业产品插画风格，超高饱和度色彩
```

---

#### 模板 C3-MilkTea-P2【双十一 — 奶茶疯狂购】

**主题标签：** `#双十一 #双11 #奶茶 #购物节 #促销 #打折 #年轻 #狂欢`

**主体描述：**
潮流撞色风格，背景为橙色+紫色渐变（双十一主色），画面中多杯奶茶悬浮排列，
有折扣标签贴附（"买一送一""第二杯半价"），有礼盒/购物袋/红包元素，
整体动感强、有促销感、有节日氛围，适合双十一主会场。

**环境光线：**
撞色光效，橙色光从左上方打（5000K偏暖），紫色光从右下方反射（Neon Glow），
主体奶茶有高光点强调，形成色彩分离效果（Color Split），High Key 高对比。

**风格参考：**
电商购物节风（E-commerce Festival Campaign），参考天猫双十一视觉语言，强调"限时抢购"的紧迫感和"买到就是赚到"的冲动消费心理。

**技术参数：**

```
# Midjourney
Double Eleven shopping festival milk tea promotional poster, orange purple gradient background,
multiple milk tea cups floating and arranged, discount tags buy one get one free,
shopping bags gift boxes, explosive dynamic composition, orange light from upper left 5000K warm,
purple neon glow from lower right, color split lighting effect, high key high contrast,
bottom space for promotional text, energetic commercial campaign --ar 2:3 --v 6

# Stable Diffusion
(Double Eleven milk tea poster:1.4), (orange purple gradient:1.3),
(multiple milk tea cups floating:1.2), (discount tags gift boxes:1.2),
orange upper left 5000K, purple neon lower right, color split lighting,
high key high contrast, energetic commercial, bottom text space, 8K
Negative: dull muted colors, static no energy, corporate boring

# 即梦（中文）
双十一购物节奶茶促销海报，橙色紫色渐变背景，
多杯奶茶悬浮排列，折扣标签买一送一，购物袋礼盒元素，
橙色光左上5000K暖色，紫色霓虹右下，形成色彩分离效果，
高调高对比，动感促销感，底部留白供促销文案，商业视觉冲击力强
```

---

#### 模板 C3-MilkTea-P3【新品上市 — 季节限定】

**主题标签：** `#新品上市 #季节限定 #限定款 #抹茶 #栀花 #春夏季 #品质`

**主体描述：**
季节感强，画面主体为季节限定款饮品（如春日抹茶/夏日栀花），杯身有季节标签，背景为季节元素（春日：樱花/桃花；夏日：柠檬/海浪），整体有品质感、有稀缺感、有"限时品尝"的紧迫性。

**环境光线：**
自然光（5600K）或逆光（Backlight）打亮饮品，制造通透感，背景有季节色彩呼应，色温根据季节调整（春偏暖 4500K，夏偏冷 5000K）。

**风格参考：**
季节限定设计（Seasonal Limited Design），参考星巴克季节杯视觉语言，强调"限定"和"稀缺"，制造收藏价值和社交分享动机。

**技术参数：**

```
# Midjourney
Seasonal limited edition milk tea launch poster, spring matcha or summer gardenia seasonal flavor,
cup with seasonal label, cherry blossom or lemon ocean seasonal background elements,
backlight making drink translucent and fresh, natural daylight 5600K,
spring warm 4500K or summer cool 5000K, premium and exclusive limited edition aesthetic,
bottom text space for limited time, sophisticated commercial --ar 2:3 --v 6

# Stable Diffusion
(seasonal limited milk tea:1.4), (spring matcha summer gardenia:1.3),
(seasonal cup label:1.2), (cherry blossom lemon ocean:1.2),
backlight translucent fresh, natural daylight 5600K, spring 4500K summer 5000K,
premium exclusive limited, scarcity urgency, sophisticated commercial, 8K
Negative: generic year-round menu, dull no seasonal identity, low quality

# 即梦（中文）
季节限定款奶茶上市海报，春日抹茶或夏日栀花季节风味，
杯身有季节标签，春日樱花或夏日柠檬海浪背景元素，
逆光打亮饮品通透新鲜感，自然光5600K，春4500K夏5000K，
品质感稀缺感，限时品尝紧迫性，精制商业海报，底部留白供文案
```

---

### 🏗️ 店铺装修图

#### 模板 C3-MilkTea-S1【奶茶店门头 — 极简ins风】

**主题标签：** `#奶茶店 #门头 #ins风 #极简 #白色系 #高颜值 #辨识度`

**主体描述：**
日间门头视角，纯白或浅灰主色调门头，招牌字体简洁（中文+拼音），一侧有绿植或干花装饰，落地玻璃门有品牌 LOGO 贴纸，背景有天空或街道，整体干净、简约、有品质，ins 打卡感强。

**环境光线：**
自然日光（5600K），正面或45°角打亮门头，无强阴影，门头发光字或立体字有光效，色温 4500K，画面通透。

**风格参考：**
极简ins风（Minimalist Instagram Aesthetic），参考喜茶LAB店、%Arabica咖啡门头，传递"这品牌有品味"的信号。

**技术参数：**

```
# Midjourney
Daytime milk tea shop facade, pure white light gray main color scheme,
minimalist logo with Chinese and pinyin text, one side green plants or dried flowers,
glass door with brand logo sticker, natural daylight 5600K front or 45 degree angle,
no strong shadows, illuminated logo text, 4500K warm natural, clean simple premium,
sky or street background, minimalist Instagram aesthetic, Douyin check-in facade --ar 9:16 --v 6

# Stable Diffusion
(milk tea shop minimalist facade:1.4), (white gray color scheme:1.2),
(minimalist logo Chinese pinyin:1.2), (green plants dried flowers:1.0),
glass door brand logo, natural daylight 5600K, 4500K warm natural,
clean simple premium, sky street background, minimalist Instagram aesthetic, 8K
Negative: dark colorful cluttered, traditional red gold, cheap banner sign

# 即梦（中文）
日间奶茶店门头，纯白浅灰主色调，简约招牌中文拼音，
一侧绿植或干花装饰，落地玻璃门有品牌LOGO贴纸，
自然日光5600K正面或45度角，无强阴影，发光字有光效，
色温4500K通透干净，极简ins风格，天空或街道背景，高颜值打卡门头
```

---

#### 模板 C3-MilkTea-S2【菜单灯箱 — 品牌视觉统一】

**主题标签：** `#菜单灯箱 #奶茶 #品牌视觉 #统一 #点单 #展示`

**主体描述：**
竖版/横版菜单灯箱设计稿，主视觉为品牌 LOGO 和标准色，分类展示：招牌奶茶/水果茶/奶盖茶/特调，每个品类有代表性图片图标，底部有价格区间，整体风格与店铺品牌系统统一，灯箱效果（边框发光）。

**风格参考：**
品牌系统设计（Brand System Design），灯箱需要远距离可读、文字清晰、品牌色标准，参考喜茶、一点点、CoCo菜单灯箱。

**技术参数：**

```
# Midjourney
Milk tea shop menu lightbox design, brand logo and standard color scheme,
vertical or horizontal format, categories signature milk tea fruit tea cheese foam tea specialty,
representative icons and photos per category, price range at bottom,
unified brand identity, illuminated lightbox effect glowing border,
clean readable typography, brand system design, commercial signage --ar 3:4 --v 6

# Stable Diffusion
(milk tea menu lightbox design:1.4), (brand logo standard color:1.3),
(vertical horizontal format:1.1), (categories icons:1.2), price range,
unified brand identity, illuminated lightbox glowing border,
clean readable typography, brand system design, commercial signage, 8K
Negative: messy illegible text, inconsistent brand colors, low resolution

# 即梦（中文）
奶茶店菜单灯箱设计稿，品牌LOGO和标准色系，
竖版或横版格式，分类展示招牌奶茶水果茶奶盖茶特调，
每品类代表性图标和图片，底部价格区间，
品牌视觉系统统一，灯箱边框发光效果，
字体规范清晰可读，商业标识设计感，品牌统一风格
```

---

#### 模板 C3-MilkTea-S3【品牌周边展示角】

**主题标签：** `#品牌周边 #展示角 #生活态度 #品牌溢价 #周边产品 #联名`

**主体描述：**
品牌周边展示墙/台，有品牌联名款杯子、环保袋、手机壳、贴纸、钥匙扣等周边产品陈列，品牌色统一，射灯打亮，整体传达"这个品牌有态度，我愿意为它买单"的品牌价值感。

**环境光线：**
Gallery Spotlight 射灯精准打亮每个周边产品，背景为品牌标准色或纯白/纯灰，色温 4000K，画面层次分明、有品质感。

**风格参考：**
品牌周边陈列风（Brand Merchandise Display），参考泡泡玛特、优衣库UT联名陈列，传递品牌文化价值和年轻人的"圈层认同"。

**技术参数：**

```
# Midjourney
Brand merchandise display corner, co-branded cups tote bags phone cases stickers keychains,
brand standard color unified display, gallery spotlights illuminating each item,
brand standard color or pure white gray background, 4000K gallery lighting,
layered and premium quality, brand culture and lifestyle attitude display,
brand value and younger generation identity, commercial display design --ar 9:16 --v 6

# Stable Diffusion
(brand merchandise display:1.4), (co-branded products cups bags phone cases:1.3),
(stickers keychains:1.1), (brand standard color unified:1.2),
gallery spotlights, brand color or white gray background, 4000K gallery lighting,
layered premium, brand culture lifestyle attitude, brand value identity, 8K
Negative: messy random products, inconsistent brand colors, discount sale clutter

# 即梦（中文）
品牌周边展示角，联名款杯子环保袋手机壳贴纸钥匙扣，
品牌标准色统一陈列，射灯精准打亮每个周边产品，
品牌标准色或纯白纯灰背景，4000K展厅灯照明，
层次分明有品质感，品牌文化生活态度展示，品牌溢价价值感
```

---

### 📺 直播背景图

#### 模板 C3-MilkTea-L1【奶茶店直播间背景 — 高颜值 ins 风】

**主题标签：** `#奶茶 #直播背景 #ins风 #高颜值 #抖音直播 #品牌感 #少女`

**主体描述：**
竖版直播间背景（9:16），ins风奶茶店内景，一侧有粉色/白色沙发和绿植背景墙，
另一侧有品牌 LOGO 和今日推荐饮品陈列（逼真3D渲染风格或实拍饮品），
顶部有串灯或纸鹤装饰，底部有品牌二维码和促销信息栏，
整体：高颜值、品牌感强、让人想进店。

**环境光线：**
室内柔和光（3500K），均匀无阴影，有补光灯从正面打亮背景（确保手机摄像头效果），整体明亮干净。

**风格参考：**
抖音奶茶直播风（Milk Tea Douyin Live Stream），参考喜茶、奈雪直播间背景设计，品牌视觉优先。

**技术参数：**

```
# Midjourney
Milk tea shop Douyin live stream backdrop vertical 9:16, ins aesthetic interior,
pink white sofa and green plant accent wall on one side,
other side brand LOGO and today's recommended drinks display,
string lights or paper crane decorations on top,
brand QR code and promotion bar at bottom, soft indoor 3500K fill lighting,
bright and clean, high aesthetic brand sense, youth-oriented --ar 9:16 --v 6

# Stable Diffusion
(milk tea live backdrop:1.4), (ins aesthetic interior:1.3),
(pink white sofa green plants:1.2), (brand LOGO drinks display:1.2),
string lights paper cranes, brand QR promotion bar, soft 3500K fill light,
bright clean, high aesthetic, youth brand oriented, Douyin vertical, 8K
Negative: dark dull background, discount clutter, messy no brand identity

# 即梦（中文）
奶茶店抖音直播间背景竖版，ins风奶茶店内景，
一侧粉色白色沙发和绿植背景墙，
另一侧品牌LOGO和今日推荐饮品陈列，
顶部串灯或纸鹤装饰，底部品牌二维码促销信息栏，
室内柔和3500K均匀无阴影，补光灯正面打亮背景，
明亮干净，高颜值品牌感，年轻化导向，抖音竖版直播背景
```

---

## 1.4 快餐

### 🖼️ 商品主图

#### 模板 C4-FastFood-M1【汉堡薯条套餐 — 美式经典】

**主题标签：** `#快餐 #汉堡薯条 #套餐 #外卖主图 #经典美式 #食欲感 #大众点评`

**主体描述：**
45° 俯视角，经典汉堡置于中央，薯条整齐排列在旁，汉堡切面可见肉饼/生菜/芝士/酱汁层叠，有番茄片和生菜叶子微微露出，背景为美式快餐风格（红白格子桌布或纯色背景），画面有食欲感。

**环境光线：**
三点布光（Three-point Lighting），主光侧上方 45°，补光对面，次光打亮顶部，色温 4000K，强调汉堡层次和薯条金黄色。

**风格参考：**
美式快餐摄影（American Fast Food Photography），参考麦当劳/汉堡王广告图，高饱和度、金黄色薯条、焦化汉堡面包，强调"热量炸弹"的食欲感。

**技术参数：**

```
# Midjourney
45-degree overhead classic burger and fries combo, burger cut showing layered beef patty lettuce cheese sauce,
tomato slice and lettuce peeking out, golden crispy fries arranged neatly,
red white gingham or solid color background, three-point lighting key upper 45,
fill light opposite, top light, 4000K, high saturation, appetizing fast food photography --ar 4:5 --v 6

# Stable Diffusion
(classic burger fries combo:1.4), (burger cut showing layers:1.3),
(golden crispy fries:1.2), (red white gingham background:1.0),
three-point lighting 4000K, high saturation, appetizing fast food,
american fast food photography, ultra detailed, 8K
Negative: dark image, blurry, gray dull colors, low quality

# 即梦（中文）
45度俯视经典汉堡薯条套餐，汉堡切面可见肉饼生菜芝士酱汁层层分明，
番茄片生菜叶微微露出，金黄酥脆薯条整齐排列，
红白格子或纯色背景，三点布光侧上方主光补光，色温4000K，
高饱和度，汉堡薯条快餐摄影，食欲感强，超写实细节
```

---

#### 模板 C4-FastFood-M2【炸鸡全家桶 — 大份量派对款】

**主题标签：** `#炸鸡 #全家桶 #大份量 #派对 #聚餐 #分享装 #外卖 #食欲感`

**主体描述：**
鸟瞰视角，大型全家桶/鸡桶置于中央，桶内整齐排列各种炸鸡（鸡翅/鸡腿/鸡块），桶身有品牌 LOGO，炸鸡表面金黄酥脆，有油光，桶旁有薯条/鸡米花/蘸料杯，背景虚化，整体大份量感强，适合聚餐分享场景。

**环境光线：**
顶置柔光（Overhead Softbox），均匀打亮全家桶整体，色温 4000K，炸鸡表面有高光点强调酥脆感。

**风格参考：**
大份量分享风（Shareable Family Feast），参考肯德基/麦当劳全家桶视觉语言，强调"够大够满足"。

**技术参数：**

```
# Midjourney
Overhead view of large fried chicken family bucket, assorted fried chicken wings drumsticks and nuggets neatly arranged,
bucket with brand LOGO, golden crispy fried chicken with oil sheen,
side of fries chicken nuggets and dipping sauce cups, background bokeh,
overhead softbox lighting 4000K, high saturation, large portion feast feeling,
family gathering shareable, appetizing commercial photography --ar 4:3 --v 6

# Stable Diffusion
(fried chicken family bucket:1.4), (assorted fried chicken wings drumsticks nuggets:1.3),
(brand LOGO bucket:1.2), (golden crispy oil sheen:1.2), (fries nuggets dipping:1.0),
overhead softbox 4000K, high saturation, large portion feast, family gathering, appetizing, 8K
Negative: small portion, dull gray chicken, dark moody, blurry

# 即梦（中文）
鸟瞰大型炸鸡全家桶，整齐排列各种炸鸡翅炸鸡腿鸡块，
桶身品牌LOGO，炸鸡表面金黄酥脆有油光，
桶旁薯条鸡米花蘸料杯，背景虚化，
顶置柔光4000K均匀打亮，高饱和度，大份量聚餐分享感，食欲感商业摄影
```

---

#### 模板 C4-FastFood-M3【儿童餐 — 萌趣卡通】

**主题标签：** `#儿童餐 #快餐 #卡通 #萌趣 #亲子 #薯条汉堡 #可爱 #玩具`

**主体描述：**
儿童餐视角，可爱卡通造型的儿童套餐盒（薯条+鸡块+果汁/牛奶），配有儿童玩具（迷你公仔/小汽车），色彩鲜艳明亮（红黄蓝绿），画面简洁可爱，背景为纯色或卡通图案，整体有"带孩子来"的吸引力。

**环境光线：**
高调明亮（High Key），纯白或浅色背景，均匀打光无阴影，色温 4500K，画面干净像儿童产品广告。

**风格参考：**
儿童产品摄影（Kids Product Photography），参考麦当劳开心乐园餐视觉，萌趣、安全、干净、色彩丰富。

**技术参数：**

```
# Midjourney
Kids meal box with cartoon design, fries chicken nuggets juice in cute colorful packaging,
small toy figure or mini car included, bright red yellow blue green colors,
pure white background, high-key bright even lighting no shadows, 4500K,
clean bright child-friendly commercial photography, playful and adorable,
kid appeal marketing material --ar 4:5 --v 6

# Stable Diffusion
(kids cartoon meal box:1.4), (fries nuggets juice colorful:1.3),
(mini toy figure car:1.2), (bright red yellow blue green:1.2),
pure white background, high-key bright 4500K, no shadows,
clean child-friendly, playful adorable, kid appeal, commercial photography, 8K
Negative: dark image, dull colors, adult-oriented, scary cartoon characters

# 即梦（中文）
卡通造型儿童套餐盒，薯条鸡块果汁鲜艳色彩可爱包装，
配有迷你玩具公仔小汽车，明亮红黄蓝绿色彩，
纯白背景，高调明亮均匀无阴影，色温4500K，
干净明亮儿童友好，萌趣可爱，儿童吸引力强，儿童餐商业摄影
```

---

### 🏠 场景氛围图

#### 模板 C4-FastFood-A1【快餐门店 — 明亮标准连锁风】

**主题标签：** `#快餐店 #明亮 #标准连锁 #门店展示 #干净 #效率 #客流量`

**主体描述：**
快餐连锁店内景，标准化装修（品牌标准色+标准字体），开放式点餐台和取餐区，菜单灯箱明亮，地面干净，墙面有品牌海报，整体传达"标准、干净、效率"的快餐品牌属性。

**环境光线：**
室内均匀照明（LED 面板灯 4000K），无阴影，明亮如昼，色温中性偏白，整体画面清晰、干净、品牌感强。

**风格参考：**
标准化连锁风（Chain Standard Store Design），参考麦当劳、肯德基标准门店视觉，传达连锁品牌的可信赖感和一致性。

**技术参数：**

```
# Midjourney
Fast food chain restaurant interior, standardized brand color scheme and signage,
open ordering counter and pickup area, bright menu lightbox, clean floor,
brand posters on walls, uniform LED panel lighting 4000K, shadowless bright interior,
clean professional brand atmosphere, standard chain store photography --ar 16:9 --v 6

# Stable Diffusion
(fast food chain interior:1.4), (standardized brand color:1.3),
(open ordering counter:1.2), (bright menu lightbox:1.2), clean floor brand posters,
uniform LED 4000K, shadowless bright, clean professional brand, standard chain store, 8K
Negative: dark interior, dirty messy, old worn, inconsistent brand

# 即梦（中文）
快餐连锁店内景，标准化品牌色系和标识装修，
开放式点餐台和取餐区，明亮菜单灯箱，干净地面，
墙面品牌海报，LED面板灯均匀4000K照明，无阴影明亮如昼，
干净专业品牌感，标准连锁店视觉，传达可信赖一致性
```

---

#### 模板 C4-FastFood-A2【得来速/汽车餐厅 — 美式 drive-through】

**主题标签：** `#得来速 #drive-through #汽车餐厅 #美式 #便利 #快速 #创意门店`

**主体描述：**
美式得来速（Drive-through）视角，餐厅外观有车道直通点餐窗口，窗口处有服务人员或汽车正在取餐，夜晚有霓虹 LOGO 亮起，整体传达"便捷、快速、24小时服务"的美式快餐文化。

**环境光线：**
夜间视角为主，暖黄灯光从窗口透出，霓虹 LOGO 发光（Neon Glow），背景为城市夜色，色温混合（室内暖黄 3000K + 夜间蓝黑 7000K）。

**风格参考：**
美式得来速文化（American Drive-through Culture），参考美国快餐得来速视觉，有美国公路文化感，传递"便捷生活"的价值。

**技术参数：**

```
# Midjourney
American drive-through fast food restaurant at night, car on drive-through lane at service window,
service window with warm light spilling out, neon brand LOGO glowing,
city night background, warm window light 3000K mixed with night sky 7000K,
warm and cool mixed lighting, American fast food culture, convenience and speed atmosphere,
cinematic urban night photography --ar 16:9 --style cinematic --v 6

# Stable Diffusion
(American drive-through restaurant night:1.4), (car at service window:1.3),
(warm window light 3000K:1.2), (neon brand LOGO:1.2), (city night:1.0),
warm 3000K cool 7000K mixed, warm cool contrast, American drive-through culture,
convenience speed, cinematic urban night, 8K
Negative: daytime bright, interior dark, no neon, boring plain

# 即梦（中文）
夜间美式得来速快餐店，汽车行驶在得来速车道服务窗口处，
服务窗口暖黄灯光透出，品牌霓虹LOGO发光，
城市夜色背景，窗口暖色3000K与夜空7000K混合光，
冷暖对比，美式得来速文化，便捷快速服务氛围，电影感城市夜景
```

---

#### 模板 C4-FastFood-A3【儿童生日会 — 家庭聚餐场景】

**主题标签：** `#快餐 #儿童生日会 #家庭聚餐 #亲子 #欢乐 #节日感 #派对`

**主体描述：**
快餐店内生日会场景，彩色气球和生日横幅装饰，长桌上摆满汉堡、薯条、鸡块、饮料，
几个儿童围坐，头上戴着生日帽，有生日蛋糕或冰淇淋，整体氛围：欢乐、热闹、色彩丰富，
传达"带孩子来办生日会"的营销价值。

**环境光线：**
室内暖光（3500K），气球和彩带有彩色补光（增加节日氛围），整体明亮欢快，有气球虚化背景。

**风格参考：**
家庭欢聚餐风（Family Celebration），参考麦当劳生日派对套餐视觉，欢乐、童趣、家庭感。

**技术参数：**

```
# Midjourney
Fast food restaurant birthday party scene, colorful balloons and birthday banner decorations,
long table with burgers fries chicken nuggets and drinks, children seated wearing birthday hats,
birthday cake or ice cream, festive atmosphere, indoor warm 3500K lighting,
colorful balloon fill light, bright cheerful festive mood, joyful family celebration,
birthday party commercial photography --ar 16:9 --v 6

# Stable Diffusion
(fast food birthday party:1.4), (colorful balloons banner:1.3),
(burgers fries nuggets drinks:1.2), (children birthday hats:1.2), (cake ice cream:1.1),
indoor warm 3500K, colorful balloon fill, bright cheerful festive,
joyful family celebration, birthday party commercial, 8K
Negative: empty restaurant, dull colors, sad mood, dark interior

# 即梦（中文）
快餐店儿童生日会场景，彩色气球和生日横幅装饰，
长桌上摆满汉堡薯条鸡块饮料，几个儿童围坐头发生日帽，
有生日蛋糕冰淇淋，室内暖光3500K，气球彩带彩色补光，
明亮欢快节日氛围，欢乐热闹家庭感，儿童生日会商业摄影
```

---

### 📣 营销海报

#### 模板 C4-FastFood-P1【工作日午餐 — 打工人特惠】

**主题标签：** `#工作日午餐 #打工 #特惠 #快餐 #便宜 #方便 #效率 #打工人`

**主体描述：**
现代都市风格，画面为一份工作日特惠套餐（汉堡+薯条+饮料），旁边有白领电脑/记事本/咖啡杯，
背景为城市写字楼或办公室窗户，色调偏灰蓝（都市冷调），文案："工作日午餐，只需XX元"。
整体：都市感强、性价比高、解决"中午吃什么"的痛点。

**环境光线：**
都市冷调光（Office Light 5000K），侧窗光打人像或套餐，背景为城市高楼虚化，色温偏冷 5000K，有都市白领工作节奏感。

**风格参考：**
都市工作餐风（Urban Work Lunch），参考美团/饿了么工作餐专题视觉，解决都市打工人中午效率用餐需求，强调"便宜+快+好吃"。

**技术参数：**

```
# Midjourney
Urban workday lunch deal poster, combo meal burger fries drink on office desk with laptop coffee notebook,
city office building windows background slightly blurred, gray blue urban cool tones,
modern metropolitan style, text space for price deal, office light 5000K side window,
cool metropolitan tones, efficiency and value proposition, urban worker lifestyle,
commercial work lunch marketing --ar 2:3 --v 6

# Stable Diffusion
(workday lunch deal urban:1.4), (burger fries drink combo:1.3),
(laptop coffee notebook:1.2), (city office background blurred:1.1),
gray blue urban tones, office light 5000K side window, cool metropolitan,
modern urban worker, efficiency value, commercial workday lunch, 8K
Negative: warm festive colors, rural background, expensive high-end, unclear deal

# 即梦（中文）
都市工作日午餐特惠海报，汉堡薯条饮料套餐配白领电脑咖啡记事本，
城市写字楼窗户背景虚化，灰蓝色都市冷调，
现代都市风格，底部留白供价格文案，窗光5000K侧光，
都市冷色调，效率价值感，解决打工人中午吃什么痛点，工作午餐商业营销
```

---

#### 模板 C4-FastFood-P2【周年庆 — 快乐回忆风】

**主题标签：** `#周年庆 #快餐 #快乐 #回忆 #复古 #情怀 #品牌 #故事感`

**主体描述：**
复古怀旧风，画面为老式快餐店场景（80年代/90年代风格），有汉堡可乐薯条，
背景为老式电视/收音机/街机游戏机元素，色调偏暖棕黄色（Vintage Warm Tone），
文案："XX年，只为让你快乐"，整体有情感价值，唤起品牌陪伴成长的回忆。

**环境光线：**
老式暖光（2800K），类似老照片质感（Film Grain），背景有老式物件虚化，整体怀旧温馨。

**风格参考：**
复古怀旧风（Retro Nostalgia），参考麦当劳/肯德基品牌历史回顾视觉，强调"品牌陪伴一代人成长"的情感价值。

**技术参数：**

```
# Midjourney
Retro vintage fast food anniversary poster, 1980s or 1990s style fast food restaurant scene,
burgers cola fries, old TV radio arcade game machines in background,
warm brown-yellow vintage tones, film grain texture, nostalgic warm lighting 2800K,
old objects blurred background, emotional brand storytelling, brand anniversary celebration,
handwritten vintage style text --ar 2:3 --v 6

# Stable Diffusion
(retro vintage fast food anniversary:1.4), (80s 90s style restaurant:1.3),
(burgers cola fries:1.2), (old TV radio arcade background:1.2),
warm brown-yellow vintage tones, film grain, nostalgic 2800K, old objects bokeh,
emotional brand storytelling, anniversary celebration, vintage handwritten, 8K
Negative: modern sleek design, bright white, corporate cold tone, no emotion

# 即梦（中文）
复古怀旧快餐周年庆海报，80年代或90年代风格快餐店场景，
汉堡可乐薯条，背景有老式电视收音机街机游戏机元素，
暖棕黄色复古色调，胶片颗粒感，老式暖光2800K，
老物件虚化背景，品牌情感叙事，周年庆庆祝，怀旧温馨手写风格
```

---

#### 模板 C4-FastFood-P3【新品上市 — 汉堡挑战】

**主题标签：** `#新品上市 #汉堡挑战 #巨型汉堡 #夸张 #眼球效应 #话题性 #打卡`

**主体描述：**
眼球效应画面，一口超巨型汉堡（高度超过人物嘴巴），汉堡层次丰富（面包/肉饼/芝士/培根/生菜/番茄/酱汁层叠可见），色彩夸张（深棕面包/红润肉饼/金黄芝士），画面有冲击力，让人产生"我也能吃完吗？"的挑战欲。

**环境光线：**
Studio 高强度正面光（High-key Studio），均匀打亮巨型汉堡整体，无阴影，色温 4000K，整体像商业广告大片。

**风格参考：**
汉堡挑战视觉（Burger Challenge Visual），参考各类网红汉堡挑战视频封面，有话题性和传播力。

**技术参数：**

```
# Midjourney
Giant oversized burger challenge visual, burger taller than human mouth, layered bun beef patty
cheese bacon lettuce tomato sauce, dramatic layers visible, exaggerated deep brown bun red meat patty
golden cheese, high-intensity studio front lighting, shadowless even light 4000K,
commercial advertisement大片 quality, eye-catching dramatic food photography,
topic and shareable challenge visual --ar 2:3 --v 6

# Stable Diffusion
(giant oversized burger challenge:1.4), (burger taller than mouth:1.3),
(layers bun patty cheese bacon lettuce tomato:1.3),
dramatic exaggerated colors, high-intensity studio front light, shadowless 4000K,
commercial大片 quality, eye-catching dramatic, shareable challenge, 8K
Negative: small normal burger, dark lighting, dull colors, unappetizing

# 即梦（中文）
超巨型汉堡挑战视觉，汉堡比嘴巴还高，面包肉饼芝士培根生菜番茄酱汁层层分明，
夸张色彩深棕面包红润肉饼金黄芝士，高强度影棚正面光均匀打亮无阴影，
商业广告大片质感，眼球效应话题性强，汉堡挑战可传播视觉
```

---

### 🏗️ 店铺装修图

#### 模板 C4-FastFood-S1【快餐店门头 — 标准连锁感】

**主题标签：** `#快餐店 #门头 #标准连锁 #辨识度 #品牌色 #简洁 #快餐`

**主体描述：**
快餐连锁标准化门头，品牌 LOGO 和标准色为主（红/黄/白），招牌字体规范，玻璃门干净透亮，背景为城市街景，整体简洁、标准、有辨识度。

**环境光线：**
自然日光（5600K）或傍晚暖光（4500K），正面或45°角打亮门头，无强阴影，品牌 LOGO 有发光效果。

**风格参考：**
标准化连锁门头（Chain Store Facade Standard），参考麦当劳、肯德基门头，传达连锁品牌的统一性和可信赖感。

**技术参数：**

```
# Midjourney
Fast food chain standardized facade, brand LOGO and standard colors red yellow white,
specification signage, clean transparent glass door, city street background,
natural daylight 5600K or evening warm 4500K, front or 45 degree angle, no strong shadows,
illuminated brand LOGO, clean simple recognizable, chain store facade standard --ar 9:16 --v 6

# Stable Diffusion
(fast food chain facade:1.4), (brand LOGO standard red yellow white:1.3),
(specification signage:1.2), (clean glass door:1.1), city street,
natural daylight 5600K, illuminated LOGO, clean simple recognizable, chain standard, 8K
Negative: messy cluttered, inconsistent brand colors, old worn sign

# 即梦（中文）
快餐连锁标准化门头，品牌LOGO和标准色红黄白，
招牌字体规范，玻璃门干净透亮，城市街景背景，
自然日光5600K正面或45度角，无强阴影，品牌LOGO发光效果，
简洁标准高辨识度，标准化连锁门头，传达统一性和可信赖感
```

---

#### 模板 C4-FastFood-S2【得来速点餐窗口指示系统】

**主题标签：** `#得来速 #点餐窗口 #指示系统 #导视 #汽车餐厅 #导视牌 #设计`

**主体描述：**
得来速点餐区域指示设计，包含：入口指示 → 点餐窗口 → 取餐窗口 → 出口，颜色明亮（黄/绿），图形简洁直观（箭头/车牌图标），材质为反光膜（夜间可见），适合制作立柱标识牌。

**风格参考：**
交通指示系统设计（Traffic Guidance System Design），参考高速公路服务区和得来速视觉语言，需要远距离可读、图形直观、颜色鲜明。

**技术参数：**

```
# Midjourney
Drive-through ordering guidance sign system, entrance arrow to ordering window to pickup to exit,
bright yellow green color scheme, simple intuitive graphics arrows car icons,
reflective material for night visibility, tall pole signage design,
traffic guidance system aesthetic, fast food drive-through functional design --ar 3:4 --v 6

# Stable Diffusion
(drive-through guidance sign system:1.4), (entrance ordering pickup exit:1.3),
(bright yellow green:1.2), (arrow car icons:1.2), (reflective material:1.1),
tall pole signage, traffic guidance system, simple intuitive, fast food functional, 8K
Negative: complex confusing design, low contrast colors, non-standard

# 即梦（中文）
得来速点餐导视系统设计，入口箭头到点餐窗口到取餐窗口到出口，
明亮黄绿色系，图形简洁直观箭头车牌图标，
反光膜材质夜间可见，立柱标识牌设计，
交通导视系统美学，快餐功能导向设计，远距离可读直观
```

---

### 📺 直播背景图

#### 模板 C4-FastFood-L1【快餐直播背景 — 明快欢乐】

**主题标签：** `#快餐 #直播背景 #明快 #欢乐 #家庭 #抖音直播 #引流`

**主体描述：**
竖版快餐店直播间背景，明亮店内景，一侧为开放式厨房和取餐台（有员工服务画面），
另一侧为品牌 LOGO 和促销信息，左右预留主播位，
整体明亮、欢乐、有食欲感，品牌感强。

**环境光线：**
室内均匀 LED 照明（4000K），正面补光灯确保主播面部光线充足，整体明亮干净，色温中性偏暖。

**风格参考：**
快餐直播间标准背景（Fast Food Live Stream Standard），参考麦当劳、肯德基直播背景，强调"欢乐+品牌+促销"三大要素。

**技术参数：**

```
# Midjourney
Fast food restaurant Douyin live stream backdrop vertical 9:16, bright interior,
one side open kitchen and pickup counter with staff serving,
other side brand LOGO and promotion information, left right streamer space reserved,
bright LED 4000K uniform lighting, front fill light for streamer face,
bright cheerful brand-oriented, joyful appetizing, commercial live stream --ar 9:16 --v 6

# Stable Diffusion
(fast food live backdrop:1.4), (bright interior:1.3),
(open kitchen pickup counter staff:1.2), (brand LOGO promotion:1.2),
streamer space reserved, bright LED 4000K, front fill light,
bright cheerful, brand-oriented, joyful appetizing, commercial live, 8K
Negative: dark interior, dull atmosphere, no brand identity, cluttered

# 即梦（中文）
快餐店抖音直播间背景竖版，明亮店内景，
一侧开放式厨房取餐台有员工服务，另一侧品牌LOGO促销信息，
左右预留主播位，室内LED均匀4000K照明，
正面补光灯确保主播面部光线，明亮欢乐品牌感强，食欲感，商业直播
```

---

## 1.5 烘焙

### 🖼️ 商品主图

#### 模板 C5-Bakery-M1【奶油蛋糕特写 — 丝滑质感】

**主题标签：** `#烘焙 #奶油蛋糕 #商品主图 #丝滑 #精致 #外卖 #生日 #食欲感`

**主体描述：**
45° 俯视角，切开或不切开的奶油蛋糕置于白色/浅色盘子，奶油表面光滑有光泽（无明显纹理，Swiss Meringue 或日式奶油风格），顶部有水果（草莓/蓝莓/芒果）或鲜花装饰，有轻微冷凝水珠，背景简洁干净。

**环境光线：**
顶置柔光（Overhead Softbox），向下打亮奶油高光，色温 4000K，奶油表面有细微反光点，强调丝滑质感。

**风格参考：**
日式洋菓子风（Japanese Western Confectionery），参考Lady M、半岛酒店蛋糕视觉，强调精致、干净、高品质。

**技术参数：**

```
# Midjourney
45-degree angle奶油蛋糕奶油蛋糕特写，表面光滑有光泽日式奶油风格，
顶部草莓蓝莓芒果水果或鲜花装饰，冷凝水珠，浅色盘子，
顶置柔光4000K向下打亮奶油高光，背景简洁纯白，
丝滑质感高光点强调，日式洋菓子精致感，食欲感产品
# Midjourney
45-degree overhead奶油蛋糕特写，表面光滑有光泽日式奶油，顶部草莓蓝莓水果装饰，
冷凝水珠，浅色盘子，顶置柔光4000K向下打亮，背景简洁纯白，
丝滑质感高光点，日式洋菓子精致感，产品摄影超写实细节 --ar 4:5 --style photo --v 6

# Stable Diffusion
(cream cake close-up:1.4), (smooth glossy cream surface:1.3), (Japanese Swiss meringue style:1.2),
(strawberry blueberry mango garnish:1.2), condensation drops, light colored plate,
overhead softbox 4000K, highlight on cream, clean white background, silky smooth texture,
Japanese western confectionery elegant aesthetic, ultra detailed product photography, 8K
Negative: rough textured buttercream, dull colors, cluttered background, cheap look

# 即梦（中文）
45度俯视奶油蛋糕特写，表面光滑有光泽日式奶油风格，
顶部草莓蓝莓芒果水果或鲜花装饰，有冷凝水珠，浅色盘子托底，
顶置柔光4000K向下打亮奶油高光，背景简洁纯白，
丝滑质感有光泽，日式洋菓子精致感，产品摄影超写实细节
```

---

#### 模板 C5-Bakery-M2【法棍/可颂 — 裂纹质感】

**主题标签：** `#烘焙 #法棍 #可颂 #牛角包 #裂纹质感 #外酥内软 #匠心 #品质`

**主体描述：**
45° 俯视角，新鲜出炉的法棍或可颂面包置于木板/藤编篮，表面有焦褐色裂纹，
面包切面可见气孔纹理和奶油层次（金黄/棕褐），有少量面粉撒在表面，
热气轻微升腾（暗示新鲜出炉），背景为自然纹理（木板/麻布）。

**环境光线：**
侧窗自然光（Window Light 4500K）斜照，制造面包表面裂纹阴影层次，色温偏暖 3500K，强调"新鲜出炉"的时间感和"外酥内软"质感。

**风格参考：**
欧式面包摄影（European Artisan Bread Photography），参考巴黎蓝带面包店摄影风格，强调原料、工艺、时间感。

**技术参数：**

```
# Midjourney
45-degree angle fresh baguette or croissant on wooden board, golden brown crust with crack texture,
cross-section showing airy holes and butter layers, light flour dusting on surface,
slight steam rising indicating freshness, natural wood linen background,
side window natural light 4500K casting shadow layers on crust, warm 3500K,
artisan bread photography, fresh warm golden tones, ultra detailed --ar 4:5 --v 6

# Stable Diffusion
(fresh baguette or croissant:1.4), (golden brown crust crack texture:1.3),
(cross-section airy holes butter layers:1.2), (flour dusting steam:1.1),
wooden board linen background, side window natural light 4500K, warm 3500K,
European artisan bread photography, fresh warm golden, rustic charm, ultra detailed, 8K
Negative: stale bread, gray dull crust, plastic wrap, modern kitchen background

# 即梦（中文）
45度俯视新鲜出炉法棍或可颂面包，置于木板表面焦褐裂纹质感，
切面可见气孔纹理和奶油层层分明，少量面粉撒表面，
热气轻微升腾暗示新鲜出炉，木板麻布背景，
侧窗自然光4500K斜照制造阴影层次，色温偏暖3500K，
欧式匠心面包摄影，新鲜温暖金黄色调，超写实细节
```

---

#### 模板 C5-Bakery-M3【马卡龙礼盒 — 精致高颜值】

**主题标签：** `#烘焙 #马卡龙 #礼盒 #精致 #高颜值 #伴手礼 #下午茶 #少女`

**主体描述：**
俯视视角，打开的精致马卡龙礼盒，各色马卡龙整齐排列（莫兰迪色系：抹茶绿/玫瑰粉/柠檬黄/薰衣草紫），每枚有细腻裙边（ pieds ），礼盒内衬缎带丝绸，整体包装高档有仪式感。

**环境光线：**
顶置柔光（4000K），均匀打亮礼盒整体，无阴影，缎带有高光点，色温偏中性，画面精致干净。

**风格参考：**
法式精致风（French Luxury Confectionery），参考Pierre Hermé、Ladurée马卡龙视觉，强调"送礼有面子"的仪式感。

**技术参数：**

```
# Midjourney
Overhead view of open macaron gift box, assorted macarons in pastel palette green pink yellow purple,
each macaron with delicate ruffled feet, satin ribbon lining inside box, luxury gift packaging,
overhead soft light 4000K, even illumination no shadows, ribbon highlight points,
clean refined elegant, French luxury confectionery aesthetic, ultra detailed premium product --ar 4:5 --v 6

# Stable Diffusion
(macaron gift box open:1.4), (assorted pastel macarons:1.3), (delicate ruffled feet:1.2),
(satin ribbon lining:1.2), luxury gift packaging, overhead soft 4000K, even no shadows,
ribbon highlight, clean refined elegant, French luxury confectionery, ultra detailed premium, 8K
Negative: cheap plastic box, dull faded colors, rough edges, messy arrangement

# 即梦（中文）
俯视打开的马卡龙精致礼盒，各色马卡龙莫兰迪色系整齐排列，
抹茶绿玫瑰粉柠檬黄薰衣草紫，每枚有细腻裙边，
礼盒内衬缎带丝绸，高档包装有仪式感，
顶置柔光4000K均匀无阴影，缎带有高光点，
法式精致风，高端伴手礼，画面精致干净高档
```

---

### 🏠 场景氛围图

#### 模板 C5-Bakery-A1【法式面包店 — 街角小店】

**主题标签：** `#面包店 #法式 #街角 #氛围 #烟火气 #温暖 #门店展示 #打卡`

**主体描述：**
街角面包店视角，木质橱窗陈列面包和糕点，门口有黑板手写菜单和花篮装饰，
暖黄灯光从窗户透出，背景为法国梧桐街道，门口有顾客正在选购，
整体氛围：温暖、精致、有故事感，让人想要走进去。

**环境光线：**
傍晚暖光（Window Glow 2800K）为主，室内暖光与傍晚天光混合（蓝紫+橙黄），
形成"橱窗光"效果，面包在暖光中金黄诱人。

**风格参考：**
法式街角面包店风（French Street Bakery），参考巴黎街角面包店、LA法式烘焙氛围，追求"路过就想进去"的冲动感。

**技术参数：**

```
# Midjourney
French street corner bakery facade, wooden display window with breads and pastries,
hand-written chalkboard menu and flower basket decorations at entrance,
warm amber glow from windows, French plane tree lined street background,
customer browsing at entrance, evening ambient light 2800K warm glow mixed with dusk blue-purple sky,
window glow effect making breads golden and inviting, warm and inviting atmosphere,
romantic European street photography --ar 16:9 --style photo --v 6

# Stable Diffusion
(French street corner bakery:1.4), (wooden display window breads pastries:1.3),
(chalkboard flower basket:1.2), (warm amber window glow:1.3), French plane tree street,
customer browsing, evening 2800K mixed with dusk blue-purple, window glow golden breads,
warm inviting atmosphere, romantic European street, 8K
Negative: modern glass tower, dark interior, empty no life, sterile chain store

# 即梦（中文）
法式街角面包店，木质橱窗陈列面包糕点，
门口黑板手写菜单和花篮装饰，暖琥珀色灯光从窗户透出，
法国梧桐街道背景，门口有顾客正在选购，
傍晚暖光2800K与蓝紫天空混合，橱窗光效果使面包金黄诱人，
温暖有故事感，法式浪漫欧洲街景，让人想走进去的冲动感
```

---

#### 模板 C5-Bakery-A2【面包制作工坊 — 明档烘焙】

**主题标签：** `#面包制作 #明档 #工坊 #匠心 #可视化 #新鲜 #展示区 #展示`

**主体描述：**
面包店开放式厨房视角，烘焙师傅正在揉面团/分割面团/装饰面包，
背景为烤炉和面包架，新鲜面包刚刚出炉有热气，
整体传达"现场制作、新鲜可见、专业匠心"的信任感。

**环境光线：**
烤炉暖光（3000K）+ 顶部工作灯（4000K）混合，
师傅面部有补光，出炉面包有暖色热气感，画面温暖有活力。

**风格参考：**
开放式工坊可视化（Open Workshop Visualization），参考日本面包店"所见即所得"透明厨房逻辑，强调新鲜和匠心。

**技术参数：**

```
# Midjourney
Open bakery kitchen view, baker kneading or shaping dough or decorating bread,
background oven and bread rack with freshly baked breads steaming,
visible craftsmanship and fresh production, warm oven light 3000K mixed with top work lights 4000K,
baker face fill light, warm steaming bread, transparency and trust-building,
artisan workshop documentary style --ar 16:9 --v 6

# Stable Diffusion
(bakery open kitchen:1.4), (baker kneading shaping dough:1.3),
(oven bread rack freshly baked steaming:1.2), (craftsmanship visible:1.2),
warm oven 3000K top work 4000K mixed, baker face fill, warm steaming bread,
transparent trust-building, artisan workshop documentary, 8K
Negative: closed hidden kitchen, old dirty equipment, no visible baking process

# 即梦（中文）
面包店开放式厨房视角，烘焙师傅正在揉面团分割或装饰面包，
背景烤炉和面包架，新鲜出炉面包有热气，
现场制作新鲜可见专业匠心，烤炉暖光3000K混合顶部工作灯4000K，
师傅面部补光，出炉面包暖色热气感，透明化信任感，匠心工坊纪实风格
```

---

### 📣 营销海报

#### 模板 C5-Bakery-P1【中秋月饼礼盒 — 国潮礼遇】

**主题标签：** `#中秋 #月饼 #礼盒 #国潮 #传统 #节日 #伴手礼 #高端`

**主体描述：**
中秋限定月饼礼盒置于中央，礼盒为中国传统纹样（祥云/月亮/桂花），月饼整齐排列露出（金黄/抹茶绿/奶黄/紫薯），有折扇/茶具/桂花枝点缀，背景为深蓝夜空（圆月），整体高端大气有节庆感。

**环境光线：**
正面平光（Flat Front Light）均匀打亮礼盒，金色元素有高光点，背景深蓝夜空衬托圆月，色温 3200K偏暖。

**风格参考：**
国潮中秋风（Guochao Mid-Autumn Festival），参考各大品牌月饼礼盒视觉（星巴克/哈根达斯/故宫月饼），高端、精致、有文化底蕴。

**技术参数：**

```
# Midjourney
Mid-Autumn mooncake gift box centerpiece, traditional Chinese patterns auspicious cloud moon osmanthus,
assorted mooncakes gold matcha cream purple, fan tea set osmanthus branch accents,
deep blue night sky full moon background, front flat light 3200K warm,
even illumination golden highlights, premium and festive, high-end cultural aesthetics,
traditional Chinese festival design --ar 2:3 --v 6

# Stable Diffusion
(Mid-Autumn mooncake gift box:1.4), (traditional patterns:1.3), (assorted mooncakes gold matcha:1.2),
(fan tea osmanthus accents:1.1), (deep blue night sky full moon:1.2),
front flat light 3200K, golden highlights, premium festive, high-end cultural, traditional Chinese festival, 8K
Negative: plain white background, cheap packaging, dull colors, modern minimalist

# 即梦（中文）
中秋限定月饼礼盒，中国传统纹样祥云月亮桂花，
金黄抹茶奶黄紫薯各色月饼整齐排列，折扇茶具桂花枝点缀，
深蓝夜空圆月背景，正面平光3200K暖色均匀打亮，
金色元素高光点，高端大气节庆感，国潮中秋设计，传统文化底蕴
```

---

#### 模板 C5-Bakery-P2【圣诞限定 — 树桩蛋糕】

**主题标签：** `#圣诞 #圣诞节 #树桩蛋糕 #节日 #限定 #烘焙 #寒冷 #温馨`

**主体描述：**
圣诞节树桩蛋糕（Buche de Noel）置于圣诞主题背景（圣诞树/雪花/圣诞球/松果），蛋糕有奶油圣诞树造型和圣诞装饰（草莓圣诞老人/糖霜雪花），整体红色绿色金色圣诞配色，有温馨浪漫的节日氛围。

**环境光线：**
暖色圣诞灯光（2800K）+ 圣诞树彩灯（Multi-color 4000K），制造多彩温馨感，色温偏暖，画面温暖有节庆感。

**风格参考：**
温馨圣诞风（Warm Christmas Aesthetic），参考圣诞烘焙营销视觉，强调"寒冷冬天里的一口甜蜜"的反差温暖感。

**技术参数：**

```
# Midjourney
Christmas Yule log cake Buche de Noel on festive Christmas background with tree snowflake ornaments,
cream Christmas tree decoration and strawberry Santa snow sugar icing, red green gold Christmas palette,
warm Christmas lights 2800K mixed with multi-color tree lights 4000K, warm cozy festive atmosphere,
romantic Christmas celebration, festive commercial photography --ar 2:3 --v 6

# Stable Diffusion
(Christmas Yule log cake:1.4), (Christmas background tree snowflakes:1.3),
(cream decoration strawberry Santa:1.2), (red green gold palette:1.2),
warm Christmas 2800K multi-color lights 4000K, warm cozy festive, romantic Christmas celebration, 8K
Negative: summer scene, dull plain background, no Christmas elements, cold sterile

# 即梦（中文）
圣诞节树桩蛋糕Buche de Noel，圣诞树雪花圣诞球松果主题背景，
奶油圣诞树造型装饰配草莓圣诞老人糖霜雪花，圣诞红绿金色调，
暖色圣诞灯2800K混合圣诞树彩灯4000K，多彩温馨感，
圣诞节日氛围，浪漫温馨，节庆商业摄影
```

---

#### 模板 C5-Bakery-P3【新品贝果 — 健康轻食风】

**主题标签：** `#贝果 #bagel #健康 #轻食 #新品上市 #早餐 #低脂 #品质感`

**主体描述：**
健康轻食风格，贝果剖开或完整置于盘中，配有牛油果酱/烟熏三文鱼/奶油芝士/芝麻菜，
旁边有一杯冷萃咖啡或鲜榨果汁，背景为白色大理石台面，整体传达"健康、有品质、轻生活"的感觉。

**环境光线：**
自然光（5600K）正面打亮，大理石台面有反光纹理，色温 4500K偏暖，整体干净、通透、有品质。

**风格参考：**
健康轻食摄影（Healthy Light Food Photography），参考Brunch文化、Eat Clean视觉语言，强调"吃得好、不将就"的生活态度。

**技术参数：**

```
# Midjourney
Healthy bagel with avocado spread, smoked salmon, cream cheese and arugula on white plate,
cold brew coffee or fresh juice beside, white marble countertop background,
natural daylight 5600K front light, marble texture reflections, warm 4500K,
clean and premium, healthy light lifestyle, Brunch culture aesthetic,
light food product photography --ar 4:5 --v 6

# Stable Diffusion
(healthy bagel plate:1.4), (avocado salmon cream cheese arugula:1.3),
(cold brew or juice:1.1), (white marble background:1.2),
natural daylight 5600K, marble reflections, warm 4500K,
clean premium healthy, light lifestyle, Brunch culture, light food photography, 8K
Negative: heavy oily food, cluttered dark background, fast food aesthetic

# 即梦（中文）
健康贝果配牛油果酱烟熏三文鱼奶油芝士芝麻菜，置于白色盘子，
旁边冷萃咖啡或鲜榨果汁，白色大理石台面背景，
自然光5600K正面打亮，大理石纹理有反光，色温4500K偏暖，
干净通透有品质，健康轻食生活方式，布朗克文化美学，轻食产品摄影
```

---

### 🏗️ 店铺装修图

#### 模板 C5-Bakery-S1【面包店门头 — 法式复古风】

**主题标签：** `#面包店 #门头 #法式 #复古 #街景 #招牌 #辨识度 #温暖`

**主体描述：**
法式复古面包店门头，木质招牌刻有店名（法文或中法双语），门口有复古自行车/花篮，
门框为拱形，窗户为推拉木窗，傍晚暖黄灯光从窗户透出，整体温暖有故事感，
让人想到巴黎街角或上海老租界面包店。

**环境光线：**
傍晚暖光（2800K）从门窗户透出，与傍晚天空（蓝紫色4500K）形成冷暖对比，
门头发光字有光晕，整体有"发着光的温暖小店"的感觉。

**风格参考：**
法式复古面包店风（French Retro Bakery），参考上海老麦道、巴黎网红面包店门头，追求"质感+温度+故事"的三重满足。

**技术参数：**

```
# Midjourney
French retro bakery shop facade, wooden sign with shop name French and Chinese bilingual,
vintage bicycle and flower basket at entrance, arched door frame, sliding wooden windows,
warm amber glow from windows at dusk, warm interior 2800K mixed with dusk blue-purple sky 4500K,
cold warm contrast, glowing warm light from shop, warm and inviting storefront,
French retro charm, cinematic street photography --ar 9:16 --v 6

# Stable Diffusion
(French retro bakery facade:1.4), (wooden bilingual sign:1.3),
(vintage bicycle flower basket:1.2), (arched door sliding windows:1.2),
warm amber 2800K dusk blue-purple 4500K mixed, cold warm contrast,
glowing warm shop light, warm inviting, French retro charm, cinematic, 8K
Negative: modern glass tower, neon fast food style, dark uninviting, no character

# 即梦（中文）
法式复古面包店门头，木质招牌中法双语店名，
门口复古自行车和花篮，拱形门框，推拉木窗，
傍晚暖琥珀光从窗户透出与傍晚蓝紫天空形成冷暖对比，
门头发光字光晕，温暖有故事感，法式复古魅力，电影感街景摄影
```

---

### 📺 直播背景图

#### 模板 C5-Bakery-L1【面包店直播背景 — 温暖治愈】

**主题标签：** `#面包店 #直播背景 #温暖 #治愈 #抖音直播 #品牌感 #质感`

**主体描述：**
竖版面包店直播间背景，复古或法式风格内景，一侧为面包陈列柜（各式面包整齐排列），
另一侧为品牌 LOGO 和今日推荐，顶部有暖黄灯串装饰，
整体温暖治愈、品牌感强，让人有进店购买冲动。

**环境光线：**
暖黄灯串（2800K）为主要光源，室内暖光（3200K）均匀打亮，
正面有补光灯（4000K），整体温暖治愈感，无强烈阴影。

**风格参考：**
温暖治愈直播风（Warm Healing Live Stream），参考小红书治愈系面包店直播，强调"看面包就是解压"的情感价值。

**技术参数：**

```
# Midjourney
Bakery Douyin live stream backdrop vertical 9:16, warm retro or French style interior,
one side bread display cabinet with assorted breads neatly arranged,
other side brand LOGO and today's recommendation, warm amber string lights decoration on top,
warm 2800K string lights 3200K interior, front fill light 4000K, warm and healing,
brand-oriented, inviting purchase impulse, warm cozy live stream aesthetic --ar 9:16 --v 6

# Stable Diffusion
(bakery live backdrop:1.4), (warm interior:1.3), (bread display cabinet:1.3),
(brand LOGO recommendation:1.2), (warm string lights:1.2),
warm 2800K 3200K, front fill 4000K, warm healing, brand-oriented, inviting purchase, cozy, 8K
Negative: cold sterile interior, fluorescent lighting, no brand identity, dark dull

# 即梦（中文）
面包店抖音直播间背景竖版，复古法式风格内景，
一侧面包陈列柜各式面包整齐排列，
另一侧品牌LOGO今日推荐，顶部暖黄灯串装饰，
暖黄灯串2800K为主室内3200K，正面补光灯4000K，
温暖治愈感，品牌感强，有进店购买冲动，温暖治愈直播美学
```

---

## 1.6 小龙虾

### 🖼️ 商品主图

#### 模板 C6-Crayfish-M1【油焖大虾 — 红亮油润特写】

**主题标签：** `#小龙虾 #油焖大虾 #麻辣 #商品主图 #红亮油润 #外卖 #夜宵 #食欲感`

**主体描述：**
特写视角，大盆油焖小龙虾，虾身红亮油润（油光闪闪），虾背已切开露出虾肉，
有大量干辣椒段、花椒粒、蒜瓣铺在虾上，汤汁浓郁有油泡，
画面下方留白供外卖文案，背景暗色（不抢主体）。

**环境光线：**
顶光（Top Lighting）打亮虾身红油光泽，侧逆光勾勒虾壳轮廓，
色温 3200K（暖色），暗色背景突出主体，虾肉有高光点。

**风格参考：**
夜宵爆款美食摄影（Late Night Snack Bestseller Photography），参考堕落虾/麻辣诱惑外卖主图，强调"红亮油润"勾起食欲感。

**技术参数：**

```
# Midjourney
Close-up of large plate of oil braised crayfish, bright red glistening oil on shells,
backs split showing tender meat, dried chili peppers and Sichuan peppercorns scattered on top,
rich sauce with oil bubbles, dark background emphasizing subject, top light 3200K,
side backlight outlining shell contours, appetizing late night snack photography --ar 1:1 --v 6

# Stable Diffusion
(oil braised crayfish close-up:1.4), (bright red glistening shells:1.3),
(backs split showing meat:1.2), (dried chilies peppercorns garlic:1.1),
rich sauce oil bubbles, dark background, top light 3200K, side backlight,
appetizing late night snack, red bright oil glistening, 8K
Negative: dull gray crayfish, blurry, overexposed, dark muddy sauce

# 即梦（中文）
大盆油焖小龙虾特写，虾身红亮油润闪闪发光，
虾背已切开露出嫩肉，大量干辣椒段花椒粒蒜瓣铺在虾上，
汤汁浓郁有油泡，暗色背景突出主体，顶光3200K打亮虾身红油光泽，
侧逆光勾勒虾壳轮廓，夜宵爆款美食摄影，食欲感强
```

---

#### 模板 C6-Crayfish-M2【清蒸大闸蟹/小龙虾 — 鲜活蒸制】

**主题标签：** `#小龙虾 #清蒸 #鲜活 #蒸制 #干净 #品质 #外卖 #鲜`

**主体描述：**
俯视角度，清蒸小龙虾或大闸蟹整齐排列在盘中，虾/蟹呈鲜红色但不过深，
腹部/腿部干净无泥沙，有姜片和葱段点缀，蒸制后有轻微蒸汽，
虾肉/蟹肉白嫩紧实（通过画面暗示），整体传达"干净、鲜活、品质"。

**环境光线：**
顶置柔光（4000K），均匀打亮虾蟹整体色彩，无强阴影，
白色背景或浅色背景，色温偏中性，画面干净清新。

**风格参考：**
清鲜品质风（Clean & Premium Style），参考蟹状元/阳澄湖大闸蟹视觉，强调"干净+鲜活+品质"区别于市井夜宵档。

**技术参数：**

```
# Midjourney
Overhead view of steamed crayfish neatly arranged on white plate, fresh red color not overly dark,
clean abdomen and legs no mud, ginger slices and scallion garnish, slight steam rising,
white background, overhead soft light 4000K, even illumination no shadows,
clean fresh premium quality, steamed freshness, appetizing clean product --ar 4:5 --v 6

# Stable Diffusion
(steamed crayfish overhead:1.4), (neatly arranged:1.3), (fresh red clean:1.2),
(clean no mud:1.2), (ginger scallion garnish:1.0), (slight steam:1.0),
white background, overhead soft 4000K, even no shadows, clean fresh premium, steamed, 8K
Negative: muddy dirty shells, dull gray color, messy arrangement, dark background

# 即梦（中文）
俯视清蒸小龙虾整齐排列白色盘子，虾身呈鲜红色不过深，
腹部腿部干净无泥沙，姜片葱段点缀，轻微蒸汽，
白色背景，顶置柔光4000K均匀无阴影，
干净新鲜高品质感，清蒸鲜美感，产品摄影食欲感
```

---

#### 模板 C6-Crayfish-M3【麻辣十三香小龙虾套餐 — 配饮套餐】

**主题标签：** `#小龙虾 #麻辣十三香 #套餐 #配饮 #夜宵 #聚餐 #外卖 #重口味`

**主体描述：**
套餐视角，大份麻辣十三香小龙虾置于中央，旁边配冰镇啤酒/碳酸饮料/凉面，
有手套、纸巾、垃圾桶（暗示"放心吃"），整体重口味、接地气、适合夜宵场景。

**环境光线：**
暗调暖光（3000K），突出重口味夜宵氛围，小龙虾主体有顶光打亮，背景暗色有生活气息。

**风格参考：**
夜宵套餐风（Late Night Snack Combo），参考外卖平台夜宵爆款套餐图，强调"夜宵就该这么吃"的场景感。

**技术参数：**

```
# Midjourney
Spicy 13-spice crayfish combo meal, large portion in center, cold beer soda cold noodles beside,
disposable gloves tissues trash bag suggesting eating experience, dark warm 3000K lighting,
top light on crayfish, dark background with life atmosphere, late night feast feeling,
earthy and authentic late night snack commercial photography --ar 4:3 --v 6

# Stable Diffusion
(spicy 13-spice crayfish combo:1.4), (large portion:1.3),
(cold beer soda noodles:1.2), (gloves tissues trash:1.0), dark warm 3000K,
top light on crayfish, dark background, late night feast, authentic late night snack, 8K
Negative: clean bright upscale, light refreshing, no context, sterile

# 即梦（中文）
麻辣十三香小龙虾套餐，大份小龙虾置于中央，旁边配冰镇啤酒碳酸饮料凉面，
有手套纸巾垃圾桶暗示放心吃，暗调暖光3000K，
顶光照亮小龙虾主体，暗色背景有生活气息，
夜宵盛宴感，重口味接地气，夜宵套餐商业摄影
```

---

### 🏠 场景氛围图

#### 模板 C6-Crayfish-A1【小龙虾店 — 夜市烟火风】

**主题标签：** `#小龙虾店 #夜市 #烟火气 #热闹 #聚餐 #夏日 #抖音 #门店展示`

**主体描述：**
夜市小龙虾店大排档视角，塑料桌椅上堆满小龙虾大盆，食客满座大快朵颐，
桌上大扎啤杯，背景有红色灯笼和霓虹招牌，夏季夜晚有夜市灯光，
整体：烟火气、热闹、接地气、夏夜感强。

**环境光线：**
夜市混合光源，灯笼光（2200K）+ 霓虹光（多彩）+ 桌上顶灯（暖黄），形成碎片光影，背景热闹有层次。

**风格参考：**
夜市烟火风（Night Market Bustle），参考长沙文和友/武汉巴厘龙虾视觉，强调"夏天夜晚就该这么嗨"的场景感。

**技术参数：**

```
# Midjourney
Night market crayfish stall, plastic tables crowded with large plates of crayfish,
diners devouring with large beer mugs, red lanterns and neon signs in background,
summer night market lights atmosphere, mixed night market light sources lanterns 2200K
neon multi-color and overhead warm lamps, fragmenting light shadows, lively authentic summer night,
bustling food market atmosphere --ar 16:9 --v 6

# Stable Diffusion
(night market crayfish stall:1.4), (plastic tables crayfish plates:1.3),
(diners devouring beer:1.2), (red lanterns neon signs:1.2), summer night market,
mixed lanterns 2200K neon, fragmenting light shadows, lively authentic, summer night, 8K
Negative: empty quiet restaurant, cold winter scene, dark dull, no atmosphere

# 即梦（中文）
夜市小龙虾大排档，塑料桌椅堆满大盆小龙虾，
食客满座大快朵颐，大扎啤杯，背景红色灯笼和霓虹招牌，
夏季夜晚夜市灯光氛围，夜市混合光源灯笼2200K霓虹多彩光和桌上暖黄顶灯，
碎片光影，热闹真实夏夜，夜市场景氛围感
```

---

#### 模板 C6-Crayfish-A2【室内品质小龙虾店 — 干净明亮】

**主题标签：** `#小龙虾店 #室内 #品质 #干净 #明亮 #聚餐 #仪式感 #进阶版`

**主体描述：**
品质小龙虾店内景，木质/皮质座椅，桌面上有精致的餐垫和手套，
小龙虾有专门的虾盘（带手套/湿巾/围裙等配套），背景有品牌文化墙，
整体：有品质感、干净、与大排档拉开差距，适合品质升级型商家。

**环境光线：**
均匀暖光（3500K），明亮但不刺眼，品牌文化墙有专门射灯打亮，整体有品质但不冷淡。

**风格参考：**
品质升级风（Premium Upgrade），参考虾兄/靓虾妹等品牌升级小龙虾店视觉，强调"吃虾也可以有品质"的升级体验。

**技术参数：**

```
# Midjourney
Premium indoor crayfish restaurant interior, wooden or leather seating, refined placemats and gloves on table,
crayfish served on elegant plates with gloves wet wipes apron accessories,
brand culture wall in background with spotlight lighting, warm uniform 3500K lighting,
bright but not harsh, premium quality not cold, upgrade experience from street stall,
premium indoor crayfish dining aesthetic --ar 16:9 --v 6

# Stable Diffusion
(premium indoor crayfish restaurant:1.4), (refined placemats gloves:1.3),
(elegant crayfish plates accessories:1.2), (brand culture wall spotlight:1.2),
warm uniform 3500K, bright not harsh, premium quality not cold,
upgrade from street stall, premium indoor crayfish aesthetic, 8K
Negative: street stall messy, dirty oily, cold fluorescent, no brand identity

# 即梦（中文）
品质室内小龙虾店，木质或皮质座椅，精美餐垫配手套，
小龙虾精致虾盘配套手套湿巾围裙等配件，
背景品牌文化墙射灯打亮，均匀暖光3500K，
明亮不刺眼，有品质不冷淡，与大排档拉开差距，品质升级体验感
```

---

### 📣 营销海报

#### 模板 C6-Crayfish-P1【夏季世界杯 — 啤酒龙虾节】

**主题标签：** `#世界杯 #啤酒龙虾节 #夏季 #运动 #激情 #促销 #夜宵 #氛围`

**主体描述：**
世界杯/欧洲杯主题，小龙虾+大杯啤酒组合置于电视屏幕前（屏幕播放足球画面），
背景有球迷挥舞旗帜，电视屏幕有赛事字幕，整体：体育激情+美食满足+夏日夜晚的组合。

**环境光线：**
电视屏幕蓝光（6000K）为主，室内灯光偏暗，形成"客厅看球"氛围，
小龙虾和啤酒有暖色顶光照亮，色温对比强烈。

**风格参考：**
运动赛事营销风（Sports Event Campaign），参考世界杯餐饮品牌营销视觉，强调"看球标配"的场景绑定。

**技术参数：**

```
# Midjourney
World Cup summer beer and crayfish festival poster, crayfish and large beer glasses in front of TV
showing football match screen, fans waving flags in background, TV screen with match subtitles,
TV screen blue light 6000K dominant, indoor lights dim forming living room atmosphere,
crayfish and beer with warm overhead light, strong color temperature contrast,
sports passion and food satisfaction combined, summer night atmosphere --ar 2:3 --v 6

# Stable Diffusion
(World Cup beer crayfish festival:1.4), (crayfish beer TV football:1.4),
(fans waving flags:1.2), (TV blue light 6000K:1.3), dim indoor lights,
warm overhead on food, strong color contrast, sports passion food satisfaction, summer night, 8K
Negative: no sports context, quiet calm scene, winter cold atmosphere

# 即梦（中文）
世界杯夏季啤酒龙虾节海报，小龙虾和大杯啤酒置于播放足球赛事的电视屏幕前，
背景球迷挥舞旗帜，电视屏幕赛事字幕，
电视蓝光6000K为主，室内灯光偏暗形成客厅看球氛围，
小龙虾和啤酒暖色顶光照亮，色温对比强烈，
运动激情与美食满足结合，夏日夜晚氛围
```

---

#### 模板 C6-Crayfish-P2【开海季 — 鲜活直送】

**主题标签：** `#开海季 #鲜活直送 #品质 #溯源 #高端 #信任 #限量 #稀缺`

**主体描述：**
"开海季"品质溯源风，画面为渔民捕捞/湖塘养殖的真实场景，小龙虾鲜活跳跃，
有产地标签（如"湖北潜江""江苏盱眙"），配有品质认证标志和冷链配送图标，
整体传达"源头直采、鲜活保证、品质溯源"的信任感。

**环境光线：**
自然日光（5600K）或水边散射光（5000K），色调偏清冷（体现水质清澈），
小龙虾有自然光打亮，有"水润鲜活"的质感。

**风格参考：**
品质溯源风（Source Traceability），参考各大品牌"开海节"营销视觉，强调"正宗源头+品质保证+稀缺感"。

**技术参数：**

```
# Midjourney
Opening season premium crayfish source traceability poster, fisherman catching or pond farming scene,
fresh crayfish jumping lively, origin label like Hubei Qianjiang or Jiangsu Xuyi,
quality certification mark and cold chain delivery icons, natural daylight 5600K or riverside light 5000K,
cool tones reflecting clean water, natural light on crayfish, water-fresh vivid texture,
source traceability premium trust, limited seasonal scarcity --ar 2:3 --v 6

# Stable Diffusion
(opening season crayfish traceability:1.4), (fisherman pond scene:1.3),
(fresh jumping crayfish:1.3), (origin label certification:1.2), (cold chain icons:1.1),
natural daylight 5600K, cool tones clean water, water-fresh vivid, source traceability, premium trust, 8K
Negative: unclear origin, processed frozen look, no trust indicators, cheap muddy

# 即梦（中文）
开海季品质溯源小龙虾海报，渔民捕捞或湖塘养殖真实场景，
小龙虾鲜活跳跃，有产地标签如湖北潜江江苏盱眙，
品质认证标志和冷链配送图标，自然日光5600K或水边散射光5000K，
偏清冷色调体现水质清澈，小龙虾自然光打亮有水润鲜活质感，
源头直采鲜活保证品质溯源，稀缺感季节限量
```

---

### 📺 直播背景图

#### 模板 C6-Crayfish-L1【小龙虾直播背景 — 夏日夜晚大排档】

**主题标签：** `#小龙虾 #直播背景 #夏日 #夜市 #大排档 #抖音直播 #烟火气 #引流`

**主体描述：**
竖版小龙虾直播间背景，夏日夜市大排档场景，桌面上大盆小龙虾和啤酒，
红色灯笼和霓虹招牌装饰，背景有热闹夜市灯光，
整体：烟火气强、夏日夜晚、大排档真实感，让人看了就想下单。

**环境光线：**
夜市暖光（2500K）+ 霓虹光（多彩），背景有碎片光影，
小龙虾区域有顶光照亮，正面偏暗（适合手机摄像头）。

**风格参考：**
夜市直播风（Night Market Live Stream），参考抖音夜宵带货直播视觉，强调"真实烟火气+夏日夜晚"的场景感。

**技术参数：**

```
# Midjourney
Crayfish Douyin live stream backdrop vertical 9:16, summer night market crayfish stall,
large plates of crayfish and beer on table, red lanterns neon sign decorations,
lively night market lights in background, night market warm light 2500K mixed with neon,
fragmenting light shadows, crayfish area with top light, front slightly dark for phone camera,
authentic summer night market, fireworks and bustle, impulse purchase atmosphere --ar 9:16 --v 6

# Stable Diffusion
(crayfish live backdrop summer night market:1.4), (large crayfish plates beer:1.3),
(red lanterns neon:1.2), (night market lights:1.2), night market warm 2500K neon mixed,
fragmenting light, crayfish top light, front dark phone camera ready,
authentic summer night, fireworks bustle, impulse purchase, 8K
Negative: cold bright interior, winter scene, clean upscale, no atmosphere

# 即梦（中文）
小龙虾抖音直播间背景竖版，夏日夜市大排档场景，
桌面大盆小龙虾和啤酒，红色灯笼霓虹招牌装饰，
背景热闹夜市灯光，夜市暖光2500K混合霓虹多彩光，
碎片光影，小龙虾区域顶光照亮，正面偏暗适合手机摄像头，
真实夏日夜市，烟火气强，让人有下单冲动
```

---

## 1.7 海鲜

### 🖼️ 商品主图

#### 模板 C7-Seafood-M1【清蒸石斑鱼 — 鲜嫩鱼生】

**主题标签：** `#海鲜 #清蒸石斑鱼 #鲜嫩 #商品主图 #品质 #外卖 #宴请 #喜庆`

**主体描述：**
45° 俯视角，清蒸石斑鱼置于长盘，鱼身呈清鲜色泽（青灰色/淡粉色），鱼眼清亮有光泽，
鱼鳞微微张开（证明新鲜），葱丝姜丝铺在鱼身上，淋有热油（滋滋作响有蒸汽），
有香菜或红椒丝点缀，整体有"宴请级别"的品质感。

**环境光线：**
顶置柔光（4000K），均匀打亮鱼身青灰色泽，鱼眼有高光点，
葱丝姜丝有侧光阴影层次，整体干净、通透、有品质。

**风格参考：**
粤式宴请摄影（Cantonese Banquet Photography），参考粤菜酒楼海鲜主图，强调"鲜、嫩、滑"的粤菜审美。

**技术参数：**

```
# Midjourney
45-degree overhead steamed grouper fish on long platter, fresh clear color grayish-green light pink,
bright clear fish eyes with sheen, scales slightly open indicating freshness,
scallion ginger shreds on fish, hot oil poured with sizzling steam, cilantro red chili garnish,
top overhead soft light 4000K, even fish color illumination, fish eye highlights,
clean refined Cantonese banquet quality, fresh tender premium product photography --ar 4:3 --v 6

# Stable Diffusion
(steamed grouper:1.4), (fresh clear color:1.3), (bright clear fish eyes:1.2),
(scales open freshness:1.2), (scallion ginger hot oil:1.2), (cilantro chili garnish:1.0),
top soft 4000K, even fish color, fish eye highlights, clean refined Cantonese banquet, fresh tender premium, 8K
Negative: dull gray fish, overcooked, unclear freshness, messy arrangement

# 即梦（中文）
45度俯视清蒸石斑鱼长盘，鱼身青灰淡粉色清鲜色泽，
鱼眼清亮有光泽，鱼鳞微微张开证明新鲜，
葱丝姜丝铺在鱼身上，淋有热油滋滋作响有蒸汽，香菜红椒丝点缀，
顶置柔光4000K均匀打亮鱼身色泽，鱼眼高光点，
干净通透有品质，粤式宴请级别，鲜嫩上品海鲜产品摄影
```

---

#### 模板 C7-Seafood-M2【蒜蓉粉丝蒸扇贝 — 完整组合】

**主题标签：** `#海鲜 #蒜蓉扇贝 #蒸制 #商品主图 #外卖 #组合 #整齐 #食欲感`

**主体描述：**
俯视角度，一排三只蒜蓉粉丝蒸扇贝，扇贝壳为深褐色（海鲜馆子风格），贝肉饱满嫩白，
蒜蓉金黄铺满贝肉，粉丝缠绕有质感，顶部有红椒粒或葱花点缀，
有热气升腾（暗示新鲜蒸制），背景虚化简洁。

**环境光线：**
顶置柔光（4000K），向下打亮贝肉白嫩和蒜蓉金黄色彩，色温中性，画面清新有食欲感。

**风格参考：**
海鲜外卖主图（Seafood Delivery Cover），参考大众点评海鲜爆款店铺图，强调"整齐+新鲜+丰盛"的视觉满足感。

**技术参数：**

```
# Midjourney
Overhead view of three steamed garlic scallops in a row, dark brown shells,
plump tender white scallop meat, golden garlic on top, textured glass noodles,
red chili or scallion garnish, steam rising, background bokeh,
top overhead soft light 4000K, garlic gold and meat white contrast, fresh appetizing, seafood delivery --ar 4:5 --v 6

# Stable Diffusion
(garlic steamed scallops:1.4), (three in a row:1.2), (dark brown shells:1.1),
(plump white meat:1.3), (golden garlic noodles:1.2), (chili garnish steam:1.1),
top soft 4000K, garlic gold meat white contrast, fresh appetizing, seafood delivery cover, 8K
Negative: burnt garlic, dull shells, unclear, messy

# 即梦（中文）
俯视一排三只蒜蓉粉丝蒸扇贝，深褐色贝壳，
贝肉饱满嫩白，蒜蓉金黄铺满，粉丝有质感，
红椒粒或葱花点缀，热气升腾暗示新鲜蒸制，背景虚化简洁，
顶置柔光4000K向下打亮，蒜蓉金黄与贝肉嫩白色彩对比，新鲜食欲感
```

---

#### 模板 C7-Seafood-M3【避风塘炒蟹 — 港式经典】

**主题标签：** `#海鲜 #避风塘炒蟹 #港式 #香脆 #外卖 #夜宵 #重口味 #食欲感`

**主体描述：**
45° 俯视角，避风塘炒蟹（大闸蟹或膏蟹）置于盘中，蟹壳红亮有油光，
表面裹满金黄蒜蓉和面包糠碎（避风塘特色），有辣椒段点缀，
整体香脆感强烈，有"热量炸弹"的食欲诱惑。

**环境光线：**
顶光（Top Lighting）打亮蟹壳红亮油光，色温 3500K偏暖，金黄蒜蓉有高光点，整体食欲感强。

**风格参考：**
港式大排档海鲜（Hong Kong Style Seafood），参考香港西贡/鲤鱼门海鲜大排档视觉，强调"香、脆、辣"的港式重口味。

**技术参数：**

```
# Midjourney
45-degree overhead Typhoon Shelter style fried crab, bright red glossy crab shells,
golden garlic and breadcrumb crust coating signature Typhoon Shelter style,
dried chili pepper garnish, rich aroma visual impression, top light 3500K warm,
golden garlic highlights, appetizing rich flavor impression, Hong Kong seafood stall aesthetic --ar 4:5 --v 6

# Stable Diffusion
(Typhoon Shelter fried crab:1.4), (bright red glossy shells:1.3),
(golden garlic breadcrumb coating:1.3), (chili garnish:1.1),
top light 3500K warm, golden garlic highlights, rich appetizing impression, Hong Kong seafood, 8K
Negative: dull gray crab, no garlic coating, pale boring, low quality

# 即梦（中文）
45度俯视避风塘炒蟹，蟹壳红亮油光闪闪，
表面裹满金黄蒜蓉和面包糠碎（避风塘特色），辣椒段点缀，
香脆感强烈，热量炸弹食欲诱惑，顶光3500K偏暖打亮蟹壳红亮油光，
金黄蒜蓉高光点，港式大排档海鲜，重口味食欲感
```

---

### 🏠 场景氛围图

#### 模板 C7-Seafood-A1【海鲜酒楼 — 中式宴请厅】

**主题标签：** `#海鲜酒楼 #中式 #宴请 #大厅 #品质 #聚餐 #宴席 #门店展示`

**主体描述：**
中式海鲜酒楼大厅视角，圆桌宴席布局，桌上有刺身拼盘/清蒸石斑/烤龙虾等宴席菜，
有服务员穿梭，水晶吊灯华丽，背景有海鲜池（各种活海鲜展示），
整体：高端、正式、有面子，适合商务宴请。

**环境光线：**
宴会厅暖光（3200K）+ 水晶吊灯（G Chandelier）营造华丽感，
海鲜池有蓝白光（体现水质清澈），整体金碧辉煌。

**风格参考：**
中式宴请厅（Chinese Banquet Hall），参考粤菜酒楼/海鲜酒楼宴席视觉，强调"面子"和"排场"。

**技术参数：**

```
# Midjourney
Chinese seafood restaurant banquet hall, round tables with banquet dishes sashimi stone fish grilled lobster,
waiters serving, crystal chandelier luxury lighting, background seafood tank with live seafood display,
banquet hall warm light 3200K, crystal chandelier creating glamorous atmosphere,
seafood tank blue-white light reflecting clean water, golden luxurious,
formal and premium suitable for business banquet, Chinese banquet aesthetic --ar 16:9 --v 6

# Stable Diffusion
(Chinese seafood banquet hall:1.4), (round tables banquet dishes:1.3),
(waiters crystal chandelier:1.2), (seafood tank live display:1.2),
banquet 3200K crystal glamorous, seafood tank blue-white, golden luxurious,
formal premium business banquet, Chinese banquet aesthetic, 8K
Negative: cheap fast food style, dark dull interior, no seafood context, casual diner

# 即梦（中文）
中式海鲜酒楼大厅，圆桌宴席布局桌上有刺身石斑烤龙虾等宴席菜，
服务员穿梭，水晶吊灯华丽，背景海鲜池各种活海鲜展示，
宴会厅暖光3200K水晶吊灯营造华丽感，海鲜池蓝白光照亮水质清澈，
金碧辉煌，高端正式有面子，适合商务宴请，中式宴席美学
```

---

#### 模板 C7-Seafood-A2【海边海鲜排档 — 原生态渔港】

**主题标签：** `#海鲜 #渔港 #原生态 #海边 #接地气 #新鲜 #烟火气 #场景感`

**主体描述：**
海边/渔港海鲜排档，渔船靠岸，海鲜筐里有各种活蹦乱跳的海鲜（虾/蟹/贝类），
渔民正在分拣，旁边有简易棚屋和大排档桌椅，
海风吹拂有盐味感，背景有蓝色大海和渔船，
整体：新鲜直采、渔港原生态、接地气。

**环境光线：**
海边自然光（5600K）为主，海风中有盐雾质感（轻微朦胧），
天空和海水有蓝色反光，渔民有日光照亮，色温中性偏冷。

**风格参考：**
渔港原生态风（Fishery Port Authenticity），参考海南/青岛/大连等海边渔港海鲜大排档视觉，强调"第一手新鲜"。

**技术参数：**

```
# Midjourney
Seaside fishery port seafood stall, fishing boats docked, baskets of live jumping seafood shrimp
crabs clams, fishermen sorting seafood, simple shed and dining tables beside,
sea breeze with salt spray texture, blue sea and fishing boats background,
natural seaside light 5600K, slight hazy salt spray, fishermen in daylight,
neutral cool tones, authentic fresh first-hand, fishing port original ecosystem aesthetic --ar 16:9 --v 6

# Stable Diffusion
(seaside fishery port stall:1.4), (fishing boats docked:1.3), (live seafood baskets:1.3),
(fishermen sorting:1.2), (simple shed tables:1.1), (blue sea boats background:1.2),
natural seaside 5600K, slight hazy salt spray, fishermen daylight, neutral cool tones,
authentic fresh, fishing port original ecosystem, 8K
Negative: indoor restaurant, cold storage seafood, expensive formal, no seascape

# 即梦（中文）
海边渔港海鲜排档，渔船靠岸，海鲜筐里有各种活蹦乱跳的海鲜虾蟹贝类，
渔民正在分拣，旁边简易棚屋和大排档桌椅，
海风吹拂盐雾质感，蓝色大海和渔船背景，
海边自然光5600K，轻微朦胧盐雾感，渔民日光照亮，
中性偏冷色调，真实新鲜第一手，渔港原生态场景
```

---

#### 模板 C7-Seafood-A3【日式寿司店 — 匠心板前】

**主题标签：** `#日料 #寿司 #匠心 #板前 #品质 #高级 #氛围 #打卡`

**主体描述：**
日式寿司店吧台视角，师傅在板前捏寿司，手指技法精准，
面前有各类寿司食材（鱼生/海胆/三文鱼等）整齐陈列，
有木质寿司台和暖光，整体有"匠人精神"的品质感，
背景有简约日式装饰。

**环境光线：**
暖黄吧台光（3500K）+ 射灯精准打亮寿司食材，木质台面有暖光反射，
师傅面部有补光，整体温暖、有品质、有仪式感。

**风格参考：**
日式匠心风（Japanese Artisanal Craftsmanship），参考寿司之神小野二郎/鮨斋藤视觉，强调"专注一事"的匠人精神。

**技术参数：**

```
# Midjourney
Japanese sushi restaurant counter view, chef crafting sushi with precise finger technique,
variety of sushi ingredients sashimi sea urchin salmon displayed neatly,
wooden sushi counter and warm lighting, chef face fill light, warm 3500K,
Japanese minimalist decor background, craftsmanship spirit, premium quality atmosphere,
Japanese culinary art documentary style --ar 16:9 --style cinematic --v 6

# Stable Diffusion
(Japanese sushi counter:1.4), (chef crafting sushi:1.3), (precise finger technique:1.2),
(sashimi sea urchin ingredients:1.2), (wooden counter warm light:1.2), (chef face fill:1.1),
warm 3500K, warm wood reflections, Japanese minimalist decor, craftsmanship spirit,
premium quality, Japanese culinary art, 8K
Negative: fast food conveyor belt sushi, dark cold lighting, cluttered messy, cheap

# 即梦（中文）
日式寿司店吧台视角，师傅在板前捏寿司手指技法精准，
各类寿司食材鱼生海胆三文鱼整齐陈列，
木质寿司台暖光，师傅面部补光，背景简约日式装饰，
暖黄吧台光3500K，匠人精神品质感，
日式匠心风，专注一事的品质氛围，纪录片电影感
```

---

### 📣 营销海报

#### 模板 C7-Seafood-P1【年货海鲜礼盒 — 送礼佳品】

**主题标签：** `#年货 #海鲜礼盒 #送礼 #高端 #品质 #节日 #宴请 #伴手礼`

**主体描述：**
高档海鲜礼盒置于中央，礼盒为红金配色（喜庆高端），内有龙虾/鲍鱼/海参/鱼翅等高端海鲜干货，
有干冰蒸汽效果（暗示冷链保鲜），有金色丝带和福字贴，
背景为深蓝绒布或中国红，整体高端大气有面子。

**环境光线：**
顶部射灯（Gallery Spotlight）精准打亮礼盒和海鲜干货，背景深蓝或中国红衬托，
金色元素有高光点，色温 4000K，整体像高端礼品广告。

**风格参考：**
高端礼品风（Premium Gift Design），参考各大品牌年货节海鲜礼盒视觉，强调"送礼有面子"的礼品价值。

**技术参数：**

```
# Midjourney
Premium seafood gift box centerpiece for New Year, red and gold festive color scheme,
lobster abalone sea cucumber fish maw dried seafood inside, dry ice steam effect,
golden ribbon and Fu character sticker, deep blue velvet or Chinese red background,
top gallery spotlight on gift box and dried seafood, golden highlights, 4000K,
luxury gift advertisement aesthetic, premium high-end gift giving atmosphere --ar 2:3 --v 6

# Stable Diffusion
(premium seafood gift box:1.4), (red gold festive:1.3), (lobster abalone sea cucumber:1.2),
(dry ice steam:1.1), (golden ribbon Fu sticker:1.1), (deep blue velvet red background:1.2),
top gallery spotlight, golden highlights, 4000K, luxury gift, premium high-end, gift giving atmosphere, 8K
Negative: cheap cardboard box, dull colors, no premium feel, messy presentation

# 即梦（中文）
高档海鲜礼盒置于中央，红金喜庆配色高端礼盒，
内有龙虾鲍鱼海参鱼翅等高端海鲜干货，干冰蒸汽效果暗示冷链保鲜，
金色丝带福字贴，深蓝绒布或中国红背景衬托，
顶部射灯精准打亮礼盒干货，金色元素高光点，4000K，
高端礼品广告质感，送礼有面子，高档大气年货节氛围
```

---

#### 模板 C7-Seafood-P2【大闸蟹品蟹节 — 品蟹指南】

**主题标签：** `#大闸蟹 #品蟹节 #季节 #限定 #蟹黄 #仪式感 #品质 #文化`

**主体描述：**
品蟹主题画面，一只大闸蟹置于蒸笼或木盘中央，蟹壳橙红饱满，
有蟹八件工具（锤子/剪刀/钳/勺）整齐摆放，有姜丝醋碟和黄酒杯，
背景有书法卷轴或竹简（有"蟹"字），整体有品蟹文化的仪式感。

**环境光线：**
暖光（3200K）为主，蒸笼/木盘有木纹质感可见，
蟹壳橙红有高光点，背景书法卷轴有书写质感，色温偏暖，整体有文化感。

**风格参考：**
文人品蟹风（Literary Crab Tasting），参考阳澄湖大闸蟹品牌视觉，强调"食蟹文化"和"时令仪式感"。

**技术参数：**

```
# Midjourney
Crab tasting festival poster, one large hairy crab on steamer or wooden platter, orange-red plump shell,
crab tools hammer scissors tongs spoon neatly arranged, ginger vinegar dish and huangjiu wine glass,
background with calligraphy scroll or bamboo scroll with crab character,
warm light 3200K, steamer wood texture visible, crab shell orange highlights,
cultural calligraphy texture, literati crab tasting ceremony atmosphere, seasonal limited --ar 2:3 --v 6

# Stable Diffusion
(crab tasting festival:1.4), (large hairy crab steamer:1.3), (orange-red plump shell:1.2),
(crab tools arranged:1.2), (ginger vinegar huangjiu:1.1), (calligraphy scroll background:1.2),
warm 3200K, steamer wood texture, crab shell highlights, cultural calligraphy, literati ceremony, seasonal, 8K
Negative: casual greasy crab, no cultural elements, fast food presentation, dull

# 即梦（中文）
品蟹节海报，一只大闸蟹置于蒸笼或木盘中央，蟹壳橙红饱满，
蟹八件工具锤子剪刀钳勺整齐摆放，姜丝醋碟和黄酒杯，
背景书法卷轴或竹简有"蟹"字，暖光3200K为主，
蒸笼木盘木纹质感，蟹壳橙红高光点，书法卷轴书写质感，
文人品蟹文化氛围，时令仪式感，季节限定
```

---

### 📺 直播背景图

#### 模板 C7-Seafood-L1【海鲜酒楼直播背景 — 金碧辉煌】

**主题标签：** `#海鲜 #直播背景 #酒楼 #金碧辉煌 #宴请 #品质 #抖音直播 #品牌感`

**主体描述：**
竖版海鲜酒楼直播间背景，宴席大厅视角，桌上有海鲜拼盘和宴席菜，
水晶吊灯华丽，背景有海鲜池（活海鲜展示），
整体金碧辉煌、品牌感强、适合高端海鲜酒楼直播。

**环境光线：**
宴会厅暖光（3200K）+ 水晶吊灯华丽感，海鲜池蓝白光照亮，
正面有补光灯确保主播面部光线，整体金碧辉煌有面子。

**风格参考：**
高端酒楼直播风（Premium Banquet Hall Live Stream），参考高端粤菜酒楼直播背景，强调"品牌+品质+面子"。

**技术参数：**

```
# Midjourney
Seafood restaurant banquet hall live stream backdrop vertical 9:16, banquet table with seafood platters,
crystal chandelier luxurious lighting, background seafood tank with live seafood,
banquet hall warm 3200K, crystal chandelier glamour, seafood tank blue-white light,
front fill light for streamer face, golden luxurious premium, brand-oriented,
suitable for premium seafood banquet live stream --ar 9:16 --v 6

# Stable Diffusion
(seafood banquet live backdrop:1.4), (banquet table seafood platters:1.3),
(crystal chandelier:1.2), (seafood tank live display:1.2),
banquet 3200K crystal glamour, seafood tank blue-white, front fill, golden luxurious premium, brand-oriented, 8K
Negative: cheap casual background, dark dull, no brand identity, fast food style

# 即梦（中文）
海鲜酒楼直播间背景竖版，宴席大厅视角桌上有海鲜拼盘和宴席菜，
水晶吊灯华丽，背景海鲜池活海鲜展示，
宴会厅暖光3200K水晶吊灯华丽感，海鲜池蓝白光照亮，
正面补光灯确保主播面部光线，金碧辉煌品牌感强，适合高端海鲜酒楼直播
```

---

## 1.8 自助餐

### 🖼️ 商品主图

#### 模板 C8-Buffet-M1【海鲜自助台 — 琳琅满目】

**主题标签：** `#自助餐 #海鲜自助 #琳琅满目 #丰富 #商品图 #食欲感 #性价比`

**主体描述：**
鸟瞰海鲜自助台全景，各种海鲜整齐排列：虾/蟹/扇贝/青口/三文鱼刺身/螺片，
有冰盘保鲜（冰块晶莹剔透），有柠檬片和酱料碟点缀，
整体传达"丰富、值回票价、琳琅满目"的视觉冲击。

**环境光线：**
顶置柔光（4000K）均匀打亮整个自助台，冰盘有晶莹剔透的反光，
海鲜色彩饱和，整体明亮干净。

**风格参考：**
自助餐琳琅满目风（Buffet Abundance Photography），参考五星酒店自助餐视觉，强调"丰富选择"。

**技术参数：**

```
# Midjourney
Overhead seafood buffet spread全景, assorted seafood neatly arranged shrimp crabs scallops mussels
sashimi octopus, ice display with crystal clear ice, lemon wedges and sauce dishes,
abundant variety conveying value for money, overhead soft light 4000K, ice reflections,
saturated seafood colors, bright clean abundant, buffet abundance photography --ar 16:9 --v 6

# Stable Diffusion
(seafood buffet spread:1.4), (assorted seafood neatly arranged:1.3),
(ice display crystal:1.2), (lemon sauce dishes:1.1),
overhead soft 4000K, ice reflections, saturated colors, bright clean abundant,
buffet abundance, value for money, 8K
Negative: small limited spread, dull colors, messy, dark dim

# 即梦（中文）
鸟瞰海鲜自助台全景，各种海鲜整齐排列虾蟹扇贝青口三文鱼刺身螺片，
有冰盘保鲜冰块晶莹剔透，柠檬片和酱料碟点缀，
传达丰富值回票价琳琅满目视觉冲击，顶置柔光4000K均匀打亮，
冰盘晶莹反光，海鲜色彩饱和，明亮干净丰富，自助餐琳琅满目摄影
```

---

#### 模板 C8-Buffet-M2【烤肉自助 — 滋滋作响】

**主题标签：** `#自助餐 #烤肉自助 #滋滋 #食欲感 #性价比 #聚餐 #夜宵`

**主体描述：**
特写自助烤肉场景，烤架上排列各种肉片（牛五花/羊排/猪颈肉），
油脂在烤架上滋滋作响（炭火/电烤），有烤肉夹和剪刀，
整体传达"放开吃、吃到饱"的满足感。

**环境光线：**
烤架炭火光（2600K）为主，有轻微烟雾，主体肉片有顶光照亮，
色温偏暖，整体有烟火气。

**风格参考：**
自助烤肉烟火气风（BBQ Buffet Sizzling），参考牛角烧肉/喜来稀肉自助视觉，强调"放开吃"的性价比。

**技术参数：**

```
# Midjourney
Close-up自助烤肉场景, assorted meat slices on grill beef pork lamb, fat sizzling滋滋作响 on grill,
grill tongs and scissors, releasing eat all you can satisfaction,
charcoal or electric grill fire light 2600K, slight smoke, top light on meat,
warm smoky appetizing atmosphere, BBQ buffet放开吃satisfaction --ar 4:5 --v 6

# Stable Diffusion
(BBQ buffet close-up:1.4), (assorted meat on grill:1.3), (fat sizzling:1.3),
(grill tongs scissors:1.0), charcoal fire 2600K, slight smoke, top light on meat,
warm smoky appetizing, BBQ buffet satisfaction, 8K
Negative: tiny portions, dull colors, cold food, dark dim

# 即梦（中文）
自助烤肉场景特写，烤架上排列各种肉片牛五花羊排猪颈肉，
油脂在烤架上滋滋作响，有烤肉夹和剪刀，
传达放开吃吃到饱满足感，炭火火光2600K为主，
轻微烟雾，主体肉片顶光照亮，暖色烟火气氛围
```

---

### 📺 直播背景图

#### 模板 C8-Buffet-L1【自助餐直播背景 — 丰富琳琅】

**主题标签：** `#自助餐 #直播背景 #丰富 #琳琅 #抖音直播 #引流 #性价比`

**主体描述：**
竖版自助餐直播间背景，丰盛自助台占据画面一侧（海鲜/烤肉/甜点琳琅满目），
另一侧为品牌 LOGO 和促销信息（"XX位仅需XX元"），
顶部有促销横幅，左右预留主播位，整体：丰富感、性价比感强。

**环境光线：**
自助台区域暖光（3500K），LOGO区域有均匀白光（4000K），
整体明亮温暖，有食欲感。

**风格参考：**
自助餐直播风（Buffet Live Stream），参考自助餐带货直播视觉，强调"丰富+性价比"。

**技术参数：**

```
# Midjourney
Buffet live stream backdrop vertical 9:16, abundant buffet spread on one side seafood烤肉甜点琳琅满目,
other side brand LOGO and promotion info XX people only XX yuan, promotional banner on top,
streamer space left and right, buffet area warm light 3500K, LOGO area even white light 4000K,
bright warm appetizing, abundant value feeling, impulse purchase, buffet live stream --ar 9:16 --v 6

# Stable Diffusion
(buffet live backdrop:1.4), (abundant buffet spread:1.3), (seafood BBQ desserts:1.2),
(brand LOGO promotion:1.2), (promotional banner:1.0), streamer spaces,
buffet warm 3500K, LOGO white 4000K, bright warm appetizing, abundant value, impulse purchase, 8K
Negative: tiny sparse display, dark dull, no price info, boring

# 即梦（中文）
自助餐直播间背景竖版，丰盛自助台占据一侧海鲜烤肉甜点琳琅满目，
另一侧品牌LOGO和促销信息如XX位仅需XX元，顶部促销横幅，
左右预留主播位，自助台区域暖光3500K，LOGO区域均匀白光4000K，
明亮温暖有食欲感，丰富感性价比感强，让人有下单冲动，自助餐直播
```

---

## 1.9 面馆

### 🖼️ 商品主图

#### 模板 C9-Noodles-M1【牛肉面 — 汤清肉厚】

**主题标签：** `#面馆 #牛肉面 #汤清 #商品主图 #外卖 #品质 #食欲感 #手工面`

**主体描述：**
45° 俯视角，一碗牛肉面置于桌面中央，面条整齐有嚼劲（手工面感），牛肉片厚实整齐铺在面上，
汤底清澈但有油花（大骨浓汤），葱花和香菜翠绿点缀，有溏心蛋或煎蛋，
勺子斜靠碗边，整体有"汤鲜面弹肉厚"的食欲感。

**环境光线：**
侧窗自然光（Window Light 4500K）斜照，打亮汤面油花和面条质感，
有轻微蒸汽上升，色温偏暖 3500K，整体温暖有食欲。

**风格参考：**
面馆写实摄影（Noodle Shop Realistic Photography），参考兰州牛肉面/香港云吞面视觉，强调"汤鲜面弹肉厚"的品质感。

**技术参数：**

```
# Midjourney
45-degree overhead bowl of beef noodles, thick beef slices neatly arranged on elastic hand-pulled noodles,
clear but oily broth from bone soup, scallion and cilantro fresh green garnish,
soft-boiled egg or fried egg, spoon leaning on bowl edge, side window natural light 4500K,
slight steam rising, warm 3500K, appetizing noodle soup photography --ar 4:5 --v 6

# Stable Diffusion
(beef noodles bowl:1.4), (thick beef slices:1.3), (elastic hand-pulled noodles:1.2),
(clear oily broth:1.2), (scallion cilantro garnish:1.1), (soft-boiled egg:1.0),
side window light 4500K, slight steam, warm 3500K, appetizing noodle soup, fresh quality, 8K
Negative: dull gray broth, overcooked noodles, no garnish, dark dim, plastic

# 即梦（中文）
45度俯视牛肉面，手工面条整齐有嚼劲，牛肉片厚实整齐铺在面上，
汤底清澈有油花大骨浓汤，葱花香菜翠绿点缀，有溏心蛋，
勺子斜靠碗边，侧窗自然光4500K斜照打亮汤面油花和面条质感，
轻微蒸汽上升，暖色3500K，温暖有食欲感，汤鲜面弹肉厚品质感
```

---

#### 模板 C9-Noodles-M2【老北京炸酱面 — 地道风味】

**主题标签：** `#面馆 #老北京炸酱面 #地道 #传统 #商品图 #食欲感 #文化`

**主体描述：**
俯视老北京炸酱面，碗中面条整齐盘绕，黄酱肉末炸酱均匀拌入（有颗粒感），
配菜丰富：黄瓜丝/萝卜丝/豆芽/葱花，色彩对比鲜明（黄/绿/白/红），
有芝麻酱和醋壶在旁，整体有"老北京地道风味"的视觉感。

**环境光线：**
均匀自然光（4500K），无强阴影，各色彩配菜清晰可见，色温偏中性，画面色彩丰富。

**风格参考：**
老北京传统风味（Old Beijing Traditional Style），参考老磁器口/海碗居视觉，强调"传统+地道+市井"的北京面食文化。

**技术参数：**

```
# Midjourney
Overhead老北京炸酱面, noodles coiled neatly in bowl, yellow soybean paste and minced meat sauce evenly mixed with texture,
abundant side dishes cucumber strips radish sprouts scallion, vivid color contrast yellow green white red,
sesame paste and vinegar pitcher beside, traditional old Beijing street food aesthetic,
even natural light 4500K, no strong shadows, rich colors visible, neutral tones --ar 4:5 --v 6

# Stable Diffusion
(old Beijing zhajiang noodles:1.4), (noodles in bowl:1.3), (yellow paste minced meat:1.2),
(abundant side dishes:1.2), (cucumber radish sprouts scallion:1.1), (sesame paste vinegar:1.0),
even natural 4500K, no strong shadows, rich colors, traditional old Beijing, authentic street food, 8K
Negative: dull gray colors, few ingredients, modern fusion style, unclear

# 即梦（中文）
俯视老北京炸酱面，碗中面条整齐盘绕，黄酱肉末炸酱均匀拌入有颗粒感，
配菜丰富黄瓜丝萝卜丝豆芽葱花，色彩对比鲜明黄绿白色红，
芝麻酱和醋壶在旁，传统老北京街头美食美学，
均匀自然光4500K无强阴影，各色彩配菜清晰可见，中性色调，传统地道市井文化
```

---

#### 模板 C9-Noodles-M3【日式拉面 — 浓郁叉烧溏心蛋】

**主题标签：** `#面馆 #日式拉面 #叉烧 #溏心蛋 #浓郁 #商品图 #品质 #食欲感`

**主体描述：**
45° 俯视角，日式豚骨拉面，浓白豚骨汤底有油花，木耳丝/葱花/溏心蛋/叉烧整齐排列，
有海苔和玉米粒点缀，汤面有蒸汽升腾，整体有"浓郁、层次丰富"的食欲感。

**环境光线：**
暖光（3500K）为主，汤底有反光感，蒸汽在光束中可见，有日式暖帘或木桌背景。

**风格参考：**
日式拉面馆风（Japanese Ramen Shop），参考一风堂/味千拉面视觉，强调"浓郁汤头"的视觉暗示。

**技术参数：**

```
# Midjourney
45-degree overhead Japanese tonkotsu ramen, creamy white pork bone broth with oil sheen,
seaweed menma scallion soft-boiled egg chashu pork neatly arranged,
corn and nori garnish, steam rising from broth, warm 3500K lighting,
pork bone soup reflections, Japanese noren curtain or wooden table background,
rich layered appetizing, Japanese ramen aesthetic --ar 4:5 --v 6

# Stable Diffusion
(Japanese tonkotsu ramen:1.4), (creamy pork broth:1.3), (chashu egg menma:1.2),
(nori corn garnish:1.1), (steam rising:1.0), warm 3500K, pork bone soup reflections,
Japanese noren wooden background, rich layered appetizing, 8K
Negative: thin clear broth, few toppings, dull colors, fast food presentation

# 即梦（中文）
45度俯视日式豚骨拉面，浓白豚骨汤底有油花，
木耳丝葱花溏心蛋叉烧整齐排列，海苔和玉米粒点缀，
汤面蒸汽升腾，暖光3500K为主，汤底有反光感，
有日式暖帘或木桌背景，浓郁层次丰富，日式拉面美学
```

---

### 🏠 场景氛围图

#### 模板 C9-Noodles-A1【面馆明档 — 师傅拉面表演】

**主题标签：** `#面馆 #明档 #师傅拉面 #表演区 #可视化 #匠心 #门店展示`

**主体描述：**
面馆开放式厨房视角，师傅正在拉面/扯面（手法有力而有节奏），面团在空中飞舞，
背景有沸腾的大锅汤底和面条架，整体传达"现场制作、看得见的匠心"的信任感。

**环境光线：**
灶台暖光（3000K）+ 顶部工作灯（4000K），师傅面部有补光，面团有光束感，整体温暖有活力。

**风格参考：**
明档可视化（Open Kitchen Visualization），参考兰州拉面/西安面馆现场制作视觉，强调"手艺+新鲜"的传统面食文化。

**技术参数：**

```
# Midjourney
Noodle shop open kitchen view, master hand-pulling or stretching noodles with rhythmic powerful technique,
dough flying in the air, background boiling large soup pot and noodle rack,
warm stove light 3000K mixed with overhead work lights 4000K, master face fill light,
dough with light beam effect, warm dynamic atmosphere, visible craftsmanship trust-building,
traditional noodle craft documentary --ar 16:9 --v 6

# Stable Diffusion
(noodle shop open kitchen:1.4), (master pulling noodles:1.4), (dough flying:1.2),
(boiling soup pot:1.2), warm 3000K top 4000K, master face fill, dough light beam,
warm dynamic atmosphere, visible craftsmanship, traditional noodle craft documentary, 8K
Negative: closed hidden kitchen, no visible making process, cold lighting, modern fast food

# 即梦（中文）
面馆开放式厨房视角，师傅正在拉面扯面手法有力有节奏，
面团在空中飞舞，背景有沸腾的大锅汤底和面条架，
灶台暖光3000K混合顶部工作灯4000K，师傅面部补光，面团有光束感，
温暖有活力，现场制作看得见的匠心，传统面食文化可视化
```

---

### 📺 直播背景图

#### 模板 C9-Noodles-L1【面馆直播背景 — 烟火气】

**主题标签：** `#面馆 #直播背景 #烟火气 #传统 #抖音直播 #品牌感 #匠心`

**主体描述：**
竖版面馆直播间背景，传统面馆内景，有大锅汤底和面条架，
师傅在明档拉面，背景墙有面食文化元素（书法/老照片），
顶部有暖黄灯，整体温暖有匠心氛围。

**环境光线：**
灶台暖光（3000K）+ 暖黄灯（3200K），整体温暖有食欲感，
正面有补光灯确保主播面部光线。

**风格参考：**
传统面馆直播风（Traditional Noodle Shop Live Stream），参考手工面品牌直播视觉，强调"匠心+烟火气"。

**技术参数：**

```
# Midjourney
Noodle shop Douyin live stream backdrop vertical 9:16, traditional noodle shop interior,
large soup pot and noodle rack, master pulling noodles at open counter,
back wall with noodle culture elements calligraphy old photos, warm yellow lamps on top,
stove warm 3000K plus warm yellow 3200K, front fill for streamer face,
warm appetizing atmosphere, craftsmanship vibe, traditional noodle shop live stream --ar 9:16 --v 6

# Stable Diffusion
(noodle shop live backdrop:1.4), (traditional interior:1.3), (soup pot noodle rack:1.2),
(master pulling noodles:1.3), (calligraphy old photo wall:1.1), warm yellow lamps,
stove 3000K warm yellow 3200K, front fill, warm appetizing, craftsmanship, traditional live stream, 8K
Negative: modern fast food chain, cold fluorescent, no craft atmosphere, dark dull

# 即梦（中文）
面馆抖音直播间背景竖版，传统面馆内景，
有大锅汤底和面条架，师傅在明档拉面，
背景墙有面食文化元素书法老照片，顶部暖黄灯，
灶台暖光3000K加暖黄灯3200K，正面补光灯确保主播面部光线，
温暖有食欲感，匠心氛围，传统面馆直播
```

---

## 1.10 小吃

### 🖼️ 商品主图

#### 模板 C10-Snacks-M1【煎饼果子 — 街头经典】

**主题标签：** `#小吃 #煎饼果子 #街头 #经典 #商品图 #外卖 #早餐 #烟火气`

**主体描述：**
平视视角，刚刚制作完成的煎饼果子置于包装纸中，
薄脆层层分明可见，绿葱花和黑芝麻点缀，酱料颜色均匀，
有热气从边缘透出，整体有"现做现卖、新鲜出炉"的食欲感。

**环境光线：**
自然光（5600K）打亮煎饼金黄色彩，有轻微背光制造热气可见效果，
色温偏暖 4000K，画面有"热气腾腾"的清晨感。

**风格参考：**
街头小吃写实风（Street Snack Realistic），参考天津煎饼果子/鸡蛋灌饼视觉，强调"新鲜+现做+市井"。

**技术参数：**

```
# Midjourney
Front view of freshly made煎饼果子 in wrapper, layered thin crispy visible,
green scallions and black sesame seeds garnish, even sauce color distribution,
steam rising from edges, natural daylight 5600K on golden pancake color,
slight backlight making steam visible, warm 4000K, morning fresh appetizing,
street snack realistic photography --ar 4:5 --v 6

# Stable Diffusion
(Jianbing guozi fresh:1.4), (layered thin crispy:1.3), (scallions sesame:1.1),
(even sauce:1.1), (steam rising:1.2), natural daylight 5600K, golden color,
backlight steam effect, warm 4000K, morning fresh, street snack realistic, 8K
Negative: cold soggy, unclear, dull colors, fast food frozen look

# 即梦（中文）
平视刚制作完成的煎饼果子置于包装纸中，
薄脆层层分明可见，绿葱花和黑芝麻点缀，酱料颜色均匀，
热气从边缘透出，自然光5600K打亮煎饼金黄色，
轻微背光制造热气可见效果，暖色4000K，清晨新鲜食欲感
```

---

#### 模板 C10-Snacks-M2【臭豆腐 — 闻臭吃香】

**主题标签：** `#小吃 #臭豆腐 #长沙 #经典 #商品图 #外卖 #夜宵 #反差 #话题性`

**主体描述：**
俯视一碗长沙臭豆腐，黑色豆腐块整齐排列，浇满红油汤汁，
有蒜蓉/辣椒/香菜点缀，汤汁红亮油光，
画面有"臭到极致就是香"的反差感，
文案可配合"闻着臭吃着香"。

**环境光线：**
顶光（Top Lighting）打亮红油汤汁光泽，色温 3500K偏暖，
整体有重口味夜宵感，暗调突出红油油光。

**风格参考：**
重口味反差风（Polarizing Flavor Visual），参考长沙黑色经典臭豆腐视觉，强调"反差+话题+诱惑"。

**技术参数：**

```
# Midjourney
Overhead bowl of Changsha stinky tofu, black tofu blocks neatly arranged,
drenched in red oil broth, garlic chili cilantro garnish,
bright red oily sauce sheen, top light on red oil gloss, warm 3500K,
dark tone emphasizing red oil, polarizing aroma-flavor contrast, street snack legendary visual --ar 4:5 --v 6

# Stable Diffusion
(Changsha stinky tofu:1.4), (black tofu neat:1.3), (red oil broth:1.3),
(garlic chili garnish:1.1), (red oily sheen:1.2), top light, warm 3500K,
dark tone red oil, polarizing aroma-flavor contrast, street snack legendary, 8K
Negative: pale gray tofu, unclear, dull, unappetizing presentation

# 即梦（中文）
俯视一碗长沙臭豆腐，黑色豆腐块整齐排列，
浇满红油汤汁，蒜蓉辣椒香菜点缀，汤汁红亮油光，
顶光照亮红油光泽，暖色3500K偏暖，暗调突出红油油光，
臭到极致就是香的反差感，重口味夜宵话题性
```

---

#### 模板 C10-Snacks-M3【糖葫芦 — 国潮萌趣】

**主题标签：** `#小吃 #糖葫芦 #国潮 #萌趣 #传统 #节日 #打卡 #话题性`

**主体描述：**
串糖葫芦特写或手持视角，红亮糖衣包裹山楂，有少量糖滴挂在表面，
背景为中国红或国潮图案，整体有"国潮+传统+可爱"的三重气质，
适合小红书打卡和话题传播。

**环境光线：**
自然光（5600K）打亮糖衣红亮光泽，糖滴有高光点，
背景国潮红/金色调衬托，色温 4000K。

**风格参考：**
国潮萌趣风（Guochao Kawaii），参考故宫糖葫芦文创产品视觉，强调"传统萌化+国潮复兴"。

**技术参数：**

```
# Midjourney
Close-up tanghulu candied hawthorn on skewer or handheld, bright red sugar coating on hawthorn berries,
small sugar droplets dripping from surface, Chinese red or guochao pattern background,
glowing red sugar sheen in natural light 5600K, sugar drop highlights, 4000K warm,
traditional cute guochao aesthetic, trendy cultural heritage, social media sharable --ar 4:5 --v 6

# Stable Diffusion
(tanghulu candied hawthorn:1.4), (bright red sugar coating:1.3), (hawthorn berries:1.2),
(sugar droplets:1.1), (Chinese red guochao background:1.2), natural daylight 5600K,
sugar sheen highlights, 4000K warm, traditional cute guochao, trendy cultural heritage, sharable, 8K
Negative: dull faded sugar, cheap plastic look, unclear, boring

# 即梦（中文）
糖葫芦特写或手持，红亮糖衣包裹山楂，有少量糖滴挂在表面，
中国红或国潮图案背景，自然光5600K打亮糖衣红亮光泽，糖滴高光点，
暖色4000K，传统萌趣国潮美学，传统文化萌化复兴，社交媒体可传播打卡
```

---

### 📺 直播背景图

#### 模板 C10-Snacks-L1【小吃街边摊直播背景 — 深夜烟火】

**主题标签：** `#小吃 #街边摊 #直播背景 #深夜 #烟火气 #接地气 #抖音直播 #下沉市场`

**主体描述：**
竖版小吃街边摊直播间背景，塑料桌椅排列，摊主正在铁板/油锅前操作，
有大量小吃成品陈列（煎饼/炸串/烤冷面等），背景有手写价格牌，
整体：接地气、烟火气、深夜感强，适合下沉市场。

**环境光线：**
摊主操作区暖光（2500K），有油烟和热气效果，
整体暗调背景突出操作区，适合手机摄像头。

**风格参考：**
下沉市场直播风（Lower-tier Market Live Stream），参考地方小吃夜市带货直播，强调"真实+便宜+烟火气"。

**技术参数：**

```
# Midjourney
Street snack stall live stream backdrop vertical 9:16, plastic tables and stools arranged,
vendor operating iron plate or wok, large display of finished snacks jianbing fried skewers,
hand-written price signs in background, vendor area warm light 2500K,
oil smoke and steam effect, overall dark background emphasizing operating area,
authentic affordable fireworks atmosphere, lower-tier market live stream --ar 9:16 --v 6

# Stable Diffusion
(street snack stall live backdrop:1.4), (plastic tables vendor:1.3),
(iron plate wok operation:1.2), (finished snack display:1.2), (price signs:1.1),
vendor warm 2500K, oil smoke steam, dark background, operating area emphasis,
authentic affordable fireworks, lower-tier market live stream, 8K
Negative: bright clean modern, expensive upscale, no atmosphere, clean chain store

# 即梦（中文）
小吃街边摊直播间背景竖版，塑料桌椅排列，
摊主正在铁板或油锅前操作，大量小吃成品陈列煎饼炸串烤冷面等，
背景手写价格牌，摊主操作区暖光2500K，
有油烟热气效果，整体暗调背景突出操作区，
真实便宜烟火气，下沉市场直播，深夜烟火气氛围
```

---

# 二、酒旅行业

---

## 2.1 酒店

### 🖼️ 商品主图

#### 模板 H1-Hotel-M1【酒店客房 — 豪华套房】

**主题标签：** `#酒店 #豪华套房 #商品图 #品质 #高星 #婚宴 #商务 #OTA展示`

**主体描述：**
广角视角展示豪华套房全景，大床居中（白色床品），落地窗外有城市天际线（夜景或夕阳），
有行政办公桌、真皮沙发、智能马桶，室内有柔和暖光（3500K），
整体：金碧辉煌、有品质、有仪式感，适合五星级/高端酒店 OTA 主图。

**环境光线：**
室内暖光（3500K）+ 窗外城市夜景光（5000K），形成明暗对比，
落地窗有自然光或城市夜景打亮室内，色温偏暖营造舒适感。

**风格参考：**
高端酒店摄影（Luxury Hotel Photography），参考四季酒店/瑞吉酒店视觉，强调"奢华+舒适+品质"。

**技术参数：**

```
# Midjourney
Wide-angle luxury hotel suite全景, king bed center with white bedding,
floor-to-ceiling window with city skyline night or sunset view,
executive desk leather sofa smart toilet, soft warm interior light 3500K,
city night or sunset light through window 5000K, warm interior cool exterior contrast,
luxury comfort quality, five-star OTA cover photography --ar 16:9 --style photo --v 6

# Stable Diffusion
(luxury hotel suite:1.4), (king bed white bedding:1.3), (floor-ceiling window city view:1.3),
(executive desk sofa:1.2), soft warm 3500K interior, city night 5000K through window,
warm interior cool exterior contrast, luxury comfort quality, five-star OTA cover, 8K
Negative: small cramped room, dull lighting, old furniture, budget hotel look

# 即梦（中文）
广角豪华酒店套房全景，大床居中白色床品，
落地窗外城市天际线夜景或夕阳，行政办公桌真皮沙发智能马桶，
室内柔和暖光3500K，窗外城市夜景光5000K，
暖内冷外对比，奢华舒适品质感，五星级高端酒店OTA主图
```

---

#### 模板 H1-Hotel-M2【酒店浴室 — 精致大理石】

**主题标签：** `#酒店 #浴室 #大理石 #浴缸 #商品图 #品质 #精致 #高星`

**主体描述：**
45° 视角酒店浴室全景，大理石墙面和地面，浴缸居中有浴盐和玫瑰花瓣，
有玻璃隔断淋浴间和智能马桶，浴巾整齐悬挂，
有绿植或香薰蜡烛点缀，整体传达"精致、干净、有仪式感的沐浴体验"。

**环境光线：**
均匀柔光（4000K），大理石有自然纹理反光，浴缸有顶光照亮，
整体明亮干净，无水渍杂乱感。

**风格参考：**
酒店浴室品质感（Hotel Bathroom Premium），参考五星级浴室标准，强调"干净+精致+仪式感"。

**技术参数：**

```
# Midjourney
45-degree hotel bathroom全景, marble walls and floor, bathtub center with bath salts rose petals,
glass shower enclosure and smart toilet, towels neatly hung, green plant or candle accents,
even soft light 4000K, marble natural texture reflections, bathtub top light,
bright clean premium, refined bathing ritual atmosphere, hotel bathroom quality --ar 4:3 --v 6

# Stable Diffusion
(hotel bathroom:1.4), (marble walls floor:1.3), (bathtub bath salts rose:1.3),
(glass shower smart toilet:1.2), (green plant candle:1.1), even soft 4000K,
marble reflections, bathtub top light, bright clean premium, refined bathing ritual, 8K
Negative: dirty wet, cluttered, old tiles, budget hotel

# 即梦（中文）
45度酒店浴室全景，大理石墙面和地面，
浴缸居中有浴盐玫瑰花瓣，玻璃隔断淋浴间和智能马桶，
浴巾整齐悬挂，绿植或香薰蜡烛点缀，
均匀柔光4000K，大理石自然纹理反光，浴缸顶光照亮，
明亮干净精致，沐浴仪式感，酒店浴室品质感
```

---

#### 模板 H1-Hotel-M3【酒店早餐 — 丰盛自助】

**主题标签：** `#酒店 #早餐 #自助 #商品图 #丰盛 #品质 #五星 #OTA展示`

**主体描述：**
鸟瞰酒店早餐自助台，中西结合：面包/水果/酸奶/煎蛋/培根/粥品/小笼包，
色彩丰富多样，餐具整齐摆放，有鲜榨果汁和咖啡，
整体传达"丰盛、健康、有品质"的五星级早餐体验。

**环境光线：**
顶置柔光（4000K）均匀打亮自助台，食物色彩饱和，无阴影，整体明亮干净。

**风格参考：**
五星级酒店早餐摄影（Five-star Hotel Breakfast），参考万豪/希尔顿早餐视觉，强调"丰盛+品质+健康"。

**技术参数：**

```
# Midjourney
Overhead hotel breakfast buffet spread, Chinese-Western combination bread fruit yogurt
scrambled egg bacon congee dim sum, colorful abundant variety, neatly arranged utensils,
fresh juice and coffee, overhead soft light 4000K, saturated food colors, shadowless bright,
abundant healthy quality five-star breakfast, hotel breakfast commercial photography --ar 16:9 --v 6

# Stable Diffusion
(hotel breakfast buffet:1.4), (Chinese-Western variety:1.3), (bread fruit yogurt eggs:1.2),
(colorful abundant:1.2), (fresh juice coffee:1.1), overhead soft 4000K, saturated colors,
shadowless bright, abundant healthy quality, five-star breakfast, 8K
Negative: sparse limited, dull colors, messy, cheap buffet

# 即梦（中文）
鸟瞰酒店早餐自助台，中西结合面包水果酸奶煎蛋培根粥品小笼包，
色彩丰富多样，餐具整齐摆放，鲜榨果汁和咖啡，
顶置柔光4000K均匀打亮，食物色彩饱和无阴影，明亮干净，
丰盛健康有品质，五星级早餐体验，酒店早餐商业摄影
```

---

### 🏠 场景氛围图

#### 模板 H1-Hotel-A1【酒店大堂 — 金碧辉煌】

**主题标签：** `#酒店 #大堂 #金碧辉煌 #品质 #高星 #门面 #第一印象`

**主体描述：**
仰视或平视五星级酒店大堂，水晶吊灯华丽从天而降，
前台有礼宾人员，大理石地面有倒影，墙面有艺术画作或品牌装饰，
背景有旋转门和落地玻璃，整体传达"奢华、气派、品质"的第一印象。

**环境光线：**
水晶吊灯光（3200K）为主，有顶光打亮大理石地面倒影，
整体金色暖调，金碧辉煌感。

**风格参考：**
奢华大堂摄影（Grand Lobby Photography），参考香格里拉/丽思卡尔顿大堂视觉，强调"第一印象的气派感"。

**技术参数：**

```
# Midjourney
Upward or level view five-star hotel lobby, crystal chandelier华丽 descending from ceiling,
concierge at front desk, marble floor with reflections, walls with art paintings or brand decor,
revolving door and floor glass background, crystal chandelier light 3200K,
marble floor reflections, golden warm tones, grand luxurious impressive first impression,
luxury hotel lobby photography --ar 16:9 --v 6

# Stable Diffusion
(five-star hotel lobby:1.4), (crystal chandelier:1.3), (concierge marble reflections:1.2),
(art paintings decor:1.1), (revolving door glass:1.1), chandelier 3200K,
marble floor reflections, golden warm tones, grand luxurious, impressive first impression, 8K
Negative: small shabby lobby, dark lighting, budget hotel, no luxury

# 即梦（中文）
仰视或平视五星级酒店大堂，水晶吊灯华丽从天而降，
前台有礼宾人员，大理石地面有倒影，墙面艺术画作或品牌装饰，
旋转门和落地玻璃，水晶吊灯光3200K为主，
大理石地面倒影，金色暖调金碧辉煌感，奢华气派品质第一印象
```

---

### 📣 营销海报

#### 模板 H1-Hotel-P1【节日促销 — 圣诞新年狂欢】

**主题标签：** `#圣诞 #新年 #酒店 #促销 #节日 #狂欢 #限时 #高星`

**主体描述：**
节日主题酒店促销海报，大堂或房间有圣诞树/圣诞装饰，
有圣诞特饮（热红酒/热巧）或节日下午茶组合，
有促销价格标签（如"圣诞特惠低至5折"），
整体传达"节日限定优惠"的紧迫感和奢华感。

**环境光线：**
节日暖光（2800K）+ 圣诞装饰光（多彩），制造温暖华丽感。

**风格参考：**
节日奢华促销（Festive Luxury Campaign），参考各大酒店集团圣诞营销视觉，强调"节日的仪式感+优惠的紧迫性"。

**技术参数：**

```
# Midjourney
Festive hotel Christmas New Year promotional poster, hotel lobby or room decorated with Christmas tree,
Christmas special drinks hot wine hot chocolate or festive afternoon tea set,
promotion price tags like Christmas special up to 50 percent off,
warm festive light 2800K plus colorful Christmas decorations, warm luxurious festive urgency,
holiday limited time offer, luxury hotel festive campaign --ar 2:3 --v 6

# Stable Diffusion
(hotel festive Christmas promotion:1.4), (Christmas tree decorations:1.3),
(Christmas drinks afternoon tea:1.2), (promotion price tags:1.2),
warm festive 2800K colorful decorations, warm luxurious festive urgency, holiday limited offer, 8K
Negative: no festive mood, dull colors, expensive unaffordable look, cluttered

# 即梦（中文）
节日主题酒店促销海报，大堂或房间有圣诞树圣诞装饰，
圣诞特饮热红酒热巧或节日下午茶组合，促销价格标签如圣诞特惠低至5折，
节日暖光2800K加圣诞装饰多彩光，温暖华丽感，
节日的仪式感加优惠紧迫性，节日限定奢华酒店促销
```

---

### 📺 直播背景图

#### 模板 H1-Hotel-L1【酒店直播背景 — 品牌展厅风】

**主题标签：** `#酒店 #直播背景 #品牌 #展厅 #品质 #抖音直播 #引流`

**主体描述：**
竖版酒店直播间背景，品牌展厅风格，
一侧展示酒店特色客房（床品/浴室/窗外景）逼真渲染图，
另一侧为品牌 LOGO 和今日优惠套餐信息，
底部有预订二维码，整体品牌感强、有品质、有购买引导。

**环境光线：**
展厅均匀光（4000K），客房展示区有射灯精准打亮，品牌 LOGO 区均匀无阴影，
整体干净有品质。

**风格参考：**
酒店品牌直播风（Hotel Brand Live Stream），参考万豪/希尔顿直播背景，强调"品牌+品质+即时预订"的转化导向。

**技术参数：**

```
# Midjourney
Hotel brand exhibition live stream backdrop vertical 9:16, brand showroom style,
one side display hotel signature rooms bed bath window view rendered images,
other side brand LOGO and today's special package info, bottom booking QR code,
showroom uniform light 4000K, room display area with spotlight, brand LOGO area even shadowless,
clean premium, brand-oriented with purchase guidance, hotel brand live stream --ar 9:16 --v 6

# Stable Diffusion
(hotel live backdrop brand showroom:1.4), (signature room displays:1.3),
(bed bath window view:1.2), (brand LOGO package:1.2), (QR code:1.0),
showroom 4000K, spotlight on rooms, brand LOGO shadowless, clean premium, brand purchase guidance, 8K
Negative: cluttered discount overload, dark, no brand identity, budget feel

# 即梦（中文）
酒店品牌展厅直播间背景竖版，品牌展厅风格，
一侧展示酒店特色客房床品浴室窗外景逼真渲染图，
另一侧品牌LOGO和今日优惠套餐信息，底部预订二维码，
展厅均匀光4000K，客房展示区射灯精准打亮，品牌LOGO区均匀无阴影，
干净有品质，品牌感强有购买引导，酒店品牌直播
```

---

## 2.2 民宿

### 🖼️ 商品主图

#### 模板 H2-BnB-M1【ins 风民宿 — 简约温馨】

**主题标签：** `#民宿 #ins风 #简约 #温馨 #商品图 #小红书 #打卡 #OTA展示`

**主体描述：**
广角视角 ins 风民宿内部，纯白/莫兰迪色系墙面，木质家具，落地窗有绿植或山景，
床品为白色或淡粉色有质感，有吊椅/波西米亚毯/干花装饰，
整体：小清新、有品质、能出片，适合小红书/抖音打卡民宿。

**环境光线：**
自然光（5600K）透过落地窗照入，有轻微柔焦（Lensbaby 效果），
整体明亮通透，有"岁月静好"的氛围感。

**风格参考：**
ins 民宿摄影（Airbnb Aesthetic Photography），参考小红书爆款民宿视觉，强调"颜值+出片率+氛围感"。

**技术参数：**

```
# Midjourney
Wide-angle ins aesthetic民宿 interior, pure white or Morandi color walls, wooden furniture,
floor-to-ceiling window with green plants or mountain view, white or pastel pink bedding,
hanging chair bohemian rug dried flowers, natural daylight 5600K through window,
slight soft focus, bright airy, serene and beautiful atmosphere, high photo-worthiness,
ins aesthetic Airbnb photography --ar 16:9 --style photo --v 6

# Stable Diffusion
(ins aesthetic Airbnb:1.4), (white Morandi walls:1.3), (wooden furniture:1.2),
(floor window green plants mountain:1.2), (hanging chair dried flowers:1.1),
natural daylight 5600K, slight soft focus, bright airy, serene beautiful, high photo-worthiness, 8K
Negative: dark interior, old furniture, cluttered, dull colors, low photo-worthiness

# 即梦（中文）
广角ins风民宿内部，纯白或莫兰迪色系墙面，木质家具，
落地窗有绿植或山景，白色或淡粉色有质感床品，
吊椅波西米亚毯干花装饰，自然光5600K透过落地窗照入，
轻微柔焦效果，明亮通透，岁月静好氛围，高出片率，
ins风民宿摄影，适合小红书抖音打卡
```

---

#### 模板 H2-BnB-M2【乡村田园风 — 土灶农家】

**主题标签：** `#民宿 #乡村 #田园 #土灶 #农家 #特色 #体验 #OTA展示`

**主体描述：**
乡村田园风民宿，土墙/木质梁柱，有农村土灶台（可用）或老式家具，
窗外有农田/菜园/鸡鸭，床品为手工棉布，有竹编灯罩和干辣椒串装饰，
整体：有特色、有温度、有"住在乡村"的体验感。

**环境光线：**
自然日光（5600K）透过木窗照入，有尘埃颗粒感（丁达尔效应），
整体温暖偏黄（3500K），有乡村生活气息。

**风格参考：**
乡村田园风（Countryside Pastoral），参考莫干山民宿/婺源乡村住宿视觉，强调"特色+体验+温度"。

**技术参数：**

```
# Midjourney
Countryside pastoral民宿, mud wall or wooden beam ceiling, traditional earth stove or vintage furniture,
window with farmland vegetable garden chickens ducks, handmade cotton bedding,
bamboo lampshade and dried chili decorations, natural daylight 5600K through wooden window,
visible dust particles god ray effect, warm 3500K, countryside life atmosphere,
authentic rural experience, unique charming --ar 16:9 --v 6

# Stable Diffusion
(countryside pastoral Airbnb:1.4), (mud wall wooden beams:1.3), (earth stove vintage:1.2),
(farmland view:1.2), (bamboo lampshade dried chilies:1.1), daylight 5600K,
dust particles god ray, warm 3500K, countryside life atmosphere, authentic rural experience, 8K
Negative: modern city apartment, sterile, no rural character, cold

# 即梦（中文）
乡村田园风民宿，土墙或木质梁柱，有农村土灶台或老式家具，
窗外有农田菜园鸡鸭，手工棉布床品，竹编灯罩和干辣椒串装饰，
自然日光5600K透过木窗照入，有尘埃颗粒感丁达尔效应，
暖色3500K，乡村生活气息，有特色有温度，"住在乡村"体验感
```

---

#### 模板 H2-BnB-M3【海景民宿 — 浪漫日出】

**主题标签：** `#民宿 #海景 #日出 #浪漫 #商品图 #小红书 #打卡 #海边 #品质`

**主体描述：**
海景民宿客房视角，落地窗直面大海/海景日出/日落，天空呈橙粉蓝色渐变，
海面有光倒影，床品为白色简洁，有透明玻璃半球吊椅在窗边，
整体：浪漫、有品质、有"面朝大海"的视觉冲击。

**环境光线：**
日出/日落光（2500-4000K渐变），暖橙色阳光从窗户斜射入，
海面有金黄色光倒影，整体浪漫温暖。

**风格参考：**
海景浪漫风（Seaside Romance），参考三亚/厦门/大理洱海海景民宿视觉，强调"浪漫+品质+稀缺海景"。

**技术参数：**

```
# Midjourney
Seaside民宿 room view, floor-to-ceiling window facing ocean sunrise or sunset,
sky orange pink blue gradient, ocean light reflections on surface,
bedding white simple, transparent glass hanging chair by window,
sunrise sunset light 2500-4000K gradient, warm orange sunlight slanting through window,
ocean golden reflections, romantic premium, ocean facing visual impact,
seaside romance aesthetic photography --ar 16:9 --v 6

# Stable Diffusion
(seaside ocean view Airbnb:1.4), (floor window ocean sunrise sunset:1.4),
(sky orange pink blue gradient:1.2), (ocean light reflections:1.2),
(white bedding hanging chair:1.1), sunrise sunset 2500-4000K gradient,
warm orange sunlight, ocean golden reflections, romantic premium, ocean facing, 8K
Negative: inland room no view, dark interior, old furniture, low quality

# 即梦（中文）
海景民宿客房视角，落地窗直面大海日出或日落，
天空呈橙粉蓝渐变色，海面有光倒影，
白色简洁床品，窗边透明玻璃半球吊椅，
日出日落光2500-4000K渐变，暖橙色阳光从窗户斜射入，
海面金黄色光倒影，浪漫有品质，"面朝大海"视觉冲击
```

---

### 🏠 场景氛围图

#### 模板 H2-BnB-A1【民宿公区 — 花园庭院】

**主题标签：** `#民宿 #公区 #花园庭院 #氛围 #打卡 #小红书 #生活感 #展示`

**主体描述：**
民宿花园庭院视角，有藤蔓爬墙和花卉绿植，有木质桌椅和遮阳伞，
有户外吊床或秋千，整体有"慢生活、岁月静好"的感觉，
背景为民宿建筑外观，整体适合发小红书/朋友圈。

**环境光线：**
自然日光（5600K）晴天氛围，有树影斑驳（Patchy Shadow）效果，
整体明亮温暖，有生活感。

**风格参考：**
花园庭院打卡风（Garden Courtyard Check-in），参考小红书爆款民宿公区视觉，强调"慢生活+出片率"。

**技术参数：**

```
# Midjourney
民宿 courtyard garden view, vine-covered walls and colorful flowers, wooden table and sun umbrella,
outdoor hammock or swing, slow living serene atmosphere, daylight 5600K sunny,
patchy tree shadows, bright warm, lifestyle feeling, high photo-worthiness,
garden courtyard check-in aesthetic, slow living beauty --ar 16:9 --v 6

# Stable Diffusion
(countyard garden:1.4), (vine walls flowers:1.3), (wooden furniture umbrella:1.2),
(hammock swing:1.1), daylight 5600K, patchy shadows, bright warm, lifestyle, high photo-worthiness, 8K
Negative: dark courtyard, cluttered, no green, urban concrete

# 即梦（中文）
民宿花园庭院视角，藤蔓爬墙花卉绿植，
木质桌椅遮阳伞，户外吊床或秋千，
慢生活岁月静好感觉，自然日光5600K晴天氛围，
树影斑驳效果，明亮温暖生活感，高出片率，
花园庭院打卡美学，慢生活美感
```

---

### 📣 营销海报

#### 模板 H2-BnB-P1【民宿体验套餐 — 小众目的地】

**主题标签：** `#民宿 #体验套餐 #小众 #目的地 #特色体验# 小众目的地体验套餐海报

**主题标签：** `#民宿 #体验套餐 #小众目的地 #特色体验 #深度游 #文化 #品质`

**主体描述：**
民宿体验套餐宣传，小众目的地视角（如：大理洱海/丽江/莫干山/婺源），画面为特色体验场景：扎染/陶艺/采茶/星空露营/骑马等，配有民宿建筑外观和当地特色元素，有套餐价格标签，整体传达"深度游+特色体验+品质生活"。

**环境光线：**
自然光（5600K）或场景特定光（星空夜景 7000K），色温根据场景调整，整体自然真实。

**风格参考：**
小众目的地风（Off-the-Beaten-Path Destination），参考各大 OTA 深度游专题视觉，强调"发现不一样的美"。

**技术参数：**

```
# Midjourney
Small niche destination experience package poster, destination scenes like Dali Erhai Lijiang Moganshan Wuyuan,
cultural experiences like indigo dyeing pottery tea picking stargazing camping horse riding,
local characteristics elements, accommodation building facade, package price tags,
natural daylight 5600K or night sky 7000K for stargazing, authentic natural atmosphere,
off-the-beaten-path discovery, deep travel cultural experience --ar 2:3 --v 6

# Stable Diffusion
(niche destination experience package:1.4), (destination scenes:1.3), (cultural experiences:1.2),
(local elements accommodation:1.2), (package price:1.1), natural daylight 5600K, authentic, off-the-beaten-path, 8K
Negative: generic chain hotel, no local character, crowded mass tourism

# 即梦（中文）
小众目的地体验套餐宣传，画面为特色体验场景扎染陶艺采茶星空露营骑马等，
配有民宿建筑外观和当地特色元素，有套餐价格标签，
自然光5600K或星空夜景7000K，真实自然氛围，
小众目的地发现感，深度游文化体验特色
```

---

### 📺 直播背景图

#### 模板 H2-BnB-L1【民宿直播间背景 — 温暖田园】

**主题标签：** `#民宿 #直播背景 #温暖 #田园 #小红书 #抖音 #品牌感 #引流`

**主体描述：**
竖版民宿直播间背景，田园风格公区视角，花卉绿植环绕，木质桌椅和藤编装饰，
有咖啡或茶饮道具，背景为民宿 LOGO 和今日特惠信息，
整体温暖治愈，品牌感强，适合小红书/抖音民宿直播。

**环境光线：**
自然光（4500K）为主，暖黄色调（3500K）点缀，正面有补光灯确保主播面部光线，整体温暖治愈。

**风格参考：**
民宿直播温暖治愈风（BnB Warm Healing Live Stream），参考小红书民宿直播视觉，强调"温暖+治愈+品牌"。

**技术参数：**

```
# Midjourney
Countryside BnB live stream backdrop vertical 9:16, garden style public area, flowers green plants around,
wooden furniture and rattan decorations, coffee or tea props, back wall with BnB LOGO and today specials,
warm 3500K yellow tones, natural light 4500K, front fill light for streamer face,
warm and healing, brand-oriented, suitable for 小红书抖音民宿直播 --ar 9:16 --v 6

# Stable Diffusion
(BnB live backdrop countryside:1.4), (garden style public area:1.3), (flowers plants:1.2),
(wooden rattan decorations:1.2), (coffee tea props:1.1), (LOGO today specials:1.2),
warm 3500K natural 4500K, front fill, warm healing brand-oriented, 8K
Negative: cold interior, dark, cluttered discount, no brand

# 即梦（中文）
田园风民宿直播间背景竖版，花卉绿植环绕公区，木质桌椅和藤编装饰，
咖啡或茶饮道具，背景民宿LOGO和今日特惠信息，
自然光4500K为主，暖黄3500K点缀，正面补光灯确保主播面部光线，
温暖治愈品牌感强，适合小红书抖音民宿直播
```

---

## 2.3 景区

### 🖼️ 商品主图

#### 模板 H3-Attraction-M1【景区打卡点 — 地标建筑】

**主题标签：** `#景区 #打卡点 #地标 #商品图 #OTA展示 #风景 #标志性 #震撼`

**主体描述：**
震撼视角展示景区标志性建筑或景观（如：张家界天门山/黄山日出/西湖断桥），
画面构图完美（黄金分割或对角线），天空有云彩或朝霞/晚霞，
前景有花草或水面反射，整体有"不来后悔"的视觉冲击。

**环境光线：**
黄金时段光（Golden Hour Light 2800-3500K），侧光或逆光勾勒建筑轮廓，天空有暖色霞光，色温偏暖，画面层次丰富。

**风格参考：**
风景大片风（Landscape Photography Masterpiece），参考国家地理/视觉中国风景大片，强调"震撼+标志性+身临其境感"。

**技术参数：**

```
# Midjourney
Majestic scenic spot landmark photography, iconic architecture or landscape like Zhangjiajie Huangshan West Lake,
perfect composition golden ratio or diagonal, sky with clouds or morning evening glow,
foreground with flowers or water reflections, golden hour light 2800-3500K,
side or backlight outlining contours, rich layered composition, awe-inspiring landscape masterpiece --ar 16:9 --v 6

# Stable Diffusion
(scenic landmark:1.4), (iconic landscape:1.3), (perfect composition:1.2),
(sky clouds glow:1.2), (foreground flowers water:1.1), golden hour 2800-3500K,
side backlight, rich layers, awe-inspiring landscape masterpiece, 8K
Negative: blurry dull, overcast gray, unrecognizable, cheap photo

# 即梦（中文）
震撼视角展示景区标志性建筑或景观如张家界天门山黄山日出西湖断桥，
完美构图黄金分割或对角线构图，天空有云彩朝霞晚霞，
前景有花草水面反射，黄金时段光2800-3500K，
侧光或逆光勾勒轮廓，丰富层次，震撼风景大片感
```

---

#### 模板 H3-Attraction-M2【景区玩乐项目 — 刺激体验】

**主题标签：** `#景区 #玩乐项目 #刺激 #商品图 #体验 #心跳 #冒险 #OTA展示`

**主体描述：**
运动感视角，展示景区刺激玩乐项目（玻璃栈道/漂流/蹦极/热气球/索道），
主体人物或设施处于画面焦点，有速度感或高度感的构图，
背景为壮丽山河，整体传达"心跳加速、不虚此行"的体验感。

**环境光线：**
自然光（5600K）或动态光效（高速运动光模糊），色温根据时间段调整，有速度线或动感模糊效果强调动感。

**风格参考：**
极限体验风（Extreme Experience），参考小红书/抖音极限运动打卡图，强调"刺激+冒险+成就感"。

**技术参数：**

```
# Midjourney
Extreme experience activity in scenic area, glass walkway bungee jumping hot air balloon zip line,
dynamic composition with speed or height sense, adventurous subject as focal point,
background magnificent mountains rivers, motion blur or speed lines, natural daylight 5600K,
adrenaline rush exciting, once-in-a-lifetime experience, action photography --ar 16:9 --v 6

# Stable Diffusion
(extreme scenic activity:1.4), (glass walkway bungee balloon:1.3), (dynamic composition:1.2),
(motion blur speed:1.2), (magnificent background:1.2), natural daylight 5600K,
adrenaline rush exciting, adventurous experience, action photography, 8K
Negative: static boring, dark dull, no sense of height or speed, flat composition

# 即梦（中文）
景区刺激玩乐项目，玻璃栈道漂流蹦极热气球迷你索道，
动感构图有速度感或高度感，冒险主体作为焦点，
背景壮丽山河，有速度线或动感模糊效果强调动感，
自然光5600K，心跳加速刺激感，不虚此行的冒险体验感
```

---

#### 模板 H3-Attraction-M3【景区美食特产 — 当地风味】

**主题标签：** `#景区 #美食特产 #当地风味 #商品图 #伴手礼 #文化 #特色`

**主体描述：**
景区当地特产美食展示（如：青岛啤酒/云南鲜花饼/桂林米粉/西安肉夹馍），
背景为景区风景元素或当地文化元素（山水/建筑/民俗），特产整齐陈列有包装，整体传达"带走一份当地的味道"的伴手礼价值。

**环境光线：**
自然光（4500K）或暖光（3500K），色温偏暖强调食物感，背景虚化突出特产。

**风格参考：**
景区伴手礼风（Local Specialty Souvenir），参考各地文旅伴手礼视觉，强调"当地特色+可带走+礼品感"。

**技术参数：**

```
# Midjourney
Scenic area local specialty food display, like Qingdao beer Yunnan flower cake Guilin noodles Xian roujiamo,
background with scenic landscape or cultural elements mountains buildings folk,
specialties neatly displayed with packaging, warm 3500K or natural 4500K,
background bokeh emphasizing products, local flavor gifting value, scenic area specialty photography --ar 4:5 --v 6

# Stable Diffusion
(scenic area local specialty:1.4), (Qingdao beer Yunnan cake Guilin noodles:1.3),
(scenic cultural background:1.2), (neat packaging:1.2), warm 3500K natural 4500K,
background bokeh, local flavor gifting, scenic specialty photography, 8K
Negative: generic packaged goods, no local character, unclear, dull

# 即梦（中文）
景区当地特产美食展示如青岛啤酒云南鲜花饼桂林米粉西安肉夹馍，
背景为景区风景元素或当地文化元素山水建筑民俗，
特产整齐陈列有包装，暖光3500K或自然光4500K，
背景虚化突出特产，当地风味伴手礼价值，景区特产摄影
```

---

### 🏠 场景氛围图

#### 模板 H3-Attraction-A1【景区全景 — 日出云海】

**主题标签：** `#景区 #全景 #日出 #云海 #震撼 #风景 #大气 #打卡`

**主体描述：**
震撼全景视角，景区最佳观景点（如：山顶/观景台），日出或云海奇观，
天空呈渐变色（蓝紫橙红），云海翻涌或霞光万丈，
有栈道/护栏/观景台作为前景，整体传达"天高地迥、天地无穷"的宇宙感。

**环境光线：**
日出/日落光（2500-4000K渐变），天空与地面有强烈明暗对比，有可见光束（God Ray）穿透云层。

**风格参考：**
震撼全景风（Majestic Panorama），参考国家地理年度最佳风景照片，强调"震撼+大气+可传播性"。

**技术参数：**

```
# Midjourney
Majestic panoramic view from scenic area best viewpoint, sunrise or sea of clouds spectacle,
sky gradient blue purple orange red, clouds rolling or sunlight rays through,
foreground with plank road guardrail viewpoint, sunrise sunset light 2500-4000K gradient,
strong contrast sky ground, visible god ray light beams through clouds,
vast universe feeling, awe-inspiring grandeur panorama --ar 16:9 --v 6

# Stable Diffusion
(majestic panorama sunrise clouds:1.4), (best viewpoint:1.3), (sea of clouds sunrise:1.3),
(sky gradient:1.2), (foreground plank road:1.1), sunrise 2500-4000K gradient,
strong contrast, god ray light beams, vast universe feeling, awe-inspiring grandeur, 8K
Negative: flat overcast gray, no drama, poor composition, dull

# 即梦（中文）
震撼全景视角，景区最佳观景点山顶或观景台，日出或云海奇观，
天空呈渐变色蓝紫橙红，云海翻涌或霞光万丈，
有栈道护栏观景台作为前景，日出日落光2500-4000K渐变，
天空与地面强烈明暗对比，有可见光束穿透云层，
天高地迥天地无穷宇宙感，震撼全景大气
```

---

### 📺 直播背景图

#### 模板 H3-Attraction-L1【景区直播背景 — 沉浸风景】

**主题标签：** `#景区 #直播背景 #沉浸 #风景 #抖音直播 #引流 #OTA #票务`

**主体描述：**
竖版景区直播间背景，以景区最佳观景画面为背景（震撼风景），
底部叠加信息层：景区名称/票务优惠/直播专属价/预约按钮，
主播在画面中下部（不遮挡主要风景），
整体：沉浸感强，信息清晰、有购买引导。

**环境光线：**
风景光效为主（根据风景时间调整），底部信息区有均匀白光补光（4000K）确保文字可读。

**风格参考：**
景区沉浸直播风（Immersive Attraction Live Stream），参考景区官方直播/OTA平台直播视觉，强调"沉浸风景+即时票务转化"。

**技术参数：**

```
# Midjourney
Scenic area immersive live stream backdrop vertical 9:16, best viewpoint scenic view as background,
bottom overlay information layer scenic name ticket deal live exclusive price booking button,
streamer in lower middle not blocking main scenery, scenic lighting effect,
bottom info area uniform white light 4000K ensuring text readability,
immersive with clear purchase guidance, attraction live stream --ar 9:16 --v 6

# Stable Diffusion
(attraction immersive live backdrop:1.4), (best scenic view:1.4),
(scenery name ticket deal:1.2), (streamer lower middle:1.1), scenic lighting effect,
bottom uniform white 4000K, text readable, immersive purchase guidance, 8K
Negative: cluttered text overload, dark, no scenic beauty, busy distracting background

# 即梦（中文）
景区沉浸直播间背景竖版，以最佳观景画面为背景震撼风景，
底部叠加信息层景区名称票务优惠直播专属价预约按钮，
主播在画面中下部不遮挡主要风景，风景光效为主，
底部信息区均匀白光补光4000K确保文字可读，
沉浸感强信息清晰有购买引导，景区直播引流
```

---

## 2.4 旅行社

### 🖼️ 商品主图

#### 模板 H4-TravelAgency-M1【旅行线路 — 目的地预览】

**主题标签：** `#旅行社 #旅行线路 #目的地预览 #商品图 #OTA展示 #行程 #品质`

**主体描述：**
目的地组合预览图，3-4个代表景点/体验拼贴于一张图，
如：城市天际线+美食+住宿+体验项目，
有目的地名称标注，底部有价格和出发日期信息，
整体传达"这条路线满足你对XX的全部想象"。

**环境光线：**
每个拼贴区块有独立光效（整体协调），底部信息区均匀白底（4000K）。

**风格参考：**
线路预览设计（Route Preview Design），参考携程/马蜂窝旅行线路主图，强调"丰富+直观+有品质"。

**技术参数：**

```
# Midjourney
Travel route destination preview collage, 3-4 representative attractions experiences combined in one image,
city skyline plus food plus accommodation plus activity, destination name labels,
bottom price and departure date info, cohesive lighting across collage,
bottom info area uniform white background 4000K, this route fulfills all your imagination,
travel route preview commercial design --ar 16:9 --v 6

# Stable Diffusion
(travel route preview collage:1.4), (destination attractions:1.3),
(city food accommodation activity:1.2), (destination labels:1.2), (price departure:1.1),
cohesive lighting, bottom white 4000K, fulfills imagination, travel route preview, 8K
Negative: single boring image, no route concept, messy collage, unclear pricing

# 即梦（中文）
旅行线路目的地预览拼贴图，3-4个代表景点体验组合于一张图，
城市天际线加美食加住宿加体验项目，有目的地名称标注，
底部价格和出发日期信息，每个拼贴区块独立光效整体协调，
底部信息区均匀白底4000K，这条路线满足你对XX的全部想象
```

---

### 📺 直播背景图

#### 模板 H4-TravelAgency-L1【旅行社直播背景 — 世界地图风】

**主题标签：** `#旅行社 #直播背景 #世界地图 #品牌 #品质 #抖音直播 #引流 #票务`

**主体描述：**
竖版旅行社直播间背景，世界地图或目的地图为背景（手绘或卫星图风格），
有热门目的地标注（如小红点/图标），一侧有品牌 LOGO 和今日推荐线路，
底部有咨询和预订信息，整体：专业感强、有世界观、有购买引导。

**环境光线：**
地图区域有背光打亮（Backlit Map），整体蓝色调为主（专业感），正面有补光灯确保主播面部光线。

**风格参考：**
旅行社专业直播风（Travel Agency Professional Live Stream），参考携程/飞猪直播背景，强调"专业+世界观+即时预订"。

**技术参数：**

```
# Midjourney
Travel agency live stream backdrop vertical 9:16, world map or destination map background hand-drawn or satellite style,
popular destinations marked with red dots icons, one side brand LOGO and today recommended routes,
bottom consultation and booking info, backlit map illuminated, overall blue professional tones,
front fill light for streamer face, professional world view, purchase guidance,
travel agency professional live stream --ar 9:16 --v 6

# Stable Diffusion
(travel agency live backdrop:1.4), (world map background:1.3), (destination markers:1.2),
(LOGO routes:1.2), (consultation booking:1.1), backlit map illuminated,
blue professional tones, front fill, professional world view, purchase guidance, 8K
Negative: no map, cluttered discount, dark, no professional feel

# 即梦（中文）
旅行社直播间背景竖版，世界地图或目的地图背景手绘或卫星图风格，
热门目的地标注小红点图标，一侧品牌LOGO和今日推荐线路，
底部咨询和预订信息，地图区域背光打亮，整体蓝色调专业感，
正面补光灯确保主播面部光线，专业感强有世界观有购买引导
```

---

# 三、休闲娱乐行业

---

## 3.1 美容院

### 🖼️ 商品主图

#### 模板 L1-Beauty-M1【面部护理套餐 — 精致氛围】

**主题标签：** `#美容院 #面部护理 #套餐 #商品图 #精致 #品质 #女性 #小红书`

**主体描述：**
45度俯视面部护理套餐场景，美容床上铺有白色一次性床单，
有精华液瓶/面膜碗/按摩仪等护理工具整齐排列，
有新鲜花瓣或绿植点缀，整体传达"精致、干净，专业"的美容体验感。

**环境光线：**
柔和暖光（3500K），美容床区有顶置柔光（无阴影），有鲜花绿植点缀增加温馨感，整体偏暖色。

**风格参考：**
精致美容摄影（Elegant Beauty Photography），参考小红书美容院打卡图，强调"精致+干净+专业感"。

**技术参数：**

```
# Midjourney
45-degree overhead facial care package scene, beauty bed with white disposable sheet,
essence bottle facial mask bowl massage device neatly arranged, fresh petals green plant accents,
soft warm light 3500K, top soft light on bed area no shadows, fresh flowers warm tones,
elegant clean professional beauty experience, beauty salon photography --ar 4:5 --v 6

# Stable Diffusion
(facial care package:1.4), (beauty bed white sheet:1.3), (essence mask tools:1.2),
(fresh petals plant:1.1), soft warm 3500K, top soft no shadows, elegant clean professional beauty, 8K
Negative: cluttered messy, dark dull, medical clinical cold, low quality

# 即梦（中文）
45度俯视面部护理套餐场景，美容床上白色一次性床单，
精华液瓶面膜碗按摩仪等护理工具整齐排列，
新鲜花瓣绿植点缀，柔和暖光3500K，
美容床区顶置柔光无阴影，有鲜花绿植增加温馨感，整体偏暖色精致干净专业
```

---

#### 模板 L1-Beauty-M2【美睫美甲 — 精致细节】

**主题标签：** `#美甲 #美睫 #细节 #商品图 #精致 #女性 #小红书 #打卡`

**主体描述：**
特写视角，精致的美睫效果（睫毛浓密卷翘呈扇形排列）或美甲效果（复杂款式有珍珠/水钻/手绘图案），
背景为白色或浅粉色，整体传达"精致到细节"的女性美学。

**环境光线：**
顶置柔光（4000K），细节处有高光点（强调精致感），无阴影。

**风格参考：**
精致美甲美睫摄影（Manicure Lash Detail Photography），参考小红书美甲美睫爆款图，强调"精致+细节+女性美学"。

**技术参数：**

```
# Midjourney
Extreme close-up of elegant eyelash extensions fanning dense and curled, or elaborate nail art with pearl rhinestone hand-drawn patterns,
white or light pink background, overhead soft light 4000K, detail highlights, no shadows,
delicate feminine aesthetic, refined to the detail, beauty detail photography --ar 4:5 --v 6

# Stable Diffusion
(elegant eyelash extensions:1.4), (elaborate nail art pearls rhinestones:1.3),
white pink background, overhead soft 4000K, detail highlights, no shadows,
delicate feminine aesthetic, refined detail, beauty detail photography, 8K
Negative: dull flat, fake look, no detail, messy background

# 即梦（中文）
精致美睫美甲效果特写，睫毛浓密卷翘呈扇形排列或美甲复杂款式珍珠水钻手绘图案，
白色或浅粉色背景，顶置柔光4000K，细节处高光点强调精致感无阴影，
精致女性美学，细节之美，美容细节摄影
```

---

### 📺 直播背景图

#### 模板 L1-Beauty-L1【美容院直播背景 — 粉白精致】

**主题标签：** `#美容院 #直播背景 #粉白 #精致 #抖音直播 #品牌感 #女性 #引流`

**主体描述：**
竖版美容院直播间背景，粉白色调精致内景，有美容床和护理产品陈列，
有品牌 LOGO 和今日优惠套餐，左右预留主播位，
整体：精致、粉嫩，品牌感强，适合女性用户。

**环境光线：**
柔和粉白光（3500K），均匀无阴影，有补光灯确保主播面部光线。

**风格参考：**
精致女性直播风（Elegant Female Live Stream），参考小红书美容院直播，强调"精致+粉嫩+品牌"。

**技术参数：**

```
# Midjourney
Beauty salon live stream backdrop vertical 9:16, pink white elegant interior,
beauty bed and care product display, brand LOGO and today deal packages,
streamer space left and right, soft pink white light 3500K, even no shadows,
front fill for streamer face, elegant feminine brand-oriented, beauty live stream --ar 9:16 --v 6

# Stable Diffusion
(beauty salon live backdrop:1.4), (pink white elegant:1.3), (beauty bed products:1.2),
(LOGO deals:1.2), streamer spaces, soft pink white 3500K, even no shadows, front fill, elegant feminine, 8K
Negative: dark dull, cluttered discount, male-oriented, cheap feel

# 即梦（中文）
美容院抖音直播间背景竖版，粉白色调精致内景，
有美容床和护理产品陈列，品牌LOGO和今日优惠套餐，
左右预留主播位，柔和粉白光3500K均匀无阴影，
正面补光灯确保主播面部光线，精致粉嫩品牌感强，适合女性用户
```

---

## 3.2 健身房

### 🖼️ 商品主图

#### 模板 L2-Gym-M1【健身房团课 — 活力动感】

**主题标签：** `#健身房 #团课 #动感单车 #莱美 #商品图 #活力 #动感 #年轻`

**主体描述：**
动感单车团课场景，学员们在教练带领下骑行，灯光为彩色射灯（红蓝紫），
有音乐节奏感的画面（灯光闪烁），整体：活力、动感、年轻有激情。

**环境光线：**
彩色射灯（Colored Spotlights RGB），强对比，暗区偏黑，整体有 Disco/夜店氛围感，强调活力和激情。

**风格参考：**
动感活力风（High Energy Fitness），参考超级猩猩/Keep团课视觉，强调"活力+动感+社群感"。

**技术参数：**

```
# Midjourney
Dynamic spin class scene, students cycling under coach leadership, colorful spotlights red blue purple,
music rhythm flashing lights, high energy passionate atmosphere, dark contrast with colored lighting,
disco nightclub mood, energetic youthful, group fitness vibe --ar 16:9 --v 6

# Stable Diffusion
(dynamic spin class:1.4), (colored spotlights RGB:1.3), (students cycling:1.2),
(music rhythm flashing:1.2), dark contrast, disco atmosphere, energetic passionate, youthful, 8K
Negative: dark dull, empty gym, no energy, clinical

# 即梦（中文）
动感单车团课场景，学员们在教练带领下骑行，
彩色射灯红蓝紫色，有音乐节奏感灯光闪烁，
强对比暗区偏黑，整体Disco夜店氛围感，
活力动感年轻激情，健身团课活力摄影
```

---

#### 模板 L2-Gym-M2【私教训练 — 力量美学】

**主题标签：** `#健身房 #私教 #力量 #肌肉 #商品图 #品质 #专业 #男性 #塑形`

**主体描述：**
健身私教指导场景，教练和学员在力量训练区（深蹲架/哑铃架），
教练正在指导学员做硬拉或深蹲，动作标准有力量感，
整体传达"专业私教，安全高效、改变看得见"的健身价值。

**环境光线：**
功能性照明（4000K），力量训练区有足够照度，背景有品牌海报和训练计划表，强调专业感。

**风格参考：**
专业健身摄影（Professional Fitness Photography），参考健身教练认证形象照，强调"专业+力量+改变"。

**技术参数：**

```
# Midjourney
Personal training guidance scene, coach and client at power training area squat rack dumbbell rack,
coach guiding deadlift or squat, powerful standard form, functional lighting 4000K,
background brand posters training plans, professional safety effective message,
professional fitness personal training photography --ar 4:3 --v 6

# Stable Diffusion
(personal training scene:1.4), (coach client power training:1.3), (deadlift squat:1.2),
(functional 4000K:1.1), (brand posters plans:1.0), professional safety effective,
professional fitness personal training, 8K
Negative: dark gym, unsafe form, empty no context, dull

# 即梦（中文）
健身私教指导场景，教练和学员在力量训练区深蹲架哑铃架，
教练正在指导学员做硬拉或深蹲，动作标准有力量感，
功能性照明4000K，背景有品牌海报和训练计划表，
专业安全高效感，传达改变看得见的健身价值
```

---

### 📺 直播背景图

#### 模板 L2-Gym-L1【健身房直播背景 — 活力动感】

**主题标签：** `#健身房 #直播背景 #活力 #动感 #抖音直播 #引流 #会员招募`

**主体描述：**
竖版健身房直播间背景，活力动感团课场景或有力量训练区，
有品牌 LOGO 和今日优惠，左右预留主播位，
整体：活力，专业、有购买引导。

**环境光线：**
活力彩色光（RGB 射灯）或功能白灯（4000K），根据场景调整。

**风格参考：**
健身房直播风（Fitness Live Stream），参考Keep/超级猩猩直播视觉，强调"活力+专业+即时转化"。

**技术参数：**

```
# Midjourney
Gym live stream backdrop vertical 9:16, energetic group class or power training area,
brand LOGO and today deal, streamer spaces, energetic colorful RGB spotlights or functional white 4000K,
dynamic professional with purchase guidance, fitness live stream --ar 9:16 --v 6

# Stable Diffusion
(gym live backdrop:1.4), (energetic group class:1.3), (brand LOGO deal:1.2),
streamer spaces, energetic RGB or functional 4000K, dynamic professional purchase guidance, 8K
Negative: dark empty, no energy, cluttered, cheap feel

# 即梦（中文）
健身房直播间背景竖版，活力动感团课场景或力量训练区，
品牌LOGO和今日优惠，左右预留主播位，
活力彩色RGB射灯或功能白光4000K，
动态专业有购买引导，健身房直播引流
```

---

## 3.3 KTV

### 🖼️ 商品主图

#### 模板 L3-KTV-M1【KTV包厢 — 欢乐氛围】

**主题标签：** `#KTV #包厢 #欢乐 #氛围 #商品图 #聚会 #团建 #年轻 #夜生活`

**主体描述：**
KTV 包厢内景视角，彩色射灯投射（红蓝紫），大屏幕显示歌曲画面，
沙发上朋友举杯欢唱，有果盘/零食/啤酒，
整体：欢乐、热闹、夜间氛围强，适合团建/朋友聚会场景。

**环境光线：**
彩色射灯光（RGB 为主），包厢内偏暗，大屏幕有蓝光（6000K）照亮局部，整体有夜店感。

**风格参考：**
欢乐夜店风（Happy Nightclub Vibes），参考抖音 KTV 打卡视频封面，强调"欢乐+夜间+社交"。

**技术参数：**

```
# Midjourney
KTV private room interior, colorful spotlights red blue purple, large screen with song display,
friends on sofa singing with raised glasses, fruit plate snacks beer,
RGB colored spotlights, dark room, large screen blue light 6000K illuminating parts,
happy lively night atmosphere, party group vibe, KTV entertainment photography --ar 16:9 --v 6

# Stable Diffusion
(KTV private room:1.4), (colorful spotlights:1.3), (large screen:1.2),
(friends singing glasses:1.2), (fruit snacks beer:1.1), RGB, dark room,
large screen blue 6000K, happy lively night, party group vibe, KTV photography, 8K
Negative: empty dark room, no atmosphere, daytime bright, dull

# 即梦（中文）
KTV包厢内景，彩色射灯投射红蓝紫色，大屏幕显示歌曲画面，
沙发上朋友举杯欢唱，有果盘零食啤酒，
彩色射灯光RGB为主，包厢内偏暗，大屏幕蓝光6000K照亮局部，
欢乐热闹夜间氛围强，适合团建朋友聚会场景
```

---

### 📺 直播背景图

#### 模板 L3-KTV-L1【KTV直播背景 — 霓虹夜店风】

**主题标签：** `#KTV #直播背景 #霓虹 #夜店 #抖音直播 #引流 #夜生活`

**主体描述：**
竖版 KTV 直播间背景，霓虹灯光包厢场景，
有品牌 LOGO 和今夜欢唱套餐信息，左右预留主播位，
整体：夜店感强，品牌感强、适合夜间引流。

**环境光线：**
霓虹灯光（Neon 2500-3500K），包厢内暗调，正面有补光灯（4000K）确保主播面部光线。

**风格参考：**
KTV 霓虹直播风（KTV Neon Live Stream），参考抖音 KTV 带货直播，强调"夜生活+欢乐+即时预订"。

**技术参数：**

```
# Midjourney
KTV live stream backdrop vertical 9:16, neon-lit room scene,
brand LOGO and tonight singing package info, streamer spaces left and right,
neon light 2500-3500K, dark room interior, front fill 4000K for streamer face,
nightclub vibes, brand-oriented, suitable for night live stream promotion --ar 9:16 --v 6

# Stable Diffusion
(KTV neon live backdrop:1.4), (neon-lit room:1.3), (brand LOGO package:1.2),
streamer spaces, neon 2500-3500K, dark room, front fill 4000K,
nightclub vibes, brand-oriented, night live stream, 8K
Negative: daytime bright, dull, empty no vibe, cheap

# 即梦（中文）
KTV直播间背景竖版，霓虹灯光包厢场景，
品牌LOGO和今夜欢唱套餐信息，左右预留主播位，
霓虹灯光2500-3500K，包厢内暗调，
正面补光灯4000K确保主播面部光线，
夜店感品牌感强，适合夜间引流，KTV直播
```

---

## 3.4 棋牌

### 🖼️ 商品主图

#### 模板 L4-Mahjong-M1【棋牌包厢 — 品质环境】

**主题标签：** `#棋牌 #包厢 #品质环境 #商品图 #商务 #朋友聚会 #舒适 #私密`

**主体描述：**
品质棋牌包厢内景，真皮沙发或木椅，精致牌桌，柔和暖光（3500K），
有茶叶茶具或咖啡点心，背景有隔音墙和品牌装饰，
整体传达"私密、品质、舒适"的棋牌社交体验。

**环境光线：**
柔和暖光（3500K），无强阴影，舒适如客厅感。

**风格参考：**
品质私密度假风（Premium Private Lounge），参考高端棋牌会所视觉，强调"品质+私密+社交"。

**技术参数：**

```
# Midjourney
Premium mahjong private room interior, leather sofa or wooden chairs, elegant mahjong table,
soft warm light 3500K, tea set or coffee pastries, soundproof walls brand decor,
comfortable lounge atmosphere, soft warm 3500K no strong shadows,
private premium social experience, quality mahjong room photography --ar 16:9 --v 6

# Stable Diffusion
(premium mahjong room:1.4), (leather sofa elegant table:1.3), (tea coffee:1.2),
(soft warm 3500K:1.2), (soundproof walls:1.0), comfortable lounge atmosphere,
private premium social, quality mahjong room photography, 8K
Negative: crowded dirty, harsh fluorescent, cheap furniture, noisy

# 即梦（中文）
品质棋牌包厢内景，真皮沙发或木椅，精致牌桌，
柔和暖光3500K无强阴影，有茶叶茶具或咖啡点心，
背景隔音墙和品牌装饰，舒适如客厅感，
私密品质舒适，传达棋牌社交体验
```

---

## 3.5 电影院

### 🖼️ 商品主图

#### 模板 L5-Cinema-M1【IMAX 影厅 — 震撼银幕】

**主题标签：** `#电影院 #IMAX #影厅 #震撼 #商品图 #约会 #团建 #品质`

**主体描述：**
IMAX 影厅视角，银幕正在播放大片（画面璀璨/特效震撼），
座椅为皮质阶梯式，有暖色导引灯，整体传达"沉浸式、震撼、品质"观影体验。

**环境光线：**
银幕光（Screen Light 6500K）为主，影厅内偏暗，座椅区有暖色导引灯（2800K），整体暗调有氛围。

**风格参考：**
电影观影体验风（Cinema Experience），参考IMAX/杜比影院官方图，强调"震撼+沉浸+品质"。

**技术参数：**

```
# Midjourney
IMAX cinema auditorium, large screen playing blockbuster with stunning visuals and effects,
leather tiered seats, warm floor guide lights 2800K, screen light 6500K dominant,
dark auditorium, immersive stunning quality, cinematic experience photography --ar 16:9 --v 6

# Stable Diffusion
(IMAX cinema auditorium:1.4), (large screen blockbuster:1.3), (leather seats:1.2),
(screen light 6500K:1.2), (warm guide lights 2800K:1.0), dark auditorium,
immersive stunning quality cinematic experience, 8K
Negative: empty dark poorly lit, old seats, cheap theater

# 即梦（中文）
IMAX影厅，银幕正在播放大片画面璀璨特效震撼，
皮质阶梯式座椅，有暖色导引灯2800K，
银幕光6500K为主，影厅内偏暗，
整体暗调有氛围，沉浸式震撼品质观影体验
```

---

## 3.6 亲子

### 🖼️ 商品主图

#### 模板 L6-Kids-M1【儿童乐园 — 欢乐场景】

**主题标签：** `#亲子 #儿童乐园 #欢乐 #商品图 #溜娃 #家庭 #安全 #色彩丰富`

**主体描述：**
儿童游乐设施（海洋球池/滑梯/蹦床）内景，孩子们在欢快玩耍，
色彩丰富（蓝黄红绿），地面为软垫，有工作人员在旁看护，
整体传达"安全、欢乐、放心溜娃"。

**环境光线：**
均匀明亮光（4000K），色彩饱和，无阴影死角（安全可见），整体明亮活泼。

**风格参考：**
欢乐亲子风（Happy Family Fun），参考卡通尼乐园/万达宝贝王视觉，强调"欢乐+安全+色彩丰富"。

**技术参数：**

```
# Midjourney
Children playground interior, ocean ball pit slides trampoline, children playing happily,
vivid blue yellow red green colors, soft mat floor, staff supervising,
uniform bright light 4000K, saturated colors, no shadow blind spots,
safe joyful, colorful vibrant, happy family fun playground photography --ar 16:9 --v 6

# Stable Diffusion
(children playground:1.4), (ocean ball slides trampoline:1.3), (children playing:1.2),
(vivid colors:1.2), (soft mat staff:1.1), uniform bright 4000K,
saturated colors, safe joyful, colorful vibrant happy family fun, 8K
Negative: dark dull, few children, unsafe look, old worn equipment

# 即梦（中文）
儿童游乐设施海洋球池滑梯蹦床内景，孩子们欢快玩耍，
色彩丰富蓝黄红绿，地面软垫，有工作人员看护，
均匀明亮光4000K，色彩饱和无阴影死角，
安全欢乐放心溜娃，色彩丰富活泼，亲子乐园摄影
```

---

## 3.7 足疗按摩

### 🖼️ 商品主图

#### 模板 L7-FootSpa-M1【足疗套餐 — 放松舒适】

**主题标签：** `#足疗 #按摩 #放松 #商品图 #舒适 #品质 #健康 #SPA`

**主体描述：**
足疗场景，客人坐在舒适沙发上，双脚浸泡在药浴桶中（有花瓣或药包），
有技师在旁准备或按摩，有热毛巾和茶饮，整体传达"放松、舒适、品质"。

**环境光线：**
柔和暖光（3500K），足浴桶区有顶光照亮（确保药浴可见），整体温馨舒适感。

**风格参考：**
放松舒适风（Relaxing Comfort），参考足疗按摩连锁品牌视觉，强调"放松+舒适+健康"。

**技术参数：**

```
# Midjourney
Foot spa scene, guest seated comfortably, feet soaking in herbal bath bucket with flower petals or herb packets,
therapist preparing or massaging nearby, hot towels and tea drink,
soft warm light 3500K, foot bath area with top light ensuring visibility,
warm comfortable atmosphere, relaxing quality foot spa photography --ar 16:9 --v 6

# Stable Diffusion
(foot spa scene:1.4), (feet soaking herbal bath:1.3), (flower petals herbs:1.2),
(therapist preparing:1.1), (hot towels tea:1.1), soft warm 3500K,
foot bath top light, warm comfortable, relaxing quality, foot spa photography, 8K
Negative: clinical sterile, dark dull, cheap environment, uncomfortable

# 即梦（中文）
足疗场景，客人坐舒适沙发上双脚浸泡药浴桶中有花瓣或药包，
技师在旁准备或按摩，有热毛巾和茶饮，
柔和暖光3500K，足浴桶区顶光照亮确保药浴可见，
整体温馨舒适，放松舒适品质，足疗按摩摄影
```

---

### 📺 直播背景图

#### 模板 L7-FootSpa-L1【足疗按摩直播背景 — 舒适禅意】

**主题标签：** `#足疗 #按摩 #直播背景 #舒适 #禅意 #抖音直播 #引流 #健康`

**主体描述：**
竖版足疗直播间背景，禅意舒适内景，有足浴桶和舒适沙发展示，
有品牌 LOGO 和今日优惠，左右预留主播位，
整体：舒适、禅意，品牌感强。

**环境光线：**
柔和暖光（3500K），均匀无阴影，有补光灯确保主播面部光线。

**风格参考：**
舒适禅意直播风（Comfortable Zen Live Stream），参考足疗连锁品牌直播视觉，强调"舒适+禅意+健康"。

**技术参数：**

```
# Midjourney
Foot spa massage live stream backdrop vertical 9:16, zen comfortable interior,
foot bath buckets and comfortable sofa display, brand LOGO and today deal,
streamer spaces left and right, soft warm 3500K even no shadows,
front fill for streamer face, comfortable zen brand-oriented, foot spa live stream --ar 9:16 --v 6

# Stable Diffusion
(foot spa live backdrop:1.4), (zen comfortable interior:1.3), (foot bath sofas:1.2),
(LOGO deal:1.2), streamer spaces, soft warm 3500K even no shadows, front fill,
comfortable zen brand-oriented, foot spa live stream, 8K
Negative: harsh fluorescent, cluttered, cheap feel, dark

# 即梦（中文）
足疗按摩直播间背景竖版，禅意舒适内景，
有足浴桶和舒适沙发展示，品牌LOGO和今日优惠，
左右预留主播位，柔和暖光3500K均匀无阴影，
正面补光灯确保主播面部光线，舒适禅意品牌感强，足疗直播引流
```

---

# 四、平台适配速查

## 4.1 通用语法对照表

| 概念 | Midjourney | Stable Diffusion | 即梦（中文） |
|------|-----------|-----------------|-------------|
| 权重提升 | `hot pot --iw 2` | `(hot pot:1.3)` | `(火锅:1.3)` |
| 权重降低 | 不支持 | `(hot pot:0.7)` | `(火锅:0.7)` |
| 负面提示 | `--no text, watermark` | `Negative prompt: text, watermark` | 负面词输入框 |
| 比例 | `--ar 16:9` | Width/Height 参数 | 比例选择器 |
| 风格 | `--style photo` | `masterpiece, best quality` | 风格选项 |
| 版本 | `--v 6` | Model 选择 | 模型选择 |

## 4.2 各平台输出尺寸推荐

| 用途 | 推荐比例 | Midjourney | Stable Diffusion | 即梦 |
|------|----------|-----------|----------------|------|
| 商品主图 | 1:1 / 4:5 | `--ar 1:1` / `--ar 4:5` | 1024x1024 / 1024x1280 | 1:1 / 9:16 |
| 场景氛围图 | 16:9 / 3:4 | `--ar 16:9` / `--ar 3:4` | 1280x720 / 1024x1365 | 16:9 / 3:4 |
| 营销海报 | 2:3 | `--ar 2:3` | 1024x1536 | 2:3 |
| 门头图 | 9:16 | `--ar 9:16` | 1024x1792 | 9:16 |
| 直播背景 | 9:16 | `--ar 9:16` | 1024x1792 | 9:16 |

## 4.3 负面提示词通用模板

```
# Midjourney（使用 --no 参数）
--no text, watermark, blurry, low quality, distorted, ugly, cartoon, anime, 3D render

# Stable Diffusion（使用 Negative prompt）
text, watermark, blurry, low quality, distorted, ugly, cartoon, anime, 3D render,
(deformed:1.3), (bad anatomy:1.2), (worst quality:1.1), (low quality:1.1), (normal quality:1.0)

# 即梦（使用负面词输入框）
文字，水印，模糊，低质量，变形，丑陋，卡通，动漫，3D渲染
```

---

# 五、通用优化技巧

## 5.1 光线调整三原则

1. **暖光 = 温暖/食欲/情感**：色温 2800-3500K，适用于火锅、烧烤、烘焙等需要温度感的行业
2. **自然光 = 清新/健康/品质**：色温 4500-5600K，适用于奶茶、烘焙、景区，民宿等需要清爽感的行业
3. **冷光 = 专业/科技/高端**：色温 6000-7000K，适用于健身房、酒店、高端服务等需要专业感的行业

## 5.2 构图比例选择

| 构图 | 适用场景 | 比例 |
|------|---------|------|
| 1:1 | 商品主图、外卖图 | 正方形 |
| 4:5 | 单品美食、产品展示 | 竖版小幅 |
| 16:9 | 场景氛围图、OTA展示 | 宽幅横版 |
| 9:16 | 门头图、直播背景、小红书 | 竖版全屏 |
| 2:3 | 营销海报、促销图 | 竖版横版均可 |

## 5.3 五大行业光线风格速查

| 行业 | 主光风格 | 色温 | 背景 | 代表风格 |
|------|---------|------|------|---------|
| 餐饮 | 暖色烟火气 | 2800-3500K | 暗色或生活场景 | 市井/纪录片 |
| 酒旅 | 自然通透 | 4500-5600K | 场景或展示 | 风景/民宿 |
| 美容 | 粉柔暖光 | 3500K | 浅色精致 | ins风 |
| 健身 | 功能白/彩色 | 4000K或RGB | 动感或专业 | 活力/力量 |
| 娱乐 | 暗调霓虹 | 2500-3500K | 暗调氛围 | 夜店/烟火 |

---

> 📌 **更新日志**
> - v1.0（2026-05-13）：初始版本，覆盖餐饮10个子行业 × 5种图片类型（火锅/烧烤/奶茶完整展开，其他行业重点覆盖），共约 200+ 套模板

---

*本模板库由「抖店内容工坊」图片模块生成，供平台商家会员直接调用。*
