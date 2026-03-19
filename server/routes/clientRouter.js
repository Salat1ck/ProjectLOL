import { Сlient } from '../models/clientModel.js'
import { Router } from "express"
import { getAllClients } from "../controlers/clientControler.js"

const router = Router();

router.use('/', getAllClients)

export default Router