import { Router } from 'express';
import { createItem, deleteItem, getAllItems, updateItem } from '../controllers/item.controller.js';

const itemRouter = Router();

itemRouter.post('/item', createItem);
itemRouter.get('/item', getAllItems); 
itemRouter.delete('/item/:id', deleteItem);
itemRouter.put('/item/:id', updateItem);

export { itemRouter };