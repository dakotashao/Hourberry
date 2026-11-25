# Hourberry hi-fi · 改动记录

hi-fi 从 `core/index.html` 复制而来，屏幕、逻辑、文案跟 core 一样。视觉按 Figma「final screens」页（1932:19017）和 `research/HIFI-STYLE.md`。core 和 RULES.md 没有动。

## 11/25 · 第一版

### 视觉
- 主色 #4A3FD8（浅底 #EDECFB），主按钮、选中、Tab、chip 都用它。角标改成红色。大标题用 SF Pro Rounded。
- 头像全部换成 Figma 的方块果子（5 种）。每个人固定一种果子：Jess 草莓、Sam / Noor / Bea 金莓、Lena / Ana 树莓、Kai / Ren / Theo 黑莓、你和 Priya 蓝莓、Omar 草莓。
- 列表行只显示 host 一个果子（11/24 定）。
- 局卡片（Discover、Plan card）照 Figma M11 / M17 排版：顶部浅色底跟 host 的果子颜色，一排人，你的座位 ≤2 时变成深色胶囊，"为什么跟你有关"用主色浅底。
- 局页面的人：host 放在灰色块里写 HOST，"You" 用主色。
- 路线图改成主色实线。
- Make a plan 的每一项改成带图标的灰色胶囊；Note 改成标题加灰色输入框。
- 加载页：5 颗方块果子飞进来凑成一串。

### 插画（`hifi/assets/`，从 Figma 导出）
- 附近没有局：Looking for plans；Plans 空：Nothing coming up；不满 18：Not ripe yet；Hold phones / Contacts / 加好友成功：Hold phones、Find friends、New friend；Discover 用完：Do not disturb；还座位：Left the plan；Recap：Rooftop（其它场景先显示一排果子）。
- 还没有朋友：Free now；还没有聊天：Cozy seat（这两个 Figma 里没有指定，我先选的）。

### 结构（照 Figma 加的）
- Plans：Invites 放到 Upcoming / Past 上面，两个 tab 都显示。
- 自己发起的局：空座位显示成 Invite 圆圈，点了打开分享面板。
- Recap 的 Message 用主色按钮。

### 捏果子
- 果子换成 5 颗默认果子，用 wk08 avatar kit 的全身图。
- Top：kit 的 5 顶帽子（Frog bucket hat、Newsboy cap、Knit earflap hat、Graduation cap、Bunny ears），后两个是 Premium。
- Background：Figma 的 6 个底色。
- Color / Face / Extras：显示 Coming soon，等有了 5 颗果子都能用的图再开。
- 去掉 Big / On map 切换，换成 Figma 的一句说明。
- 新用户默认是蓝莓。

### 没做的
- Hosting 页的 "Manage people" 一行：core 里没有对应的动作，没加。
- core 里本来就有一个报错（`Cannot read properties of undefined (reading 'n')`），hi-fi 也有，没修。

## 11/25 · 第二轮（Dakota 的反馈）
- 你作为头像出现的地方（地图左上、个人页、Edit profile、Your code、Premium）一律显示原始的方块果子；全身加帽子的样子只在捏果子页和个人页的 "Your berry" 卡片里出现（照 Figma G10 加的卡片）。
- 修了全身果子压到文字上的问题（Edit profile 等）。
- 修了 Profile badges 页上面三格被拉成 280 高：我新加的类名 `bprev2` 和 core 的徽章类名重名了。同时查了全部新类名，又改了两个重名的（`sqb` → `hbq`，局页面 host 格 `bhost` → `bhost2`）。
- 删掉 Edit profile 里的 "Currently obsessed with"，徽章里对应的那一个也删了。

## 11/25 · 第三轮
- 个人页顶部改成你的真果子（全身，带你选的帽子），不管捏没捏过。
- 地图左上角你的头像改成圆形。
- 捏果子页恢复 core 的 Big / On map 切换；On map 显示地图 pin 和聊天里的小方块脸，选了帽子时提示"小尺寸不显示"。
- 捏果子页预览和选项格子的比例重调，帽子和腿都不再被裁。

