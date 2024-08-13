import { DataTypes } from 'sequelize'
import { database } from '../database/connection.js';

export const Address = database.define('Address',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    street: {
      type: DataTypes.STRING(255),
      allowNull: false
    },

    number: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },

    neighborhood: {
      type: DataTypes.STRING(100),
      allowNull: true
    },

    complement: {
      type: DataTypes.STRING(100),
      allowNull: true
    },

    city: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    state: {
        type: DataTypes.STRING(2),
        allowNull: false
    },

    country: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    postal_code: {
        type: DataTypes.CHAR(10),
        allowNull: false
    },
    
  }
);