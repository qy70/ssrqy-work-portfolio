import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const siteDir = path.join(rootDir, 'site');

const errors = [];

function checkExists(relPath) {
  const fullPath = path.resolve(siteDir, relPath);
  if (!fullPath.startsWith(siteDir + path.sep)) {
    errors.push(`Local asset escapes site/: ${relPath}`);
    return false;
  }
  if (!fs.existsSync(fullPath)) {
    errors.push(`Missing referenced local asset: ${relPath}`);
    return false;
  }
  return true;
}

// 1. Check local assets referenced by site/index.html
const indexPath = path.join(siteDir, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');
const refRegex = /\b(?:src|href)=["']([^"']+)["']/gi;
const htmlLocalRefs = [];
let match;
while ((match = refRegex.exec(indexHtml)) !== null) {
  const ref = match[1].trim();
  if (
    !ref ||
    ref.startsWith('#') ||
    ref.startsWith('http://') ||
    ref.startsWith('https://') ||
    ref.startsWith('data:')
  ) {
    continue;
  }
  htmlLocalRefs.push(ref);
  checkExists(ref);
}

// 2. Parse site/data.js in a clean VM sandbox and verify gallery assets
const dataPath = path.join(siteDir, 'data.js');
const dataCode = fs.readFileSync(dataPath, 'utf8');
let parsedData = null;
try {
  const sandbox = { window: {} };
  vm.runInNewContext(dataCode, sandbox, { filename: 'data.js' });
  parsedData = sandbox.window.AI_PORTFOLIO_DATA;
  if (!parsedData || !parsedData.en || !parsedData.zh) {
    errors.push('data.js parsed, but window.AI_PORTFOLIO_DATA.en or .zh is missing');
  }
} catch (err) {
  errors.push(`Failed to parse data.js: ${err.message}`);
}

const dataAssetRefs = new Set();
if (parsedData) {
  for (const lang of ['en', 'zh']) {
    const t = parsedData[lang];
    for (const sec of ['ta', 'workbench', 'harness']) {
      for (const item of t?.[sec]?.gallery || []) {
        if (item?.src) {
          dataAssetRefs.add(item.src);
          checkExists(item.src);
        }
      }
    }
  }
}

// 3. Scan site/ text files for forbidden secret keywords
const secretRegex = /(?:api_key|secret|password)/i;
const textFiles = ['index.html', 'app.js', 'data.js', 'styles.css'];
for (const file of textFiles) {
  const content = fs.readFileSync(path.join(siteDir, file), 'utf8');
  const hit = content.match(secretRegex);
  if (hit) {
    errors.push(`Forbidden secret keyword "${hit[0]}" found in site/${file}`);
  }
}

if (errors.length > 0) {
  for (const err of errors) console.error(`FAIL: ${err}`);
  process.exit(1);
}

console.log(
  `PASS: index.html refs (${htmlLocalRefs.length}) OK (${htmlLocalRefs.join(', ')})`
);
console.log(
  `PASS: data.js parsed OK (en/zh present, ${dataAssetRefs.size} gallery assets verified)`
);
console.log(
  `PASS: secret scan clean across ${textFiles.length} site/ text files`
);
