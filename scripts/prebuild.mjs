import fs from "fs";
import path from "path";

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;

  fs.mkdirSync(dest, { recursive: true });

  for (const file of fs.readdirSync(src)) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const root = process.cwd();

copyDir(path.join(root, "contents/images"), path.join(root, "public/images"));
copyDir(path.join(root, "contents/assets"), path.join(root, "public/assets"));

console.log("copied: contents -> public");
