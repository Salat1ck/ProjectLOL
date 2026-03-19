import { Product } from '../models/productModel'
import { Router } from "express"

const router = Router(); // инициализация своего роутера

// http-get метод
router.get('', async (req, res) => {
    try {
        const getAllProducts = await Product.findAll() // SELECT * from CLIENTS
        res.status(200).json(getAllProducts)
    } catch (error) {
        console.error("Не удалось получить данные")
    }
})

export default Router