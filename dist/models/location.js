"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Location = connection_1.default.define('Location', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    latitude: {
        type: sequelize_1.DataTypes.FLOAT
    },
    longitude: {
        type: sequelize_1.DataTypes.FLOAT
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'locations',
    timestamps: false
});
exports.default = Location;
