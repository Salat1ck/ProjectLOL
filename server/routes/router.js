import { Router } from "express"
import clientRouter from "./clientRouter.js" 
import productRouter from "./productRouter.js"
import orderRouter from "./oderRouter.js"
import cartRouter from "./cartRouter.js"

const router = new Router()

export default router

router.use("/clients/", clientRouter)
router.use("/Products/", productRouter)
router.use("/Orders/", orderRouter)
router.use("/Carts/", cartRouter)