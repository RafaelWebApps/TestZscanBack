const express = require("express");
const router = express.Router();

const rotaEstados = require("./estados");
const rotaPopulacao = require("./populacao");

router.get("/", (req, res)=>{
    res.send("funcionando!")
})

router.use("/estados", rotaEstados);
router.use("/populacao", rotaPopulacao);

module.exports = router;