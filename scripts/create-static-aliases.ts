import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { basename, dirname, join, relative } from "node:path";

const outDir = join(process.cwd(), "out");

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

for (const file of walk(outDir)) {
  if (!file.endsWith(".html")) continue;
  if (basename(file) === "index.html" || basename(file) === "404.html") continue;

  const alias = join(dirname(file), basename(file, ".html"), "index.html");
  if (existsSync(alias)) continue;

  mkdirSync(dirname(alias), { recursive: true });
  copyFileSync(file, alias);
  console.log(`created ${relative(outDir, alias)}`);
}
