import { Request, Response } from "express";
import User from "../models/user.model";



export const registerUserService = async (
  name: string,
  email: string,
  password: string
) => {
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error("A user with this email already exists.");
  }

  const newUser = await User.create({ name, email, password });

  
  return newUser;
};
