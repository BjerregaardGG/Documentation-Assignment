export const noter = [
    { titel: "Nodemon", billede: "lektion_3/images/nodemon.png", deklerationer: [
        { dek: "npm install -g nodemon", beskrivelse: `Installerer nodemon globalt på ens maskine, så man kan anvende 'nodemon' kommandoen på tværs af ens projekter. Kan kræve 'sudo', hvis man skal have admin rettigheder.` }, 
        { dek: "npm install nodemon", beskrivelse: `Installerer nodemon lokalt i ens projekt, hvorefter det automatisk tilføjes til package.json filen. `},
        { dek: "nodemon app.js", beskrivelse: `Starter serveren med nodemon og restarter når der foretages ændringer projektets filer.`} ],
        beskrivelse: `Nodemon er et command-line værktøj som kan anvendes til automatisk at restarte vores server, når vi foretager os ændringer. Dette er rart som udvikler, da vi ikke konstant skal ned i terminalen og manuelt restarte vores server. Nodemon reserverer vi dog til 'development' og ikke 'production', da vi i produktion ofte har serveren til at køre konstant og ikke vil have det til at restarte på ændringer. ` },
    { titel: "Loop methods", deklerationer: [
        { dek: "forEach()", billede: "", beskrivelse: "" },
        { dek: "map()", billede: "", beskrivelse: "" },
        { dek: "filter()", billede: "", beskrivelse: "" },
        { dek: "reduce()", billede: "", beskrivelse: "" },
        { dek: "find()", billede: "", beskrivelse: "" },
        { dek: "indexOf()", billede: "", beskrivelse: "" }], 
        beskrivelse: "" },
    { titel: "Functional approach to loops", beskrivelse: ""},
    { titel: "URL Terminology", billedeVis: "lektion_3/images/url.png", beskrivelse: ""},
    { titel: "POST request with parse body", beskrivelse: ""},
];