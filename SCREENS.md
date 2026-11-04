# Hourberry · 屏幕清单和已知问题

ID 就是 index.html 里 `SCREENS` / `OVERLAYS` 的 key。截图：`node tools/walk.cjs <id,id>`。

## 已知问题（要"make sense"的清单，按优先级）
1. **Picks 卡片和详情页重复**：Picks 卡片点了打不开任何东西；M 04 的内容又和卡片几乎一样。按 RULES §9 改成卡片可以展开，加入后才进 plan 页（M 10 / M 13）。
2. **加入后进入的群聊里已经有"你"发的消息**（M 13 的 "Which entrance?"）。刚加入的人应该看到干净的开头，或者先落在 plan 页。
3. **Make a plan 改不了结束时间**（M 05，"ends by 9" 只是文字）。
4. **Picks 不排除撞时间的局**：例如已加入 Zine fair 7:30，还会推荐 Tacos 7:00。
5. **People 页太乱**（M 15）：同一个人出现两次（Ren、Kai），右侧按钮有 5 种，分组标签不知道管哪块，搜索范围过大。按 RULES §10 重做。
6. **Squeeze in、Groups 入口、个人页的分组标签**都还没做（M 16、M 19、M 18）。
7. **加入前没有"谁会看到你"那一行**（RULES §3）。
8. **队友 AI 方案和原型的不同**：见 Figma prototype 页 HIfi 框的 "HiFi 基础 · 规则 v1"。主要分歧：
   - 右滑加入（不同意）
   - 加入后 2 秒问通知（会盖住 Undo）
   - 距离一律写分钟（同意）
   - 地点默认不用刚跳过的那张卡（同意，原型已改）
9. **测试入口**：peer test 需要一个从干净 Home 开始的链接，不进 story 模式。

## 屏幕
**新用户 / 登录**：o1 Welcome · o2 Create account · o3 Verify · o4 Profile · o5 What you’re into · o6 Permissions · o7 Add your first people · o8 Welcome in · s1–s3 Sign in / Forgot · loc、notif（iOS 授权弹窗）

**Home**：m01 Home · map（Plans / Spots 两层，底部抽屉）· srch 搜索（地点、区域、链接、照片）· free I’m free 抽屉 · tpfree 选结束时间 · aud 谁能看到你 · grp 编辑分组 · pq:Jess 有空的朋友 · plus 创建菜单（目前没有入口，"+ Plan" 直接进 m05）
- Picks（"Picked for you"）是 m01 上 I’m free 之后的状态，不是单独的 ID

**Plan**：m04 Plan · tonight（加入前）· m04l Plan · Saturday（只定了日期）· m10 Plan · joined（含留座）· cant / cancel · share · dir
**发起**：m05 Make a plan · tpplan 选开始时间 · m05b Sent · m05v Pick a time（只定日期的 plan 一起挑时间）
**地点**：m06 Place · m07 Save a place
**Plans tab**：m08 Plans（host 提醒卡）· m09 Invite inbox · m11 After the hang（已并入 recap）
**Chats**：m12 Chats · m12a Archived · m13 Plan chat · m13m Plan map · m13i Chat settings · attach · leave · m14 Friend chat · m14b Bingo
**People**：m15 People · m16 Add people（Tap / QR code / Contacts）· m16c Invite contacts · m16b Added · m17 Morning recap · m18 Person · pmore · m19 Groups · m19n New group
**Account**：m20 Account · m20b Edit profile · m20t What you’re into · m20c Who sees you by default · m20p Premium · m20pb Badge · m21 Notifications · logout
**网页**：g1 Invite link (web) · g2 Invite in the app · sms Text invite

## Stories（tour 模式）
1. I’m free tonight. Find me something to join.
2. Nothing fits. I’ll start my own plan.
3. I just met someone. Add them before I forget.
4. Busy now. Save a place for when I’m free.
5. Plans changed. I can’t make it.
6. Morning after. How was it, and who do I want to see again?
7. We had fun. Where do we both want to go?

改了流程要同步改 `STORIES`，然后跑 `node tools/stories.cjs`。现在应该有 27 个 ✓。
