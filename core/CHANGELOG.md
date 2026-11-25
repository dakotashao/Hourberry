# Hourberry core · 改动记录


## 11/13 – 11/17 · 提交 cab4492

上次提交是 7ba2193。这一次一起提交的改动如下，规则细节都在 `RULES.md` 对应的节里。

### 注册和登录（§19）
- 只用手机号注册和登录，没有密码。参考 Hinge、Bumble、Bump、Partiful：这几个都必须验证手机号。开始页只有一个 Get started，加一个文字链接 I have an account，下面一行条款小字。
- 登录：Welcome back → 手机号 → 短信验证码 → 直接进 app。之前要输密码的登录页删了，因为注册时从来没设过密码。
- 邮箱和 Sign in with Apple 放到注册之后：Settings → Phone and email。新用户的 Profile 上有一张 "Add your email" 卡片。
- 流程一共 7 步：名字 → 果子 → 生日 → 兴趣 → 定位 → 通知 → 加人。"How it works" 页和 @ 页删了，@ 根据名字自动生成。
- 进度条分 7 段，不写数字。
- 原型里画出键盘，而且能点：手机号和验证码是数字键盘，键盘上方有 "From Messages 482 913" 自动填验证码。
- 验证码页去掉 Edit；Resend code 改成 60 秒倒计时。
- 生日改成三列滚轮，没滚过就不能继续。不满 18 岁会被拦下。
- 兴趣页不设最少数量，只有一个按钮：一个没选是 Skip，选了是 Continue。
- 定位权限照 iOS 原样：小地图 + Precise，三个按钮。地图预览用真实的 pin。
- 通知页去掉了"夜里静音"那句，它和 All night 选项冲突。
- You're in 页：加了人和没加人显示不同的文案。没加人时按钮是 Add friends。
- 选果子页文案："This little guy is you on the map."
- 第一次进地图时，+ 旁边出现一个提示气泡 "Tap + when you're free"。

### 主持人管理和举报（§20）
- 主持人可以编辑局、停止新人加入、设置谁能加入、取消局，可以接受或拒绝加入请求、把人移出。举报人和举报局分开。

### 地图（§21、§22）
- 有空时间滚轮：超过 12 小时的选项变灰，All night 到凌晨 3 点。
- Plans 的 pin 换成"一串果子"：中间是 host，周围是去的人和空位，右上角是活动图标。靠得近的合并成 "N plans"。
- 时间窗口胶囊只在今天有 8 个以上的局时才出现，拖地图时展开成有两个把手的时间轴。没有胶囊时，你有空之后才开始的局自动变淡。左侧导航里的 "Busy night" 可以看到这个效果。
- 时间和距离两个筛选从底部弹窗改成下拉小菜单。距离筛选现在真的会筛掉范围外的局。

### 个人主页和编辑资料（§23、§24）
- Edit profile 改成"标签 · 值 ›"的列表，每一项点进去单独改，右上角 Save。参考 Instagram、TikTok、Hinge。
- 改用户名要谨慎：实时检查能不能用，30 天只能改一次，14 天内原来的名字给你留着。
- 删掉 Preview：Profile 本身就是朋友看到的样子。
- 徽章墙：三格，自己从 8 个徽章里挑。这些徽章大多是系统从你的局里总结的：Go-to spot、Usually down for、Best time to catch me、Wants to go、Currently obsessed with、Hosted、Introduced、First to join。数据不够的锁着。新用户显示 "New here"。
- 挑徽章是单独一页：上面是实时预览，下面点一下选上，角上标 1、2、3 表示顺序。
- 点徽章打开一张徽章页：大图标、一句"怎么得来的"、能用的内容。朋友看不到第三方的名字和过去的局。
- Make your berry 卡片放在 Edit profile、Share 按钮下面，做完果子就消失。
- 删掉了"Also show"开关、"Choose badges"按钮和多余的说明文字。

### 果子编辑器（§25，老师 11/16 意见）
- Color 只用色块。
- 付费款：Top hat、Crown、Starfruit 带锁，可以先试戴，保存时提示 Premium（Starfruit 后来换掉了，见下）。
- 6 个标签一行放得下。

### 别的
- 原型左侧导航：直接跳到每一屏，包括注册、新用户、Busy night。
- 页面重画时保持滚动位置；返回上一页时回到原来的位置。
- 修了 hard test 找出的 10 个 bug。
- 新加载页：几颗彩色果子跑进来（另一个对话做的）。
- `research/ILLUSTRATION-BRIEF.md`：G 注册时陪着的果子、H 配件要夸张、I 徽章图标。

