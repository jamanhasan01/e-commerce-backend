import { Request, Response } from "express";
import { createProductService } from "../services/product.service";

export const createProduct = async (req: Request, res: Response) => {
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
      price,
      stock,
      category,
      images: [],
    });

    res.status(201).json({ success: true, data: product });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
};
