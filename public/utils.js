
// lektioner 
const lektioner = [
    { titel: "1. Introduction" , link: "lektion_1.html" },
    { titel: "2. First server" , link: "lektion_2.html" },
    { titel: "3. Loop Methods" , link: "lektion_3.html" },
    { titel: "4. HTML & Time" , link: "lektion_4.html" },
    { titel: "5. Import & Export" , link: "lektion_5.html" },
    { titel: "6. Client vs Server + Env Variables" , link: "lektion_6.html" },
]

// funktion til at tilføje header til HTML 
export function addHeaderToHTML(){
    const header = document.querySelector(".header_lektion");

    if (!header) {
        return;
    };

    const currentWindow = window.location.pathname.split("/").pop(); 

    // finder nuværende lektion (eks lektion_4.html)
    const lektion = lektioner.find(lektion => lektion.link === currentWindow);

    const div = document.createElement("div");
    div.className = "container"; 

    // opretter container med h1 
    const titel = document.createElement("h1");
    titel.innerText = (lektion.titel); 
    div.appendChild(titel); 

    // opretter nav bar med dropdown 
    const nav = document.createElement("nav"); 
    const unorderedList = document.createElement("ul"); 

    const forsideList= document.createElement("li");
    const forsideLink = document.createElement("a");
    forsideLink.href = "/";
    forsideLink.innerText = "Forside";
    forsideList.appendChild(forsideLink);
    unorderedList.appendChild(forsideList);

    const dropdownList = document.createElement("li"); 
    dropdownList.className = "dropdown"
    const dropdownLink = document.createElement("a"); 
    dropdownLink.href = "#"; 
    dropdownLink.innerText = "Lektioner ▾"
    dropdownList.appendChild(dropdownLink); 


    // tilføjer dynamisk titel og link til dropdown 
    const dropdownMenu = document.createElement("ul"); 
    dropdownMenu.className = "dropdown_menu"; 

    lektioner.forEach(lektion => {
        const list = document.createElement("li");
        const link = document.createElement("a"); 

        link.href = lektion.link;
        link.innerText = lektion.titel; 

        list.appendChild(link); 
        dropdownMenu.appendChild(list); 
    });

    dropdownList.appendChild(dropdownMenu); 
    unorderedList.appendChild(dropdownList); 
    nav.appendChild(unorderedList); 
    div.appendChild(nav);
    header.appendChild(div);
};

export function addFooterToHTML(){
    const årstal = document.getElementById("copyright-year");
    årstal.innerText = new Date().getFullYear();
};

export function addNotesToHTML(noter, divClass = ".notes"){
    const notesDiv = document.querySelector(divClass); 
    
    if (!notesDiv) {
        return; 
    }; 

    noter.forEach(note => {
        const section = document.createElement("section"); 
        section.className = "note"; 
        
        // tilføjer titel til hver note
        const titel = document.createElement("h2"); 
        titel.innerText = note.titel; 
        section.appendChild(titel); 

        // tilføjer beskrivelse til hver note 
        const beskrivelse = document.createElement("p"); 
        beskrivelse.innerText = note.beskrivelse; 
        section.appendChild(beskrivelse); 

        // hvis der er datatyper, så lav en liste. 
        if (note.dataTyper) {
            const unorderedList = document.createElement("ul"); 

            note.dataTyper.forEach(datatype => {
                const punkt = document.createElement("li"); 
                punkt.innerText = datatype;

                unorderedList.appendChild(punkt);
            });

            section.appendChild(unorderedList);
        };

        // hvis der er deklerationer, så lav en liste. 
        if (note.deklerationer) {
            const unorderedList = document.createElement("ul"); 

            note.deklerationer.forEach(dekleration => {
                const punkt = document.createElement("li");

                const titel = document.createElement("h4"); 
                titel.innerText = dekleration.dek; 

                const beskrivelse = document.createElement("p"); 
                beskrivelse.innerText = dekleration.beskrivelse; 

                punkt.appendChild(titel);
                punkt.appendChild(beskrivelse); 
                unorderedList.appendChild(punkt); 
            });
            
            section.appendChild(unorderedList); 
        };

        // Hvis der er et billede
        if (note.billede) {
            const button = document.createElement("button");
            button.innerText = "Vis udvidet eksempel";
            button.className = "vis-billede-knap";

            let billede = null; 
  
            button.addEventListener("click", () => {
                if (!billede) {
                    billede = document.createElement("img"); 
                    billede.src = note.billede; 
                    
                    billede.style.marginTop = "1rem"; 
                    billede.style.display = "block"; 
                    billede.style.width = "100%";
                    billede.style.maxWidth = "870px";
                    
                    section.appendChild(billede); 
                    button.innerText = "Skjul udvidet eksempel";
                } else {
                    section.removeChild(billede);
                    billede = null; 
                    button.innerText = "Vis udvidet eksempel";
                }
            });
  
            section.appendChild(button);
        };

        notesDiv.appendChild(section);
    });

};
