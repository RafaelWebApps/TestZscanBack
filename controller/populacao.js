const Populacao = require("../model/populacao");
const Estados = require("../model/estados");
const { sequelize } = require("../configs/configBD");


const populacaoTodosEstados = async (req, res)=>{
    const obterTodos = await Populacao.findAll({ include: Estados });
    const formataPopulacao = obterTodos.map(item=>{ 
        return {
            uf: item.uf, 
            estado: item.estado.estado, 
            população: item.populacao
        }
    });
    res.json(formataPopulacao);
}

const populacaoPorEstado = async (req, res)=>{
    let uf = req.params.uf.toUpperCase();
    const obterTodos = await Populacao.findAll({ where: {uf}});
    const formataPopulacao = obterTodos.map(item=>{ 
        return {
            uf: item.uf, 
            população: item.populacao
        }
    });
    res.json(formataPopulacao);
}

const populacao = async (req, res)=>{
    const obterTodos = await Populacao.findAll();
    const formataPopulacao = obterTodos.map(item=>{ 
        return {
            uf: item.uf, 
            população: item.populacao
        }
    });
    res.json(formataPopulacao);
}

const savePopulacao = async (req, res)=>{
    await sequelize.sync();
    const populacaos = await Populacao.create({
        uf: req.body.uf,
        populacao: req.body.populacao,
        estadoId: req.body.estadoId
    })
    res.send(JSON.stringify(populacaos, null, 2));
}

module.exports = {
    savePopulacao,
    populacaoTodosEstados,
    populacao,
    populacaoPorEstado,
    
}