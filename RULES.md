# Hourberry · 产品规则

所有屏幕都照这份做。✅ = 原型里已经是这样；⬜ = 还没做；❓ = 还没定。
改规则要先和 Dakota 确认，再改这份文件，最后改原型。

## 1. 结构
- ✅ 主角是 plan：卡片、地图 pin、列表都是 plan。人只出现在 plan 上（谁 host、谁在）。
- ✅ 地图上只有 plan，不显示人的实时位置。有空的人只在地图右边那一列果子里看。
- ✅ 导航：Map、Plans、Chats、People 四个 tab；Account 在头像后面。
- ✅ 只能用 app 加入。网页链接是用来下载 app 的。

## 2. 有空：拆成两件事
- ✅ 找局和"告诉朋友我有空"分开，不再是同一个按钮。
- ✅ 找局 = Home 主按钮 "Discover"（见 §9a）。先选有多少时间（How long do you have?），然后看推荐。私下看，不会让任何人知道。
- ✅ 告诉朋友我有空 = 地图右边竖着的一列（G 方案，11/10 定）：最上面是你的果子带 "+"，下面叠 3 个有空朋友的果子，再下面 "+N"。
  - 点朋友那叠 → 展开成列表 "N free now"：每行 果子 · 名字 · till 9；第一行是你：右边黑色小按钮 "I’m free too"，开了之后变成灰字 "till 8:40"。点朋友 → 他的小卡；点外面或 ✕ 收起。
  - 点你的 "+" → "How long are you free?"：1 / 2 / 3 hr / Until…，实时显示 "Free till 8:40 PM · 2 hr"，"Visible to" 一行，"They see you’re free now, not for how long."，按钮 Go。
  - Go 之后：toast "Friends can see you’re free"，你的果子变成有圈的，列表里是 "till 8:40"。再点 → 按钮变 Update，下面 "Stop showing I’m free"。
  - ⬜ Discover 的抽屉还是旧的 Till 8 / 9 / 10，下一步换成同一个时间 sheet。
- ✅ 点这串果子本身 → 打开 Free now 列表（谁有空、发消息、一起约）。
- ✅ Discover 看完没有加入时，最后一屏有 "Nothing fits? Let friends know you’re free"，点了同样是挤进 free 那一串。
- ✅ "free" 只表示"朋友能看到我有空"；找局永远叫 Discover。
- ✅ This weekend 保留。
- ⬜ Discover 不推荐和你已加入的 plan 撞时间的局。

## 3. 谁能看到 plan、谁收到通知
- ✅ 只给朋友看；host 可以打开 "Friends can bring friends"，让朋友的朋友也能看到和加入（显示 "via Jess"）。
- ✅ "谁能看到"（分组 + 排除的人，被排除的人永远看不到）和"公开 / 不公开"是两个独立设置。
- ✅ 公开（On the map）：出现在所选朋友的 Home；点过 I'm free 的人收到一次弹窗；其他人只看到一个安静的小圆点，不推送。
- ✅ 不公开（A few who fit）：不上地图，只发给有空并且合适的朋友。
- ✅ Make a plan 的 Send 上方写清楚谁会看到、谁会收到通知。
- ⬜ 对一个人的四个动作，从轻到重。任何动作都不强制别人加入或退出 plan：

