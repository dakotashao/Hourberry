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

## 11/17 · 第二次提交
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
