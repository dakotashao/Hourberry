# Hourberry · 产品规则（core 新版原型）

> 这份管 core/ 新版原型（网站首页）。根目录的 RULES.md 管旧版原型（/old）。

所有屏幕都照这份做。✅ = 原型里已经是这样；⬜ = 还没做；❓ = 还没定。
改规则要先和 Dakota 确认，再改这份文件，最后改原型。

## 1. 结构
- ✅ 主角是 plan：卡片、地图 pin、列表都是 plan。人只出现在 plan 上（谁 host、谁在）。
- ⬜ 地图上只有 plan，不显示人的实时位置。地图上的 plan 是公开的局（比较大、需要人）；小的隐藏局在 Discover 里翻。
- ⬜ 有空的人在地图右上角、搜索按钮下面，竖着排成 **free 那一堆**：一个胶囊，最上面一格是 +（你的位置），下面是有空的人的果子，最下面大字人数 + 小字 free。说了有空以后，+ 变成你的果子。点胶囊原地展开，看所有有空的人和各自到几点；你永远排第一行（Edit），别人右边 Hang?（发私信约）。Plans 和 Spots 两个图层都有。
- ✅ 导航：Map、Plans、Chats、People 四个 tab；Account 在头像后面。（11/10 确认：把 Chats 加回来，原型之前只做了 3 个。）
- ✅ Chats：分两段。**Plans**：你加入或发起的局的群聊，按开始时间排；**Friends**：私聊，有未读的排前面。结束的局不在 Chats 里，去 Plans → Past 打开那个局，里面有它的聊天（只读）。
- ✅ Plan 群聊：顶部固定一条，随时间变（开始前 "Tonight 7:00 · leave by 6:52" + Directions；进行中 "Happening now"；结束后关掉输入框）。输入框上面一排快捷回复：On my way / Here / 10 min late / Can’t make it（走退出流程）。标题点了进 plan 页；⋯：See the plan / Mute this chat / Leave plan。
- ✅ 私聊：标题下写你们怎么认识的；顶部 "Make a plan with Sam"；⋯ 是个人菜单（Mute / Remove / Restrict / Block / Report）。点别人的消息可以举报。
- ⬜ 先不做：共享实时位置的单独地图页、Chat settings 页、Bingo、搜索聊天、New chat 按钮、Chats 里的 Archived。
- ✅ Plans（11/11 定）：右上角只有一个 + 。顶部 **Invites**（有邀请才出现）：每个邀请是一张计划卡（谁邀请、时间、多远），Join / Not this time；不回答就一直留着，Not this time 对方不知道。下面 **Upcoming | Past**：Upcoming 是你加入的 + 你发起的（标 Hosting），按天分组，右边时间，下面一行状态（N going / Waiting on Kai / No one yet / 改动）；没人加入时多一行 Invite more / Call it off。Past：点开看谁去了、聊天（只读）、How was it?。没有 New 区，聊天消息只在 Chats。
- ✅ Add people（11/11 第二版，参考微信 / IG / Bump / TikTok 的结构，用我们的视觉）：一页，很短。Search by @username（最上面）→ 三个灰色方块按钮 Hold phones / My code / Scan → 一个灰块：Contacts（Find friends who are already here ›）、Share invite link（打开系统分享面板）→ Suggested friends（放最下面，学 Bump：每个人一行，写为什么推荐他。理由按优先级：一起去过局 "Met at Zine fair · Sat"（最近 7 天，Add 直接成为朋友）→ 共同朋友 "Knows Jess"（Add = 请求）→ 通讯录 "In your contacts"（授权后，Add = 请求）。灰色 Add。）
  - Hold phones：单独一屏，插画 + "Hold your phones together · Both open this screen · Looking for phones nearby…"，找到后 "Found Priya" + Add Priya / Not them；底部 Show my code instead。
  - My code：底部弹层，二维码 + @miachen + Scan theirs instead。Scan：相机页，底部 Show my code。
  - Contacts：第一次是授权页（插画 · Find friends who are already here · We only check who’s on Hourberry. We never text anyone without you. · Continue → 系统弹窗 / Not now），之后是 On Hourberry（Add = 请求）+ Invite to Hourberry（Invite）。
