import { Router } from 'express';
import { createCategory, deleteCategory, getAllCategory, updatedCategory } from '../controllers/category.controller.js';


const categoryRouter = Router();

categoryRouter.post('/category', createCategory);
categoryRouter.get('/category', getAllCategory);
categoryRouter.delete('/category/:id', deleteCategory);
categoryRouter.patch('/category/:id', updatedCategory);

export { categoryRouter }