| | Mute | Remove friend | Restrict | Block |
|---|---|---|---|---|
| 对方会不会知道 | 不会 | 不通知，但可能慢慢发现 | 不会 | 会察觉 |
| 好友关系 | 保留 | 解除，双方都可以再加 | 保留 | 解除，他不能再加你 |
| 私信 | 正常，只是不推送 | 旧聊天留着，不能发新消息 | 他那边显示正常发出，你收不到 | 发送失败 |
| 你的 I'm free | 他照常看得到 | 看不到 | 看不到 | 看不到 |
| 你 host 的局 | 他照常看得到 | 看不到；开了 Friends can bring friends 可能通过 via 看到 | 看不到 | 看不到，包括 via |
| 共友的局 | 正常 | 正常 | 正常 | 正常 |
| 提醒你 | 不提醒 | 不提醒 | 卡上一行 "Taylor is going · you restricted / blocked them" + 点 Join 弹窗确认 + 他后来加入时私下提醒一次 | 同左 |
| 你的 Picks | 正常 | 正常 | 不推荐有他的局 | 不推荐有他的局 |

  - 被 Restrict 的人永远不会知道。
  - 加入时的弹窗："Taylor is going. You'll both be in this plan and see each other in the chat." [Join anyway] [Cancel]
  - Remove friend 之后，双方都不会再出现在对方的 People you may know 里。

## 4. 加入
- ✅ 动词只有一个："Join"。点一次就加入，底部出现 Undo。
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

## 7. Recap
- ✅ 只有一次，第二天早上：先问怎么样，再看认识的人。

## 8. 地点：Want to go / Save
- ✅ Want to go：跟着你默认"谁能看到你"的设置；点了以后提示谁能看到。
- ✅ Save：只有你自己能看到。
- ✅ Bingo 只算 Want to go，私人收藏不会被看到。
- ✅ 从截图存地点：搜索 → 相机图标。
- ✅ Plan here 要带上这个地点进 Make a plan。

## 9a. 地图和 Discover 的分工
- ⬜ 地图：公开的局（On the map），被允许的朋友都看得到，自己逛。
- ⬜ Discover：只放不公开的局（A few who fit），每次 3 张，只推给有空、合适的人。地图上已有的局不进 Discover。（原型里的推荐还是 Tacos / Climbing 这些地图上的局，要换成不公开的局。）
- ✅ Discover 页标题 "Just for you"，下面 "Quiet plans till 9 · Not on the map"。
- ⬜ 每张都必须有理由行，这是这类局的钩子。

|          | 地图上的局             | Discover 里的局                 |
|----------|------------------------|---------------------------------|
| 谁决定给谁看 | 房主选分组             | 系统挑有空、合适的人            |
| 房主心态   | 谁来都行               | 想见某类人，但不想直接问        |
| 规模       | 偏大，4–8 人           | 偏小，2–3 人                    |
| 没人加入   | 大家都看得到           | 没人知道                        |
| 对应 persona | Jess、Nina           | Mia                             |

- ❓ Make a plan 里 "A few who fit" 改得更有温度，例如 "Quietly, to a few who fit"。

## 9b. 加入（Team 8 测试后，11/4）
- ✅ 按钮叫 "Join"，不再叫 Take a seat（会被误解成选座位）。
- ✅ 在 Discover 里点 Join：留在这张卡上，卡上出现 "✓ You’re in"，你的果子坐进空位；按钮变成 "Open plan chat"，自己决定什么时候进群聊。底部 Undo。
- ✅ 从别处加入：先到 plan 页（M 10），不直接进群聊。
- ⬜ 加入时不写留言（去掉 Join with a note 这一步）。

## 9. Plan 卡片（加入前只有这一个视图）
- ⬜ 加入前只有这张卡。Picks、地图 pin、列表、邀请打开的都是它（pin / 列表 / 邀请从底部升起）。原 M04 删掉，不做单独的详情页。
- ⬜ 卡上放"会让你说不去"的信息；点开卡片放"决定去了才用得上"的信息。
- ⬜ 一张卡一次只有一个主视觉：默认人视图，右上角切到地图视图，下面的信息不动。切换状态在这一组卡里保持。
- ⬜ 左右滑只是上一张 / 下一张，卡还在。Skip = 不感兴趣，这张卡拿掉。加入只能点 Join。

卡上必须有：
- 谁在：果子，每颗下面写名字。
- 做什么、在哪：标题。
- 几点到几点；超出你有空的时间标 "Runs past 9"。
- 多远：用时间，例如 "8 min walk"。
- 座位："2 of 5 seats left" / "Full · waitlist open" / 必须凑满的写截止时间。
- 主按钮 Join，加 Skip。
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