- ✅ 好友规则（11/11 定）：面对面（Hold phones、扫码）和一起去过局的人，点 Add 直接成为朋友，进成功页 "Priya’s in your bunch!"。搜用户名、从联系人加的，发请求，按钮变 Requested（可以取消），对方同意后才是朋友。成功页：怎么认识的 + Add a note + Done / Make a plan with Priya。不显示对方的习惯。
- ✅ 11/11 改：点地图左上角自己的果子先进 **My profile**（朋友看到的你：顶部一块你的背景色 + 大果子 + ✎；名字、@ · Joined、Free 状态；Edit profile / Share；Make your berry 卡片；3 个数字 hangs / people met / spots to try，"Only you see these numbers."；Into）。Edit profile 右上角是 Preview（学小红书），返回时自动保存，不要 Save 按钮。不放 Recent hangs（和谁出去过是隐私，回顾去 Plans → Past）。朋友看你的 profile = 果子、名字、@、代词、Bio、有空时的 Free till、Into，加上 **You two**（你们一起去过的局、都喜欢的、都想去的、共同朋友，"Only you two see this."），右上齿轮进 Settings（下面原来的 Account 内容，标题改叫 Settings）。Edit profile：果子 + Edit your berry、Name、Birthday（只读）、Username、Bio（一句话，选填）、Pronouns（选填）、What you’re into。不加性别、地区、学校、链接。
- ✅ Settings（原 Account）：头像 / 名字 / @用户名 + Edit profile → When you’re free（Who sees you、Pause Hourberry）→ Settings（Notifications、Blocked and muted、Appearance）→ Premium（Get Premium、Show my badge）→ Friends（Invite friends、Rate）→ Help and legal（Help center、Contact us、Report a problem、Terms、Privacy）→ Account（Phone and email → Delete account、Download my data）→ Log out → 版本号。分组只在 People 里编辑，Who sees you 只勾选。
- ✅ People：只管"我的人"，不放聊天。按分组列出，有空的人排在组里前面、带绿点。
- ⬜ People 顶部放分组（Close friends、自建的组、+ New group）；点人进他的页面，看/改他在哪些组，Message、Plan with。
- ✅ 只能用 app 加入。网页链接是用来下载 app 的。

## 2. 有空 和 Discover（11/10 改：拆成两件事）
用户测试：很多人不懂 I’m free 是"告诉别人我有空"还是"去找局"，也不是动词。所以拆开，一个按钮只做一件事。

**+ Me：告诉朋友我有空**
- ⬜ 点 free 那一堆最上面的 + → 选有空多久：1 hr / 2 hr / 3 hr / Until…（滚轮选具体时间），或者打开 All day / All night。
- ⬜ Until 最多选到 12 小时以后，超出的时间灰掉。更久就打开 All day（到晚上 10 点）或 All night（到凌晨 3 点）。
- ⬜ 选完以后，你的果子掉进那一堆。朋友看得到你有空到几点（"Free till 5"），这样不会有人在你没空了才来找你。All day / All night 写成 "Free today" / "Free tonight"。
- ⬜ 到点自动结束，不用中途确认（11/10 定：不做 "Still free?"）。想提前结束就点自己的果子 → I’m not free。
- ⬜ Until 选的时间超过 12 小时以后，自动压到 12 小时，摘要里写 "12 hr max"。
- ⬜ 可以选给谁看（分组 + 排除个人）。
- ⬜ 已经在那一堆里时，点自己的果子：改时间，或者 I’m not free。

**Discover：翻隐藏的局**
- ⬜ Home 的主按钮：叠起来的卡片图标 + **Discover** + 右边一个小角标（今天还剩几张）。按钮文字不变；用完了角标消失，点了出 "That’s all for today" + Premium。
- ⬜ 点了先选时间（同上），然后翻卡。已经用 + Me 说过有空，就直接用那个时间，不再问。
- ⬜ 每天 3 张；Premium 每天 6 张。没有单次付费。
- ⬜ Discover 页标题 "Free till 8:45" 可以点，点了改时间。
- ⬜ 不推荐和你已加入的 plan 撞时间的局。

