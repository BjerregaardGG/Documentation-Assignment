import express from "express"; 
import path from "path"; 
const app = express(); 

app.use(express.static("public")); 

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/forside/index.html"))
});

app.get("/lektion_1.html", (req, res) => {
    res.sendFile(path.resolve("public/lektion_1/lektion_1.html"))
})


const PORT = 8080; 
app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
})
