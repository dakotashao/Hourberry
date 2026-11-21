# Hourberry · 产品规则（core 新版原型）

> 这份管 core/ 新版原型（网站首页）。根目录的 RULES.md 管旧版原型（/old）。

所有屏幕都照这份做。✅ = 原型里已经是这样；⬜ = 还没做；❓ = 还没定。
改规则要先和 Dakota 确认，再改这份文件，最后改原型。

## 1. 结构
- ✅ 主角是 plan：卡片、地图 pin、列表都是 plan。人只出现在 plan 上（谁 host、谁在）。
- ⬜ 地图上只有 plan，不显示人的实时位置。地图上的 plan 是公开的局（比较大、需要人）；小的隐藏局在 Discover 里翻。
- ⬜ 有空的人在地图右上角、搜索按钮下面，竖着排成 **free 那一堆**：一个胶囊，最上面一格是 +（你的位置），下面是有空的人的果子，最下面小字 free（11/17 改，老师意见：不写人数。最多 3 颗果子，超过 3 个第 4 格写 "+N"。前 3 颗先放跟你熟的，再按离你近的排。没人有空或还没有朋友时，只剩 +）。说了有空以后，+ 变成你的果子。点胶囊原地展开，看所有有空的人和各自到几点（顶部搜索；熟的排前面，再按距离，不分段、不写 Close friend；每行 "till 10:00 PM · 0.4 mi"）；你永远排第一行（Edit），别人右边 Hang?（发私信约）。Plans 和 Spots 两个图层都有。
- ✅ 导航：Map、Plans、Chats、People 四个 tab；Account 在头像后面。（11/10 确认：把 Chats 加回来，原型之前只做了 3 个。）
- ✅ Chats：分两段。**Plans**：你加入或发起的局的群聊，按开始时间排；**Friends**：私聊，有未读的排前面。结束的局不在 Chats 里，去 Plans → Past 打开那个局，里面有它的聊天（只读）。
- ✅ Plan 群聊：顶部固定一条，随时间变（开始前 "Tonight 7:00 · leave by 6:52" + Directions；进行中 "Happening now"；结束后关掉输入框）。输入框上面一排快捷回复：On my way / Here / 10 min late / Can’t make it（走退出流程）。标题点了进 plan 页；⋯：See the plan / Mute this chat / Leave plan。
- ✅ 私聊（11/11 改）：标题下只在对方有空时写 "● Free till 9:30"。怎么认识的放在聊天记录最上面（大果子 + 名字 + "You met at Rooftop hang · Fri"），会跟着聊天往上滚走。Make a plan 不放顶部：输入框左边一个 + 随时可以发起；对方有空时输入框上方多一条 "Sam is free till 9:30 · Make a plan"。⋯ 是个人菜单（Mute / Remove / Restrict / Block / Report）。点别人的消息可以举报。
- ⬜ 先不做：共享实时位置的单独地图页、Chat settings 页、Bingo、搜索聊天、New chat 按钮、Chats 里的 Archived。
- ✅ Plans（11/11 定）：右上角只有一个 + 。顶部 **Invites**（有邀请才出现）：每个邀请是一张计划卡（谁邀请、时间、多远），Join / Not this time；不回答就一直留着，Not this time 对方不知道。下面 **Upcoming | Past**：Upcoming 是你加入的 + 你发起的（标 Hosting），按天分组，右边时间，下面一行状态（N going / Waiting on Kai / No one yet / 改动）；没人加入时多一行 Invite more / Call it off。Past：点开看谁去了、聊天（只读）、How was it?。没有 New 区，聊天消息只在 Chats。
- 🧪 （11/18 改，老师意见）Invites 最多放 2 张，多的写 "N more invites ›"，点进 **Invites** 页（学 Instagram 的 Message requests）：按开始时间排，分 Tonight / This week / Later，每张都能 Join / Not this time；处理完最后一个自动回到 Plans。局开始了邀请自动消失，所以不会一直堆。
- 🧪 （11/18 改）Past 不折叠、不分页：按月分组（This month / October / …），往下滑就是更早的（真实 app 滑到底自动加载）。顶部搜索能搜局名、人、地点。长按（电脑上右键）一个局 → "Hide from my past"，只对自己隐藏，"Others who went still see it."，可撤销。标签不写数字（"Past"，不是 "Past · 48"）。
- ✅ Add people（11/11 第二版，参考微信 / IG / Bump / TikTok 的结构，用我们的视觉）：一页，很短。Search by @username（最上面）→ 三个灰色方块按钮 Hold phones / My code / Scan → 一个灰块：Contacts（Find friends who are already here ›）、Share invite link（打开系统分享面板）→ Suggested friends（放最下面，学 Bump：每个人一行，写为什么推荐他。理由按优先级：一起去过局 "Met at Zine fair · Sat"（最近 7 天，Add 直接成为朋友）→ 共同朋友 "Knows Jess"（Add = 请求）→ 通讯录 "In your contacts"（授权后，Add = 请求）。灰色 Add。）
  - Hold phones：单独一屏，插画 + "Hold your phones together · Both open this screen · Looking for phones nearby…"，找到后 "Found Priya" + Add Priya / Not them；底部 Show my code instead。
  - My code：底部弹层，二维码 + @miachen + Scan theirs instead。Scan：相机页，底部 Show my code。
  - Contacts：第一次是授权页（插画 · Find friends who are already here · We only check who’s on Hourberry. We never text anyone without you. · Continue → 系统弹窗 / Not now），之后是 On Hourberry（Add = 请求）+ Invite to Hourberry（Invite）。
