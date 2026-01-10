import { Router } from "express";
import { getAllUser, getSingleUser } from "../controllers/user.controller";

const router = Router();
router.get("/users",()=>{
    console.log('hello');
    
} ,getAllUser);
router.get("/users/:id", getSingleUser);

export default router;
