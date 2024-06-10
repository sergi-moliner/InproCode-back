const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('inprocode', 'root', 'R%7$#qt5', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;
