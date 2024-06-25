const { Sequelize } = require('sequelize');

import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASS!, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    allowNull: false,

});

export default sequelize;
