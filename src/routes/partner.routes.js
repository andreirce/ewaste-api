import express from 'express';
import { createPartner, getAllPartner, deletePartner, updatePartner } from '../controllers/partner.controller.js';

export const partnerRouter = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Partner
 *     description: Informações dos fabricantes parceiros
 */

/**
 * @swagger
 * /partner:
 *   get:
 *     summary: Retorna todos os parceiros
 *     tags: [Partner]
 *     responses:
 *       200:
 *         description: Lista de parceiros.
 */
partnerRouter.get('/partner', getAllPartner);

/**
 * @swagger
 * /partner:
 *   post:
 *     summary: Cria um novo parceiro
 *     tags: [Partner]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               partner_name:
 *                 type: string
 *               email:
 *                 type: string
 *               cnpj:
 *                 type: string
 *               phone:
 *                 type: string
 *               address_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Parceiro criado com sucesso.
 */
partnerRouter.post('/partner', createPartner);

/**
 * @swagger
 * /partner/{id}:
 *   put:
 *     summary: Atualiza um parceiro existente
 *     tags: [Partner]
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
 *               partner_name:
 *                 type: string
 *               email:
 *                 type: string
 *               cnpj:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Parceiro atualizado com sucesso.
 */
partnerRouter.put('/partner/:id', updatePartner);

/**
 * @swagger
 * /partner/{id}:
 *   delete:
 *     summary: Remove um parceiro
 *     tags: [Partner]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Parceiro removido com sucesso.
 */
partnerRouter.delete('/partner/:id', deletePartner);
