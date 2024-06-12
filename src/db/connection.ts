const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('inprocode', 'root', 'XXXXX', {
    host: 'localhost',
    dialect: 'mysqli',
    allowNull: false,

});

export default sequelize;
