import { Request, Response } from "express"
import { countService } from "../services/count.service.js"
import { userService } from "../services/user.service.js"

export const countController ={
    async list(_req:Request, res:Response): Promise<void>{
        const counts = await countService.list()
        res.status(200).json({data:counts})
    },

    async getById(req: Request, res: Response): Promise<void>{
        const {id} = req.params as {id : string}
        const count = await countService.getById(id)
        res.status(200).json({data: count})
    },

    async create(req: Request, res: Response): Promise<void>{
        const newCount = await countService.create(req.body)
        res.status(201).json({data : newCount})
    },
    
    async update(req:Request, res: Response){
        const {id} = req.params as {id: string}
        const updateCount = await countService.update(req.body, id )

        res.status(200).json({data: updateCount, message : "Atualizado"})

    }
}