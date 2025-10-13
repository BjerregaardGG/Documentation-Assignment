import { lektioner } from "../assets/js/utils.js";
import { addFooterToHTML } from "../assets/js/utils.js";

// tilføjer header 
const header = document.querySelector(".header_lektion");

if (header) {
    const containerDiv = document.createElement("div");
    containerDiv.className = "container";

    // Titel
    const h1 = document.createElement("h1");
    h1.innerText = "Node.js Documentation";
    containerDiv.appendChild(h1);

    // Navigation
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    // Forside-link
    const link = document.createElement("li");
    const linkHome = document.createElement("a");
    linkHome.href = "/";
    linkHome.innerText = "Forside";
    link.appendChild(linkHome);
    ul.appendChild(link);

    // Dropdown for lektioner
    const linkDropdown = document.createElement("li");
    linkDropdown.className = "dropdown";
    const aDropdown = document.createElement("a");
    aDropdown.href = "#";
    aDropdown.innerText = "Lektioner ▾";
    linkDropdown.appendChild(aDropdown);

    const dropdownUl = document.createElement("ul");
    dropdownUl.className = "dropdown_menu";

    lektioner.forEach(lektion => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = lektion.link;
        a.innerText = lektion.titel;
        li.appendChild(a);
        dropdownUl.appendChild(li);
    });

    linkDropdown.appendChild(dropdownUl);
    ul.appendChild(linkDropdown);

    nav.appendChild(ul);
    containerDiv.appendChild(nav);
    header.appendChild(containerDiv);
}

// hero section
const heroSection = document.querySelector(".hero");

const heroContainer = document.createElement("div");
heroContainer.className = "container";

const h2 = document.createElement("h2");
h2.innerText = "Mandatory Assignment";

const p = document.createElement("p");
p.innerText = "På denne side finder du et noteskatalog for valgfaget Node.js fra 4. semester på Erhvervsakademiet. Hver side er navngivet efter den respektive undervisningsgang, hvor der hertil findes uddybende noter for hver enkelt fags læringsmål.";

heroContainer.appendChild(h2);
heroContainer.appendChild(p);
heroSection.appendChild(heroContainer);

// noter og søgefelt 
const main = document.querySelector("main");

// container til main-indhold
const mainContainer = document.createElement("div");
mainContainer.className = "container";

// search button
const searchBox = document.createElement("div");
searchBox.className = "search-box";

const input = document.createElement("input");
input.type = "text";
input.id = "searchInput";
input.placeholder = "Søg blandt alle lektioner..";

const button = document.createElement("button");
button.className = "btn";
button.id = "searchButton";
button.innerText = "Søg";

searchBox.appendChild(input);
searchBox.appendChild(button);
mainContainer.appendChild(searchBox);

// noter 
const notesSection = document.querySelector(".notes_section");

// Opret hver note 
lektioner.forEach(lektion => {
    const article = document.createElement("article");
    article.className = "note";

    const titel = document.createElement("h2");
    titel.innerText = lektion.titel;
    article.appendChild(titel);

    // Dato
    const dato = document.createElement("p");
    dato.innerText = "Dato: ";
    const datoStamp = document.createElement("time");
    datoStamp.innerText = lektion.dato;
    datoStamp.setAttribute("datetime", lektion.dato);
    dato.appendChild(datoStamp);
    article.appendChild(dato);

    // Link
    const link = document.createElement("a");
    link.href = lektion.link;
    link.innerText = "Læs mere";
    article.appendChild(link);

    notesSection.appendChild(article);
});

mainContainer.appendChild(notesSection);
main.appendChild(mainContainer);

addFooterToHTML();

