const express = require("express");
const router = express.Router();

const rotaEstados = require("./estados");

router.get("/", (req, res)=>{
    res.send("funcionando!")
})

router.use("/estados", rotaEstados);

module.exports = router;