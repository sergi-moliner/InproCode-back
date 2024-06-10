const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('inprocode', 'root', '*******', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;
