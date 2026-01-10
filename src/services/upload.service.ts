import User from '../models/user.model'
import cloudinary from '../utils/cloudinary'

export const imageUploadService = async (file: any,id:string) => {
  try {
    if (!file) {
      throw new Error('No file received')
    }
    const uploadCludinary = await cloudinary.uploader.upload(file.path, {
      folder: 'e-commerce',
    })
    const image={publicId: uploadCludinary.public_id,
      url: uploadCludinary.url,}
 const userFind=await User.findByIdAndUpdate(id,{
image
})
return userFind
   
  } catch (error: any) {
    throw new Error(error.message || 'Image upload failed')
  }
}
