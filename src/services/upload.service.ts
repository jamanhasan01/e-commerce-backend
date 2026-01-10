import cloudinary from '../utils/cloudinary'

export const imageUploadService = async (file: any) => {
  try {
    if (!file) {
      throw new Error('No file received')
    }
    const uploadCludinary = await cloudinary.uploader.upload(file.path, {
      folder: 'e-commerce',
    })

    return {
      imageId: uploadCludinary.public_id,
      imageUrl: uploadCludinary.url,
    }
  } catch (error: any) {
    throw new Error(error.message || 'Image upload failed')
  }
}
