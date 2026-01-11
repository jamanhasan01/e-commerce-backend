import { NextFunction, Request, Response } from "express";
import {
  createProductService,
  getAllProductsService,
} from "../services/product.service";
import { multipleImageUploadService } from "../services/image.upload.service";

/* =============================== product create controller ================================ */
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description, price, stock, category } = req.body;

    // basic validation
    if (!name || !description || !price || !stock || !category) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const product = await createProductService({
      name,
      description,
      price: Number(price),
      stock: Number(stock),
      category,
    });

    res.status(201).json({ success: true, data: product });
    if (req.files) {
      const files = req.files as Express.Multer.File[];
      const res = await multipleImageUploadService(
        files,
        product._id.toString()
      );
    }
  } catch (error: any) {
    next(error);
  }
};

/* =============================== get all products controller ================================ */
export const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = Number(req.query.limit) || 1;
    const limit = Number(req.query.limit) || 20;

    const result = await getAllProductsService({ page, limit });
    if (page > result.total_page) {
      res
        .status(400)
        .json({ success: false, message: "Page number exceeds total pages" });
    }
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};
