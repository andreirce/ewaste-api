import { Router } from 'express';
import { createUser, deleteUser, getAllUser, updateUser } from '../controllers/user.controller.js';


const userRouter = Router();

userRouter.post('/user', createUser);
userRouter.get('/user', getAllUser);
userRouter.delete('/user/:id', deleteUser);
userRouter.put('/user/:id', updateUser);

export { userRouter }