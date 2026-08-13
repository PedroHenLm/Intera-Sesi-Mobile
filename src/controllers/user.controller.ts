import type { Request, Response } from 'express';
import { userService } from '../services/user.service.js';


export const userController = {
    async list(_req: Request, res: Response): Promise<void>{
        const users = await userService.list()
        res.status(200).json({data: users})
    },

   async getById(req: Request, res:Response): Promise<void>{
        const {id} = req.params as {id : string} 
        const user = await userService.getById(id)
        res.status(200).json({data: user})
    },

    async create(req:Request, res:Response): Promise<void>{
        const newUser = await userService.create(req.body)
        res.status(201).json({data: newUser})
    },

    async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params as { id: string };
        userService.delete(id);
        res.status(204).send();
      },
}