- ✅ 好友规则（11/11 定）：面对面（Hold phones、扫码）和一起去过局的人，点 Add 直接成为朋友，进成功页 "Priya’s in your bunch!"。搜用户名、从联系人加的，发请求，按钮变 Requested（可以取消），对方同意后才是朋友。成功页：怎么认识的 + Add a note + Done / Make a plan with Priya。不显示对方的习惯。
- ✅ 11/11 改：点地图左上角自己的果子先进 **My profile**（朋友看到的你：顶部一块你的背景色 + 大果子 + ✎；名字、@ · Joined、Free 状态；Edit profile / Share；Make your berry 卡片；3 个数字 hangs / people met / spots to try，"Only you see these numbers."；Into）。Edit profile 右上角是 Preview（学小红书），返回时自动保存，不要 Save 按钮。不放 Recent hangs（和谁出去过是隐私，回顾去 Plans → Past）。朋友看你的 profile = 果子、名字、@、代词、Bio、有空时的 Free till、Into，加上 **You two**（你们一起去过的局、都喜欢的、都想去的、共同朋友，"Only you two see this."），右上齿轮进 Settings（下面原来的 Account 内容，标题改叫 Settings）。Edit profile：果子 + Edit your berry、Name、Birthday（只读）、Username、Bio（一句话，选填）、Pronouns（选填）、What you’re into。不加性别、地区、学校、链接。
- 🧪 Settings（11/18 改，参考 Hinge / Bumble / Tinder）：最上面普通一行 "Hourberry Premium ›"（没买右边不写字，买了写 "Active"），学 Snapchat；不做大卡，推销放在用到的时候（Discover 用完、果子编辑器试戴）→ Privacy（Who sees you、Blocked and muted）→ Preferences（Notifications、Appearance）→ Account（Phone and email、Download my data）→ Support（Help center、Report a problem、Rate Hourberry、Terms、Privacy Policy）→ Log out、Delete account（红字，最底下）。Show my badge 挪进 Premium 页。不放 Invite friends（People → Add 有）和 Contact us（在 Help center 里）。
- 🧪 （11/18 改，学 Snapchat）不做 Pause，也不单独做 Deactivate。Delete account = 先停用 30 天，期间朋友看不到你；30 天内重新登录就恢复。弹窗："Your account turns off now and is deleted in 30 days. Log back in before then to undo."
- ✅ 不做 Pause 的理由：有空本来就要自己点 + Me 才出现、到时间自动消失（= Snapchat 定时隐身）；对某个人隐身用 Hidden from（= Bump 的 Ghost Mode）。
- （旧）✅ Settings（原 Account）：头像 / 名字 / @用户名 + Edit profile → When you’re free（Who sees you、Pause Hourberry）→ Settings（Notifications、Blocked and muted、Appearance）→ Premium（Get Premium、Show my badge）→ Friends（Invite friends、Rate）→ Help and legal（Help center、Contact us、Report a problem、Terms、Privacy）→ Account（Phone and email → Delete account、Download my data）→ Log out → 版本号。分组只在 People 里编辑，Who sees you 只勾选。
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
- ✅ 11/11 借队友 v4/v2：预览顶部 Big / On map 切换，On map 直接给你看地图 pin 和聊天里的小果子；戴了小尺寸看不到的东西提示 "Shades won’t show this small"。每次换东西果子弹一下（0.4 秒，减少动态效果时关掉）。改过没存就点 ×：Save your berry? → Save / Discard / Keep editing；没改过直接关。
- ✅ "N going" 统一写名字：按亲疏排，你在就写 You 开头。"You, Jess + 2 going" / "You and Kai" / "Sam and Ren" / "Just Kai so far"。用在 Plans 列表、Chats 计划行、计划群聊标题。
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
- ✅ 11/11 改：分组不放顶部。列表分 Free now（有空的人）和 Everyone 两段；分组放最下面一个灰块（Close friends · 2 › / Climbing · 3 › / + New group），下面一行说明分组的用处。点一个组进组页：成员（Remove）→ Add to 这个组（Add）→ Delete group（Close friends 没有）。
- ✅ 列表：有空的排前面，每个人只出现一次。第二行写"什么时候能找他"：有空写 "Free till 10" / "Free tonight" + 绿点；没空写最近一起去的局（"Rooftop hang · Fri"）；没去过写怎么认识的（"Met at Boulder gym · Oct 28"），通讯录加的写 "From your contacts"。不写分组、不写 Close friend。
- ✅ 点一个人进个人页（11/11 定，参考微信 / IG / TikTok 的结构，但用我们自己的视觉）：头像 + 名字 + "@sam · Free till 9:30" → Message / Make a plan → Note（只有你看得到；Add people 成功页写的笔记也存在这里）→ Groups（chip 就地加减、+ New；"Sam won’t know which groups they’re in."）→ You two（一起去过的局、都想去的地方，没有就不显示）→ Hide when I’m free（只对这个人隐藏你有空，对方不知道；Who sees you 里会写 Hidden from Sam）→ Mute / Restrict / Remove friend / Block / Report（直接摆出来，不藏在 ⋯ 里；Block 和 Report 红字）。Block 先弹确认（"Block Sam? … They may notice."）；Block 之后个人页不显示有空状态，也没有 Message / Make a plan。私聊右上角 ⋯ 也进这一页。不做：聊天气泡、壁纸、提示音、阅后即焚、通话、清空聊天、置顶、推荐给朋友。
- ✅ Close friends 固定：永远第一个，不能删、不能改名（Who sees you 默认值和 Make a plan 的 "from Close friends" 靠它）。其他组可以自由建、删。
- 🧪 （11/17 改）分组在 People、个人页、Who sees you 三个地方都能进去改，进去都是同一个分组页（Add / Remove / 删组），新建都是同一个 New group 弹层。
- 🧪 （11/18 改，参考 WhatsApp Lists / Telegram 文件夹）People 页去掉底下的 Groups 区。搜索框下面一排小标签：All / 各个分组 / +。点一个分组 = 筛选列表；这时上面一行 "3 people · only you see this group" + Edit（进分组页）。+ 新建分组，建好自动选上。
- 🧪 Who sees you（11/18 改，学微信"部分可见"）：顶部搜索 "Add someone"（搜到点 Add 加进来，已经能看到的写 "Already sees you"）。下面一个列表全是方框：All friends、每个分组（组名 + 名字，› 进分组页）、加进来的人、+ New group（建好自动勾上）。All friends 就是"全选"：勾上时所有组也显示勾上；在全选状态取消一个组，All friends 自动取消；取消 All friends，所有组保持勾上。最后一个不能取消，不会 0 人。下面单独一行 Hidden from（挑人页）。底部 "N people will see you’re free."，不写别的说明。
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

