import { NextFunction, Request, Response } from 'express'
import { loginUserService, registerUserService } from '../services/auth.service'
import { generateToken } from '../utils/jwt'
import { singleImageUploadService } from '../services/image.upload.service'

/* =============================== resgister controller ================================ */
export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, phone } = await req.body

    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields.',
      })
    }

    const user = await registerUserService(name, email, password, phone)
    res.status(201).json({
      success: true,
      message: 'user registerd successfully',
      data: user,
    })
    if (req.file) {
      singleImageUploadService(req.file, user._id.toString())
    }
  } catch (error: any) {
    next(error)
  }
}

/* =============================== Login controller ================================ */
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      })
    }

    const result = await loginUserService(email, password)

    const token = generateToken({
      userId: result.userExists._id.toString(),
      role: result.userExists.role,
    })

    /* =============================== set cookie ================================ */
    res.cookie('accessToken', token, {
      httpOnly: true,
      secure: false, // REQUIRED for SameSite=None
      sameSite: 'lax', 
        path: "/",   // REQUIRED for cross-origin
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    res.status(200).json({ success: true, message: 'Login successfully' })
  } catch (error) {
    next(error)
  }
}
/* =============================== logout ================================ */

export const logoutUser = (req: Request, res: Response) => {
  res.clearCookie('accessToken', {
    httpOnly: true,
  })

  return res.status(200).json({
    success: true,
    message: 'Logged out successfully',
  })
}
