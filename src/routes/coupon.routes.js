import express from 'express';
import { createCoupon, getAllCoupon, deleteCoupon, updateCoupon } from '../controllers/coupon.controller.js';

export const couponRouter = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Coupon
 *     description: Operações relacionadas a cupons
 */

/**
 * @swagger
 * /coupon:
 *   get:
 *     summary: Retorna todos os cupons
 *     tags: [Coupon]
 *     responses:
 *       200:
 *         description: Lista de cupons.
 */
couponRouter.get('/coupon', getAllCoupon);

/**
 * @swagger
 * /coupon:
 *   post:
 *     summary: Cria um novo cupom
 *     tags: [Coupon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               discount_value:
 *                 type: number
 *               expiration_date:
 *                 type: string
 *                 format: date
 *               user_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Cupom criado com sucesso.
 */
couponRouter.post('/coupon', createCoupon);

/**
 * @swagger
 * /coupon/{id}:
 *   put:
 *     summary: Atualiza um cupom existente
 *     tags: [Coupon]
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
 *               discount_value:
 *                 type: number
 *               expiration_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Cupom atualizado com sucesso.
 */
couponRouter.put('/coupon/:id', updateCoupon);

/**
 * @swagger
 * /coupon/{id}:
 *   delete:
 *     summary: Remove um cupom
 *     tags: [Coupon]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cupom removido com sucesso.
 */
couponRouter.delete('/coupon/:id', deleteCoupon);