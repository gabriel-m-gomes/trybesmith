import { Router } from 'express';
import productController from '../controller/product.controller';

const productRouter = Router();

productRouter.post('/products', productController.inserProduct);

export default productRouter;