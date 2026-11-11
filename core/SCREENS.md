# Hourberry core · 屏幕清单（草稿）

只放基础功能。原来的 `index.html` 不动，这个版本做在 `core/index.html`。
和 `RULES.md` 不一样的地方写在最下面，core 定下来以后再合并回 RULES。

## 核心循环
Discover 翻 3 张 / 在地图上看公开的局 → 一点就加入 / 几秒发一个；+ Me 让朋友知道你有空 → 加入后少量协调 → 第二天"再见一次"。
冷启动、赚钱、控制是撑住这个循环的三条腿。

---

## F0 · 账号

**C00a 注册**：Welcome（logo + "Free time is sweeter together."）→ 手机号或邮箱 → 验证码 → 生日（判断年龄）→ 名字 + 果子头像编辑器 → 定位 / 通知授权（先用一屏说清楚为什么要）→ 加第一批人。注册时同意条款和隐私政策。
**C00b 登录**：登录、找回。
- 如果提供 Google 等第三方登录，就必须同时提供一个"只拿名字和邮箱、可以隐藏邮箱"的登录方式，例如 Sign in with Apple（App Store 4.8）。

## 底部四个 tab（11/10 加回 Chats）
Map（C01）· **Plans** · **Chats** · **People**。头像 → Account（C15）。

**C16 Plans**（11/11 改，见 RULES §1）：+ / Invites（计划卡，Join / Not this time）/ Upcoming（含 Hosting）| Past。
**C17 Chats**（规则见 RULES §1）
- Plans 段（按开始时间）/ Friends 段（私聊）。结束的局的聊天在 Plans → Past 里。
- Plan 群聊：顶部状态条 + Directions、快捷回复、⋯ 菜单。私聊：怎么认识的 + Make a plan with。
- 私聊是"再见一次"的通道：一起去过局的人多半没有彼此的电话。
- People 页不再放聊天。

- 朋友的朋友发的局可以看到，写 "via Jess"。

**C10 People**（11/11 做完，见 RULES §13）
- 分组 chip 筛选；每行写有空到几点 / 最近一起去的局；点人进个人页。
- 右上 Add → Add people 页（见 RULES §1）+ 成功页。

**C11 Squeeze in**：一起晃手机互相加；同页有二维码和按住按钮。

## F5 · 赚钱

**C12 Spots 图层 + 地点页**
- Top pick：不收钱，按朋友的行为挑（"6 friends want to go · 14 plans this week"）。
- Sponsored：商家付费，pin 和卡片上都写 "Sponsored"。
- 地点页（在 Home 抽屉里，地图同时平移到这个地点）：店名 → 类型 · 距离 · 营业状态（小灰字，在店名下面）→ 想去的朋友卡片（和按钮同样的灰色圆角块：头像串 + "Jess, Lena +6 want to go" ›；点开是名单，每人可以 Message，底部 "+ Plan here with them"，他们先收到邀请）→ 一排 4 个按钮：+ Plan here（黑）/ Want to go / Save / 路线（按钮上直接写 🚶 11 min 或 🚗 20 min）→ Good for（Hourberry 用户给的"适合几个人"：2 人 / 3–5 人 / 6+，写最适合的那一档 + 小柱状图，只评人数，不评好不好吃）→ Details（营业时间：先写今天，点开看一周 7 天；地址 + Copy）。标题下一行：类型 · 距离（英里）· 营业状态。 地点页和 Spots 列表不显示在这里办的局，局只在 Plans 里看。
- 列表里你想去的地点，图标变成黑底 ✓；“谁想去”那句按真实状态写（You and Jess want to go）。
- Want to go 和 Save 是两个东西（同 RULES §8）：Want to go = 告诉朋友你想去，朋友看得到；Save = 自己收藏，只有你看得到。

**C13 Premium**
- 包括：Discover 每天 6 张（免费 3 张）、头像星标（可以显示或隐藏）。
- 没有单次付费刷新。

## F6 · 控制

**C14 个人页**（11/11 做完）
- 状态、Message / Make a plan、Groups chip（就地加减、+ New）、You two；⋯ 菜单：Mute → Remove friend → Restrict → Block → Report。

**C15 Account**（11/10 做完，结构见 RULES §1）
- 子页：Edit profile（换果子、名字、生日只读、@用户名、What you’re into）· Who sees you · Notifications（Plans 4 项 / People 3 项 / Quiet hours）· Blocked and muted · Phone and email（+ Delete account）· Premium（价格、包括什么、Restore purchases、Terms、Privacy）· Appearance sheet。
- Log out 和 Delete account 都有确认弹窗。Help / Terms / Privacy / Rate 在原型里只弹 toast。
- 价格 $2.99/月是占位，等 Dakota 定。

---

---

## 每个流程都要有的状态

**加入**
- 你在看的时候最后一个位置被抢了 → 卡片原地变成 "Full · Join waitlist"。
- 局已经开始 → 还能加入，写 "Started 10 min ago"；已经结束 → 卡片消失。
- 加入失败（没网）→ 按钮恢复，提示 "Couldn’t join · Try again"。

**加入以后**
- Host 改了时间或地点 → 推送 + plan 页顶部一条 "Time changed to 7:30"；如果新的时间超出你有空的时间，问你还去不去。
- Host 取消 → 推送 + plan 页变成 "Jess called it off"，群聊保留到第二天。

