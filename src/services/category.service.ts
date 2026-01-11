import Category from "../models/Category.model";

/* ===============================  create products category business logic ================================ */
export const createProductCategoryService=async(categories:[])=>{
    console.log(categories);
    const result=await Category.insertMany(categories)
    console.log(result);
    
}