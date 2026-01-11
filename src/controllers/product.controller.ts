import { Request, Response } from "express";
import { createProductService } from "../services/product.service";
import { multipleImageUploadService } from "../services/image.upload.service";
import fs from 'fs'
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
      price:Number(price),
      stock:Number(stock),
      category,
 
    });

    res.status(201).json({ success: true, data: product });
  if (req.files) {
    const files= req.files as Express.Multer.File[]
   const res= await multipleImageUploadService(files,product._id.toString())
   
   
   
  }
  
  } catch (error: any) {
    return res.status(500).json({
      message: error.message ||"Server error",
      error,
    });
  }
};
