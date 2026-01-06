import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcrypt";

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

/* ===============================
    Mongoose Schema
================================ */
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true, // index for fast lookup
      match: [/^\S+@\S+\.\S+$/, "Invalid email address"],
    },

    password: {
      type: String,
      required: true,
      select: false, // hide password by default
    },

    role: {
      type: String,
      enum: ["customer", "admin", "super_admin"],
      default: "customer",
    },

    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

/* ===============================
   3️⃣ Password Hash Middleware
================================ */
userSchema.pre<IUser>("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
});

/* ===============================
   Password Compare Method
================================ */
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

/* ===============================
    Safe Model Export
================================ */
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
