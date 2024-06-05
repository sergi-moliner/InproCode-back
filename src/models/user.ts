import db from '../db/connection';
import { DataTypes } from 'sequelize';

const users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'users',
    timestamps: false
});

export default users;