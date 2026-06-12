#!/usr/bin/env node
/**
 * build-readme.js  (二期版 · 数字单一数据源)
 *
 * 职责：把 README 里所有「会随内容增减而变」的数字交给脚本接管，
 *       人手只维护转化层（徽章文案 / 近况 / Star 区 / 折叠块）。
 *
 * 数据来源：docs/data/manifest.json（由 sync-algomooc-index.js 从网站侧
 *           study_index.js 实算，本脚本不重新解析网站侧，只读 manifest）。
 *
 * 产出两处「脚本接管」的数字：
 *   1. docs/data/stats.json —— 给 README 顶部的 shields 动态徽章读
 *      （header 的「题目数」徽章用 shields dynamic/json 指向这个文件，
 *       因此徽章数字永远等于 manifest 实算，零手写）。
 *   2. README 里 <!-- LCA-AUTOGEN:STATS START/END --> 标记之间的「当前索引」表
 *      （人读版表格，由本脚本注入）。
 *
 * 用法：
 *   node tools/scripts/build-readme.js                 # 旧行为：把索引块打到 stdout
 *   node tools/scripts/build-readme.js --write          # 写 stats.json + 注入 README 标记区
 *   node tools/scripts/build-readme.js --check          # 校验 stats.json 与标记区是否最新（CI/收尾闸门用，过期 exit 1）
 *
 * 设计原则：标记区外的内容（徽章、近况、GIF、Star 区、折叠维护块）本脚本一律不碰，
 *           只在 START/END 之间替换 —— 转化层与数字段彻底解耦。
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "../..");
const MANIFEST = path.join(ROOT, "docs/data/manifest.json");
const STATS_JSON = path.join(ROOT, "docs/data/stats.json");
const README = path.join(ROOT, "README.md");

const START = "<!-- LCA-AUTOGEN:STATS START — 勿手改，数字由 tools/scripts/build-readme.js 注入 -->";
const END = "<!-- LCA-AUTOGEN:STATS END -->";

const args = new Set(process.argv.slice(2));
const write = args.has("--write");
const check = args.has("--check");

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

// 人读版「当前索引」表 —— 注入 README 标记区
function indexBlock() {
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

const statsText = `${JSON.stringify(stats, null, 2)}\n`;

function readme() {
  return fs.existsSync(README) ? fs.readFileSync(README, "utf8") : "";
}

function inject(content, block) {
  const s = content.indexOf(START);
  const e = content.indexOf(END);
  if (s < 0 || e < 0 || e < s) {
    throw new Error(`README 缺少 ${START} / ${END} 标记，无法注入数字段`);
  }
  return content.slice(0, s + START.length) + "\n" + block + "\n" + content.slice(e);
}

// 默认（无参）：保持旧行为，打到 stdout
if (!write && !check) {
  process.stdout.write(indexBlock());
  process.exit(0);
}

const currentStats = fs.existsSync(STATS_JSON) ? fs.readFileSync(STATS_JSON, "utf8") : "";
const currentReadme = readme();
const injected = inject(currentReadme, indexBlock());

if (check) {
  const stale = [];
  if (currentStats !== statsText) stale.push("docs/data/stats.json");
  if (currentReadme !== injected) stale.push("README.md (STATS 标记区)");
  console.log(`manifest items: ${stats.count} (easy ${stats.easy} / medium ${stats.medium} / hard ${stats.hard})`);
  if (stale.length) {
    console.error(`数字段已过期，请跑 build-readme.js --write：\n${stale.map((f) => `  - ${f}`).join("\n")}`);
    process.exit(1);
  }
  console.log("数字段最新（stats.json 与 README 标记区均同步）");
  process.exit(0);
}

// --write
fs.mkdirSync(path.dirname(STATS_JSON), { recursive: true });
if (currentStats !== statsText) fs.writeFileSync(STATS_JSON, statsText);
if (currentReadme !== injected) fs.writeFileSync(README, injected);
console.log(`wrote stats.json + injected README STATS block (count=${stats.count})`);