- ✅ Plans 地图 pin（11/11 改，同老师 "Dumplings 像人名" 的反馈）：主体是白色圆角小方块 + 活动图标（吃的 / 麦克风 / 攀岩 / 喝一杯 / 桌游 / 户外 / 咖啡），右边两行：活动名（Tacos）加粗，下面小字时间（7:00 / Sat）。host 的小果子 + "+N" 挂在方块左上角当标记，不是主体。你加入或发起的局：方块变黑。以后的局淡一点。挤在一起合成黑色 "2 plans"，点了放大散开。

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

## 18. Plan 卡片的人群区（11/11 改回 Figma 那版的布局，更 clean）
- ✅ 三列：左边小字座位数（≤2 个时变黑加粗）+ Your seat（+）+ 还有几个空位；中间 host 放在白色圆角块里突出（大果子 + 名字 + HOST · via Jess）；右边其他人小果子竖排，最多 3 个，多了是 +N See all。
- ✅ 座位数不再用右上角的胶囊。留言气泡在最上面，"为什么和你有关"在人群区下面。

## 19. 注册流程（11/13 做进原型）
- ✅ 入口：Settings → Log out 之后、Settings 最下面 "Prototype · sign up as a new user"、链接加 `?signup`。
- ✅ 0 欢迎（大插画 + 一个主按钮 Get started〔手机号〕+ 文字链接 I have an account，最下面一行小灰字：Terms 和 Privacy Policy）→ 1 手机号 → 2 验证码（输满 6 位自动下一步）→ 3 名字（@ 自动生成：名字小写，太短或被占用就加两位数字，以后在 Edit profile 里改）→ 4 选果子（"Pick your berry, Trevor" / "This little guy is you on the map." / 按钮下小灰字 "Dress it up anytime from your profile."）→ 6 生日（三列滚轮：月 / 日 / 年，停在 2000 年 1 月 1 日但不算选了：没滚动过，按钮是灰的 "Scroll to your birthday"；不满 18 → "Hourberry is for 18 and up"）→ 7 兴趣（不设最少数量；一个都没选时按钮是灰色的 "Skip for now"，选了就变成黑色的 "Continue"，只有这一个按钮）→ 8 定位（中间是小地图预览，用真的 plan pin；按钮下小灰字 "Your exact location is never shown to anyone."；系统弹窗照 iOS：小地图 + Precise: On，Allow Once / Allow While Using App / Don’t Allow。Allow Once 下次打开 app 会再问）→ 9 通知（中间是两条通知预览，按钮下不放字）→ 10 加人（可跳过）→ 11 You’re in。
- ✅ 11/16 改：**只用手机号注册和登录**（参考 Hinge、Bumble、Bump、Partiful：都必须验证手机号）。手机号用来找通讯录里的朋友、确认是真人、发邀请。没有密码。
- ✅ I have an account → "Welcome back" + 手机号 → 短信验证码 → 直接进 app。之前的密码登录页删掉（注册时从没设过密码）。
- ✅ 邮箱和 Apple 放在注册之后（学 Hinge）：Settings → Account → Phone and email 里有 Email（Add）和 Sign in with Apple（开 / 关）。新用户的 Profile 上有一张可以关掉的卡片 "Add your email · So you can get back in if you lose your phone."
- 不做"先用邮箱、之后再绑手机号"：手机号反正必须给，先邮箱只是多一次验证。App Store 4.8：只用自己的账号系统时，不要求提供 Apple 登录。
- ⬜ 收不到短信：之后加"改用 WhatsApp / 接电话听验证码"（学 Partiful、Bumble）。
- ✅ 11 You’re in：加了人 → "Theo’s in your bunch. Next time you’re free, they’ll know." + Let’s go；没加人 → "Add a few friends and you’re set." + Add friends（进 Add people）/ Maybe later。
- ✅ 不做 "How it works" 介绍页（11/16 删）：改成进 app 第一次到地图时，+ 旁边一个黑色小气泡 "Tap + when you’re free / Friends you pick will see it"，点气泡或点 + 后消失，只出现一次。学 Gentler 首页的 "Tap here to switch…" 气泡：用到的时候再教。
- ✅ 不单独问 @（11/16 删）：我们加人主要靠通讯录、碰手机、二维码，@ 只是备用。学 Duolingo：先自动给，之后再改。
- ✅ 进度条从 3 名字到 10 加人，分成 **7 段**，做完一步填满一段，不写数字（11/16 改）。
- ✅ 验证码页 "Resend code" 先显示 60 秒灰色倒计时 "Resend code in 1:00"，到 0 才能点；点了重新倒数（11/16 改）。
- ✅ 验证码页不放 Edit：改号码用左上角返回键，号码还在框里（11/16 改）。
- ✅ 有输入框的屏（登录、手机号、验证码、名字）原型里画出键盘（手机号和验证码是数字键盘），按钮和果子都在键盘上面。真手机上不画，用系统键盘。
- ✅ 果子陪着走：名字、生日两屏，输入框下面放一颗果子（选果子之前是灰色默认果子），每屏一个姿势占位。
- ✅ 要权限的页面：中间放"开了会怎样"的预览。不加我们自己没定过的规则（之前写的"11 PM–8 AM 静音"删了：和 All night 冲突）。
- 依据（11/16 看 Gentler / Ahead / Headspace / Duolingo）：四家开始页角色都很大；三家在提问前先讲 app 有什么用；Duolingo / Ahead 先告诉你要问几题。我们不学"先体验再注册"：局只给朋友看，没账号没朋友就没东西可看，所以账号放最前面，和 Headspace 一样。

