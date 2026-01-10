import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv'
dotenv.config()
/* ===============================
   Cloudinary Config
================================ */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  api_key: process.env.CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
});

/* ===============================
   Safe Debug Log
================================ */
console.log("Cloudinary Config Loaded:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ,
  api_secret: process.env.CLOUDINARY_API_SECRET ,
});

export default cloudinary;
