import type { Request, Response } from 'express';
import { userService } from '../services/user.service.js';


export const userController = {
    list(_req: Request, res: Response): void{
        const users = userService.list()
        res.status(200).json({data: users})
    },

    getById(req: Request, res:Response): void{
        const {id} = req.params as {id : string} 
        const user = userService.getById(id)
        res.status(200).json({data: user})
    },

    create(req:Request, res:Response): void{

    }
}
