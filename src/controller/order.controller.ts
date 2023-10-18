import { Request, Response } from 'express';
import orderService from '../services/order.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function findAll(_req: Request, res: Response): Promise<Response> {
  const { status, data } = await orderService.findAll();
  return res.status(mapStatusHTTP(status)).json(data);
}

export default {
  findAll,
};