import { DataTypes } from 'sequelize'
import { User } from './User.model.js';
import { database } from '../database/connection.js';

export const Coupon = database.define('Coupon',
  {
    coupon_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },

    discount_value: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },

    expiration_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },

    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    }
  },
  {
    tableName: 'Coupon'
  }
);