# 这个仓库怎么用（大白话备忘）

> 给吴师兄本人和未来任何接手会话看。一句话：**网站是源头，这个 GitHub 仓库是它的公开索引和门面。**
> 网站上新增/改了动画 → 跑同步脚本，仓库的索引和数字就自动更新；README 的门面文案人手维护。

## 1. 三件事各归谁管

| 东西 | 谁说了算 | 怎么变 |
| :-- | :-- | :-- |
| 动画内容本身（题目、步骤、语音） | **网站** algomooc.com | 在网站侧改，GitHub 不直接编辑动画 |
| 题目索引、数量、专题分类 | **同步脚本**（据网站侧 `study_index.js` 实算） | 跑 `npm run sync`，别手敲数字 |
| README 的门面（徽章、近况、Star 区、文案） | **人手** | 直接改 `README.md` 标记区**之外**的部分 |
| README 里的数字（题数/难度分布） | **脚本**（`build-readme.js`） | 跑 `--write` 注入，`<!-- LCA-AUTOGEN:STATS -->` 标记**之间**别手改 |

## 2. 网站加了新题，怎么同步到这里

在仓库根目录（`/Users/wuzhibo/Desktop/Claude/LeetCodeAnimation-github`）依次跑：

```bash
npm run review:site     # 先看：网站侧有哪些题需要同步，会建议 commit message
npm run sync            # 同步：更新 manifest / 题号索引 / 专题索引 / sync-log
npm run validate        # 校验：manifest 没问题
node tools/scripts/build-readme.js --write   # 把 README 数字段 + stats.json 刷新
git add docs README.md
git commit -m "docs: sync 最新 LeetCode 动画索引"
```

> 单题新增就单题一个 commit（读者能看到仓库持续更新）；批量小修复攒 3~5 个再同步。
> 详细规则见 [`docs/sync-workflow.md`](sync-workflow.md)。

## 3. 想改 README 门面（徽章 / 近况 / 文案），怎么发布

1. **先在 `docs/readme-revamp/` 出草稿**，不直接动线上 `README.md`。
2. 吴师兄过目，给「**发布**」原话。
3. 才执行 `docs/readme-revamp/CHANGES.md` 里的「发布步骤」（替换 README → 脚本注入数字 → commit）。
4. **push 远端要单独再给一次原话** —— 默认只在本地 commit，不动 `github.com/MisterBooo/LeetCodeAnimation`。

> 铁律：这个仓库**不在没拿到「发布」原话时 push**。所有改动先落本地分支等过目。

## 4. README 里那两个数字（256 / 299）是什么意思

- **256**：已**同步到本仓库**的 LeetCode 题动画数。脚本据网站侧 `study_index.js` 实算，写进 `manifest.json` 和 `stats.json`，**禁止手写**。
- **299**：**algomooc.com 全站**动画内容总数（含进阶题、专题，比本仓库的 LeetCode 子集大）。口径来自站内 `content-stats` 单一数据源；本仓库的 `stats.json` 里 `siteTotal` 字段留给它回填，同样**禁止手写**。
- 一句话：**两个数字都由脚本管**。增删题只要跑同步脚本，README 全站数字自动对上，不用回来手改。

## 5. 「299 役」收官后，新题怎么并进来

299 役（全站动画质量清算）收尾、网站侧题目列表定型后：

1. 确认网站侧 `study_index.js` 已是最终列表。
2. 跑第 2 节那套同步流程 —— `manifest` / 索引 / 数字会一次性对齐到最终态。
3. 若有特别适合展示的新题，再往 `docs/assets/previews/` 补 1~2 张精选 GIF，更新 README GIF 区（README 预览保持 4~6 张精选，不必每题都放）。
4. 站内 `content-stats` 给出全站总数后，把 `stats.json` 的 `siteTotal` 回填，README 口径里的 299 即对齐到真实全站数。

## 6. 红线（别犯）

- ❌ 不在 `<!-- LCA-AUTOGEN:STATS -->` 标记之间手敲数字。
- ❌ 不在没拿到「发布」原话时 push 这个仓库。
- ❌ 不直接编辑由脚本生成的 `manifest.json` / `leetcode-animation-index.md` / `index-by-topic.md` / `stats.json`（改网站侧源头再同步）。
- ✅ 门面文案（标记区外）随便改，改完按第 3 节走发布流程。
