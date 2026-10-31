# Rex-Bilibili

面向 Rex 播放器的哔哩哔哩视频模块，覆盖内容发现、搜索、详情、播放资源、弹幕和 UP 主投稿浏览。

## 推荐导入

- 最新版固定链接：
  `https://raw.githubusercontent.com/ukonic/Rex-Bilibili/main/Rex-Bilibili-Video.js`
- v0.2.7 固定版本：
  `https://raw.githubusercontent.com/ukonic/Rex-Bilibili/main/versions/Rex-Bilibili-Video-v0.2.7.js`

`Rex-Bilibili-Video.js` 会始终指向当前发布的最新版，适合在 Rex 中长期使用同一个导入链接；所有带版本号的 JS 文件统一存放在 `versions/` 文件夹，便于回退和排查。

## 功能概览

- 热门、排行榜、每周必看、入站必刷、分区和搜索。
- BV、AV、b23 短链接、多 P、合集和弹幕。
- 会员 Cookie 授权与 DASH/合并流画质诊断。
- 视频详情显示 UP 主 MID，点击 UP 主头像查看过往投稿。
- 视频详情支持封面、剧照、标签、分 P、合集、UP 主投稿和相关推荐。
- UP 主空间接口受限时，按既定回退链路获取并校验投稿归属。
- 错误码、诊断卡片和风控回退，便于定位问题。

## 使用说明

1. 在 Rex 中导入最新版固定链接。
2. 需要会员画质时，在模块全局参数中填写自己的 B 站 Cookie。
3. 通过推荐、分区、搜索或 BV / AV 入口打开视频。
4. 播放时模块会根据视频与账号权限实时获取可用资源。

## 兼容与限制

- 实际画质取决于视频、账号权限、Cookie 状态和 Rex 的播放能力。
- 地区限制、付费内容及其他平台权限要求必须由账号本身满足，模块不会绕过限制。
- B 站部分接口可能触发临时风控；无法取得内容时，模块会返回包含阶段和诊断 ID 的提示。
- 更新模块后，旧详情或继续观看缓存可能需要重新打开视频才能刷新。

## Cookie 安全

模块源码不包含任何账号 Cookie。Cookie 仅应填写在自己的 Rex 模块全局参数中，不要提交到 GitHub、聊天、截图或日志。

## 仓库结构

- `Rex-Bilibili-Video.js`：推荐导入的当前版本。
- `versions/`：带版本号的历史发布文件，用于回退与问题复现。
- `README.md`：模块定位、使用方法与长期约束。
