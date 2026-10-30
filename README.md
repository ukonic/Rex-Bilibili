# Rex-Bilibili

用于 Rex 的哔哩哔哩视频模块。

## 推荐导入

- 最新版固定链接：
  `https://raw.githubusercontent.com/ukonic/Rex-Bilibili/main/Rex-Bilibili-Video.js`
- v0.2.7 固定版本：
  `https://raw.githubusercontent.com/ukonic/Rex-Bilibili/main/versions/Rex-Bilibili-Video-v0.2.7.js`

`Rex-Bilibili-Video.js` 会始终指向当前发布的最新版，适合在 Rex 中长期使用同一个导入链接；所有带版本号的 JS 文件统一存放在 `versions/` 文件夹，便于回退和排查。

## v0.2.7 主要功能

- 热门、排行榜、每周必看、入站必刷、分区和搜索。
- BV、AV、b23 短链接、多 P、合集和弹幕。
- 会员 Cookie 授权与 DASH/合并流画质诊断。
- 视频详情显示 UP 主 MID，点击 UP 主头像查看过往投稿。
- 修复搜索与继续观看详情缺少 UP 主头像、剧照的问题。
- 搜索详情和继续观看详情直接预加载最多 8 个 `[UP主投稿]` 视频。
- 保留不依赖人物回调的“查看该 UP 主过往投稿”备用入口。
- 空间接口和动态接口同时被风控时，按 UP 主名称搜索并严格校验 MID。
- 错误码、诊断卡片和风控回退，便于定位问题。

## Cookie 安全

模块源码不包含任何账号 Cookie。Cookie 仅应填写在你自己的 Rex 模块全局参数中，不要提交到 GitHub、聊天或截图。