## 3. 谁能看到 plan、谁收到通知
- ✅ 只给朋友看；host 可以打开 "Friends can bring friends"，让朋友的朋友也能看到和加入（显示 "via Jess"）。
- ✅ "谁能看到"（分组 + 排除的人，被排除的人永远看不到）和"公开 / 不公开"是两个独立设置。
- ✅ 公开（On the map）：出现在所选朋友的 Home；用 + Me 说了有空的人收到一次弹窗；其他人只看到一个安静的小圆点，不推送。
- ✅ 不公开（Anyone who fits）：不上地图，进少数几个有空、合适的人的 Discover。朋友的朋友也可能收到（11/11 确认），卡片上写 "via Jess"。
- ✅ Make a plan 的 Send 上方写清楚谁会看到、谁会收到通知。
- ⬜ 对一个人的四个动作，从轻到重。任何动作都不强制别人加入或退出 plan：

| | Mute | Remove friend | Restrict | Block |
|---|---|---|---|---|
| 对方会不会知道 | 不会 | 不通知，但可能慢慢发现 | 不会 | 会察觉 |
| 好友关系 | 保留 | 解除，双方都可以再加 | 保留 | 解除，他不能再加你 |
| 私信 | 正常，只是不推送 | 旧聊天留着，不能发新消息 | 他那边显示正常发出，你收不到 | 发送失败 |
| 你在 free 那一堆里 | 他照常看得到 | 看不到 | 看不到 | 看不到 |
| 你 host 的局 | 他照常看得到 | 看不到；开了 Friends can bring friends 可能通过 via 看到 | 看不到 | 看不到，包括 via |
| 共友的局 | 正常 | 正常 | 正常 | 正常 |
| 提醒你 | 不提醒 | 不提醒 | 卡上一行 "Taylor is going · you restricted / blocked them" + 点 Join 弹窗确认 + 他后来加入时私下提醒一次 | 同左 |
| 你的 Picks | 正常 | 正常 | 不推荐有他的局 | 不推荐有他的局 |

  - 被 Restrict 的人永远不会知道。
  - 加入时的弹窗："Taylor is going. You'll both be in this plan and see each other in the chat." [Join anyway] [Cancel]
  - Remove friend 之后照常可以出现在 People you may know 里（删好友本来就是双向的，不需要藏）。

## 4. 加入
- ✅ 动词只有一个："Join"（11/10 由 Take a seat 改名）。点一次就加入，底部出现 Undo。
- ✅ 通知授权要等 Undo 消失以后才问，并且点了 Undo 就不问。
- ✅ 满了显示 "Full · Join waitlist"。
- ✅ 留座：网页邀请自动留 15 分钟；被邀请的人可以请邀请人帮忙留到开始（"Ask Mia to keep it"）；plan 页显示 "Held · 12 min left"，可以选 Keep till 7 / Release。
- ⬜ 加入后不要直接进入已经有"你"发过消息的群聊。

## 5. Plan 的两种类型
- ✅ 定了时间的：Tonight 7:00–8:30。超出你有空的时间，标 "Runs past 9"。
- ✅ 只定了日期的：Sat · time TBD，按钮写 "I’m in for Sat"，之后大家一起挑时间；"Still deciding the time?" 只在这种 plan 出现。
- ✅ 必须凑满人的 plan（Must fill）：写清截止时间，不够人就取消并通知大家。
- ⬜ Make a plan 能改结束时间（现在结束时间固定等于有空到几点）。

## 6. 没人加入
- ✅ 开始前 30 分钟提醒 host：扩大到朋友的朋友，或者取消。

## 7. Recap（11/11 改：就是 Plans → Past 里点开的那一页）
- ✅ 从上到下：标题 + 日期 · 地点 → 插画（按局的类型、白天/晚上、几个人、谁是新朋友变；不按评价变；见 research/ILLUSTRATION-BRIEF.md）+ 一句结论（"You met 1 new person"，没认识新人就写 "With Jess"）→ New to you（新认识的人展开：加过了写 Added at this plan + Message，没加写 Add；下面一行你的笔记或 + Add a note）→ Also there（老朋友压成一行）→ 主按钮 Plan again with them（人预填，公开地点也预填）→ How was it?（Loved it / It was fine / Not for me）→ 选了以后再问地点适合几个人（2 people / 3–5 / 6+，喂给地点页的 Good for；在家办的局不问）→ "Only you see this. You can change it anytime." → 地点（Save place）、Chat（只读）。
- ✅ 问卷一直在这页，随时可以改，不是只问一次。第二天早上的推送打开的就是这一页。
- ⬜ 删掉：Did it happen?、"See them again?"、场地标签（Too loud / Pricey）。

