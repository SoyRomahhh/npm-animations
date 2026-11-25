import { readFile, writeFile } from "node:fs/promises";

const htmlPath = new URL("../index.html", import.meta.url);
const cssPath = new URL("../index.css", import.meta.url);
const html = await readFile(htmlPath, "utf8");
const css = (await readFile(cssPath, "utf8")).trim();
const inlineStyle = `<style id="animation-library">\n${css}\n</style>`;
const existingStyle = /<style id="animation-library">[\s\S]*?<\/style>/;

if (existingStyle.test(html)) {
  await writeFile(htmlPath, html.replace(existingStyle, inlineStyle));
} else if (html.includes('<link rel="stylesheet" href="index.css">')) {
  await writeFile(htmlPath, html.replace('<link rel="stylesheet" href="index.css">', inlineStyle));
} else {
  throw new Error("Could not find the animation stylesheet link or generated style block.");
}
