export const noter = [
    { titel: "Node.js", deklerationer: [
        { dek: "node app.js", beskrivelse: "Med denne kommando kører vi vores JS fil." },
        { dek: "node", beskrivelse: "Dette er REPL (Read Evaluate Print Loop), hvor vi kan teste js kode i terminalen, ligesom i vores concole, når vi inspicerer i browseren." }],
        beskrivelse: `JS har førhen været browserens sprog. Dette kan man komme udenom ved at tage V8 Engine, og køre det udenfor webbrowseren, hvilket er her Node.js kommer ind i billedet. Node.js er et open-source js runtime miljø. Dette betyder at vi kan gå fra client-side development til server-side development med JS. Dette muliggør at vi kan brygge vores egne full stack løsninger med samme sprog. Vi kan køre filer med node kommandoen i terminalen.` },
    { titel: "Git in the terminal", deklerationer: [
        { dek: "git status", beskrivelse: "Viser status på ens git flow." },
        { dek: "git add -A", beskrivelse: "Tilføjer alle ændringer til staging." },
        { dek: `git commit -m "(commit besked)"`, beskrivelse: "Committer ændringer med en commit besked." },
        { dek: "git push", beskrivelse: "Pusher commits til ens remote repository." }], 
        beskrivelse: `Når vi anvender os af Node.js, så foregår meget af kørslen i terminalen. Ligeså vel som vi skal vænne os til at køre eksempelvis scripts i terminalen, så kører vi også ofte git kommandoer gennem terminalen. Nendenfor er eksempler på nogle af de mest anvendte git kommandoer.` },
    { titel: "Data types ", dataTyper: ["String", "Boolean", "Number", "BigInt", "Object", "Symbol", "Undefined", "Null"], 
        beskrivelse: `Vi anvende variabler som beholdere til dataværdier. Når vi anvender variable, så er det essentielt, at vi kender til de forskellige datatyper, så vi undgår errors i vores software. JS har 8 datatyper.` }, 
    { titel: "JS objekter vs JSON", billede: "lektioner/lektion_1/images/jsonvsjs.png", beskrivelse: `JS objekter og JSON kan godt ligne hinanden, men der er nogle forskelle, som man skal være opmærksom på, når man arbejder med dem. Begge har Key-Value pair. Der skal dog være anførselstegn på keys i JSON, men ikke på keys i JS objekter. Selmicolon kan anvendes efter objektet i JS, men ikke i JSON og det samme gælder for trading komma.` },
    { titel: "Type coercion", billede: "lektioner/lektion_1/images/coercion.png", beskrivelse: `JS er et fleksibelt sprog, forstået på den måde, at det automatisk konverterer typer. Hvis vi eksempelvi lægger en 'int' sammen med en 'string', så vil JS konvertere vores int til en string, hvilket kan give os et resultat som vi ikke er interesset i. Vi kan undgå type coercion gennem nedenstående teknikker.` },
    { titel: "REST API Design", billede: "lektioner/lektion_1//images/rest_api_design.png", deklerationer: [ 
        { dek: "Using the right HTTP verb", beskrivelse: `Vi skal anvende de korrekte HTTP metoder, alt efter om vores ønsket opreration er en GET, POST, PUT, PATCH eller DELETE.`}, 
        { dek: "Ordering", beskrivelse: `Dette vedrører hvordan vi organiserer vores endpoints, men også rækkefølgen af vores HTTP metoder. Vi har eksempelvis ikke vores HTTP DELETE metode øverst i vores REST API.`}, 
        { dek: "Naming", beskrivelse: `Dette vedrører hvordan vi navngiver vores endpoints. Vi anvender os af substantiver og ikke verber. Vi anvender os af lowercase og hvis vi har flere ord gør vi brug af bindestreg.`} ], 
        beskrivelse: `Når vi designer et REST API, så følger vi nogle strikse konventioner, for at sikre gennemsigtighed, konsekvent design og at udviklere kan forså koden.` },
    { titel: "Clean Code principles", beskrivelse: `Vi kan sagtens skrive kode der virker, uden det nødvendigvis er særlig pænt. Men vil det ikke være bedre, hvis vi kan skrive kode der virker, som samtidig er let at forstå for andre udviklere og samtidig også let at vedligeholde? Det er her at clean code principperne kommer ind i billedet. ` }
]; 

