const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('estados', 'rafael', 'rcha125?',{
    host: 'localhost',
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