## 11/17 · 提交 9e31183
- 付费款果子：Starfruit 换成三个真莓果，Pineberry（白草莓）、Golden raspberry、Blackcurrant。
- 付费果子排在 Berry 页最后。Pineberry 是白身体、黑眼睛。
- 定了："Best time to catch me" 不加"只给好友看"。徽章是用户自己选的，选了就是愿意给人看。
- 挑徽章页底部："Based on your plans. Updates on its own."（交代这些是系统总结的）。
- Edit profile：徽章标题 "My badges · up to 3"；Birthday 行标灰色小标签 "Hidden"，删掉下面那句话。
- Profile 底部改成一个小链接 "Edit what friends see"。
- 收不到短信的备用方式：先不做，hi-fi 时在验证码页加 "Didn’t get it? Call me instead"（学 Bumble）。
- 试戴付费款的提示缩短成 "Golden raspberry · Premium" + Unlock。
- 徽章页（点开徽章看到的）：中间大图标，下面是一句"怎么得来的"。Introduced 的名单只有自己看得到，朋友只看到人数；Hosted 不列过去的局。
- 资料页里的说明文字参考 Bumble 和 Hinge 的写法：标题用名词，数量限制只写半句，不写操作说明。

### 还没定
- 收不到短信的备用方式：hi-fi 时再做。

### 以后的规矩
每次改原型都记在这里，提交的时候把这一节的标题改成提交号。

## 11/17 · 地图（老师意见）· 提交 21d6dfd
- 删掉 "Any time" 时间筛选，只留距离。
- 时间窗口出现的规定：今天、范围内、没结束、没藏、没取消的局 ≥ 8 个；出现后这次一直留着。
- Discover 按钮去掉数字；"Make a plan" 改成 "+ Plan"，跟 hi-fi v3 一样。
- 地图 pin（老师意见：像人名、真地图上看不清、多了会挤）：对比了 P1–P6，选 P4 的方向。平时是白底小气泡 "host 果子 + Tacos · 7:00 PM"；点了气泡变黑、原地长出果子串，底部抽屉只剩这个局，用跟主页列表一样的那一行，点它才进完整的局。原型和对比页都改了。
- 赶不上的局：字变灰，白底不变（以前是整个变透明 + 缩小）。
- 有空的人那一列（老师意见：要不要数字、40 个人怎么办、没朋友怎么办）：去掉人数，最多 3 颗果子，超过写 "+N"，下面小字 free。熟的排前面，再按距离。没人有空时只剩 +。展开面板不分段、不写 Close friend（§11 早就定了不写），去掉 "Closest first · within 5 mi"，每人一行写 "till 10:00 PM · 0.4 mi"。
- Who sees you 重做：原来三个分组并列多选，没选的灰圆看起来像不能点，还会出现 "0 people"。改成单选 All friends / Close friends / Only these people + 单独一行 Hidden from。挑人页有搜索、Groups（一行一组，能整组选、能进去改、能新建）、Friends 列表。没选人 Done 点不了。+ Me 弹层里的 "Visible to" 跟着这里显示。
- 分组可以从 Who sees you 进去改（之前规定只能在 People 和个人页改）。

## 11/18 · 提交 21d6dfd
- People 页：分组从底下的 Groups 区改成搜索框下面一排小标签（All / Close friends / Climbing / +）。点一个 = 只看这组；上面一行人数 + Edit 进分组页。参考 WhatsApp Lists、Telegram 文件夹。
- 删掉 Notifications 里的 Quiet hours（11 PM–8 AM 写死、不能改），Settings 那一行也不再写 "Quiet 11 PM–8 AM"。理由：手机自带勿扰；我们允许 All night 有空。
- 列表（灰色块里的每一行）之间加分隔线：1px 浅灰，从文字左边开始，跟 iOS 设置一样。不是描边框，灰色块分区的规矩不变。
- Appearance 弹层：标题和列表之间加了间距；选项改成白圆点（没选的不再是灰圆，灰圆看起来像不能点）。
- Who sees you 又改一版（Dakota：本来就可以多选，还能直接搜索加人）：去掉 "Only these people" 和它的挑人页。顶部搜索直接加人；All friends 单独一块；下面分组和单个人都是多选方框，分组能进去改、能新建。最后一个不能取消，不会 0 人。
- Who sees you：All friends 和下面的方框长得一样、看着像能一起勾，而且选 All 时下面的组全是空的，像是 Jess 看不到你。改成顶部分段 All friends / Choose，只有 Choose 才出现搜索和分组。
- Who sees you：删掉顶部副标题 "When you tap + Me…" 和 All friends 下面那句说明，只留底部 "5 people will see you’re free."
- Who sees you：去掉 All friends / Choose 分段（像在切页面，"Choose" 也说不清）。改成一个列表：All friends 在最上面当"全选"，下面直接是分组，都用方框。

