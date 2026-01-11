import { Router } from "express";
import { createProduct } from "../controllers/product.controller";
import { upload } from "../middlewares/upload.middleware";


const router=Router()
router.post('/products',upload.array("files",5),createProduct)
export default router