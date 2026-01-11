import Product from "../models/Product.model";
import { IProduct } from "../types/product.type";

export const createProductService = async (data: IProduct) => {
  return await Product.create({
    ...data,
    images: [],
  });
};
