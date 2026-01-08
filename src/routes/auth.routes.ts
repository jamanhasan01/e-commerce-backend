import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = Router();

router.post("/register", registerUser);

router.post("/login", verifyToken,loginUser);

export default router;
