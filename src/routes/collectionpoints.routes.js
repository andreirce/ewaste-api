import { Router } from 'express';
import { createPoint, deletePoints, getAllPoints, updatePoints } from '../controllers/collectionpoints.controller.js';

const pointsRouter = Router();

pointsRouter.post('/point', createPoint);
pointsRouter.get('/point', getAllPoints);
pointsRouter.delete('/point/:id', deletePoints);
pointsRouter.put('/point/:id', updatePoints);

export { pointsRouter }