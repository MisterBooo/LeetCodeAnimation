# README 二期改造 · diff 说明

> 状态：**草稿待过目**。改动只落在 `docs/readme-revamp/` 与 `docs/HOW-TO-INTERACT.md`，
> **未触碰线上 `README.md`，未 push 远端**。你给「发布」原话后才执行下方「发布步骤」。

## 一句话

保留现有工程底座（manifest / 同步脚本 / 索引体系）完全不动，在 README **外层加装一层转化层**
（徽章按钮 / 近况区 / GIF 直达 / 折叠维护块 / Star 区），并把所有**会变的数字交给脚本接管**。

## 改了什么（草稿 vs 线上 README）

| # | 区块 | 线上现状 | 草稿改造 | 性质 |
| :-- | :-- | :-- | :-- | :-- |
| 1 | 第一屏 | 只有一个 stars 社交徽章 + 三条文字链接 | 加 **last-commit / 题目数** 徽章 + **三个按钮式徽章**（🎬 在线交互版 / 📚 按专题刷 / 🤖 AI 私教小欧），全部带 `utm_source=github` | 转化层（人手） |
| 2 | 近况区 | 无 | 新增「🚧 2026 大版本进行中」：三语言代码、AI 私教小欧、吴师兄声线语音、299 题质量清算 —— 只写已上线/进行中 | 转化层（人手） |
| 3 | GIF 预览 | 4 张 GIF 有链接但**无 UTM** | 4 张 GIF 链接全部补 UTM；区下加一行「↑ 网站版还能单步、回看、变速、听讲解」+ 直达按钮 | 转化层（人手） |
| 4 | 当前索引 | 手写表格（256/71/160/25 是手打的数字） | 改为 `<!-- LCA-AUTOGEN:STATS -->` 标记区，由 `build-readme.js` 注入；顶部题目数徽章读脚本产出的 `stats.json` | **数字段（脚本接管）** |
| 5 | 数字口径 | 无 | 新增口径说明：256=本仓库已同步 LeetCode 题动画；299=全站动画总数（含进阶/专题，来自站内 content-stats），与 `[stats-single-source]` 对齐，两者均禁手写 | 转化层 + 口径 |
| 6 | 运维内容 | 「同步方式 / 目录 / 仓库与网站关系」平铺占大半页 | 整段折叠进 `<details>「🛠 维护者：同步与数据说明」` | 降权（人手） |
| 7 | 末尾 | 简短反馈段 | 换成 **Star 区**：star-history 曲线图 + 真诚引导 + 「内容持续同步自 algomooc.com」承诺 | 转化层（人手） |

## 转化层 / 数字段的边界（关键设计）

- **数字段**＝README 里 `<!-- LCA-AUTOGEN:STATS START/END -->` 之间的「当前索引」表 + 顶部题目数徽章。
  - 表格由 `tools/scripts/build-readme.js --write` 注入，数据源 `docs/data/manifest.json`（脚本据网站侧 `study_index.js` 实算）。
  - 顶部徽章用 shields `dynamic/json` 直接读 `docs/data/stats.json` 的 `$.count`，**连数字字符串都不出现在 README 里**。
  - 标记区外脚本一律不碰 —— 转化层和数字段彻底解耦，改文案不会动数字，增删题不用改 README。
- **转化层**＝标记区之外的一切（徽章文案、近况、GIF、折叠块、Star 区），人手维护，自由改。

## 新增 / 改动的工程文件

| 文件 | 说明 | 现在在哪 |
| :-- | :-- | :-- |
| `tools/scripts/build-readme.js` | **升级**：旧版只 print 到 stdout；新版加 `--write`（注入 README 数字段 + 写 `stats.json`）/ `--check`（数字段过期 exit 1，可挂收尾闸门）。默认无参仍是旧行为，向后兼容。 | 草稿放 `docs/readme-revamp/build-readme.js`，发布时覆盖 `tools/scripts/build-readme.js` |
| `docs/data/stats.json` | 脚本实算的计数（count/easy/medium/hard/siteTotal），供 README 徽章读 | 发布时由 `build-readme.js --write` 生成 |
| `README.md` | 用 `README.draft.md` 内容替换 | 草稿在 `docs/readme-revamp/README.draft.md` |
| `docs/HOW-TO-INTERACT.md` | 维护者互动备忘（新交付） | 已写入 `docs/HOW-TO-INTERACT.md` |

> `siteTotal`（即 299）当前留 `null`：本仓库 manifest 只覆盖已同步的 LeetCode 子集，全站总数来自站内
> content-stats 单一数据源，待 `[stats-single-source]` 落地后从网站侧同步回填，**不在 README 手写**。

## 发布步骤（你说「发布」后我才执行）

```bash
cd /Users/wuzhibo/Desktop/Claude/LeetCodeAnimation-github

# 1. 落地工程底座升级
cp docs/readme-revamp/build-readme.js tools/scripts/build-readme.js

# 2. 用草稿替换线上 README，并由脚本注入数字段 + 生成 stats.json
cp docs/readme-revamp/README.draft.md README.md
node tools/scripts/build-readme.js --write
node tools/scripts/build-readme.js --check   # 应输出「数字段最新」

# 3. 同步 docs/sync-workflow.md 增补一行 build-readme 步骤（可选，发布时一并）
# 4. 提交并（经你确认后）push
git add README.md tools/scripts/build-readme.js docs/data/stats.json docs/HOW-TO-INTERACT.md docs/readme-revamp/
git commit -m "docs: README 二期转化层改造（徽章/近况/GIF直达/折叠/Star区）+ 数字段脚本接管"
# git push   # ← 只有你再次给原话才推远端
```

## 待你拍板的点

1. **三个按钮的落点 URL** 是否正确：🎬→`/leetcode-animation`、📚→`/topics`、🤖→`/ai-tutor`（均已确认路由存在）。
2. **AI 私教对外是否就叫「小欧」**（与站内一致），README 里这样写是否 OK。
3. **299 口径**：近况区写「299 题全量质量清算（进行中）」是否准确，或要改成别的措辞/数字。
4. 顶部题目数徽章依赖 `docs/data/stats.json` 在 `master` 分支可被 raw 读取 —— 发布后首次 `--write` 提交才生效（之前会短暂显示 `invalid`）。