## 11/18 · Settings · 提交 309c77e
- 重新分组（参考 Hinge、Bumble、Tinder）：Premium 卡放最上面；Privacy / Preferences / Account / Support；Log out 和 Delete account 放最底下。
- Pause 从 "When you’re free" 挪到 Account；Delete account 弹窗加 "Pause instead"。
- 删掉 "Settings" 里叫 "Settings" 的分组、灰掉的 Show my badge（挪进 Premium 页）、Invite friends、Contact us。Delete account 从 Phone and email 页里挪出来。
- Premium 黑卡改回普通一行 "Hourberry Premium ›"（右边不写 "Get"，买了写 "Active"）（参考 Snapchat：设置里只是一行，推销放在 Discover 用完和试戴付费款的时候）。

## 11/18 · 删号 · 提交 6ec46ac
- 删掉 Pause Hourberry（理由：不点 + Me 就已经是隐身；对某个人隐身有 Hidden from）。
- 删除弹窗改学 Snapchat：先停用 30 天，30 天内重新登录就恢复；去掉 "Pause instead"。

## 11/18 · Plans（老师意见）· 提交 6ec46ac
- "N more invites" 点进新的 Invites 页（之前点了没反应）：分 Tonight / This week / Later，处理完自动返回。左侧导航加了 "Lots of invites (8)"。
- Past：去掉 "Show 45 older plans" 和 "Past · 48" 的数字；按月分组，加了 10 月、9 月的假数据；搜索能用了；长按 / 右键 → Hide from my past（可撤销）。
- Plans 页 v2（RULES §27）：邀请放进时间线；All / Invited / Going / Hosting 筛选；本周日期条，可以展开成月历，点一天只看那天；Upcoming / Past 选中加描边和粗体。旧版留在左侧导航 "Plans · old version"。
- Plans 页 v3（定）：v2 太复杂，砍掉日历和筛选。只剩 Upcoming | Past + 按天的列表；邀请放在当天；5 个以上邀请收成一行 "8 invites ›"。
- Invites 区（B 一摞 + C 收件箱，RULES §27 写清楚了每种数量的样子）：1 个 = 普通卡；2 个以上 = 一摞，最早的在上面能直接 Join，点一摞或 "N−1 more" 进 Invites 页。邀请不再放进时间线。
- 邀请卡第二行改成 "Lena · Wed 7:30 PM · 0.8 mi"，不再折行；局卡上的距离也从 "15 min walk" 改成英里。
- Chats：删掉已结束的 "Rooftop hang · Ended Fri · read only" 和 "Plan chats close 24 hours…" 那句。结束的局只在 Plans → Past 里看（RULES §13 本来就是这样定的，原型没跟上）。
- 邀请卡：头像不再套方块；Join / Not this time 两个等宽按钮铺满卡片（以前按钮缩进、Not this time 只是一行字）。

## 11/18 · 晚 · 提交 8b5f344
- 从邀请点开的局卡片加 Not this time（之前只有 Join）。
- 剩下的 "min walk" 全换成英里：Directions 弹层、局卡片里的地点、地点页、搜索 Recent。
- 修：没有已加入的局又没有邀请时，Upcoming 是空白（空状态没出来）。

## 11/24 · 地图 pin 和权限 · 未提交
- 地图 pin 改成两行：“Jess’s tacos” / “7:00 PM · 3/6”（去的人/座位数）。30 分钟内开始的时间标蓝。满了显示 6/6，不再写 Full。（§22）
- 注册流程去掉定位和通知两步，进度条 7 段改 5 段。第一次进地图时弹定位；拒绝后地图照常用，顶部横幅 “Turn on location to see plans near you”，点了去设置。通知还是第一次加入后再问。（§19）
- 点 pin 后不再在上方长出一串果子，只是气泡变黑，host 果子留在气泡里。（§22）

## 11/25 · 未提交

### 登录（§19）
- 补规则：Get started 用已注册的号码 → 直接进地图 + "Welcome back"；I have an account 用没注册的号码 → "No account with this number" + Create one。原型的主路径本来就是手机号 + 验证码。
- 删掉旧的密码登录页（step 0.5）和 Forgot password 的代码：11/16 起就没有入口了，但还留在文件里，被误当成现在的登录页画进了 Figma。以后加邮箱找回也是发码到邮箱，不会用密码。
