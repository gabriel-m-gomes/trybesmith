import express from 'express';
import productRouter from './routes/products.router';
import ordersRouter from './routes/orders.router';

const app = express();

app.use(express.json());

app.use(productRouter);

app.use(ordersRouter);

export default app;
