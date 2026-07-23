import fs from 'fs';
import path from 'path';

import HomePage from "#pages/index";

const html = HomePage();

fs.mkdirSync("dist", {recursive: true, force: true});

fs.cpSync("public", path.join("dist", "public"), {recursive: true});

const scriptsDirectory = path.join("dist", "public", "js");
fs.mkdirSync(scriptsDirectory, {recursive: true});
fs.copyFileSync(path.join("src", "js", "main.js"), path.join(scriptsDirectory, "main.js"));

const output = path.join("dist","index.html");

fs.writeFileSync(output,html,"utf-8");

console.log('Done');
