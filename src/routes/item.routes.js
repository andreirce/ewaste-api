import { Router } from 'express';
import { createItem, deleteItems, getAllItems, updatedItem } from '../controllers/item.controller.js';

const itemRouter = Router();

itemRouter.post('/item', createItem);
itemRouter.get('/item', getAllItems);
itemRouter.delete('/item/:id', deleteItems);
itemRouter.put('/item/:id', updatedItem);

export { itemRouter }