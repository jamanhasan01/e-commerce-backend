// import { NextFunction, Request, Response } from 'express'
// import { imageUploadService } from '../services/upload.service'
// import fs from 'fs'

// /* =============================== Image Upload ================================ */
// export const imageUpload = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const file = req.file 
//     if (!file) {
//       return res.status(400).json({
//         success: false,
//         message: 'No file provided',
//       })
//     }

//     /* =============================== Upload cloudinary ================================ */
//     const result = await imageUploadService(file)


//      /* ===============================  Delete local file ================================ */
//     if (result.publicId && file.path) {
//       fs.unlinkSync(file.path)
//     }

//     req.body.image = result
//     next()
//   } catch (error: any) {
//     return res.status(500).json({
//       success: false,
//       message: error.message || 'Failed to upload image',
//     })
//   }
// }
