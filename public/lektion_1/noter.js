export const noter = [
    { titel: "Node.js", beskrivelse: `JS har førhen været browserens sprog. Dette kan man komme udenom ved at tage V8 Engine, og køre det udenfor webbrowseren, hvilket er her Node.js kommer ind i billedet. Node.js er et open-source js runtime miljø. Dette betyder at vi kan gå fra client-side development til server-side development med JS. Vi kan køre filer med node kommandoen i terminalen.` },
    { titel: "Git in the terminal", deklerationer: [
        { dek: "git status", beskrivelse: "Viser status på ens git flow"},
        { dek: "git add -A", beskrivelse: "Tilføjer alle ændringer til staging"},
        { dek: `git commit -m "(commit besked)"`, beskrivelse: "Committer ændringer med en commit besked"},
        { dek: "git push", beskrivelse: "Pusher commits til ens remote repository"} ], 
        beskrivelse: `Når vi anvender os af Node.js, så foregår meget af kørslen i terminalen. Ligeså vel som vi skal vænne os til at køre eksempelvis scripts i terminalen, så kører vi også ofte git kommandoer gennem terminalen.` },
    { titel: "Data types ", dataTyper: ["String", "Boolean", "Number", "BigInt", "Object", "Symbol", "Undefined", "Null"], 
        beskrivelse: `Når vi anvender variable, så er det essentielt, at vi kender til de forskellige datatyper, så vi undgår errors i vores software. JS har 8 datatyper.` }, 
    { titel: "Data Variables", billede: "lektion_1/images/navn.png", deklerationer: [
        { dek: "const", beskrivelse: `Vi anvender 'const' som standard, medmindre vi har behov for at reassigne variabler. Her er det essentielt at forstå at det er referrencen der er konstant og ikke selve værdien.` }, 
        { dek: "let", beskrivelse: `Vi anvende 'var' når vi løber ind i problemer med const. Altså, at der er et behov for ar reassigne variablen. Her er det essentielt at forstå, at 'let' har 'block scope', hvilket betyder at deklerationen kun gælder indenfor { (herinde) }.`},
        { dek: "var", beskrivelse: `Vi vil generelt ikke anvende os af 'var' i JS, hvis vi kan anvende os af 'const' eller 'let'. Dette skyldes, at 'var' har function scope, men ikke 'block scope', hvilket kan føre til fejl. Variabler deklareret med 'var' lever altså enten i funktionen hvor den er dekleraret eller globalt, hvis det er udenfor selve funktionen.`} ],
        beskrivelse: `Såvel som det er vigtigt at kende til datatyperne i JS, så er det ligeså vigtigt at kende til variabel deklerationer.` },
    { titel: "JS objekter vs JSON", beskrivelse: `JS objekter og JSON kan godt ligne hinanden, men der er nogle forskelle, som man skal være opmærksom på, når man arbejder med dem. Begge har Key-Value pair. Der skal dog være anførselstegn på keys i JSON, men ikke på keys i JS objekter. Selmicolon kan anvendes efter objektet i JS, men ikke i JSON og det samme gælder for trading komma.` },
    { titel: "Type coercion", beskrivelse: `JS er et fleksibelt sprog, forstået på den måde, at det automatisk konverterer typer. Hvis vi eksempelvi lægger en 'int' sammen med en 'string', så vil JS konvertere vores int til en string, hvilket kan give os et resultat som vi ikke er interesset i. Vi kan undgå type coercion gennem følgende teknikker.` },
    { titel: "REST API Design", deklerationer: [ 
        { dek: "Using the right HTTP verb", beskrivelse: `Vi skal anvende de korrekte HTTP metoder, alt efter om vores ønsket opreration er en GET, POST, PUT, PATCH eller DELETE.`}, 
        { dek: "Ordering", beskrivelse: `Dette vedrører hvordan vi organiserer vores endpoints, men også rækkefølgen af vores HTTP metoder. Vi har eksempelvis ikke vores HTTP DELETE metode øverst i vores REST API.`}, 
        { dek: "Naming", beskrivelse: `Dette vedrører hvordan vi navngiver vores endpoints. Vi anvender os af substantiver og ikke verber. Vi anvender os af lowercase og hvis vi har flere ord gør vi brug af bindestreg.`} ], 
        beskrivelse: `Når vi designer et REST API, så følger vi nogle strikse konventioner, for at sikre gennemsigtighed, konsekvent design og at udviklere kan forså koden.` },
    { titel: "Clean Code principles", beskrivelse: `Vi kan sagtens skrive kode der virker, uden det nødvendigvis er særlig pænt. Men vil det ikke være bedre, hvis vi kan skrive kode der virker, som samtidig er let at forstå for andre udviklere og samtidig også let at vedligeholde? Det er her at clean code principperne kommer ind i billedet. ` }
]; 

