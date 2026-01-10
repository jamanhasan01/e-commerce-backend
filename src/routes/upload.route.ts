import { Router } from "express";
import { upload } from "../middlewares/upload.middleware";
import { imageUpload } from "../controllers/upload.controller";

const router = Router();

/* =============================== Upload Route ================================ */
router.post("/upload",upload.single('file'),imageUpload);


export default router;
