"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Marker = connection_1.default.define('Marker', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    latitude: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    longitude: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allownull: true
    }
}, {
    tableName: 'markers',
    timestamps: false
});
exports.default = Marker;