## 8. 地点：Want to go / Save
- ✅ Want to go：跟着你默认"谁能看到你"的设置；点了以后提示谁能看到。
- ✅ Save：只有你自己能看到。
- ✅ Bingo 只算 Want to go，私人收藏不会被看到。
- ✅ 从截图存地点：搜索 → 相机图标。
- ✅ Plan here 要带上这个地点进 Make a plan。

## 9. Plan 卡片（加入前只有这一个视图）
- ⬜ 加入前只有这张卡。Picks、地图 pin、列表、邀请打开的都是它（pin / 列表 / 邀请从底部升起）。原 M04 删掉，不做单独的详情页。
- ⬜ 卡上放"会让你说不去"的信息；点开卡片放"决定去了才用得上"的信息。
- ⬜ 一张卡只有一个主视觉：人（果子那一堆）。不做地图视图（11/10 朋友测试：用不上）。地点是卡片下面的一行，点 Directions 打开 Apple / Google 地图；在家办的加入前只写区域、不能导航。
- ⬜ 左右滑只是上一张 / 下一张，卡还在。Skip = 不感兴趣，这张卡拿掉。加入只能点 Join（原来叫 Take a seat）。
- ⬜ 卡片右上角一个小圆按钮 **Save to map**：这张卡变成地图上一个只有你看得到的 pin，稍后再决定。局开始了 pin 就消失；人满了写 "Full"。

卡上必须有：
- 谁在：果子，每颗下面写名字。
- 做什么、在哪：标题。
- 几点到几点；超出你有空的时间标 "Runs past 9"。
- 多远：用时间，例如 "8 min walk"。
- 座位："2 of 5 seats left" / "Full · waitlist open" / 必须凑满的写截止时间。
- 主按钮 Join，加 Skip；右上角 Save to map。
- 一行理由（见下）。

有就显示，没有就不占位置：房主留言（只显示一条、一行，从房主果子上冒出来）、Premium 星、via Jess、**费用**、**年龄限制（21+）**。

点开卡片以后，按这个顺序：
1. 全员名单，每个人写和你的关系（"Ana · Jess’s roommate"、"2 mutual friends"）。
2. 所有留言。
3. 到场信息：地址、停车、怎么付钱。在家办的局加入前只写区域。

理由行（每张卡只写一条，取优先级最高的）：
1. 有 close friend 在："Lena’s in"
2. 最近见过、认识的人："You met Sam at Rooftop, Fri"
3. 地点在你的 Want to go 里："You wanted to go here"
4. 房主是朋友的朋友："Jess’s friend Noor is hosting"
5. 都没有，写时间合适："Ends before you’re busy"

果子（头像）显示：
- 最多显示 4 颗：房主加 3 个你最熟的人（按熟悉程度挑，不按加入先后）。
- 其余合成一颗 "+N"，点它打开全员名单。
- 你的空位一直显示，满了才不显示。
- 名字行跟着显示的人走："Jess, Lena, Sam +5"。
- 座位统一写成 "2 of 5 seats left"。

- ✅ 加入后（11/11 定）：不管从地图、Home、Plans 点，已加入或自己发起的局都直接进 plan 页，不再弹加入前的卡片。plan 页：标题 → 时间（地点不重复写）→ 人 → Meet at（地点 · 地址 · 多远 + Directions，提示写在里面）→ On the way 地图和共享位置（只在开始前 1 小时内出现）→ Chat 一行（最后一条消息，有新消息变黑）→ Can’t make it（灰色按钮）。
- ✅ 按钮文字规则：按钮只写动作，2–3 个词以内（Join、Open plan、Directions）。状态（You’re in、Requested）放在标签或标题里，不和动作拼在一个按钮上。

