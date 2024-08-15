import { User } from '../models/User.model.js';
import { Address } from '../models/Address.model.js';
import { Item } from '../models/Item.model.js';
import { CollectionPoint } from '../models/CollectionPoint.model.js';
import { Category } from '../models/Category.model.js';
import { Partner } from '../models/Partner.model.js';
import { Coupon } from '../models/Coupon.model.js';

User.belongsTo(Address, { foreignKey: 'address_id' });
Address.hasMany(User, { foreignKey: 'address_id' });

Item.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Item, { foreignKey: 'user_id' });

Item.belongsTo(Partner, { foreignKey: 'partner_id' });
Partner.hasMany(Item, { foreignKey: 'partner_id' });

Item.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Item, { foreignKey: 'category_id' });

CollectionPoint.belongsTo(Address, { foreignKey: 'address_id' });
Address.hasMany(CollectionPoint, { foreignKey: 'address_id' });

CollectionPoint.belongsTo(Category, { foreignKey: 'category_accepted', targetKey: 'category_id' });
Category.hasMany(CollectionPoint, { foreignKey: 'category_accepted', sourceKey: 'category_id' });

Coupon.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Coupon, { foreignKey: 'user_id' });
