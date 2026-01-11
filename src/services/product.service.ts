import Product from "../models/Product.model";
import { IProduct } from "../types/product.type";
import { IPagination } from "../types/query.type";

/* =============================== product create business logic ================================ */
export const createProductService = async (data: IProduct) => {
  return await Product.create({
    ...data,
    images: [],
  });
};
/* =============================== get all product  business logic ================================ */

export const getAllProductsService = async ({ page, limit }: IPagination) => {
  const skip = (page - 1) * limit;
  const total_product = await Product.countDocuments();
  const products = await Product.find().skip(skip).limit(limit);

  return {
    products,
    total_product,
    page,
    limit,
    total_page: Math.ceil(total_product / limit),
  };
};