## 10. 头像
- ⬜ 每个人的头像都是一颗果子，不用照片（老师：照片会毁掉整体感觉）。名字永远写出来。
- ⬜ 头像编辑器：在 onboarding 和 Edit profile 里，选果子的形状、颜色、表情、配件（眼镜、帽子）、背景色。要抽象，不做头发这类太写实的东西。
- ⬜ 两种大小：大号（卡片、plan 页）是完整角色，名字写在果子下面；小号（地图 pin、列表、有空那一列）只留形状，里面写首字母。
- ⬜ 点 Join：你的果子落进空位，所有人的果子挤成一堆，然后过渡到 plan 页。plan 页上就是这堆果子，像乐队合照。

## 11. 加入后的 plan 页
- ⬜ 地图上每个人一条线连到目的地，一眼看出谁快到了、谁会迟到（老师 Nov 4 主动提的）。

## 12. 加载页
- ⬜ 几颗果子聚成一串小点，下面写 "Got an hour? Make it ours."

## 13. People 页（还没做）
- ⬜ Close friends 置顶；其他人有空的排前面，再按最近一起出去的时间排；每个人只出现一次。
- ⬜ 去掉顶部的分组标签条；People you may know 和邀请通讯录移进 Add。
- ⬜ 右上角 Add 是一个小菜单：
  - Squeeze in：大家一起晃手机互相添加（可以多人），晃完先确认 "Ren and Theo found · Add both?"；同一页下面放二维码，另有一个按住按钮的方式给不方便晃的人。
  - From contacts：On Hourberry（Add）→ You may know（Add）→ Invite（Text）。已邀请的显示 "Sent · Resend"。
  - Share invite link：直接打开系统分享面板。
- ⬜ Groups 编辑页：从 People 页底部 "Groups · N ›" 进入，也从"谁能看到你"抽屉的 Edit 进入（同一个页面）。可以新建、改名、加减人、删除。
- ⬜ 个人页显示这个人的分组标签，可以直接加或去掉。
- ⬜ 个人页的 ⋯ 菜单：Mute → Remove friend → Restrict → Block（规则见 §3）。
- ✅ 新用户 0 个朋友时：点 I'm free 先引导加人或探索地点。

## 14. 其他已定
- ✅ Premium：头像右上角一颗星，点一下有说明。
- ✅ 离开群聊等于退出这个 plan。
- ✅ 新用户的推荐不能是陌生人，至少是朋友的朋友，并显示关系。
- ✅ 通知设置：Plans while I’m free（弹窗）、New plans from friends（小圆点，默认关）、Morning recap。
- ✅ 搜索可以搜区域（Hollywood 等），显示 "5 plans in Hollywood"。

## 15. Home 抽屉里的 plan 列表（11/4 定）
- ✅ 不按时间筛选（去掉 Now / Tonight / Week），改成按时间分组，一直往下滑：You’re going → Fits your free time（没开 I’m free 时叫 Starting soon）→ Later tonight → This week。
- ✅ 每一行：左边果子串（最多 3 颗，多了合成 +N）→ 标题 → 🕒 几点到几点 → 📍 多远（一律写分钟）→ 谁在 + 剩几个位置。
- ✅ 超出你有空的时间，时间后面加粗写 "Runs past 9"；只剩 1 个位置时加粗。
- ✅ 在家办的 plan 只写区域和大概几分钟（"Highland Park · ~15 min drive"），加入后才给地址。
- ✅ 列表里不放留言，留言在 plan 卡里看。
- ✅ 列表行不放 Join：点一行打开 plan 卡，在那里加入。
- ✅ Plans 和 Spots 两个图层都显示有空的那一列果子：这是"有人很有空"的信号，点开可以直接约他们。
