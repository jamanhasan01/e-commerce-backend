import Category from "../models/Category.model";

/* ===============================  create products category business logic ================================ */
export const createProductCategoryService=async(categories:[])=>{
  
    const result=await Category.insertMany(categories)
    return result
    
}