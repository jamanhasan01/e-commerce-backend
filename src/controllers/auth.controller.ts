import { Request, Response } from "express";
import { registerUserService } from "../services/auth.service";

export const registerUser = async (req: Request, res: Response) => {
  try {
     console.log("✅ CONTROLLER HIT"); // YOU WILL SEE THIS
    const { name, email, password } =  req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields (name, email, password).",
      });
    }

    console.log('log dddd');
    
    const user = await registerUserService(name, email, password);
    return res.status(201).json({ 
      success: true,
      message: "user registerd successfully",
      data: user,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message || "Registration failed",
    });
  }
};
