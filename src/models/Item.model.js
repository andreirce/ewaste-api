import { DataTypes } from 'sequelize';
import { database } from '../database/connection.js';
import { User } from './User.model.js';

export const Item = database.define('Item',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },

    description: {
      type: DataTypes.STRING(500),
      allowNull: false
    },

    category: {
      type: DataTypes.STRING(100),
      allowNull: false
    },

    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: User, 
        key: 'id'
      }
    }
  }
);