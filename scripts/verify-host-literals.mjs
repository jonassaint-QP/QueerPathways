/**
 * Host-literal guard.
 *
 * Run with: npm run verify:hosts
 * Wired into the prebuild chain alongside verify-env.mjs.
 *
 * WHY THIS EXISTS
 * The 2026-09-16 Search Console notice on queerpathways.org reported
 * "Page with redirect" for the www and http variants of the apex. The referring
 * URL was https://www.queerpathways.org/intimacy-and-relationship-issues — a
 * non-canonical host literal written directly into page code. Nothing in the
 * build could fail on that, so it sat there.
 *
 * It is the same defect class as the QP-Storefront homepage catalog grid, which
 * kept four hard-coded /shop/<slug> targets after those routes were retired with
 * 410 Gone. Two repos, one root cause: absolute targets written by hand instead
 * of derived from one canonical source, with no build gate.
 *
 * WHAT IT BLOCKS
 *   - any http:// URL literal            (non-TLS target)
 *   - any URL literal whose host begins with www.
 *
 * WHAT IT DOES NOT BLOCK
 * Third-party service endpoints are legitimate and are allowlisted below.
 * Anything else that reads like a link or asset target but is neither of the
 * two blocked shapes is reported as a warning so it can be reviewed without
 * breaking the build.
 */
import fs from 'node:fs';
import path from 'node:path';

const SCAN_DIRS = ['src', 'scripts', 'public'];
const SCAN_FILES = ['index.html', 'package.json'];
const SCAN_EXTENSIONS = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.html',
  '.css',
  '.json',
  '.md',
]);

// Legacy or generated trees are out of scope.
const EXCLUDED_DIRS = new Set([
  'node_modules',
  'dist',
  'archives',
  '.git',
  '.netlify',
  'images',
]);

// Legitimate third-party service endpoints.
const ALLOWED_HOSTS = new Set([
  'secure.networkmerchants.com',
  'api.github.com',
  'github.com',
  'schema.org',
  'www.sitemaps.org',
  'www.w3.org',
]);

const URL_PATTERN = /https?:\/\/[^\s"'`)\]}<>\\]+/g;

/** @type {string[]} */
const errors = [];
/** @type {string[]} */
const warnings = [];

function collectFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name)) continue;
      out.push(...collectFiles(full));
      continue;
    }
    out.push(full);
  }
  return out;
}

function relative(filePath) {
  return path.relative(process.cwd(), filePath);
}

function hostOf(url) {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return '';
  }
}

const files = [
  ...SCAN_DIRS.flatMap((dir) => collectFiles(dir)),
  ...SCAN_FILES.filter((file) => fs.existsSync(file)),
].filter((file) => SCAN_EXTENSIONS.has(path.extname(file)));

let literalsScanned = 0;

for (const file of files) {
  const contents = fs.readFileSync(file, 'utf8');
  const lines = contents.split(/\r?\n/);

  lines.forEach((line, index) => {
    const matches = line.match(URL_PATTERN);
    if (!matches) return;

    const where = `${relative(file)}:${index + 1}`;

    for (const url of matches) {
      literalsScanned += 1;
      const host = hostOf(url);

      if (!host || ALLOWED_HOSTS.has(host)) continue;

      if (url.startsWith('http://')) {
        errors.push(`${where}: non-TLS URL literal — ${url}`);
        continue;
      }

      if (host.startsWith('www.')) {
        errors.push(
          `${where}: non-canonical www host literal — ${url}\n` +
            `    use the apex host for first-party URLs, or derive the target from the canonical site constant`
        );
        continue;
      }

      warnings.push(`${where}: absolute URL literal — ${url}`);
    }
  });
}

console.log(`Host-literal scan: ${files.length} files, ${literalsScanned} URL literals`);

if (errors.length) {
  console.error('\nBlocking host-literal errors:');
  for (const error of errors) console.error(`- ${error}`);
}

if (warnings.length) {
  console.warn('\nNon-blocking absolute URLs found (review only):');
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (errors.length) {
  console.error(
    '\nFix the blocked literals, or add a reviewed exception to ALLOWED_HOSTS in scripts/verify-host-literals.mjs.'
  );
  process.exitCode = 1;
} else {
  console.log('\nNo non-TLS or www host literals found.');
}
