# LeetCodeAnimation

[![GitHub stars](https://img.shields.io/github/stars/MisterBooo/LeetCodeAnimation?style=social)](https://github.com/MisterBooo/LeetCodeAnimation)

LeetCode solutions explained with animations and visual notes.

Instead of only storing code, this project focuses on the process behind each solution: how pointers move, how states change, how recursion unfolds, and why boundary cases work. The repository keeps earlier GIFs, notes, code, and article assets, while also syncing the current website-side LeetCode animation index.

If this project helps you, a GitHub Star is appreciated and helps the project stay visible. For the best animation playback experience, use the website version; GitHub is better for indexes, historical assets, and sync history.

[Website animations](https://www.algomooc.com/leetcode-animation) · [Problem index](docs/leetcode-animation-index.md) · [Structured data](data/manifest.json)

## Highlights

- **Animation-first notes**: many problems keep GIFs or step-by-step animation assets.
- **256 LeetCode animation entries**: the current website-side index is synced into this repository, covering arrays, linked lists, stacks, binary trees, dynamic programming, graphs, backtracking, greedy methods, binary search, and more.
- **Historical assets**: earlier notes, code, article files, and animation files remain available.
- **Structured data**: `data/manifest.json` can be consumed by scripts for indexing, link checks, or downstream tooling.
- **Continuous sync**: when the website-side animation index changes, the repository index can be regenerated.

## Current Index

| Item | Count / Path |
| :-- | :-- |
| LeetCode animation items | 256 |
| Easy | 71 |
| Medium | 160 |
| Hard | 25 |
| Data file | [`data/manifest.json`](data/manifest.json) |
| Markdown index | [`docs/leetcode-animation-index.md`](docs/leetcode-animation-index.md) |
| Topic index | [`docs/index-by-topic.md`](docs/index-by-topic.md) |
| Sync log | [`docs/sync-log.md`](docs/sync-log.md) |
| Website path | [`https://www.algomooc.com/leetcode-animation`](https://www.algomooc.com/leetcode-animation) |

## Content Map

| Goal | Start Here |
| :-- | :-- |
| Search animations by problem number | [`docs/leetcode-animation-index.md`](docs/leetcode-animation-index.md) |
| Search animations by topic | [`docs/index-by-topic.md`](docs/index-by-topic.md) |
| Process problem data with scripts | [`data/manifest.json`](data/manifest.json) |
| Read earlier notes | [`notes/`](notes) or each problem's `Article/` folder |
| Check earlier animation assets | Each problem's `Animation/` folder |
| Read sync history | [`docs/sync-log.md`](docs/sync-log.md) |
| Sync the website-side index | [`scripts/sync-algomooc-index.js`](scripts/sync-algomooc-index.js) |

## Usage

1. Search by problem number in [`docs/leetcode-animation-index.md`](docs/leetcode-animation-index.md).
2. Use [`data/manifest.json`](data/manifest.json) for scripts or downstream tooling.
3. Check `notes/`, `Article/`, and `Animation/` for historical assets.
4. Run the sync script after the website-side index changes.

## Repository And Website

GitHub stores historical content, the public index, and sync scripts. The website maintains the current animation pages, including the playback and step-by-step reading experience. The sync script writes the website-side problem list back into this repository for review, search, and versioning.

## Sync

The website-side problem index comes from `study_index.js`. Review first:

```bash
npm run review:site
```

If the review says a sync is needed:

```bash
npm run sync
npm run validate
```

The sync script updates:

- `data/manifest.json`
- `docs/leetcode-animation-index.md`
- `docs/index-by-topic.md`
- `docs/sync-log.md`

See [`docs/sync-workflow.md`](docs/sync-workflow.md) for the full workflow and commit-message rules.

## Layout

| Path | Notes |
| :-- | :-- |
| `data/manifest.json` | Structured LeetCode animation index |
| `docs/leetcode-animation-index.md` | Markdown index generated from the manifest |
| `docs/index-by-topic.md` | Topic index generated from the manifest |
| `docs/sync-log.md` | Sync history |
| `docs/sync-workflow.md` | Website-to-GitHub workflow |
| `scripts/review-site-changes.js` | Review whether website changes should be synced |
| `scripts/sync-algomooc-index.js` | Sync script for the website-side index |
| `scripts/validate-manifest.js` | Manifest validator |
| `notes/` | Historical notes |
| `*/Animation/` | Historical animation assets |
| `*/Article/` | Historical article assets |

## Feedback

Issues are used for broken links, mismatched index entries, and title or category corrections. I will keep syncing website-side animation updates back into this repository so the index remains searchable and versioned.

## Chinese

See [`Readme.md`](Readme.md).
