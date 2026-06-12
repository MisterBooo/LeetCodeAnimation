# LeetCodeAnimation

> LeetCode solutions explained with animations: how pointers move, how states change, how recursion unfolds, and why boundary cases hold.
> This GitHub copy is the public index and historical assets; **full step-through, replay, speed control, and voice walkthroughs live in the website version.**

<!-- Conversion layer: badges (hand-maintained). The problem-count badge reads docs/data/stats.json — number is script-managed, do not edit. -->
[![GitHub stars](https://img.shields.io/github/stars/MisterBooo/LeetCodeAnimation?style=social)](https://github.com/MisterBooo/LeetCodeAnimation)
[![last commit](https://img.shields.io/github/last-commit/MisterBooo/LeetCodeAnimation?color=7c3aed)](https://github.com/MisterBooo/LeetCodeAnimation/commits/master)
[![LeetCode animations](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FMisterBooo%2FLeetCodeAnimation%2Fmaster%2Fdocs%2Fdata%2Fstats.json&query=%24.count&label=LeetCode%20animations&color=7c3aed)](leetcode-animation-index.md)

<!-- Three conversion buttons: all carry utm_source=github. Link list: docs/readme-revamp/utm-links.md -->
[![🎬 Interactive version](https://img.shields.io/badge/🎬_Interactive_version-step·speed·voice-7c3aed?style=for-the-badge)](https://www.algomooc.com/leetcode-animation?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=hero_interactive_en)
[![📚 Browse by topic](https://img.shields.io/badge/📚_Browse_by_topic-arrays·lists·DP·graphs…-1f6feb?style=for-the-badge)](https://www.algomooc.com/topics?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=hero_topics_en)
[![🤖 AI tutor Xiao Ou](https://img.shields.io/badge/🤖_AI_tutor-ask_anytime-16a34a?style=for-the-badge)](https://www.algomooc.com/ai-tutor?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=hero_ai_xiaoou_en)

If this project helps you, a **Star** keeps it visible and supports continued updates.

---

## 🚧 2026 Major Version In Progress

This repo is not a one-off archive. A major 2026 upgrade is underway — **only shipped / in-progress facts are listed**:

- ✅ **Three-language reference code**: every solution ships **Python / C++ / Java** implementations, Python by default.
- ✅ **AI tutor "Xiao Ou"**: an AI algorithm tutor that answers follow-up questions on ideas and edge cases while you solve.
- ✅ **Voice walkthroughs in Wu Shixiong's voice**: the animation narrates as it plays; the voice is **AI-synthesized (Wu Shixiong's voice, authorized)**. Hit 🔊 in the player.
- 🚧 **Full quality pass over 299 problems**: a problem-by-problem quality review and remake, shipping in batches and synced back into this repo's index.

> Progress flows into the "Current Index" below and [`sync-log.md`](sync-log.md) via the sync scripts.

---

## Website-Style Animation Previews

These GIFs are captured from the website player. **Click any image to jump straight to its problem page** (full step playback, three-language code, and voice walkthrough are all in the website version).

<table>
  <tr>
    <td width="50%">
      <a href="https://www.algomooc.com/leetcode-animation/two-sum?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=preview_two_sum_en">
        <img src="assets/previews/two-sum.gif" alt="Two Sum animation preview" width="420">
      </a>
      <br>
      <strong>Two Sum</strong>
      <br>
      Scan the array while the hash table grows, then see exactly where the complement is found.
    </td>
    <td width="50%">
      <a href="https://www.algomooc.com/leetcode-animation/trapping-rain-water?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=preview_trapping_rain_water_en">
        <img src="assets/previews/trapping-rain-water.gif" alt="Trapping Rain Water animation preview" width="420">
      </a>
      <br>
      <strong>Trapping Rain Water</strong>
      <br>
      Bar heights, boundaries, and trapped water are shown as separate moving states.
    </td>
  </tr>
  <tr>
    <td width="50%">
      <a href="https://www.algomooc.com/leetcode-animation/number-of-islands?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=preview_number_of_islands_en">
        <img src="assets/previews/number-of-islands.gif" alt="Number of Islands animation preview" width="420">
      </a>
      <br>
      <strong>Number of Islands</strong>
      <br>
      The DFS coloring process unfolds cell by cell, making connected components easier to inspect.
    </td>
    <td width="50%">
      <a href="https://www.algomooc.com/leetcode-animation/linked-list-cycle?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=preview_linked_list_cycle_en">
        <img src="assets/previews/linked-list-cycle.gif" alt="Linked List Cycle animation preview" width="420">
      </a>
      <br>
      <strong>Linked List Cycle</strong>
      <br>
      Slow and fast pointers move on the same list, so the meeting point becomes visible.
    </td>
  </tr>
</table>

**↑ The website version also lets you step, replay, change speed, and listen** — [open the interactive version →](https://www.algomooc.com/leetcode-animation?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=preview_cta_en)

---

## Highlights

- **Animation-first**: understand the process first, then return to the code. Many problems keep GIFs or step-by-step animation assets.
- **Three-language code**: each solution ships Python / C++ / Java reference implementations.
- **Structured data**: [`data/manifest.json`](data/manifest.json) can be consumed by scripts for indexing, link checks, or downstream tooling.
- **Continuous sync**: when the website adds or adjusts animations, scripts sync them back to GitHub — the repo is not a static archive.

<!-- LCA-AUTOGEN:STATS-EN START — do not edit by hand; injected by tools/scripts/build-readme.js -->
## Current Index

> The numbers below are injected by `tools/scripts/build-readme.js` from `docs/data/manifest.json`. **Do not edit by hand.**

| Item | Count / Path |
| :-- | :-- |
| LeetCode animation items | **256** |
| Easy | 71 |
| Medium | 160 |
| Hard | 25 |
| Data file | [`data/manifest.json`](data/manifest.json) |
| Index by number | [`leetcode-animation-index.md`](leetcode-animation-index.md) |
| Index by topic | [`index-by-topic.md`](index-by-topic.md) |
| Website path | <https://www.algomooc.com/leetcode-animation> |

<!-- LCA-AUTOGEN:STATS-EN END -->

> **What the numbers mean**: **256** is the number of **LeetCode animations already synced into this repo** (computed by scripts from the website-side `study_index.js` → `manifest.json`).
> The **299** mentioned above is **algomooc.com's full animation catalog** (including advanced problems and topic sets, from the site's `content-stats` single source) — a larger set than this repo's synced LeetCode subset.
> Both numbers are **script-managed and never hand-typed**: 256 comes from this repo's manifest; 299 is backfilled from the site's content-stats (see the `siteTotal` field in [`data/stats.json`](data/stats.json)).

---

## Content Map

| Goal | Start Here |
| :-- | :-- |
| Search animations by problem number | [`leetcode-animation-index.md`](leetcode-animation-index.md) |
| Search animations by topic | [`index-by-topic.md`](index-by-topic.md) |
| Process problem data with scripts | [`data/manifest.json`](data/manifest.json) |
| Read earlier notes | [`notes/`](notes) or each problem's `Article/` folder under [`problems/`](../problems) |
| Check earlier animation assets | Each problem's `Animation/` folder under [`problems/`](../problems) |
| Read sync history | [`sync-log.md`](sync-log.md) |

---

<details>
<summary><strong>🛠 Maintainers: sync & data notes</strong> (click to expand — readers can skip)</summary>

### Repository and website

GitHub stores historical content, the public index, and sync scripts; the website maintains the current animation pages. Playback, step-through, and reading experience are authoritative on the website. The sync scripts write the website's problem list back into this repo for review, search, and versioning.

### Sync

The website's problem index comes from `study_index.js`. Review first:

```bash
npm run review:site
```

Once a sync is confirmed:

```bash
npm run sync        # update manifest / number index / topic index / sync log
npm run validate    # validate the manifest
node tools/scripts/build-readme.js --write   # re-inject README number blocks + stats.json
```

This updates:

- `data/manifest.json`
- `leetcode-animation-index.md`
- `index-by-topic.md`
- `sync-log.md`
- `data/stats.json` and the `Current Index` marker blocks in both READMEs

See [`sync-workflow.md`](sync-workflow.md) and [`HOW-TO-INTERACT.md`](HOW-TO-INTERACT.md) for the full workflow, commit rules, and number-ownership mechanism.

### Layout

| Path | Notes |
| :-- | :-- |
| `data/manifest.json` | Structured LeetCode animation index (single source of truth for numbers) |
| `data/stats.json` | Script-computed counts read by the README badge |
| `leetcode-animation-index.md` | Markdown index generated from the manifest |
| `index-by-topic.md` | Topic index generated from the manifest |
| `sync-log.md` | Sync history |
| `sync-workflow.md` | Website-to-GitHub workflow |
| `../tools/scripts/review-site-changes.js` | Review whether website changes should be synced |
| `../tools/scripts/sync-algomooc-index.js` | Sync script for the website-side index |
| `../tools/scripts/validate-manifest.js` | Manifest validator |
| `../tools/scripts/build-readme.js` | Inject README number blocks + generate `stats.json` |
| `assets/previews/` | Website-style animation preview GIFs used by the READMEs |
| `notes/` · `../problems/` | Historical notes, code, and animation assets |

</details>

---

## ⭐ Star it to follow the updates

[![Star History Chart](https://api.star-history.com/svg?repos=MisterBooo/LeetCodeAnimation&type=Date)](https://star-history.com/#MisterBooo/LeetCodeAnimation&Date)

This project grew from hand-drawn animations to where it is today on the encouragement of every Star.
If it helped you truly understand a problem, **a Star** is the most concrete support for continued updates.

> 📌 Content is continuously synced from **[algomooc.com](https://www.algomooc.com/leetcode-animation?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=footer_site_en)** — when the website updates, the repo index follows via scripts.

## 中文

See [`../README.md`](../README.md).
