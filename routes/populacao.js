const express = require("express");
const router = express.Router();

const controlaPopulacao = require("../controller/populacao");

router.get("/", controlaPopulacao.populacaoTodosEstados)
.post("/", controlaPopulacao.savePopulacao);

router.get("/:uf", controlaPopulacao.populacaoPorEstado)

module.exports = router;