import multer from 'multer'
import fs from 'fs'
import path from 'path'

/* ===============================
   Storage
================================ */
const storage = multer.diskStorage({
  destination: (_req, file, cb) => {
    cb(null, 'public/')
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname)
    const uniqname = `${Date.now()}-${Math.round(Math.random() * 1e9)}${extname}`
    cb(null, uniqname)
  },
})

/* ===============================
   Upload Middleware
================================ */
export const upload = multer({ storage })
