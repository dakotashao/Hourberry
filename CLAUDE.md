# Hourberry prototype · read me first

先读这三份：`PROJECT.md`（背景）、`RULES.md`（产品规则，唯一依据）、`SCREENS.md`（屏幕清单和已知问题）。

## 跟 Dakota 合作
- 用中文说话，简洁直接。要有自己的判断，不同意就直说，不要顺着她。
- 改之前先说清楚要改什么（文案先给她看），她确认了再动手。
- 像交互设计师那样思考：状态、流程、动效、信息层级，不是从插画角度。
- 一次改一件事。改完自己用 tools 验证，再告诉她结果。
- 规则有变化：先确认 → 改 RULES.md → 改原型。原型和 RULES.md 不能互相矛盾。
- 视觉：mid-fi 阶段黑白灰，不要描边线框，用灰色色块分区。不用带表情的团子角色。

## 代码结构（单文件 index.html，约 300KB）
- `S`：全局状态。`S.stack` 是页面栈，`S.ov` 是当前打开的抽屉 / 弹层。
- `A`：生成属性的工具。`A.go(id)` 跳页，`A.act(name)` 触发动作，`A.drawer(id)` 打开抽屉，`A.back` / `A.close`。
- `SCREENS`：每一屏 `{n: 名字, r: () => 渲染}`。`OVERLAYS`：抽屉和弹层。
- `ACT`：动作处理。简单动作写成对象的方法；带参数的写在函数里的 `if(a==="...")` / `a.startsWith("x:")`，新的加在 `if(a==="widen"){` 前面。
- 常用：`go(id)`、`back()`、`openOv(id)`、`refresh()`、`toast(msg, undo, link)`、`render()`。
- `STORIES`：tour 模式里的 7 个故事，每一步有高亮选择器。改了流程要同步改。
- `ORDER` / `ROOTS`：屏幕分组和返回关系。
- `api/`：Vercel 上的评论 notes 和在线状态（Upstash Redis），本地测试时会被 mock。

## 测试（Playwright 已装好）
- `node tools/walk.cjs m01,m04,m15`：截图到 `tools/out/w_<id>.png`
- `node tools/stories.cjs`：跑完 7 个故事，打印 ✓ / ✗。目前 27 个 ✓。
- `node tools/click.cjs name "e:I’m free;;e:Go;;s;;t:Take a seat;;s"`：从 Home 开始模拟点击。`e:` 精确文字，`t:` 包含文字，`c:` CSS，`s` 截图，`w:` 等待，`x:` 执行 JS。

## 发布
- GitHub：dakotashao/Hourberry，main 分支。push 之后 Vercel 自动部署到 https://hourberry-five.vercel.app ，大约 1–2 分钟。
- 只有 Dakota 同意了才 commit 和 push。commit 信息用英文，一句话说清楚改了什么。
