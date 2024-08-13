import { Router } from 'express';
import { createPartner, deletePartner, getAllPartner, updatePartner } from '../controllers/ partner.controller.js';


const partnerRouter = Router();

partnerRouter.post('/partner', createPartner);
partnerRouter.get('/partner', getAllPartner);
partnerRouter.delete('/partner/:id', deletePartner);
partnerRouter.put('/partner/:id', updatePartner);

export { partnerRouter }