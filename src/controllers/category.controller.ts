import { NextFunction, Request, Response } from 'express'
import { createProductCategoryService } from '../services/category.service'
import Category from '../models/Category.model'

/* =============================== create product category  controller ================================ */
export const createProductCategory = async (req: Request, res: Response, next: NextFunction) => {
  const { categories } = req.body
  const result = await createProductCategoryService(categories)
  res.status(201).json({ success: true })
}

export const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const result=await Category.find()
    res.status(200).json({ success: true ,result})
  } catch (error) {
    next(error)
  }
}
