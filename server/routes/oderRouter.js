import { Order } from '../models/orderModel.js'
import { Router } from "express"

const router = Router(); // инициализация своего роутера

// http-get метод
router.get('', async (req, res) => {
    try {
        const getAllOrders = await Order.findAll() // SELECT * from CLIENTS
        res.status(200).json(getAllOrders)
    } catch (error) {
        console.error("Не удалось получить данные")
    }
})

export default Router