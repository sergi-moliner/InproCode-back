import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Event = db.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'events',
  timestamps: false
});

export default Event;
