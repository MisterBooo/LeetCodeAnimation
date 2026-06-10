#!/usr/bin/env node
/**
 * Sync the website-side LeetCode animation index into this repository.
 *
 * Common commands:
 *   node scripts/sync-algomooc-index.js --check
 *   node scripts/sync-algomooc-index.js --log
 *   node scripts/sync-algomooc-index.js --check-generated
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PROBLEMS_DIR = "problems";
const DEFAULT_SOURCE = path.resolve(ROOT, "../AlgoMoocOJ/web/public/leetcode-animation/study_index.js");
const DEFAULT_SITE = "https://www.algomooc.com/leetcode-animation";

const FILES = {
  manifest: "data/manifest.json",
  problemIndex: "docs/leetcode-animation-index.md",
  topicIndex: "docs/index-by-topic.md",
  syncLog: "docs/sync-log.md",
};

const args = process.argv.slice(2);
const flags = new Set(args.filter((arg) => arg.startsWith("--") && !["--source", "--site"].includes(arg)));
const check = flags.has("--check");
const checkGenerated = flags.has("--check-generated");
const renderOnly = flags.has("--render-only") || checkGenerated;
const writeLog = flags.has("--log");

function getArg(name, fallback) {
  const index = args.indexOf(name);
  if (index >= 0 && args[index + 1]) return args[index + 1];
  return fallback;
}

const sourceFile = path.resolve(getArg("--source", process.env.ALGOMOOC_STUDY_INDEX || DEFAULT_SOURCE));
const siteBase = getArg("--site", DEFAULT_SITE).replace(/\/+$/, "");

function readJsonFile(file, fallback) {
  const target = path.join(ROOT, file);
  if (!fs.existsSync(target)) return fallback;
  return JSON.parse(fs.readFileSync(target, "utf8"));
}

function readProblems(file) {
  const source = fs.readFileSync(file, "utf8");
  const match = source.match(/window\.WS_PROBLEMS\s*=\s*([\s\S]*?);\s*$/);
  if (!match) throw new Error(`Cannot find window.WS_PROBLEMS in ${file}`);
  return JSON.parse(match[1]);
}

function difficulty(value) {
  if (value === "简单") return "easy";
  if (value === "困难") return "hard";
  return "medium";
}

function difficultyZh(value) {
  if (value === "easy") return "简单";
  if (value === "hard") return "困难";
  return "中等";
}

function topics(cat) {
  return String(cat)
    .split(/\s*[·/]\s*/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function problemDirs() {
  const base = path.join(ROOT, PROBLEMS_DIR);
  if (!fs.existsSync(base)) return [];
  return fs
    .readdirSync(base, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => `${PROBLEMS_DIR}/${entry.name}`);
}

function findRepoPath(leetcodeId, dirs) {
  const prefix = String(leetcodeId).padStart(4, "0");
  return dirs.find((dir) => {
    const name = path.basename(dir);
    return name.startsWith(`${prefix}-`) || name.startsWith(`${prefix}_`);
  }) || null;
}

function findFirstGif(dir) {
  if (!dir) return null;
  const animationDir = path.join(ROOT, dir, "Animation");
  if (!fs.existsSync(animationDir)) return null;
  const stack = [animationDir];

  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(full);
      if (entry.isFile() && /\.gif$/i.test(entry.name)) return path.relative(ROOT, full).split(path.sep).join("/");
    }
  }

  return null;
}

function buildManifest() {
  const dirs = problemDirs();
  return readProblems(sourceFile)
    .filter((item) => /^lc\d+$/.test(item.pid) && Number.isInteger(item.num))
    .sort((a, b) => a.num - b.num)
    .map((item) => {
      const repoPath = findRepoPath(item.num, dirs);
      return {
        leetcodeId: item.num,
        sourcePid: item.pid,
        slug: item.slug,
        titleZh: item.title,
        difficulty: difficulty(item.diff),
        categoryZh: item.cat,
        topicsZh: topics(item.cat),
        status: "site-animation",
        repoPath,
        gifPath: findFirstGif(repoPath),
        siteUrl: `${siteBase}/${item.slug}`,
      };
    });
}

function renderProblemIndex(items) {
  const rows = items.map((item) => {
    const repoCell = item.repoPath ? `[\`${item.repoPath}\`](${encodeURI(`../${item.repoPath}`)})` : "";
    return `| ${item.leetcodeId} | ${item.titleZh} | ${difficultyZh(item.difficulty)} | ${item.categoryZh} | [${item.slug}](${item.siteUrl}) | ${repoCell} |`;
  });

  return `# LeetCode 动画索引

本文件由 \`scripts/sync-algomooc-index.js\` 生成，数据来源为网站侧 \`study_index.js\`。

- LeetCode 题数：${items.length}
- 数据文件：[\`data/manifest.json\`](../data/manifest.json)
- 按专题查看：[\`docs/index-by-topic.md\`](index-by-topic.md)

| # | 题目 | 难度 | 分类 | 网站路径 | 仓库目录 |
| :-- | :-- | :-- | :-- | :-- | :-- |
${rows.join("\n")}
`;
}

