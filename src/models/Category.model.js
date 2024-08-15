import { DataTypes } from 'sequelize'
import { database } from '../database/connection.js';



export const Category = database.define('Category',
  {
    category_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    category_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  },
  {
    tableName: 'Category'
  }
);