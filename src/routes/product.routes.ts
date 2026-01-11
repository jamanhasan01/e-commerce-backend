import { Router } from "express";
import {
  createProduct,
  getAllProduct,
} from "../controllers/product.controller";
import { upload } from "../middlewares/upload.middleware";

const router = Router();
router.post("/products", upload.array("files", 5), createProduct);
router.get("/products", getAllProduct);
export default router;
