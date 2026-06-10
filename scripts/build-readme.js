#!/usr/bin/env node
/**
 * Print a neutral README summary from data/manifest.json.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const data = JSON.parse(fs.readFileSync(path.join(ROOT, "data/manifest.json"), "utf8"));

const byDifficulty = data.reduce((acc, item) => {
  acc[item.difficulty] = (acc[item.difficulty] || 0) + 1;
  return acc;
}, {});

const out = `## 当前索引

- LeetCode 动画题数：${data.length}
- 简单：${byDifficulty.easy || 0}
- 中等：${byDifficulty.medium || 0}
- 困难：${byDifficulty.hard || 0}
- 数据文件：[\`data/manifest.json\`](data/manifest.json)
- Markdown 索引：[\`docs/leetcode-animation-index.md\`](docs/leetcode-animation-index.md)
`;

process.stdout.write(out);
