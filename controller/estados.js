const Estados = require("../model/estados");
const { sequelize } = require("../configs/configBD");

const buscaTodos = async (req, res)=>{
    const todosEstados = await Estados.findAll()
    const formataEstado = todosEstados.map(item=>{return{"uf":item.uf, "estado":item.estado}})    
    res.status(200).json(formataEstado);
}

const savEstado = async(req, res)=>{
    await sequelize.sync();
    const addEstado = await Estados.create({
        estado: 'Goiás',
        uf: 'GO'
    });
    res.status(200).json(addEstado);
}


module.exports = {
    buscaTodos,
    savEstado
}