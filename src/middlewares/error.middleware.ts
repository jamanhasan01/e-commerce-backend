import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  // ✅ Mongoose Validation Error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map(
      (e: any) => e.message
    );

    return res.status(400).json({
      success: false,
      message: messages[0], // only user validation message
    });
  }

  // fallback
  res.status(500).json({
    success: false,
    message: "Server Error",
  });
};
