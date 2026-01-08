import { Request, Response } from "express";
import {
  loginUserService,
  registerUserService,
} from "../services/auth.service";
import { generateToken } from "../utils/jwt";

export const registerUser = async (req: Request, res: Response) => {
  try {
    console.log(" CONTROLLER HIT"); // YOU WILL SEE THIS
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields.",
      });
    }

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

export const loginUser = async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  const result = await loginUserService(email);
  const token=await generateToken({
    userId:result._id.toString(),
    role:result.role
  })
 
  res.status(200).send({token:token,user:result})
  
};
