import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload as JwtDecoded, Secret } from "jsonwebtoken";

/* =============================== Extend Request ================================ */
export interface AuthRequest extends Request {
  user?: JwtDecoded | string;
}

/* =============================== Verify Token ================================ */
export const verifyToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {


    
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      success: false,
      message: "A token is required for authentication",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const secret: Secret = process.env.JSON_TOKEN_SECRET as Secret;

    const decoded = jwt.verify(token, secret);
console.log('decoded ',token);

    req.user = decoded; // ✅ TypeScript-safe
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
