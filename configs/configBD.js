const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB, process.env.DB, process.env.PWD,{
    host: process.env.HOSTDB,
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