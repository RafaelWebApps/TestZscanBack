const express = require("express");
const router = express.Router();

const controlaEstados = require("../controller/estados");

router.get("/", controlaEstados.buscaTodos);

router.get("/populacao", controlaEstados.buscaPopulacaoEstado);

module.exports = router;