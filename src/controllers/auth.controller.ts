import { Request, Response } from "express";
import User from "../models/User.model";
import { registerUserService } from "../services/auth.service";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = await req.body;

    if (!name || !email || !password) {
      res.status(400).json({
        success: false,
        message: "Please provide all required fields (name, email, password).",
      });
    }
    const user = await registerUserService(name, email, password);
    res.status(201).json({
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
