import { Cart } from '../models/cartModel'
import { Router } from "express"

const router = Router(); // инициализация своего роутера

// http-get метод
router.get('', async (req, res) => {
    try {
        const getAllCarts = await Cart.findAll() // SELECT * from CLIENTS
        res.status(200).json(getAllCarts)
    } catch (error) {
        console.error("Не удалось получить данные")
    }
})

export default Router