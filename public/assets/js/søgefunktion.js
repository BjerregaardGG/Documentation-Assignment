import { noter as noter1 } from "../../lektioner/lektion_1/noter.js";
import { noter as noter2 } from "../../lektioner/lektion_2/noter.js";
import { noter as noter3 } from "../../lektioner/lektion_3/noter.js";
import { noter as noter4 } from "../../lektioner/lektion_4/noter.js";
import { noter as noter5 } from "../../lektioner/lektion_5/noter.js";
import { noter as noter6 } from "../../lektioner/lektion_6/noter.js";
import { noter as noter7 } from "../../lektioner/lektion_7/noter.js";

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const lektioner = [noter1, noter2, noter3, noter4, noter5, noter6, noter7];

function searchForSubject() {
    const search = searchInput.value.toLowerCase().trim(); // søgeord
    const articles = document.querySelectorAll(".note"); 
    
    articles.forEach((article, index) => {
        const notes = lektioner[index]; // noter for lektionen
        
        // vis artikel hvis søgningen er tom
        if (search === "") {
            article.style.display = 'block';
            return;
        }
        
        // vi tjekker om mindst et element i notes arrayet indeholder enten søgeord titel elle beskrivelse (some())
        const hasMatch = notes.some(note => {
            const title = (note.titel || "").toLowerCase();
            const beskrivelse = (note.beskrivelse || "").toLowerCase();
            
            return title.indexOf(search) !== -1 || beskrivelse.indexOf(search) !== -1;
        });
        
        // hvis match, så vis artiklen 
        article.style.display = hasMatch ? 'block' : 'none';
    });
}

searchButton.addEventListener("click", searchForSubject);
searchInput.addEventListener("input", searchForSubject);