## 20. 主持人管理 + 举报（11/13 做进原型）
- ✅ 计划页 ⋯（host）：Edit plan（回到那句话，按钮变 Save changes；改了时间/地点会写进群聊并提示所有人）· Stop new people joining（已在的人不受影响）· Who can join（"Friends join, others ask" 默认 / "Ask me first"）· Call it off（确认：在里面的人会收到通知，聊天保留）。
- ✅ Wants to join：朋友的朋友或陌生人申请，在计划页顶部 Accept / Decline。Decline 对方只看到"满了"。
- ✅ 点计划页里的人：Message / Profile；host 多一个 Remove from plan（确认：对方收到一句"你不在这个局里了"，不能再加入）；所有人都有 Report。
- ✅ 举报分两种，入口不同、理由不同：Report this plan（关于局本身：不符、地点不安全、广告）在 ⋯ 里，host 看不到这一项；Report [人]（关于这个人的行为：让我不安、骚扰、假账号、广告）在点人之后，可以顺便 Block。都写"对方不会知道是你"。

## 21. "How much time" 弹层（11/13 改）
- ✅ 点 1 hr / 2 hr / 3 hr / Until… 只更新弹层里面，弹层不再重新滑上来。
- ✅ 下面只写 "Free till 8:45 PM"，不再重复写时长。
- ✅ Until…：保留原来的三列滚轮（时 / 分 / AM-PM）。超过 12 小时的时间变灰，滚到灰色的会自动弹回最晚能选的时间，所以不需要 "12 hr max" 的提示。
- ✅ All night / All day 开关下面写清楚：晚上 = 到凌晨 3 点，朋友看到 "free tonight"；白天 = 到晚上 10 点，朋友看到 "free today"。打开后滚轮收起。

