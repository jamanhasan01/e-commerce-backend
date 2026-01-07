import { Router } from "express";
import { getAllUser } from "../controllers/user.controller";

const router=Router()
router.get("/users",getAllUser);

export default router