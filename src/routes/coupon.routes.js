import { Router } from 'express';
import { createCoupon, deleteCoupon, getAllCoupon, updateCoupon } from '../controllers/coupon.controller.js';

const couponRouter = Router();

couponRouter.post('/coupon', createCoupon);
couponRouter.get('/coupon', getAllCoupon);
couponRouter.delete('/coupon/:id', deleteCoupon);
couponRouter.put('/coupon/:id', updateCoupon);

export { couponRouter }