const Estados = require("../model/estados");
const { sequelize } = require("../configs/configBD");

const buscaTodos = async (req, res)=>{
    const todosEstados = await Estados.findAll()    
    res.send(todosEstados);
}

const buscaPopulacaoEstado = (req, res)=>{
    res.send("Controller população funcionando")
}

module.exports = {
    buscaTodos,
    buscaPopulacaoEstado
}