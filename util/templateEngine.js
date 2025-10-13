// templateEngine.js
import fs from 'fs';

// komponenter
const header = readPage("./public/components/header.html");
const footer = readPage("./public/components/footer.html");
const lektionTemplate = readPage("./public/lektioner/lektion-template.html");
const forsideTemplate = readPage("./public/forside/forside-template.html")

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

export function readPage(path) {
    return fs.readFileSync(path).toString();
}