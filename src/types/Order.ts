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

export type ProductId = {
  id: number;
};