## 11/25 · 第四轮
- 果子全身图重新从 Figma 导出成 2 倍（720×700），按每颗果子自己的轮廓居中，换帽子不跳；去掉了把图挤扁的宽度限制。
- "Your berry" 卡片里显示完整的果子；Discover 按钮的卡片图标改成白色。
- 徽章用方案 A：彩色小图标块 + 一行大字 + 一行说明，每个徽章同样三格，全部对齐。文案改成短的：Leo’s / Go-to spot、2 / Places to go、6 / Introduced、Tacos / Down for、After 7 / Best time、5 / Hosted、8 / First to join。点开徽章还是看完整的。选中改成主色浅底 + 主色序号。
- 局卡片顶部的人改成固定网格（host 格 88 宽 + 三列等宽），不再顶出边；via Jess 单独一行；去掉卡片上方多余的空白。
- 地图右边 free 那一堆照 Dakota 给的图调整：胶囊加宽到 52，果子 40，统一叠 8，+ 是灰色圆。
- 所有给人看的 "N min walk / drive" 改成英里；地点页那个 "6 min" 按钮改叫 Directions。聊天里的 "10 min late" 这类是时间，不是距离，没动。
- 徽章插画：GPT 出的 7 张（`assets/bd-*.png`，用默认 5 颗果子；金莓多芽、草莓多籽的两张让它重画过）。徽章格子左上角放小图，点开的页面顶部放大图。
- 地点页按钮用方案 A：一个主按钮 Plan here + Directions / Want to go / Save 三个一样大的次要按钮。图标默认线条，选中（想去、已保存）变实心 + 主色浅底。
- 徽章格子里的小图改成单个物件的图标（GPT 一张图出 7 个，同大小同基线，`assets/bi-*.png`）；点开的大图保留果子场景。
- 个人页徽章格子内容居中（图标 / 大字 / 说明）。
- 叠在一起的果子（free 那一堆、两三个人叠着的头像，比如 "Lena, Kai"、Spots 列表、Make a plan 的 with / from）改成简化方块：只有颜色和眼睛，中间一圈白边隔开；单独出现的头像还是完整方块（带叶子、星、翅膀角）。
- 捏果子页：选项改成一行 3 个、图更大、果子视觉居中；预览里果子居中在 Big / On map 下面的区域。
- 个人页去掉果子上的铅笔；进捏果子的主入口是 "Your berry" 卡片（点果子本身也能进）。
- Premium 页顶部换成 Figma M16 的 "Premium · hug star"（方块蓝莓抱星星），3 倍导出成 `assets/prem-hug.png`。
- Plans 主页定版（Dakota 11/25）：Upcoming / Past 放最上面，做成整行的分段控件；Invites 只出现在 Upcoming 里；邀请卡的 Join / Not this time 两个按钮等宽占满一行。左边导航删掉 "Plans · old version" 和 "Plans · v2 (calendar)"，Plans 只用这一版。
- 以上第一次提交：`5c80ac9`。

## 11/25 · 第五轮
- 局卡片顶部改成 Dakota 定的样子（Discover、地图上点开的卡片、邀请点开的卡片都用这一个）：host 的留言气泡（带小尖角）→ host 那颗果子的跑步全身图 → "Noor is hosting" → 一行原因（"Jess’s in"）→ 一个白色胶囊：叠起来的头像 + "7 going · 2 seats left"，点胶囊看所有人。原来那排人 + Your seat 格子、主色的原因胶囊去掉了。
- 人数改成加减：中间大数字，左右 − / +，最少 2 人（或已选的人数 + 1），最多 12 人，下面一个 Done。
- Blocked and muted 空状态只写 "No one here."。
- 别人的个人页顶部换成他们带装饰的全身果子（帽子 + 底色），跟你自己的个人页一样，买的装饰别人看得到。原型里给每个朋友配了一套：Jess 青蛙帽、Sam 报童帽、Lena 护耳帽、Noor 兔耳（Premium）、Ana 学士帽等。
- 朋友页的 You two 收成一组：第一行是 "2 hangs · Last one Tue"（两个小方块果子），点开才展开每次见面；图标改小成 28；去掉大字和单独的彩色块。"Both want to go" 旁边有 Plan it，点了直接带上这个人和这个地方开新局。
- 修了局卡片胶囊里叠头像的直角白边和缝（多加了一圈白边）。查了所有叠头像的地方（地图 free、Spots、Make a plan、Recap、搜索），其它没问题。
- 以上第五轮提交：`94161f5`。
