import { Router } from 'express'
import productController from '../controllers/product.controller'

const productRouter = Router()

// Routes
productRouter.get('/', productController.getAllProducts)
productRouter.get('/:id', productController.getProductById)
productRouter.post('/', productController.addProduct)
productRouter.put('/:id', productController.updateProductById)
productRouter.delete('/:id', productController.deleteProductById)

export default productRouter