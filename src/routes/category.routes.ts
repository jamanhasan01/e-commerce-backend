import { Router } from 'express'
import { createProductCategory, getAllCategories } from '../controllers/category.controller'

const router = Router()
/* =============================== category routes ================================ */
router.post('/categories',createProductCategory)

router.get('/categories',getAllCategories)

export default router