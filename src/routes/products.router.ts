import { Router } from 'express';
import productController from '../controller/product.controller';
import verifyBodyProduct from '../middlewares/verifyBodyProduct';

const productRouter = Router();

productRouter.post(
  '/products', 
  verifyBodyProduct.verifyName, 
  verifyBodyProduct.verifyPrice,
  productController.inserProduct,
);

productRouter.get('/products', productController.AllProducts);

export default productRouter;