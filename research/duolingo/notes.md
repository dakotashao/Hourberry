# Duolingo · Profile 和 Avatar（2026-11-11 存）

来源：Mobbin 上的 Duolingo iOS，一共 572 屏。这次只完整存了和 profile、avatar 有关的 flow；全部屏幕只存下来一部分，Mobbin 截图有大小限制，有些页没存上。

## 文件
| 文件 | 内容 |
|---|---|
| `flow-creating-avatar.png` | Creating an avatar，15 屏：空头像 → 编辑器（肤色、身材 → 眼睛颜色 → 表情 → 发色、发型 → 眼镜 → 背景色）→ 回到 profile |
| `flow-profile.png` | Profile，8 屏：从 ⋯ 菜单进 profile → 第一次弹 "Create your avatar!" → 空 profile → 完整 profile |
| `flow-editing-profile.png` | Editing profile，3 屏：头像 + CHANGE AVATAR + 表单 |
| `flow-user-profile.png` | 看别人的 profile：搜索 → 对方主页（Follow、对比图表）→ 底部 Report / Block |
| `flow-completing-profile.png` | 完成 profile：首页卡片 "Finish your profile! 1 step left" → 自定义用户名（重名时给建议）→ "Looking good!" |
| `all-01` 到 `all-10.png` | 全部屏幕的一部分，按 Mobbin 顺序，每张右上角有编号 |
| `ref-*.png` | Dakota 截的别家 Edit profile：Bump、小红书、TikTok、Instagram、微信 |

## Duolingo 的 avatar 编辑器怎么做的
1. **上半屏是大的实时预览**，下半屏是选项。每改一下，上面马上变。
2. **中间一排图标 tab** 切换类别：身体、脸、头发、眼镜、衣服、背景。不写字，只用图标。
3. **每个类别分两层**：先选颜色（一排圆点），再选样式（3 列方块网格，每格就是那个样式戴在角色上的样子）。
4. 右上角 **DONE**，左上角 ×。没有"保存"这种多余步骤。
5. **入口很温柔**：第一次进 profile 弹一个小 sheet "Create your avatar!"（3 个示例头像 + START / MAYBE LATER）。不做也行，profile 上的头像位置显示一个虚线轮廓 + "+"。
6. **完成 profile 用"还差一步"推着走**：首页卡片 "Finish your profile! 1 step left"，做完给一个庆祝屏 "Looking good!"。
7. **Edit profile 很简单**：头像 + CHANGE AVATAR，下面就是表单（名字、用户名、密码、邮箱、手机）。

## Duolingo 的 profile 页
- 顶部一整块彩色背景，上面是大头像（就是 avatar 编辑器里选的背景色）。
- 名字、@用户名 · 加入时间；一排三个数字（Courses / Following / Followers）。
- ADD FRIENDS 按钮 + 二维码。
- Overview：4 个数字格（连续天数、XP、联赛、前三次数）。
- Friend streaks、徽章、成就。
- 右上角齿轮进设置。看别人的 profile，最下面是 Report user / Block user。

## 别家 Edit profile 的共同点（Dakota 的截图）
- 头像在最上面居中，下面一行 "Edit picture or avatar"（Instagram、TikTok 都是"照片或 avatar 二选一"）。
- 下面是一列"标签 · 值 ›"：Name、Username、Bio、Pronouns 是大家都有的；Gender、Region、College、Links 看产品。
- Bump 的 profile 很有个性：大头像像贴纸一样贴着，名字用不同字体，旁边漂着小数据（6 views、1 intro），下面直接是朋友列表，底部两个圆按钮（分享、二维码）。
