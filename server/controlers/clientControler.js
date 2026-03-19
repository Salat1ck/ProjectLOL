import { Сlient } from '../models/clientModel.js'

// http-get метод
export const getAllClients = async (req, res) => {
    try {
        const getAllClients = await Сlient.findAll() // SELECT * from CLIENTS
        res.status(200).json(getAllClients)
    } catch (error) {
        console.error("Не удалось получить данные")
    }
}


export const createClient = async (req, res) => {
    try {
        const { name, email, rating, bday } = req.body
        const newClient = await client.create({name, email, rating, bday})
        res.status(201).json(newClient)
    }
    catch (error) {
        console.error("Не удалось добавить нового клиента")
    }
}