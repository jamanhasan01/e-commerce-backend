import { Request, Response } from "express";
import User from "../models/User.model";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = await req.body;

    if (!name || !email || !password) {
      res.status(400).json({
        success: false,
        message: "Please provide all required fields (name, email, password).",
      });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({
        success: false,
        message: "A user with this email already exists.",
      });
    }
    const newUser = await User.create({ name, email, password });
    res.status(201).json({
      success: true,
      message: "user registerd successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
  }
};
