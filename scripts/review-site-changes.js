#!/usr/bin/env node
/**
 * Review whether current AlgoMooc website-side animation changes should be
 * synchronized back into this repository.
 */
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const DEFAULT_SITE_ROOT = path.resolve(ROOT, "../AlgoMoocOJ");
const DEFAULT_SOURCE = "web/public/leetcode-animation/study_index.js";

const args = process.argv.slice(2);

function getArg(name, fallback) {
  const index = args.indexOf(name);
  if (index >= 0 && args[index + 1]) return args[index + 1];
  return fallback;
}

const siteRoot = path.resolve(getArg("--site-root", process.env.ALGOMOOC_SITE_ROOT || DEFAULT_SITE_ROOT));
const sourceRel = getArg("--source", DEFAULT_SOURCE);
const sourceFile = path.join(siteRoot, sourceRel);
const manifestFile = path.join(ROOT, "data/manifest.json");

function sh(command, commandArgs, options = {}) {
  try {
    return execFileSync(command, commandArgs, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], ...options }).trim();
  } catch (error) {
    return "";
  }
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

function normalize(item) {
  return {
    leetcodeId: item.num,
    sourcePid: item.pid,
    slug: item.slug,
    titleZh: item.title,
    difficulty: difficulty(item.diff),
    categoryZh: item.cat,
  };
}

function itemLabel(item) {
  return `#${item.leetcodeId} ${item.titleZh} (${item.slug})`;
}

function loadCurrentManifest() {
  if (!fs.existsSync(manifestFile)) return [];
  return JSON.parse(fs.readFileSync(manifestFile, "utf8"));
}

function compare() {
  const current = loadCurrentManifest().map((item) => ({
    leetcodeId: item.leetcodeId,
    sourcePid: item.sourcePid,
    slug: item.slug,
    titleZh: item.titleZh,
    difficulty: item.difficulty,
    categoryZh: item.categoryZh,
  }));
  const next = readProblems(sourceFile)
    .filter((item) => /^lc\d+$/.test(item.pid) && Number.isInteger(item.num))
    .map(normalize)
    .sort((a, b) => a.leetcodeId - b.leetcodeId);

  const currentById = new Map(current.map((item) => [item.leetcodeId, item]));
  const nextById = new Map(next.map((item) => [item.leetcodeId, item]));
  const added = next.filter((item) => !currentById.has(item.leetcodeId));
  const removed = current.filter((item) => !nextById.has(item.leetcodeId));
  const changed = next.filter((item) => currentById.has(item.leetcodeId) && JSON.stringify(currentById.get(item.leetcodeId)) !== JSON.stringify(item));
  return { added, removed, changed, nextCount: next.length };
}

function siteStatus() {
  const output = sh("git", [
    "-C",
    siteRoot,
    "status",
    "--short",
    "--",
    "web/public/leetcode-animation",
    "web/src/lib/leetcode-animation.ts",
    "web/src/components/leetcode-animation-player.tsx",
  ]);
  return output ? output.split("\n") : [];
}

function suggestedMessage(report) {
  if (report.added.length === 1 && !report.changed.length && !report.removed.length) {
    const item = report.added[0];
    return `docs: sync lc${item.leetcodeId} ${item.slug} animation index`;
  }
  if (report.changed.length === 1 && !report.added.length && !report.removed.length) {
    const item = report.changed[0];
    return `docs: update lc${item.leetcodeId} ${item.slug} animation index`;
  }
  return "docs: sync latest LeetCode animation index";
}

const report = compare();
const status = siteStatus();
const htmlChanges = status.filter((line) => /web\/public\/leetcode-animation\/[^/]+\/index\.html$/.test(line));
const indexChanged = status.some((line) => line.includes(sourceRel));
const hasManifestDrift = report.added.length || report.changed.length || report.removed.length;

console.log("# AlgoMooc -> LeetCodeAnimation 同步审查");
console.log(`site root: ${siteRoot}`);
console.log(`source: ${sourceFile}`);
console.log(`website LeetCode items: ${report.nextCount}`);
console.log(`manifest drift: ${hasManifestDrift ? "yes" : "no"}`);
console.log("");

if (report.added.length) console.log(`新增题目:\n${report.added.map((item) => `  - ${itemLabel(item)}`).join("\n")}`);
if (report.changed.length) console.log(`索引变更:\n${report.changed.map((item) => `  - ${itemLabel(item)}`).join("\n")}`);
if (report.removed.length) console.log(`移除题目:\n${report.removed.map((item) => `  - ${itemLabel(item)}`).join("\n")}`);

if (status.length) {
  console.log("\n网站侧相关工作区变更:");
  for (const line of status) console.log(`  ${line}`);
}

console.log("\n建议:");
if (hasManifestDrift) {
  console.log("  需要同步到 LeetCodeAnimation 仓库。运行：");
  console.log("    node scripts/sync-algomooc-index.js --log");
  console.log("    node scripts/validate-manifest.js");
  console.log("    git add data/manifest.json docs/leetcode-animation-index.md docs/index-by-topic.md docs/sync-log.md");
  console.log(`    git commit -m "${suggestedMessage(report)}"`);
} else if (htmlChanges.length || indexChanged) {
  console.log("  当前 manifest 没有变化。若只是修复动画 HTML/交互，通常只提交网站仓库即可。");
  console.log("  如果这次修复值得在 GitHub 留痕，可以手动补一行 docs/sync-log.md，再用 docs: log ... 提交。");
} else {
  console.log("  暂不需要同步到 LeetCodeAnimation 仓库。");
}
