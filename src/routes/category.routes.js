import { Router } from 'express';
import { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory} from '../controllers/category.controller.js';

const categoryRouter = Router();

categoryRouter.post('/category', createCategory);
categoryRouter.get('/category', getAllCategories);
categoryRouter.get('/category/:id', getCategoryById);
categoryRouter.put('/category/:id', updateCategory);
categoryRouter.delete('/category/:id', deleteCategory);


export { categoryRouter };
