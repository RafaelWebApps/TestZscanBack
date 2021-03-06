const { Sequelize, DataTypes, Model, where  } = require('sequelize');
const {sequelize } = require("../configs/configBD");

class Estados extends Model {}

Estados.init({
    estado:{
        type: DataTypes.STRING,
        allowNull: false
    },
    uf:{
        type: DataTypes.CHAR(2)
    }
}, { sequelize, modelName: 'estados' });

module.exports = Estados;