# 网站与 GitHub 同步工作流

网站负责最佳动画播放体验，GitHub 负责公开索引、历史素材、同步记录和可检索数据。

## 什么时候同步到 GitHub

| 网站侧变更 | 是否同步 GitHub | 处理方式 |
| :-- | :-- | :-- |
| 新增一道 LeetCode 动画，并加入 `study_index.js` | 是 | 同步 manifest、按题号索引、按专题索引、同步记录 |
| 修改题号、slug、标题、难度、分类 | 是 | 同步 manifest 和索引，commit 写清楚题号 |
| 删除或下线一道动画 | 是 | 同步 manifest 和索引，并在同步记录里留痕 |
| 只修复某题 `index.html` 的动画步骤、文案、样式 | 通常否 | 只提交网站仓库；GitHub 索引没有变化 |
| 修复动画内容且希望 GitHub 留痕 | 可选 | 手动补 `docs/sync-log.md`，单独提交一条 `docs: log ...` |
| 新增 GitHub 侧 GIF、文章或代码素材 | 是 | 提交对应素材，manifest 会自动补 `repoPath` / `gifPath` |
| 新增 README 精选预览 GIF | 是 | 放到 `docs/assets/previews/`，更新 README，控制在 4 到 6 个精选案例 |

## 审查

在 LeetCodeAnimation 仓库运行：

```bash
node tools/scripts/review-site-changes.js
```

它会比较网站侧 `study_index.js` 和仓库里的 `docs/data/manifest.json`，并给出是否需要同步、需要同步哪些题、建议的 commit message。

## 同步

需要同步时运行：

```bash
node tools/scripts/sync-algomooc-index.js --log
node tools/scripts/validate-manifest.js
node tools/scripts/build-readme.js --write
```

会更新：

- `docs/data/manifest.json`
- `docs/leetcode-animation-index.md`
- `docs/index-by-topic.md`
- `docs/sync-log.md`（仅当 manifest 有新增、移除或变更时追加）
- `docs/data/stats.json` 与 README 的 `当前索引` 标记区（数字段，由 `build-readme.js --write` 注入；勿手改标记区）

## 提交规范

单题新增：

```bash
git add docs/data/manifest.json docs/leetcode-animation-index.md docs/index-by-topic.md docs/sync-log.md
git commit -m "docs: sync lc1234 problem-slug animation index"
```

单题索引修正：

```bash
git commit -m "docs: update lc1234 problem-slug animation index"
```

多题批量同步：

```bash
git commit -m "docs: sync latest LeetCode animation index"
```

只记录一次动画修复：

```bash
git commit -m "docs: log lc1234 problem-slug animation fix"
```

新增 README 精选预览：

```bash
git add README.md docs/README-En.md docs/assets/previews/problem-slug.gif
git commit -m "docs: add lc1234 problem-slug animation preview"
```

## 发布节奏

- 新增题目可以单题一个 commit，方便读者看到仓库持续更新。
- 批量小修复可以攒 3 到 5 个再同步，避免提交噪音。
- 适合展示动画效果的题目再补 README 预览 GIF，不必每题都放；README 保持精选。
- README、脚本、索引结构调整要单独 commit，不要和题目同步混在一起。
