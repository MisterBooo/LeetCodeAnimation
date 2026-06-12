# README 二期 · UTM 链接清单

统一口径：`utm_source=github`、`utm_medium=readme`、`utm_campaign=lca_revamp`，
每个落点再用 `utm_content=<slot>` 区分位置，方便在站内统计后台按 slot 拆来源。

公共后缀：`?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=<slot>`

| 位置 | slot (`utm_content`) | 落点（不含 UTM） | 完整链接 |
| :-- | :-- | :-- | :-- |
| 顶部按钮 🎬 在线交互版 | `hero_interactive` | `https://www.algomooc.com/leetcode-animation` | `https://www.algomooc.com/leetcode-animation?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=hero_interactive` |
| 顶部按钮 📚 按专题刷 | `hero_topics` | `https://www.algomooc.com/topics` | `https://www.algomooc.com/topics?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=hero_topics` |
| 顶部按钮 🤖 AI 私教小欧 | `hero_ai_xiaoou` | `https://www.algomooc.com/ai-tutor` | `https://www.algomooc.com/ai-tutor?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=hero_ai_xiaoou` |
| GIF 两数之和 | `preview_two_sum` | `…/leetcode-animation/two-sum` | `https://www.algomooc.com/leetcode-animation/two-sum?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=preview_two_sum` |
| GIF 接雨水 | `preview_trapping_rain_water` | `…/leetcode-animation/trapping-rain-water` | `https://www.algomooc.com/leetcode-animation/trapping-rain-water?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=preview_trapping_rain_water` |
| GIF 岛屿数量 | `preview_number_of_islands` | `…/leetcode-animation/number-of-islands` | `https://www.algomooc.com/leetcode-animation/number-of-islands?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=preview_number_of_islands` |
| GIF 环形链表 | `preview_linked_list_cycle` | `…/leetcode-animation/linked-list-cycle` | `https://www.algomooc.com/leetcode-animation/linked-list-cycle?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=preview_linked_list_cycle` |
| GIF 区下方「打开在线交互版」 | `preview_cta` | `https://www.algomooc.com/leetcode-animation` | `https://www.algomooc.com/leetcode-animation?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=preview_cta` |
| 末尾「内容持续同步自 algomooc.com」 | `footer_site` | `https://www.algomooc.com/leetcode-animation` | `https://www.algomooc.com/leetcode-animation?utm_source=github&utm_medium=readme&utm_campaign=lca_revamp&utm_content=footer_site` |

## 路由核实

下列落点均已在网站侧 `web/src/app/(site)/` 确认存在对应 `page.tsx`：
`/leetcode-animation`、`/topics`、`/ai-tutor`，及各题 slug 详情页。

## 不带 UTM 的链接（刻意保留）

- 仓库内部相对链接（`docs/...`、`problems/...`）—— 站内导航，无需 UTM。
- star-history 图片与 GitHub stars/last-commit 徽章 —— 指向 GitHub 自身，非站点引流。
