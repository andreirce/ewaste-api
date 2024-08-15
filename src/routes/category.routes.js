import express from 'express';
import { createCategory, getAllCategory, deleteCategory, updatedCategory } from '../controllers/category.controller.js';

export const categoryRouter = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Category
 *     description: Define categoria dos itens
 */

/**
 * @swagger
 * /category:
 *   get:
 *     summary: Retorna todas as categorias
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: Lista de categorias.
 */
categoryRouter.get('/category', getAllCategory);

/**
 * @swagger
 * /category:
 *   post:
 *     summary: Cria uma nova categoria
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso.
 */
categoryRouter.post('/category', createCategory);

/**
 * @swagger
 * /category/{id}:
 *   put:
 *     summary: Atualiza uma categoria existente
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoria atualizada com sucesso.
 */
categoryRouter.put('/category/:id', updatedCategory);

/**
 * @swagger
 * /category/{id}:
 *   delete:
 *     summary: Remove uma categoria
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Categoria removida com sucesso.
 */
categoryRouter.delete('/category/:id', deleteCategory);