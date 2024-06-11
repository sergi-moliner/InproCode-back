const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('inprocode', 'root', 'xxxxx', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;
