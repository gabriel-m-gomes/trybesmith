import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { OrderResponse } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';

async function findAll(): Promise<ServiceResponse<OrderResponse[]>> {
  const ordersList = await OrderModel.findAll({
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
  });

  const items = ordersList.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues.productIds?.map((prod) => (prod.id)) || [],
  }));

  return { status: 'SUCCESSFUL', data: items };
}

export default {
  findAll,
};