**有空（free 那一堆）**
- 到点自动结束，中途不确认。最长 12 小时（All night 到凌晨 3 点，All day 到晚上 10 点）。

**空状态**
- 附近没有局：引导你自己发一个，或者扩大到朋友的朋友。
- Discover 一张都没有：同上，并说明原因（"No one’s free near you right now"）。
- 搜索没结果、还没有聊天、还没有朋友（C09）。

**权限被拒**
- 定位：地图停在你选的区域，距离改成区域名（"in Highland Park"）。
- 通知：Home 顶部一条可关掉的提示 "Turn on notifications so plans can reach you"。

**加载 / 离线**
- 加载：果子聚成一串小点 + "Got an hour? Make it ours."（RULES §12）。
- 离线：顶部一条 "You’re offline"，能看缓存，不能加入或发局。

## 安全
- **在家办的局**：地址只在加入后给，而且 ❓ 见下方。
- 举报：个人页、plan 卡、群聊里的单条消息都能举报。
- 过滤：局的标题、留言、聊天要过滤不当内容（App Store 1.2）。
- 实时位置：plan 页上的"每人一条线"要每个人自己打开，局结束自动关。
- 年龄：注册填生日；21+ 的局对未满 21 的人不显示。
- Mute / Remove friend / Restrict / Block 见 RULES §3。

## 付费（必须走 Apple 的 In-App Purchase，App Store 3.1.1 / 3.1.2）
- Premium 页：先写清楚多少钱、包括什么，再让人订阅。
- 购买确认（系统弹窗）、恢复购买、管理 / 取消订阅（跳到系统订阅设置）。
- 过期以后：星标自动隐藏，Discover 回到每天 3 张。

## 上线必需
- Account 里：帮助和联系方式（App Store 1.2 要求公开联系方式）、条款、隐私政策、删除账号（5.1.1(v)）、导出我的数据（加州 CCPA）。
- 每个系统权限都有用途说明文字（定位、通知、通讯录、相机）。
- 邀请链接：已安装 → 直接打开那个局；没安装 → App Store → 装好后直接打开那个局。
- 无障碍：读屏能念出每颗果子是谁；字号可调；果子堆动画在"减少动态效果"打开时关掉；文字对比度达标。
- 加到日历（加入后可选）。

## 先不做（以后可以加回）
- 粘贴链接找地点（11/10 拿掉）
- Bingo
- 截图找地点
- 网页邀请留座（"Held · 12 min left"）
- 必须凑满人的 plan（Must fill）
- 只定了日期的 plan（Sat · time TBD）和 This weekend

## 和 RULES.md 不一样的地方
（11/10：+ Me / Discover 拆分、Join 改名、Home 列表、Premium 6 张已经写进 RULES。）
- §8：Bingo、截图找地点删掉。
- 新：Top pick（不收钱，按朋友行为）和 Sponsored（付费，标出来）分开。
- §15：列表原来"不按时间筛选"。core 里地图顶部有一个时间筛选，同时作用于地图和列表（默认 Any time，列表照样分组）。

## 注册流程（11/11 定，⬜ 还没做进原型）
一屏一件事，底部一个全宽按钮。进度条只在第 3–7 屏（1 of 5 … 5 of 5）。
0 欢迎（插画 · Hourberry · Free time is sweeter together.｜Continue with Apple · Use phone number · I have an account）→ 1 手机号 → 2 验证码 → 3 What should friends call you? → 4 Hi Mia! Pick your berry. → 5 Claim your @（✓ It’s yours）→ 6 When’s your birthday?（Only used for 21+ plans. Friends can’t see it.；不满 18 显示 "Hourberry is for 18 and up" 并停止）→ 7 What do you like to do?（插画卡片，至少 3 个，Skip for now）→ 8 See plans near you（Allow location → 系统弹窗 · Not now）→ 9 Know when friends are free（Turn on → 系统弹窗 · Not now）→ 10 Add people you’ve met（= Add people 页，Skip for now）→ 11 You’re in, Mia（Let’s go）。Apple 登录跳过 1–2，名字预填。
不用开关做权限（开关不会弹系统授权）；不上传照片（头像用果子）。

## 新用户空状态（11/11 做完）
原型里 Account 最下面 "Prototype · view as a new user"，或者链接加 `?new`。
- Home：No plans near you yet · Start one, or add friends to see theirs.（Make a plan · Add people）
- free 那一堆：No friends free yet（Add people）
- Discover：弹窗 Add a few friends first · Discover picks from plans your friends and their friends start.
- Plans：Nothing coming up · Plans you join or start show up here.（Find a plan）
- Chats：No chats yet · Join a plan and its group chat shows up here.
- People：Your bunch is empty · Add people you’ve met…（Add people）。新用户只有 Close friends 一个组。
每个空状态都有插画位（见 research/ILLUSTRATION-BRIEF.md 第 4 节 C）。

## 还没定
- ❓ 在家办的局，朋友的朋友加入时：A. host 批准后才给地址；B. 只有直接好友能加入在家办的局。
- ✅ App 最低年龄：18+（11/11 定）。
- ✅ 登录方式：Sign in with Apple + 手机号，不接 Google（11/11 定）。
