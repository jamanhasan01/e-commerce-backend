import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
  name: String,
  slug: String,
})

const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema)
export default Category