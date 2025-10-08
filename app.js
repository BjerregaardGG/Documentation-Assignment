import express from "express"; 
import path from "path"; 
const app = express(); 

app.use(express.static("public")); 

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/forside/index.html"));
});

app.get("/lektion_1.html", (req, res) => {
    res.sendFile(path.resolve("public/lektion_1/lektion_1.html"));
});

app.get("/lektion_2.html", (req, res) => {
    res.sendFile(path.resolve("public/lektion_2/lektion_2.html"));
});

app.get("/lektion_3.html", (req, res) => {
    res.sendFile(path.resolve("public/lektion_3/lektion_3.html"));
});


const PORT = 8080; 
app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
});
