import { DataTypes } from 'sequelize'
import { User } from './User.model.js';
import { Category } from './Category.model.js';
import { Partner } from './Partner.model.js';
import { database } from '../database/connection.js';


export const Item = database.define('Item',
  {
    item_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    item_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },

    physical_condition: {
      type: DataTypes.STRING(50),
      allowNull: false
    },

    partner_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Partner,
        key: 'id'
    }
    },

    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
    }
    },
    
    category_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Category,
            key: 'category_id'
      }
    }
  },
  {
    tableName: 'Item'
  }
);