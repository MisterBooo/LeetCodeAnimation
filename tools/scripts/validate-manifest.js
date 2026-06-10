#!/usr/bin/env node
/**
 * Validate docs/data/manifest.json without external npm dependencies.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "../..");
const manifestPath = path.join(ROOT, "docs/data/manifest.json");
const data = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

const DIFFICULTIES = new Set(["easy", "medium", "hard"]);
const STATUSES = new Set(["site-animation", "repo-only", "planned"]);
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const PID_RE = /^lc\d+$/;

const errors = [];
const warnings = [];

function fail(tag, message) {
  errors.push(`[${tag}] ${message}`);
}

function warn(tag, message) {
  warnings.push(`[${tag}] ${message}`);
}

if (!Array.isArray(data)) {
  fail("schema", "manifest root must be an array");
} else {
  const ids = new Set();
  const slugs = new Set();

  for (const item of data) {
    const label = item && item.leetcodeId ? `#${item.leetcodeId} ${item.slug || ""}`.trim() : "(unknown item)";

    if (!Number.isInteger(item.leetcodeId) || item.leetcodeId < 1) fail("schema", `${label} leetcodeId must be a positive integer`);
    if (!item.sourcePid || !PID_RE.test(item.sourcePid)) fail("schema", `${label} sourcePid must look like lc123`);
    if (!item.slug || !SLUG_RE.test(item.slug)) fail("schema", `${label} slug must be kebab-case`);
    if (!item.titleZh) fail("schema", `${label} titleZh is required`);
    if (!DIFFICULTIES.has(item.difficulty)) fail("schema", `${label} difficulty must be easy/medium/hard`);
    if (!item.categoryZh) fail("schema", `${label} categoryZh is required`);
    if (!Array.isArray(item.topicsZh) || item.topicsZh.length === 0) fail("schema", `${label} topicsZh must be a non-empty array`);
    if (!STATUSES.has(item.status)) fail("schema", `${label} status must be site-animation/repo-only/planned`);
    if (!item.siteUrl || !/^https:\/\/www\.algomooc\.com\/leetcode-animation\/[a-z0-9-]+$/.test(item.siteUrl)) {
      fail("schema", `${label} siteUrl must be an AlgoMooc leetcode-animation URL`);
    }

    if (ids.has(item.leetcodeId)) fail("unique", `${label} duplicate leetcodeId`);
    if (slugs.has(item.slug)) fail("unique", `${label} duplicate slug`);
    ids.add(item.leetcodeId);
    slugs.add(item.slug);

    if (item.sourcePid !== `lc${item.leetcodeId}`) warn("source", `${label} sourcePid does not match leetcodeId`);
    for (const topic of item.topicsZh || []) {
      if (typeof topic !== "string" || !topic.trim()) fail("schema", `${label} topic must be a non-empty string`);
    }

    if (item.repoPath && !fs.existsSync(path.join(ROOT, item.repoPath))) fail("path", `${label} repoPath does not exist: ${item.repoPath}`);
    if (item.gifPath && !/^https?:\/\//.test(item.gifPath) && !fs.existsSync(path.join(ROOT, item.gifPath))) {
      fail("path", `${label} gifPath does not exist: ${item.gifPath}`);
    }
  }
}

for (const message of warnings) console.warn("! " + message);

if (errors.length) {
  console.error(`x manifest validation failed (${errors.length})`);
  for (const message of errors) console.error("  " + message);
  process.exit(1);
}

console.log(`ok manifest validation passed: ${Array.isArray(data) ? data.length : 0} items`);
