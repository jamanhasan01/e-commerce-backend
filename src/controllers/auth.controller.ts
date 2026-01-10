import { Request, Response } from 'express'
import { loginUserService, registerUserService } from '../services/auth.service'
import { generateToken } from '../utils/jwt'
import { imageUploadService } from '../services/upload.service'

export const registerUser = async (req: Request, res: Response) => {
  try {
    console.log(' CONTROLLER HIT') // YOU WILL SEE THIS
    const { name, email, password } = await req.body

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields.',
      })
    }

    const user = await registerUserService(name, email, password)
    res.status(201).json({
      success: true,
      message: 'user registerd successfully',
      data: user,
    })
    if (req.file) {
      imageUploadService(req.file, user._id.toString())
    }
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message || 'Registration failed',
    })
  }
}

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(401).json({
      success: false,
      message: 'Invalid email or password',
    })
  }

  const result = await loginUserService(email, password)

  const token = await generateToken({
    userId: result.userExists._id.toString(),
    role: result.userExists.role,
  })

  res.status(200).send({ token: token })

  // res.status(200).send({token:token,user:result})
}
