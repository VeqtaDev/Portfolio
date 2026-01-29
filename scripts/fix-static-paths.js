/**
 * Remplace les chemins absolus par des chemins relatifs dans out/
 * pour que index.html fonctionne en local (double-clic) et sur GitHub Pages.
 */
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");
if (!fs.existsSync(outDir)) {
  console.log("Dossier out/ introuvable, rien à modifier.");
  process.exit(0);
}

function walkDir(dir, ext, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkDir(full, ext, callback);
    else if (path.extname(file) === ext) callback(full);
  }
}

function fixContent(content) {
  // Remplacer les chemins absolus par relatifs (précédés de " ou ') pour ne pas toucher à http(s)://
  return content
    .replace(/(["'])\/_next\//g, "$1./_next/")
    .replace(/(["'])\/icon\.svg/g, "$1./icon.svg")
    .replace(/(["'])\/videos\//g, "$1./videos/")
    .replace(/(["'])\/projects\//g, "$1./projects/")
    .replace(/(["'])\/skills\//g, "$1./skills/")
    .replace(/(["'])\/hero-bg/g, "$1./hero-bg")
    .replace(/(["'])\/lock-/g, "$1./lock-")
    .replace(/(["'])\/music\.mp3/g, "$1./music.mp3")
    .replace(/(["'])\/logo\.png/g, "$1./logo.png");
}

let count = 0;
[".html", ".js"].forEach((ext) => {
  walkDir(outDir, ext, (file) => {
    let content = fs.readFileSync(file, "utf8");
    const updated = fixContent(content);
    if (updated !== content) {
      fs.writeFileSync(file, updated, "utf8");
      count++;
    }
  });
});

console.log(`Chemins relatifs appliqués dans ${count} fichier(s) sous out/`);
