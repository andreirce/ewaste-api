import { DataTypes } from 'sequelize'
import { Address } from './Address.model.js';
import { database } from '../database/connection.js';

export const Partner = database.define('Partner',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    partner_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },


    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },

    cnpj: {
      type: DataTypes.CHAR(14),
    },

    phone: {
      type: DataTypes.CHAR(15),
    },

    address_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Address,
        key: 'id'
      }
    }
  }
);