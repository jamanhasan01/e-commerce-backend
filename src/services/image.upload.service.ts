import Product from "../models/Product.model";
import User from "../models/User.model";

import cloudinary from "../utils/cloudinary";
import fs from "fs";


/* =============================== single image upload for users ================================ */
export const singleImageUploadService = async (file: any, id: string) => {
  try {
    if (!file) {
      throw new Error("No file received");
    }
    const uploadCludinary = await cloudinary.uploader.upload(file.path, {
      folder: "e-commerce/users",
    });
    const image = {
      publicId: uploadCludinary.public_id,
      url: uploadCludinary.url,
    };
    const userFind = await User.findByIdAndUpdate(id, {
      image,
    });
    fs.unlinkSync(file.path);
    return userFind;
  } catch (error: any) {
    throw new Error(error.message || "Image upload failed");
  }
};
/* =============================== multiple image upload for products ================================ */
export const multipleImageUploadService = async (
  files: Express.Multer.File[],
  id: string
) => {
  try {
    if (!files) {
      throw new Error("No file received");
    }

    const filePath = files.map((file) => file.path);

    const uploadCludinary = filePath.map(
      async (path) =>
        await cloudinary.uploader.upload(path, {
          folder: "e-commerce/products",
        })
    );

    const uploadResults = await Promise.all(uploadCludinary);

    const images = uploadResults.map((img) => ({
      publicId: img.public_id,
      url: img.secure_url,
    }));

    const productFind = await Product.findByIdAndUpdate(id, { images });
    filePath.map((path) => fs.unlinkSync(path));
    return productFind;
  } catch (error: any) {
    throw new Error(error.message || "Image upload failed");
  }
};