## 22. 地图测试：局 = 一串果子 + 时间窗口（11/16 做进原型，测试中）
- 🧪 （11/17 改，老师意见：原来的标签看起来像人名，真地图上看不清）Plans 地图 pin 平时是一个白底小气泡，带小尾巴指到地点：host 果子 + "Tacos · 7:00 PM"（做什么 + 几点，谁靠果子）。满了写 "· Full"，不写几个空位。你要去的局气泡加一圈黑边。挤在一起还是合成 "N plans"。
- 🧪 点气泡：气泡变黑，原地长出一串果子（中间 host，周围去的人最多 5 颗再多写 +N，空心是空位最多 3 个，右上角活动图标）；底部抽屉只剩这一个局，用跟主页列表一样的那一行（果子方块 + 名字 + "Noor · 4 mi" + 右边时间）。点这一行或再点一次气泡，才打开完整的局。点地图空白处收回。
- 🧪 时间窗口只在**今天地图上有 8 个或更多局**时出现（受欢迎的人、周五晚上）；平常局少，一眼就能看完，不出现。没出现时，"你有空之后才开始的局变淡"照样生效。原型左侧导航 "Busy night (8+ plans)" 可以看到。
- 🧪 出现时：抽屉上方一个小胶囊 "Now – 9:00 PM"（你有空就到你有空结束；没点有空就到 12 AM）。拖地图时展开成两个把手的时间轴（最晚到 3 AM），停手 2.5 秒收回；点胶囊也能打开。
- 🧪 拖时间窗口时气泡变化：在窗口里开始、能待满 1 小时 → 正常；待不满 1 小时 → 标 "short"；窗口之后或别的日子 → 字变灰，白底不变（变透明会让街名透出来）。只改地图，不改你的有空状态。
- 待定：和抽屉里的 "Any time" 筛选重复；抽屉列表不跟着窗口变；抽屉在半高时展开的时间轴会挡住大半地图。
- ✅ 11/16：时间（Now / Tonight / This week / Any time）和距离两个筛选都从底部弹窗改成**下拉小菜单**。距离（点胶囊，在下面弹出 Within 1 mi / 5 mi / 15 mi / Anywhere，当前项打勾，点一项就关，地图不变暗）。选 Anywhere 时胶囊只写 "Anywhere"。按英里，不改成步行时间。距离筛选现在真的会筛：地图和抽屉列表只留这个范围内的局（自己发起的除外）。

