import { Router } from 'express';
import { createAddress, deleteAddress, getAllAddress, updateAddress} from  '../controllers/address.controller.js';

const addressRouter = Router();

addressRouter.post('/address', createAddress);
addressRouter.get('/address', getAllAddress);
addressRouter.delete('/address/:id', deleteAddress);
addressRouter.put('/address/:id', updateAddress);

export { addressRouter }