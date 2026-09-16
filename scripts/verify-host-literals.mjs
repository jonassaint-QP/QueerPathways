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
 *   1. any http:// URL literal            (non-TLS target)
 *   2. any URL literal whose host begins with www.
 *   3. any BARE hostname literal beginning with www. — a quoted string such as
 *      'www.queerpathways.org' with no protocol. Check 3 exists because the
 *      first version of this guard missed the actual offending literal: the
 *      hostnames in src/main.tsx are bare strings inside a Set, so a URL regex
 *      never saw them.
 *
 * MIGRATION_PENDING
 * A blocking check shipped mid-migration would fail the build on day one and
 * get ripped out. Instead, the known current offenders are listed explicitly.
 * They warn today; anything NEW fails. Empty this list as each literal is
 * replaced by a derived canonical constant, then delete the list entirely.
 *
 * WHAT IT DOES NOT BLOCK
 * Apex first-party hostnames and third-party service endpoints are legitimate.
 * They are reported as warnings so they stay reviewable without breaking build
 * runs. Third-party endpoints are allowlisted.
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

/**
 * Known bare www. hostname literals awaiting migration. These WARN, not fail.
 * Remove each entry as its literal is replaced, then delete this list.
 *
 * Currently expected: the RETAIL_HOSTS / CLINICAL_HOSTS sets in src/main.tsx.
 * Tracked as B10 in the Website Defect Register.
 */
const MIGRATION_PENDING = new Set(['www.queerpathways.org', 'www.queerpathways.com']);

const URL_PATTERN = /https?:\/\/[^\s"'`)\]}<>\\]+/g;

// A quoted string that is itself a bare hostname: 'www.example.com'
const BARE_HOST_PATTERN = /['"`]([a-z0-9-]+(?:\.[a-z0-9-]+)+)['"`]/gi;

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
let bareHostsScanned = 0;

for (const file of files) {
  const contents = fs.readFileSync(file, 'utf8');
  const lines = contents.split(/\r?\n/);

  lines.forEach((line, index) => {
    const where = `${relative(file)}:${index + 1}`;

    // ── Check 1 & 2: absolute URL literals ──────────────────────────────
    const urls = line.match(URL_PATTERN);
    if (urls) {
      for (const url of urls) {
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
    }

    // ── Check 3: bare www. hostname literals (no protocol) ──────────────
    const bare = line.match(BARE_HOST_PATTERN);
    if (!bare) return;

    for (const raw of bare) {
      const host = raw.slice(1, -1).toLowerCase();

      // Only bare hosts matter here; a URL literal was caught above.
      if (!host.includes('.')) continue;
      bareHostsScanned += 1;

      if (ALLOWED_HOSTS.has(host)) continue;

      if (!host.startsWith('www.')) {
        warnings.push(`${where}: bare hostname literal — ${host}`);
        continue;
      }

      if (MIGRATION_PENDING.has(host)) {
        warnings.push(
          `${where}: bare www hostname literal pending migration — ${host}\n` +
            `    known offender; replace with the derived canonical site constant and remove it from MIGRATION_PENDING`
        );
        continue;
      }

      errors.push(
        `${where}: bare www hostname literal — ${host}\n` +
          `    use the apex host, or derive the target from the canonical site constant`
      );
    }
  });
}

console.log(
  `Host-literal scan: ${files.length} files, ${literalsScanned} URL literals, ${bareHostsScanned} bare hostnames`
);

if (errors.length) {
  console.error('\nBlocking host-literal errors:');
  for (const error of errors) console.error(`- ${error}`);
}

if (warnings.length) {
  console.warn('\nNon-blocking host literals found (review only):');
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (errors.length) {
  console.error(
    '\nFix the blocked literals, or add a reviewed exception to ALLOWED_HOSTS in scripts/verify-host-literals.mjs.'
  );
  process.exitCode = 1;
} else {
  console.log('\nNo blocking host literals found.');
}
