const express = require("express");
const router = express.Router();

const controlaEstados = require("../controller/estados");

router.get("/", controlaEstados.buscaTodos);

module.exports = router;