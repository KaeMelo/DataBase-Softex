const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Olá, o Back-End está funcionando!");
});

app.get("/Cadastrar", async (req, res) => {
    res.send("Cadastro iniciado!")
});

app.listen(8081, () => {
    console.log("Servidor iniciado na porta 8081: http://localhost:8081");
});

