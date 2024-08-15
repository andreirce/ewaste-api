import express from 'express';
import { createAddress, getAllAddress, deleteAddress, updateAddress } from '../controllers/address.controller.js';

export const addressRouter = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Address
 *     description: Centraliza os endereços
 */

/**
 * @swagger
 * /address:
 *   get:
 *     summary: Retorna todos os endereços
 *     tags: [Address]
 *     responses:
 *       200:
 *         description: Lista de endereços.
 */
addressRouter.get('/address', getAllAddress);

/**
 * @swagger
 * /address:
 *   post:
 *     summary: Cria um novo endereço
 *     tags: [Address]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               street:
 *                 type: string
 *               number:
 *                 type: integer
 *               neighborhood:
 *                 type: string
 *               complement:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               country:
 *                 type: string
 *               postal_code:
 *                 type: string
 *     responses:
 *       201:
 *         description: Endereço criado com sucesso.
 */
addressRouter.post('/address', createAddress);

/**
 * @swagger
 * /address/{id}:
 *   put:
 *     summary: Atualiza um endereço existente
 *     tags: [Address]
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
 *               street:
 *                 type: string
 *               number:
 *                 type: integer
 *               neighborhood:
 *                 type: string
 *               complement:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               country:
 *                 type: string
 *               postal_code:
 *                 type: string
 *     responses:
 *       200:
 *         description: Endereço atualizado com sucesso.
 */
addressRouter.put('/address/:id', updateAddress);

/**
 * @swagger
 * /address/{id}:
 *   delete:
 *     summary: Remove um endereço
 *     tags: [Address]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Endereço removido com sucesso.
 */
addressRouter.delete('/address/:id', deleteAddress);