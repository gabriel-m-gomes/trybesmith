import { Router } from 'express';
import productController from '../controller/product.controller';

const productRouter = Router();

productRouter.post('/products', productController.inserProduct);

productRouter.get('/products', productController.AllProducts);

export default productRouter;