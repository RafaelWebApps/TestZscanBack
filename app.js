const express = require("express");
const boyParser = require("body-parser");
const app = express();
const port = 3000;

const { openDB } = require("./configs/configBD");

openDB();

const Routes = require("./routes/index");

app.use(boyParser.json());

app.use("/", Routes);

app.listen(port, ()=> console.log(`Escutando na porta ${port}`))