## 23. 改用户名（11/16 修）
- ✅ 注册时自动生成 @（名字小写；太短或被占用就加两位数字），之后在 Edit profile → Username 里改。
- ✅ 输入框前面固定一个灰色 "@"，用户删不掉。边打字边整理：转小写，只留字母、数字、. 和 _，空格和其他符号直接去掉。
- ✅ 输入框下面实时提示："✓ @trevlee is available" / "@jess is taken"（红字）/ "At least 3 characters"（红字）。
- ✅ 11/16 再改（学 Instagram / TikTok / Hinge）：Edit profile 是一列"标签 · 值 ›"（Name / Username / Bio / Pronouns；Birthday 只显示不能点，下面 "Friends can’t see your birthday."）。每一行点进去单独一页改，右上角 Save；主页只有返回，没有 Cancel / Done。
- ✅ 顶部分段切换 **Edit | Preview**（学 Hinge），Preview 就是"朋友看到的你"。
- ✅ 头像右下角小铅笔，点头像或下面 "Edit your berry" 进果子编辑器。
- ✅ 改用户名那一页要谨慎：输入框下实时提示能不能用，不能用时 Save 变灰；下面一块说明 "You can only change your username once every 30 days. For 14 days, no one else can take @trevor."。改完弹 "You’re now @trev.lee"。30 天内再进去：输入框和 Save 都是灰的，写 "You can change your username again on Dec 16."
- ✅ Name 不能留空。
- ✅ Birthday 显示注册时选的日期（之前写死成 Mar 4, 2001）。

## 24. 个人主页 = 朋友看到的你（11/16）
- ✅ Profile 放朋友能看的内容：果子、名字、@、bio、兴趣、有空状态、三格徽章墙、Hosting。底部 "This is what friends see. Choose what’s shown"。还没做果子时，Edit profile / Share 按钮下面一张卡片 "Make your berry · Friends see it everywhere. · Start"（照 hi-fi G09 的位置）；做完果子卡片消失，改果子用头像右下角的小铅笔。
- ✅ **徽章墙**（11/16 按社交心理重选）：一排三格，每格显示什么用户自己选，也可以空着。原则：说"你是什么样的人"而不是"你有多厉害"；能引出一次邀请；数字小时不丢人；不制造压力（不做 streak）。选项：
  - Go-to spot："Leo’s Taqueria"（点开是那家店）
  - Usually down for："Tacos & climbing"
  - Best time to catch me："Weeknights after 7"（从你常点"有空"的时间算）
  - Wants to go："2 places"（点开是列表，朋友可以约你去）
  - Currently obsessed with："Bouldering"（自己写，最多 24 个字，Edit profile 里一行）
  - Hosted："5 plans"（host 满 3 次才能选）
  - Introduced："6 friends to each other"（在你的局上互相认识的朋友）
  - First to join："8 plans"（第一个加入的次数，满 3 次才能选）
  - 删掉：plans joined、plans hosted（数字）、new friends（像收集人头）、weeks in a row（streak 压力）。
  - 数据不够的徽章锁着：挑选页里变浅，写怎么解锁（"Start a few plans"）。新用户什么都没有时，主页显示一格 "New here · Say hi"。默认：Go-to spot / Wants to go / Introduced。11/16 改：文案都写具体（"Hosted 5 plans"），不写抽象的身份名（"The host"）。
