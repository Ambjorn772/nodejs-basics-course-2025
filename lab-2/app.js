const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
    const team = [
        { name: "Арсен", role: "Студент1" },
        { name: "Богдан", role: "Студент2" },
        { name: "Влад", role: "Студент3" },
    ];
    res.render("index", { team });
});
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
});
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
