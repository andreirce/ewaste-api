import express from 'express';
import { createPoint, getAllPoints, deletePoints, updatePoints } from '../controllers/collectionpoints.controller.js';

export const pointsRouter = express.Router();

/**
 * @swagger
 * tags:
 *   - name: CollectionPoints
 *     description: Operações relacionadas a pontos de coleta
 */

/**
 * @swagger
 * /points:
 *   get:
 *     summary: Retorna todos os pontos de coleta
 *     tags: [CollectionPoints]
 *     responses:
 *       200:
 *         description: Lista de pontos de coleta.
 */
pointsRouter.get('/points', getAllPoints);

/**
 * @swagger
 * /points:
 *   post:
 *     summary: Cria um novo ponto de coleta
 *     tags: [CollectionPoints]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               responsible_company:
 *                 type: string
 *               operating_hours:
 *                 type: string
 *               address_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Ponto de coleta criado com sucesso.
 */
pointsRouter.post('/points', createPoint);

/**
 * @swagger
 * /points/{id}:
 *   put:
 *     summary: Atualiza um ponto de coleta existente
 *     tags: [CollectionPoints]
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
 *               responsible_company:
 *                 type: string
 *               operating_hours:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ponto de coleta atualizado com sucesso.
 */
pointsRouter.put('/points/:id', updatePoints);

/**
 * @swagger
 * /points/{id}:
 *   delete:
 *     summary: Remove um ponto de coleta
 *     tags: [CollectionPoints]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ponto de coleta removido com sucesso.
 */
pointsRouter.delete('/points/:id', deletePoints);