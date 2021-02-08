const express = require("express");
const router = express.Router();

const controlaPopulacao = require("../controller/populacao");

router.get("/", controlaPopulacao.populacao )
.post("/", controlaPopulacao.savePopulacao);

router.get("/estados", controlaPopulacao.populacaoTodosEstados);

router.get("/:uf", controlaPopulacao.populacaoPorEstado);


module.exports = router;