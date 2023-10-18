export type Order = {
  id: number;
  userId: number;
  productIds?: ProductId[] 
};

export type OrderResponse = {
  id: number,
  userId: number,
  productIds: ProductId[] | number[]
};

type ProductId = {
  id: number;
};
