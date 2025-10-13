// templateEngine.js
import fs from 'fs';

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function readPage(path) {
    return fs.readFileSync(path.join(__dirname, path));
}

// komponenter
const header = readPage("../components/header.html");
const footer = readPage("../components/footer.html");
const lektionTemplate = readPage("../lektioner/lektion-template.html");
const forsideTemplate = readPage("../forside/forside-template.html")

// forside script 
const scriptForside = `<script type="module" src="/forside/index.js"></script>
        <script type="module" src="/assets/js/søgefunktion.js"></script>`;

// funktion til at skabe forside
export function constructPage(options = {}) {
    return header
    .replace('$$TAB_TITLE$$', options.tabTitle || "Node.js Documentation")
    .replace('$$CSS_LINKS$$', `<link rel="stylesheet" href="/assets/css/index.css">`)
     + forsideTemplate 
     + footer.replace('$$JS_LINKS$$', scriptForside);
} 

// funktion til at skabe lektion sider 
export function constructLektion(lektionId, options = {}) {
    const scriptLektioner = `<script type="module" src="/lektioner/${lektionId}/${lektionId}.js"></script>`

    return header
        .replace('$$TAB_TITLE$$', options.tabTitle || lektionId)
        .replace('$$CSS_LINKS$$', `<link rel="stylesheet" href="/assets/css/style.css">`)
        + lektionTemplate
        + footer.replace('$$JS_LINKS$$', scriptLektioner);
}

