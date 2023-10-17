import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import productService from '../services/product.service';

async function inserProduct(req: Request, res: Response): Promise<Response> {
  const { status, data } = await productService.inserProduct(req.body);
  if ('dataValues' in data) {
    const { orderId, ...obj } = data.dataValues;
    return res.status(mapStatusHTTP(status)).json(obj);
  }
  return res.status(mapStatusHTTP(status)).json(data);
}

export default {
  inserProduct,
};