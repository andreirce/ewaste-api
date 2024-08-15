import express from 'express';
import { createUser, getAllUser, deleteUser, updateUser } from '../controllers/user.controller.js';

export const userRouter = express.Router();

/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Configuração dos usuários
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Lista de usuários.
 */
userRouter.get('/user', getAllUser);

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               cpf:
 *                 type: string
 *               cnpj:
 *                 type: string
 *               phone:
 *                 type: string
 *               address_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso.
 */
userRouter.post('/user', createUser);

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Atualiza um usuário existente
 *     tags: [User]
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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               cpf:
 *                 type: string
 *               cnpj:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso.
 */
userRouter.put('/user/:id', updateUser);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Remove um usuário
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário removido com sucesso.
 */
userRouter.delete('/user/:id', deleteUser);