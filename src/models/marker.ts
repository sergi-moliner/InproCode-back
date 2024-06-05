import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Marker = db.define('Marker', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allownull: true
    }

}, {
    tableName: 'markers',
    timestamps: false
});

export default Marker;
