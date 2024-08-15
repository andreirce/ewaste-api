import { DataTypes } from 'sequelize'
import { Address } from './Address.model.js';
import { Category } from './Category.model.js';
import { database } from '../database/connection.js';

export const CollectionPoint = database.define('Collection_Point',
  {
    collection_point_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    responsible_company: {
      type: DataTypes.STRING(255),
      allowNull: false
    },

    operating_hours: {
      type: DataTypes.STRING(50),
    },

    address_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Address,
        key: 'id'
      }
    },

    category_accepted: {
      type: DataTypes.UUID,
      references: {
        model: Category,
        key: 'category_id'
      }
    }
  },
  {
    tableName: 'Collection_Point'
  }
);