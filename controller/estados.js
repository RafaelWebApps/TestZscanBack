const Estados = require("../model/estados");
const { sequelize } = require("../configs/configBD");

const buscaTodos = async (req, res)=>{
    const todosEstados = await Estados.findAll()
    const formataEstado = todosEstados.map(item=>{return{"uf":item.uf, "estado":item.estado}})    
    res.status(200).json(formataEstado);
}


module.exports = {
    buscaTodos
}