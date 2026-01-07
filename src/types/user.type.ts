import { Document } from "mongoose";

/* ===============================
    TypeScript Interface
================================ */
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "customer" | "admin" | "super_admin";
  isBlocked: boolean;
  comparePassword(candidatePassword: string): Promise<boolean>;
}