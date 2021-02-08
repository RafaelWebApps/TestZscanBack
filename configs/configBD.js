const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('disponible', 'disponible', 'ra34ca22',{
    host: 'mysql.disponible.com.br',
    dialect: 'mysql'
});
async function openDB(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      
}

module.exports = {
    sequelize,
    openDB, 
};