## 10. 头像
- ✅ 11/11：头像就是"你的果子"，用户自己捏（参考 Duolingo 的 avatar 编辑器）。编辑器：上面大预览（背景色就是选的背景），一排 tab：Berry（草莓、蓝莓、树莓、樱桃、葡萄、橘子）/ Color / Face（Eyes + Mouth）/ Top（叶子、梗、帽子、蝴蝶结）/ Extras（眼镜、墨镜、耳机、围巾）/ Background；每个选项是一个方块，里面就是你的果子换上这个样子。右上 Done，左上 ×。
- ✅ 小尺寸规则：44px 以上完整显示；24–44px 只显示果子、颜色、脸；24px 以下只剩果子形状和颜色。
- ✅ 没捏过的人显示首字母果子；自己的 profile 上有 "Make your berry · Start" 卡片，做完 toast "Looking good!"。
- ⬜ 每个人的头像都是一颗果子，不用照片（老师：照片会毁掉整体感觉）。名字永远写出来。
- ⬜ 头像编辑器：在 onboarding 和 Edit profile 里，选果子的形状、颜色、表情、配件（眼镜、帽子）、背景色。要抽象，不做头发这类太写实的东西。
- ⬜ 两种大小：大号（卡片、plan 页）是完整角色，名字写在果子下面；小号（地图 pin、列表、3 free）只留形状，里面写首字母。
- ⬜ 点 Join：你的果子落进空位，所有人的果子挤成一堆，然后过渡到 plan 页。plan 页上就是这堆果子，像乐队合照。

## 11. 加入后的 plan 页
- ⬜ 地图上每个人一条线连到目的地，一眼看出谁快到了、谁会迟到（老师 Nov 4 主动提的）。

## 12. 加载页
- ⬜ 几颗果子聚成一串小点，下面写 "Got an hour? Make it ours."

## 13. People 页（11/11 做完）
- ✅ 顶部一排分组 chip：All · Close friends · 自建的组 · + New（带人数）。点一个只看这个组的人。自建的组下面有 Delete group（不通知任何人）。
- ✅ 列表：有空的排前面，每个人只出现一次。第二行写"什么时候能找他"：有空写 "Free till 10" / "Free tonight" + 绿点；没空写最近一起去的局（"Rooftop hang · Fri"）；没去过写怎么认识的（"Met at Boulder gym · Oct 28"），通讯录加的写 "From your contacts"。不写分组、不写 Close friend。
- ✅ 点一个人进个人页（11/11 定，参考微信 / IG / TikTok 的结构，但用我们自己的视觉）：头像 + 名字 + "@sam · Free till 9:30" → Message / Make a plan → Note（只有你看得到；Add people 成功页写的笔记也存在这里）→ Groups（chip 就地加减、+ New；"Sam won’t know which groups they’re in."）→ You two（一起去过的局、都想去的地方，没有就不显示）→ Hide when I’m free（只对这个人隐藏你有空，对方不知道；Who sees you 里会写 Hidden from Sam）→ Mute / Restrict / Remove friend / Block / Report（直接摆出来，不藏在 ⋯ 里；Block 和 Report 红字）。Block 先弹确认（"Block Sam? … They may notice."）；Block 之后个人页不显示有空状态，也没有 Message / Make a plan。私聊右上角 ⋯ 也进这一页。不做：聊天气泡、壁纸、提示音、阅后即焚、通话、清空聊天、置顶、推荐给朋友。
- ✅ Close friends 固定：永远第一个，不能删、不能改名（Who sees you 默认值和 Make a plan 的 "from Close friends" 靠它）。其他组可以自由建、删。
- ✅ 分组只在 People 和个人页编辑；Account → Who sees you 只勾选。
- ✅ Add 是一整页（见 §1 Add people）。
- ⬜ 改组名。
- ✅ 新用户 0 个朋友时：点 Discover 或 + Me 先引导加人或探索地点。

## 14. 其他已定
- ✅ Premium：头像右上角一颗星，点一下有说明。
- ⬜ Premium 还包括：Discover 每天 6 张（免费 3 张）。
- ✅ 离开群聊等于退出这个 plan。
- ✅ 新用户的推荐不能是陌生人，至少是朋友的朋友，并显示关系。
- ✅ 通知设置：Plans while I’m free（说了有空时弹窗）、New plans from friends（小圆点，默认关）、Morning recap。
- ✅ 搜索可以搜区域（Hollywood 等），显示 "5 plans in Hollywood"。