- ✅ **改徽章在 Edit profile 里**（11/16 改成一页挑选）：点 Profile badges 或 "Choose badges" → 新页面：上面三格实时预览（朋友看到的样子），下面所有徽章两列方块，每块直接写自己的数；点一下选上（黑底，角上 1 / 2 / 3 表示顺序），再点取消；满 3 个时其余变淡，再点提示 "Remove one first"；一个不选 = 主页不显示这一排；右上角 Save，返回不保存。旧的写法："Profile badges" 三格，点一格 → 底部弹窗 "Show on your profile"：Plans joined / Plans hosted / New friends / Places to go / Weeks in a row / Go-to spot（旁边写 "Yours: 5"，已在别的格子里的变灰）+ "Don’t show anything here"。空格子显示 "+ Add"。默认：plans joined / plans hosted / places to go。
- ✅ 做 / 改果子也在 Edit profile 里（头像 + "Make your berry / Edit your berry"）。主页顶部的大果子右下角小铅笔照样能进。
- ✅ 不做"要不要展示兴趣 / 正在发起的局"的开关（11/16 删）：不想展示兴趣就不选标签；局的可见范围由局自己的 "Who can join" 决定。
- ✅ 删掉 Edit profile 里的 Preview：Profile 本身就是朋友看到的样子。
- ✅ 11/16：主页上点徽章 = 在当前页弹出一个小 sheet 看详情，不跳到别的页面：Go-to spot → 那家店一行（点这一行才去地点页）；Usually down for → 两个类型和次数；Best time to catch me → 一周七天的小柱状图；Wants to go → 地点列表；Hosted → 最近 3 个局；Introduced → 谁和谁在哪个局认识；First to join / Currently obsessed with → 一句话。底部 "Friends see this when they tap it on your profile."

## 25. 果子编辑器：老师 11/16 意见
- ✅ Color 只用一排圆形色块，不再在下面重复画一排果子（老师："could be just color switches"）。
- ✅ 付费款（老师："upsell them on items they have to upgrade to premium"）：Top 里有 Top hat、Crown，Berry 里有 Pineberry（白草莓）、Golden raspberry、Blackcurrant（11/17：Starfruit 不是莓果，换掉），放在每页最后，右上角小锁。可以点了先试戴，预览下面出现 "Top hat is Premium. Try it on, keep it with Premium. · See Premium"。点 Done 时弹 "Keep the Top hat?"：See Premium / Save without it（只去掉付费那一样，其他保留）。有 Premium 就直接保存。免费款不能做丑。
- ✅ 编辑器的 6 个标签一行放得下，Background 不再被切掉。
- ⬜ 配件画得更夸张、超出果子轮廓（老师："glasses should extend beyond the berry face"）：交给插画，见 ILLUSTRATION-BRIEF H 节。
- ⬜ hi-fi：Blush、Freckles 从 Extras 挪到 Face；"Pineberry" 不是颜色，改成色块后去掉；"Small spots…" 那句只放在 Top 和 Extras 两页。
- ✅ 11/16 再改：点徽章弹出的是一张**徽章页**：中间一个大徽章图标（96 pt 圆角方块，以后换插画），下面小字徽章名、大字内容、一句"怎么得来的"（"Trevor has been here more than anywhere else: 4 times."），再下面是能用的东西（地点一行、一周柱状图、想去的地方列表、正在组的局）。
- ✅ 隐私：徽章页**不给朋友看第三方的名字、不列过去的局**。Hosted 只写次数（正在组局才多一行 "Hosting now · Join"）；Introduced 朋友只看到 "6 friends met each other at Trevor’s plans."，名单只有自己看得到（标 "Only you see the names"，底部 "Friends see the number, not the names."）。
- ✅ 11/17 定：徽章不另设"只给好友看"。用户自己挑的，挑了就代表愿意展示（包括 Best time to catch me）。
- ✅ 11/17：挑徽章页底部 "Based on your plans. Updates on its own."；Edit profile 徽章标题 "My badges · up to 3"；Birthday 行右边灰色标签 "Hidden"；Profile 底部只有一个小链接 "Edit what friends see"。
- ✅ 11/17：试戴付费款时预览下面只写 "Golden raspberry · Premium" + Unlock 按钮。

