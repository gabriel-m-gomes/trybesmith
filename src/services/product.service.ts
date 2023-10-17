import ProductModel, { ProductInputtableTypes, 
  ProductSequelizeModel } from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

async function inserProduct(product: ProductInputtableTypes): 
Promise<ServiceResponse<ProductSequelizeModel>> {
  const { name, price, orderId } = product;
  if (!name || !price || !orderId) {
    return { status: 'INVALID_DATA', data: { message: 'Product invalid' } };
  }

  const result = await ProductModel.create({ name, price, orderId });
  return { status: 'CREATED', data: result };
}

export default {
  inserProduct,
};