# LeetCodeAnimation

[![GitHub stars](https://img.shields.io/github/stars/MisterBooo/LeetCodeAnimation?style=social)](https://github.com/MisterBooo/LeetCodeAnimation)

用动画把 LeetCode 题解过程拆开看。

相比只给代码的题解，这个项目更关注“过程”：指针怎么移动、状态怎么转移、递归怎么展开、边界为什么成立。仓库保留早期 GIF、文章、代码和图解素材，同时同步网站侧持续维护的 LeetCode 动画索引。

如果你觉得这个项目有帮助，欢迎 Star 支持持续更新。想看更完整的动画播放体验，建议打开网站版本；GitHub 更适合查索引、看历史素材和跟踪同步记录。

[网站版动画](https://www.algomooc.com/leetcode-animation) · [题目索引](docs/leetcode-animation-index.md) · [结构化数据](data/manifest.json)

## 项目特点

- **动画题解**：很多题目保留了 GIF 或分步动画素材，适合先看清算法过程，再回到代码。
- **256 道 LeetCode 索引**：当前网站侧动画列表已同步到仓库，覆盖数组、链表、栈、二叉树、动态规划、图论、回溯、贪心、二分等常见专题。
- **历史内容沉淀**：早期题解文章、代码和动画文件继续保留，便于查找旧版本讲解和素材。
- **结构化数据**：`data/manifest.json` 可被脚本读取，用来生成索引、检查链接或做二次整理。
- **持续同步**：网站侧新增或调整动画后，可以通过脚本同步回 GitHub，仓库不是一次性的静态归档。

## 当前索引

| 项目 | 数量 / 位置 |
| :-- | :-- |
| LeetCode 动画题数 | 256 |
| 简单 | 71 |
| 中等 | 160 |
| 困难 | 25 |
| 数据文件 | [`data/manifest.json`](data/manifest.json) |
| Markdown 索引 | [`docs/leetcode-animation-index.md`](docs/leetcode-animation-index.md) |
| 专题索引 | [`docs/index-by-topic.md`](docs/index-by-topic.md) |
| 同步记录 | [`docs/sync-log.md`](docs/sync-log.md) |
| 网站路径 | [`https://www.algomooc.com/leetcode-animation`](https://www.algomooc.com/leetcode-animation) |

## 内容地图

| 想找什么 | 从这里开始 |
| :-- | :-- |
| 按题号查动画 | [`docs/leetcode-animation-index.md`](docs/leetcode-animation-index.md) |
| 按专题查动画 | [`docs/index-by-topic.md`](docs/index-by-topic.md) |
| 用脚本处理题目数据 | [`data/manifest.json`](data/manifest.json) |
| 查看早期题解文章 | [`notes/`](notes) 或各题目录的 `Article/` |
| 查看早期动画素材 | 各题目录的 `Animation/` |
| 查看同步记录 | [`docs/sync-log.md`](docs/sync-log.md) |
| 同步网站侧新索引 | [`scripts/sync-algomooc-index.js`](scripts/sync-algomooc-index.js) |

## 如何使用

1. 按题号查找：打开 [`docs/leetcode-animation-index.md`](docs/leetcode-animation-index.md)，表格按 LeetCode 题号排序。
2. 按程序处理：读取 [`data/manifest.json`](data/manifest.json)，其中包含题号、slug、中文标题、难度、分类、仓库目录和网站路径。
3. 查历史素材：早期题解在 `notes/` 和各题目录的 `Article/`、`Animation/` 中。
4. 同步新内容：网站侧新增或调整动画后，运行同步脚本更新本仓库索引。

## 仓库和网站的关系

GitHub 仓库用于保存历史内容、公开索引和同步脚本。网站侧维护当前动画页面，交互播放、步骤切换和页面阅读体验以网站版本为准；同步脚本会把网站题目列表写回仓库，方便在 GitHub 上审阅、检索和版本化。

## 同步方式

网站侧的题目索引来自 `study_index.js`。同步前先审查：

```bash
npm run review:site
```

确认需要同步后运行：

```bash
npm run sync
npm run validate
```

同步脚本会更新：

- `data/manifest.json`
- `docs/leetcode-animation-index.md`
- `docs/index-by-topic.md`
- `docs/sync-log.md`

更完整的判断规则和 commit 规范见 [`docs/sync-workflow.md`](docs/sync-workflow.md)。

## 目录

| 路径 | 说明 |
| :-- | :-- |
| `data/manifest.json` | LeetCode 动画索引数据 |
| `docs/leetcode-animation-index.md` | 由 manifest 生成的题目列表 |
| `docs/index-by-topic.md` | 由 manifest 生成的专题索引 |
| `docs/sync-log.md` | 网站侧索引同步记录 |
| `docs/sync-workflow.md` | 网站和 GitHub 联动流程 |
| `scripts/review-site-changes.js` | 判断网站侧改动是否需要同步到 GitHub |
| `scripts/sync-algomooc-index.js` | 从网站侧 `study_index.js` 同步索引 |
| `scripts/validate-manifest.js` | 校验 manifest |
| `notes/` | 早期题解文章 |
| `*/Animation/` | 早期动画素材 |
| `*/Article/` | 早期文章素材 |

## 反馈

如果发现索引错位、链接失效、题目标题或分类有误，可以在 issue 中记录。我会继续把网站侧新增动画同步回来，让这个仓库保持可检索、可追踪。

## English

See [`README-En.md`](README-En.md).
