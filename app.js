const express = require("express");
const app = express();
const port = 3000;

const Routes = require("./routes/index");

app.use("/", Routes);

app.listen(port, ()=> console.log(`Escutando na porta ${port}`))