function renderTopicIndex(items) {
  const groups = new Map();
  for (const item of items) {
    for (const topic of item.topicsZh) {
      if (!groups.has(topic)) groups.set(topic, []);
      groups.get(topic).push(item);
    }
  }

  const sections = Array.from(groups.entries())
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    .map(([topic, topicItems]) => {
      const rows = topicItems
        .sort((a, b) => a.leetcodeId - b.leetcodeId)
        .map((item) => `| ${item.leetcodeId} | ${item.titleZh} | ${difficultyZh(item.difficulty)} | ${item.categoryZh} | [${item.slug}](${item.siteUrl}) |`);
      return `## ${topic}（${topicItems.length}）

| # | 题目 | 难度 | 分类 | 网站路径 |
| :-- | :-- | :-- | :-- | :-- |
${rows.join("\n")}
`;
    });

  return `# LeetCode 动画专题索引

本文件由 \`scripts/sync-algomooc-index.js\` 生成，按 \`data/manifest.json\` 中的 \`topicsZh\` 分组。

- LeetCode 题数：${items.length}
- 专题数量：${groups.size}
- 按题号查看：[\`docs/leetcode-animation-index.md\`](leetcode-animation-index.md)

${sections.join("\n").trimEnd()}
`;
}

function manifestText(items) {
  return `${JSON.stringify(items, null, 2)}\n`;
}

function readText(file) {
  const target = path.join(ROOT, file);
  return fs.existsSync(target) ? fs.readFileSync(target, "utf8") : "";
}

function writeText(file, content) {
  const target = path.join(ROOT, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  if (readText(file) !== content) fs.writeFileSync(target, content);
}

function sameItem(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function compareManifests(before, after) {
  const oldById = new Map(before.map((item) => [item.leetcodeId, item]));
  const newById = new Map(after.map((item) => [item.leetcodeId, item]));
  const added = after.filter((item) => !oldById.has(item.leetcodeId));
  const removed = before.filter((item) => !newById.has(item.leetcodeId));
  const changed = after.filter((item) => oldById.has(item.leetcodeId) && !sameItem(oldById.get(item.leetcodeId), item));
  return { added, removed, changed };
}

function itemLabel(item) {
  return `#${item.leetcodeId} ${item.titleZh} (${item.slug})`;
}

function printReport(report, manifest) {
  console.log(`items: ${manifest.length}`);
  console.log(`added: ${report.added.length}, changed: ${report.changed.length}, removed: ${report.removed.length}`);
  if (report.added.length) console.log(`added items:\n${report.added.map((item) => `  - ${itemLabel(item)}`).join("\n")}`);
  if (report.changed.length) console.log(`changed items:\n${report.changed.map((item) => `  - ${itemLabel(item)}`).join("\n")}`);
  if (report.removed.length) console.log(`removed items:\n${report.removed.map((item) => `  - ${itemLabel(item)}`).join("\n")}`);
}

function syncLogHeader() {
  return `# 同步记录

本文件记录网站侧 LeetCode 动画索引同步到 GitHub 的变更。

| 日期 | 类型 | 说明 |
| :-- | :-- | :-- |
`;
}

function appendSyncLog(report, source) {
  if (!report.added.length && !report.changed.length && !report.removed.length) return;

  const date = new Date().toISOString().slice(0, 10);
  const parts = [];
  if (report.added.length) parts.push(`新增 ${report.added.map(itemLabel).join("、")}`);
  if (report.changed.length) parts.push(`更新 ${report.changed.map(itemLabel).join("、")}`);
  if (report.removed.length) parts.push(`移除 ${report.removed.map(itemLabel).join("、")}`);
  const row = `| ${date} | 网站索引同步 | ${parts.join("；")}。来源：\`${path.relative(ROOT, source)}\` |\n`;
  const current = readText(FILES.syncLog) || syncLogHeader();
  const header = syncLogHeader();
  const body = current.startsWith(header) ? current.slice(header.length) : current;
  writeText(FILES.syncLog, `${header}${row}${body}`);
}

const previousManifest = readJsonFile(FILES.manifest, []);
const manifest = renderOnly ? previousManifest : buildManifest();
const report = compareManifests(previousManifest, manifest);

const outputs = [
  [FILES.manifest, manifestText(manifest)],
  [FILES.problemIndex, renderProblemIndex(manifest)],
  [FILES.topicIndex, renderTopicIndex(manifest)],
];

if (check || checkGenerated) {
  const stale = outputs.filter(([file, content]) => readText(file) !== content).map(([file]) => file);
  printReport(report, manifest);
  if (stale.length) {
    console.error(`generated files are stale:\n${stale.map((file) => `  - ${file}`).join("\n")}`);
    process.exit(1);
  }
  console.log("generated files are up to date");
  process.exit(0);
}

for (const [file, content] of outputs) writeText(file, content);
if (writeLog) appendSyncLog(report, sourceFile);

console.log(`synced ${manifest.length} LeetCode animation items`);
console.log(`source: ${renderOnly ? FILES.manifest : sourceFile}`);
printReport(report, manifest);
