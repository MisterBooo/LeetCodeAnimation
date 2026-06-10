# 网站索引同步说明

本仓库保留 LeetCodeAnimation 的历史内容，并从网站侧同步当前 LeetCode 动画索引。

## 数据来源

- 网站源文件：`web/public/leetcode-animation/study_index.js`
- 仓库数据：`docs/data/manifest.json`
- 仓库索引：`docs/leetcode-animation-index.md`

## 同步命令

默认脚本会读取相邻目录中的 AlgoMoocOJ 项目。先审查：

```bash
npm run review:site
```

确认需要同步后再执行：

```bash
npm run sync
npm run validate
```

如果项目目录不同，可以显式指定源文件：

```bash
node tools/scripts/sync-algomooc-index.js --source /path/to/study_index.js
```

## 字段约定

- `status=site-animation`：网站侧已有对应动画页面。
- `repoPath`：本仓库中已有的历史题解目录，统一位于 `problems/` 下；如果暂未匹配到，保持 `null`。
- `gifPath`：本仓库中已有的 GIF 预览；如果暂未匹配到，保持 `null`。
- `siteUrl`：网站侧题目页面地址。

历史题目素材统一放在 `problems/` 目录下。例如两数之和的历史素材路径是 `problems/0001-Two-Sum`。不要再把题目目录散放在仓库根目录。

后续新增或修改网站动画后，重新运行同步脚本即可更新仓库索引。

## 审查规则

更完整的判断规则见 [`docs/sync-workflow.md`](sync-workflow.md)。

- 新增题、改题号、改 slug、改标题、改难度、改分类：同步到 GitHub。
- 只修复某个 `index.html` 的动画步骤、文案或样式：通常只提交网站仓库。
- 如果一次动画修复值得公开留痕，可以手动补 `docs/sync-log.md` 并单独提交。

## README 约定

仓库首页只放项目定位、精选动画预览、索引位置和同步方式。完整题目表放在 `docs/leetcode-animation-index.md`，避免 README 过长，也方便脚本重复生成。

README 预览 GIF 放在 `docs/assets/previews/`，建议控制在 4 到 6 个有代表性的题目。新增网站动画后，只有当这道题足够适合展示项目效果时，才同步补一段短 GIF 到 README。