## 15. Home 抽屉里的 plan 列表（11/4 定）
- ✅ 按时间分组，一直往下滑（11/11 改）：You’re going → Tonight → Tomorrow · Wed, Nov 11 → This week → Later。不再分 Starting soon / Later tonight。每组里按日期、开始时间排。私下的邀请不进这个列表。
- ⬜ 抽屉顶部两个按钮：**Discover**（黑色主按钮，带剩余张数角标）+ **+ Make a plan**（浅灰胶囊）。下面直接是列表，不放标题（有空的人已经在地图上了）。
- ✅ 每一行：左边一个固定大小的白色方块，果子在里面堆成一串（1 颗大的；2 颗斜着叠；3 颗叠成三角；更多人是 2 颗 + "+N"），这样每行标题都对齐。中间两行字，右边时间：
  1. 标题（已加入的写 You’re in）
  2. host 名字 · 多少英里（"Jess · 0.5 mi"，11/11 改）。走路 / 开车多久只在 plan 卡上写。
  3. 右边：只写开始时间（大字）。不写 "in 20 min"、不写 tonight。只有组里跨好几天时（This week、Later、You’re going 里不是今晚的）才在下面小字写星期几或日期（Fri / Nov 20）。
- ⬜ 地点名不在列表里，在 plan 卡里看。以后的局整行变灰一档。
- ✅ 列表行不写剩几个座位，座位在 plan 卡上看。
- ⬜ Home 列表永远不随你的有空时间变：不改分组、不标 "Runs past"（11/10 定：Discover 一下或说自己有空，都不应该让主页看不全）。"Runs past" 只在 Discover 卡片上写。
- ✅ 在家办的局，加入后才给地址。
- ✅ 列表里不放留言，留言在 plan 卡里看。
- ✅ 列表行不放 Join：点一行打开 plan 卡，在那里加入。
- ⬜ "3 free" 气泡改成地图右上角那一竖排 free 那一堆（见 §1）。点开可以直接约他们。

- ✅ 筛选条（11/11 定）：永远在抽屉顶部（Plans 的时间筛选在 Discover / Make a plan 下面，Spots 的分类 chip 在最上面），滑动时贴住顶部。不再放在地图上，不随抽屉高度换位置。

- ✅ Spots 地图 pin（11/11 改，老师反馈"头像 + 名字像在说这个人叫 Dumplings"）：pin 主体是白色圆角小方块 + 类型图标（吃的 / 咖啡 / 户外），右边店名；想去的朋友是方块右上角的小果子标记（最多 1–2 颗 + "+N"）。点开在抽屉里看 "Jess, Sam +2 want to go"。挤在一起的 pin 合成黑色聚合标记 "3 spots"（带朋友果子），点了放大散开。缩小到 0.95 以下只显示图标，不显示店名。Sponsored 在 pin 上写成 "· Ad"。

## 16. 搜索（留在地图上）
- ✅ 点搜索不跳页：顶部变成输入框 + Cancel，地图留着，底部抽屉放结果。
- ⏸ 粘贴链接找地点：11/10 先拿掉，以后再加（包括输入框下面的提示框）。
- ✅ 没输入时抽屉里：Browse（一条可以横滑的分类小条）→ Recent。
- ✅ 边打字边更新：地图上匹配的 pin 变黑，不匹配的变淡；抽屉列出同样的结果。隐藏局（Discover 里的）永远搜不到。
- ⬜ 点一个地点（结果行或 pin）：不弹窗、不压暗地图。地图平移到这个地点，pin 变黑放大；抽屉换成地点页：Want to go / + Plan here → 地址 + Directions → Happening here（在这里的局）→ Who wants to go。× 回到结果。
- ✅ 搜区域：地图移到那一片，显示这里的 plan。
- ✅ 截图找地点：输入框右边的相机图标。

## 17. Make a plan 的句子（11/11 老师反馈后改）
- ✅ 灰字是固定的，黑色粗字可以点（hi-fi 换主色）。不用下划线，不用 +/−。
- ✅ "Tacos at Sonoratown" 拆成两个能点的词：Tacos（做什么）、Sonoratown（在哪）。
- ✅ 点时间：底部弹出时间滚轮（15 分钟一格），滚的时候句子里的时间实时变；背景不变暗，点空白处收起，没有 Done。
- ✅ 点人数：底部弹出 2 3 4 5 6 8 10 12，点一个就收起。少于"你 + 已邀请的人"的数字灰掉。
- ✅ 点地点永远是"换地方"。Where 面板最上面是当前选的地点 + Details（看完整地点页，Back 回来）。Send plan 上面一行直接写地址 · 多远。
