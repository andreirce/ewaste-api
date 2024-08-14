import express from 'express';
import { createItem, getAllItems, deleteItems, updatedItem } from '../controllers/item.controller.js';

export const itemRouter = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Item
 *     description: Operações relacionadas a itens
 */

/**
 * @swagger
 * /item:
 *   get:
 *     summary: Retorna todos os itens
 *     tags: [Item]
 *     responses:
 *       200:
 *         description: Lista de itens.
 */
itemRouter.get('/item', getAllItems);

/**
 * @swagger
 * /item:
 *   post:
 *     summary: Cria um novo item
 *     tags: [Item]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               item_name:
 *                 type: string
 *               physical_condition:
 *                 type: string
 *               partner_id:
 *                 type: integer
 *               user_id:
 *                 type: integer
 *               category_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Item criado com sucesso.
 */
itemRouter.post('/item', createItem);

/**
 * @swagger
 * /item/{id}:
 *   put:
 *     summary: Atualiza um item existente
 *     tags: [Item]
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
 *               item_name:
 *                 type: string
 *               physical_condition:
 *                 type: string
 *               partner_id:
 *                 type: integer
 *               user_id:
 *                 type: integer
 *               category_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Item atualizado com sucesso.
 */
itemRouter.put('/item/:id', updatedItem);

/**
 * @swagger
 * /item/{id}:
 *   delete:
 *     summary: Remove um item
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item removido com sucesso.
 */
itemRouter.delete('/item/:id', deleteItems);