## 26. 地图筛选（11/17，老师意见）
- ✅ 删掉时间筛选 "Any time"（老师："if there is only going to be three don’t need a time filter"）。列表本来就按 Tonight / Tomorrow 分组。只留距离筛选。
- ✅ **"局多"的规定**：今天的局，在你选的距离范围内、还没结束、你没藏起来、没取消的，**≥ 8 个**，才出现时间窗口胶囊。8 的理由：抽屉半高时列表一屏大约 4 行，8 个就是两屏，开始要翻；地图默认缩放下超过 8 串果子会挤。出现以后这次打开 app 一直留着，不会因为有局结束、数字掉到 7 就消失再出现。
- ✅ Discover 按钮不带数字（老师问 "why is there only three"，数字没单位看不懂）；进 Discover 里写 "Today’s picks · 3 to decide"。旁边按钮改成 "+ Plan"（跟 hi-fi v3 一样）。

- ✅ （11/18）设置里不做 Quiet hours。iPhone 的勿扰 / 专注模式已经管这件事；我们的 "有空到 All night" 本来就允许半夜收到。

## 27. Plans 页（11/18 定，老师意见：邀请多了怎么办、能看多远、对比度）

### 结构
- 🧪 从上到下：标题 Plans + 右上 ＋ → Upcoming | Past 分段 → **Invites 区**（有邀请才出现）→ 按天分组的列表（Tonight / Tomorrow · Wed, Nov 11 / …）。
- 🧪 列表只放你加入的和你发起的局（发起的第二行写 "Hosting · …"）。邀请不进列表，只在 Invites 区。
- 🧪 有多远的局就列多远。不做日历、不做筛选小标签（v2 试过，四层控件才看到内容，太复杂）。

### Invites 区
- 🧪 标题 "INVITES · N"（N = 还没回复的邀请数）。
- 🧪 邀请卡样式（学 Instagram / Facebook 的好友请求）：左边一个圆形 host 果子（不套方块）；下面两个等宽按钮铺满卡片：Join 深色、Not this time 浅色底。
- 🧪 邀请卡文字两行，不折行：第一行局名；第二行 "Lena · Wed 7:30 PM · 0.8 mi"（区标题已经是 Invites，不再写 "invited you"；距离统一写英里，不写 "15 min walk"）。
- 🧪 **1 个邀请**：一张普通邀请卡（谁邀请、几点、多远），卡上直接 Join / Not this time。点卡片本身 → 打开这个局。
- 🧪 **2 个及以上**：叠成一摞。最上面是最早开始的那个，能直接 Join / Not this time；下面露出边（2 个露一层，3 个及以上露两层，不会更多）；下面一行 "N−1 more ›"。
- 🧪 点这一摞的卡片本身或 "N−1 more ›" → 进 **Invites 页**；不在原地展开，所以 Upcoming 永远不会被推下去，100 个邀请时 Plans 页也只多这一张卡的高度。
- 🧪 在最上面那张点 Join 或 Not this time → 它离开，下一个最早的顶上来；N 跟着变；只剩 1 个时变回普通卡；0 个时整个 Invites 区消失。
- 🧪 从邀请点开局的卡片：底部也是 Join + Not this time 两个等宽按钮（不是只有 Join）；Not this time 后卡片关掉。
- 🧪 Invites 页：标题 "Invites"，左上返回；按开始时间排，分 Tonight / This week / Later；每张都能 Join / Not this time；处理完最后一个自动回到 Plans。
- 🧪 局开始了，它的邀请自动消失（不会越积越多）。Not this time 对方不知道（沿用 §17）。
- 🧪 底部 Plans 标签上的红色数字 = 还没回复的邀请数。

### 别的
- 🧪 Upcoming | Past 分段：选中 = 白底 + 深色描边 + 粗体，没选中 = 灰字，不只靠颜色（老师：色弱分不出）。
- 🧪 Past：按月分组、搜索（局名 / 人 / 地点）、长按隐藏（"Others who went still see it."，可撤销）。
- 试过的：v1 顶部最多 2 张卡 + "N more invites"；v2 日期条 + 月历 + 筛选；v3 前半段 "5 个以上收成一行"。左侧导航 "Plans · old version" / "Plans · v2 (calendar)" 还能看。对比页：Invites 放在哪（A 横排 / B 一摞 / C 收件箱），选了 B + C。
- ✅ （11/18）所有给用户看的距离都写英里（"0.8 mi"），不写 "15 min walk / 12 min drive"：邀请卡、局卡片、Directions 弹层、地点页、搜索的 Recent。
