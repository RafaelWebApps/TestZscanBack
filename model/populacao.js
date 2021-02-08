const { Sequelize, DataTypes, Model, where  } = require('sequelize');
const {sequelize} = require("../configs/configBD");
const Estados = require("./estados");



class Populacaos extends Model {}

Populacaos.init({
    uf:{
        type: DataTypes.CHAR(2)
    },
    populacao:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estadoId:{
        type: DataTypes.INTEGER
    }
    
}, { sequelize, modelName: 'populacaos' });

Populacaos.belongsTo(Estados,{
    foreignKey: 'estadoId'
});

module.exports = Populacaos;