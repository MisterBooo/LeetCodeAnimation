#!/usr/bin/env node
/**
 * build-readme.js  (二期版 · 数字单一数据源 · 中英双 README)
 *
 * 职责：把 README / README-En 里所有「会随内容增减而变」的数字交给脚本接管，
 *       人手只维护转化层（徽章文案 / 近况 / Star 区 / 折叠块）。
 *
 * 数据来源：docs/data/manifest.json（由 sync-algomooc-index.js 从网站侧
 *           study_index.js 实算，本脚本不重新解析网站侧，只读 manifest）。
 *
 * 产出三处「脚本接管」的数字：
 *   1. docs/data/stats.json —— 给两份 README 顶部的 shields 动态徽章读
 *      （徽章用 shields dynamic/json 指向这个文件，数字永远等于 manifest 实算）。
 *   2. README.md     的 <!-- LCA-AUTOGEN:STATS START/END --> 标记区（中文「当前索引」表）。
 *   3. docs/README-En.md 的 <!-- LCA-AUTOGEN:STATS-EN START/END --> 标记区（英文 Current Index 表）。
 *
 * 用法：
 *   node tools/scripts/build-readme.js                 # 旧行为：把中文索引块打到 stdout
 *   node tools/scripts/build-readme.js --write          # 写 stats.json + 注入中英两份 README 标记区
 *   node tools/scripts/build-readme.js --check          # 校验三处是否最新（CI/收尾闸门用，过期 exit 1）
 *
 * 设计原则：标记区外的内容（徽章、近况、GIF、Star 区、折叠维护块）本脚本一律不碰，
 *           只在 START/END 之间替换 —— 转化层与数字段彻底解耦。
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "../..");
const MANIFEST = path.join(ROOT, "docs/data/manifest.json");
const STATS_JSON = path.join(ROOT, "docs/data/stats.json");

const data = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
const byDifficulty = data.reduce((acc, item) => {
  acc[item.difficulty] = (acc[item.difficulty] || 0) + 1;
  return acc;
}, {});

const stats = {
  // 给 shields dynamic 徽章读的字段，勿改 key 名（README 徽章 URL 写死了 $.count）
  count: data.length,
  easy: byDifficulty.easy || 0,
  medium: byDifficulty.medium || 0,
  hard: byDifficulty.hard || 0,
  // siteTotal：algomooc.com 全站动画内容总数（含进阶/专题，即口径里的 299）。
  // 本仓库 manifest 只覆盖已同步的 LeetCode 题动画（count），站点总数来自站内
  // content-stats 单一数据源；这里留 null，由后续从网站侧同步时回填，禁止手写。
  siteTotal: null,
  source: "docs/data/manifest.json",
};

// 中文「当前索引」表 —— 注入 README.md（链接相对仓库根）
function indexBlockZh() {
  return [
    "## 当前索引",
    "",
    "> 下表数字由 `tools/scripts/build-readme.js` 据 `docs/data/manifest.json` 实算注入，**请勿手改**。",
    "",
    "| 项目 | 数量 / 位置 |",
    "| :-- | :-- |",
    `| LeetCode 动画题数 | **${stats.count}** |`,
    `| 简单 | ${stats.easy} |`,
    `| 中等 | ${stats.medium} |`,
    `| 困难 | ${stats.hard} |`,
    "| 数据文件 | [`docs/data/manifest.json`](docs/data/manifest.json) |",
    "| 按题号索引 | [`docs/leetcode-animation-index.md`](docs/leetcode-animation-index.md) |",
    "| 按专题索引 | [`docs/index-by-topic.md`](docs/index-by-topic.md) |",
    "| 网站路径 | <https://www.algomooc.com/leetcode-animation> |",
    "",
  ].join("\n");
}

// 英文 Current Index 表 —— 注入 docs/README-En.md（链接相对 docs/）
function indexBlockEn() {
  return [
    "## Current Index",
    "",
    "> The numbers below are injected by `tools/scripts/build-readme.js` from `docs/data/manifest.json`. **Do not edit by hand.**",
    "",
    "| Item | Count / Path |",
    "| :-- | :-- |",
    `| LeetCode animation items | **${stats.count}** |`,
    `| Easy | ${stats.easy} |`,
    `| Medium | ${stats.medium} |`,
    `| Hard | ${stats.hard} |`,
    "| Data file | [`data/manifest.json`](data/manifest.json) |",
    "| Index by number | [`leetcode-animation-index.md`](leetcode-animation-index.md) |",
    "| Index by topic | [`index-by-topic.md`](index-by-topic.md) |",
    "| Website path | <https://www.algomooc.com/leetcode-animation> |",
    "",
  ].join("\n");
}

const TARGETS = [
  {
    file: path.join(ROOT, "README.md"),
    block: indexBlockZh,
    start: "<!-- LCA-AUTOGEN:STATS START — 勿手改，数字由 tools/scripts/build-readme.js 注入 -->",
    end: "<!-- LCA-AUTOGEN:STATS END -->",
    label: "README.md (STATS 标记区)",
  },
  {
    file: path.join(ROOT, "docs/README-En.md"),
    block: indexBlockEn,
    start: "<!-- LCA-AUTOGEN:STATS-EN START — do not edit by hand; injected by tools/scripts/build-readme.js -->",
    end: "<!-- LCA-AUTOGEN:STATS-EN END -->",
    label: "docs/README-En.md (STATS-EN 标记区)",
  },
];

const statsText = `${JSON.stringify(stats, null, 2)}\n`;

const args = new Set(process.argv.slice(2));
const write = args.has("--write");
const check = args.has("--check");

function readFile(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function inject(content, target) {
  const s = content.indexOf(target.start);
  const e = content.indexOf(target.end);
  if (s < 0 || e < 0 || e < s) {
    throw new Error(`${path.relative(ROOT, target.file)} 缺少 ${target.start} / ${target.end} 标记，无法注入数字段`);
  }
  return content.slice(0, s + target.start.length) + "\n" + target.block() + "\n" + content.slice(e);
}

// 默认（无参）：保持旧行为，打中文索引块到 stdout
if (!write && !check) {
  process.stdout.write(indexBlockZh());
  process.exit(0);
}

const stale = [];
const planned = []; // [file, content]

if (readFile(STATS_JSON) !== statsText) {
  stale.push("docs/data/stats.json");
  planned.push([STATS_JSON, statsText]);
}

for (const target of TARGETS) {
  const current = readFile(target.file);
  if (!current) continue; // 文件不存在则跳过
  const injected = inject(current, target);
  if (current !== injected) {
    stale.push(target.label);
    planned.push([target.file, injected]);
  }
}

console.log(`manifest items: ${stats.count} (easy ${stats.easy} / medium ${stats.medium} / hard ${stats.hard})`);

if (check) {
  if (stale.length) {
    console.error(`数字段已过期，请跑 build-readme.js --write：\n${stale.map((f) => `  - ${f}`).join("\n")}`);
    process.exit(1);
  }
  console.log("数字段最新（stats.json + 中英 README 标记区均同步）");
  process.exit(0);
}

// --write
for (const [file, content] of planned) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}
console.log(`wrote ${planned.length} file(s): ${planned.map(([f]) => path.relative(ROOT, f)).join(", ") || "(none, already current)"}`);
