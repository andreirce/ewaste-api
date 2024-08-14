import express from 'express';
import corsConfig from './config/cors-config.js';
import { userRouter } from './routes/user.routes.js';
import { couponRouter } from './routes/coupon.routes.js';
import { partnerRouter } from './routes/partner.routes.js';
import { addressRouter } from './routes/address.routes.js';
import { itemRouter } from './routes/item.routes.js';
import { categoryRouter } from './routes/category.routes.js';
import { pointsRouter } from './routes/collectionpoints.routes.js';


const app = express();
const port = 4000

app.use(corsConfig);

app.use(express.json());
app.use(userRouter);
app.use(couponRouter);
app.use(partnerRouter);
app.use(addressRouter);
app.use(categoryRouter);
app.use(itemRouter);
app.use(pointsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})