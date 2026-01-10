import { Router } from 'express'
import { loginUser, registerUser } from '../controllers/auth.controller'
import { upload } from '../middlewares/upload.middleware'

const router = Router()

router.post('/register', upload.single('file'), registerUser, (req, res) => {
  console.log('req', req)
  console.log('res', res)
})

router.post('/login', loginUser)

export default router
