// Builds the www/ folder: copies index.html and the PDF engine (pdf.js legacy build)
const fs = require('fs');
const path = require('path');
const root = __dirname;
const www = path.join(root, 'www');
fs.mkdirSync(www, { recursive: true });
fs.copyFileSync(path.join(root, 'index.html'), path.join(www, 'index.html'));
const src = path.join(root, 'node_modules', 'pdfjs-dist', 'legacy', 'build');
for (const f of ['pdf.min.js', 'pdf.worker.min.js']) {
  const from = path.join(src, f);
  if (!fs.existsSync(from)) { console.error('Missing ' + from + ' - run "npm install" first.'); process.exit(1); }
  fs.copyFileSync(from, path.join(www, f));
  console.log('copied', f);
}
