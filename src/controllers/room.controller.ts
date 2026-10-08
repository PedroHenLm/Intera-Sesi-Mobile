import { roomService } from "../services/room.service.js";
import type { Request, Response } from 'express';



export const roomControler = {
    async list(_req: Request, res: Response): Promise<void> {
        const tasks = await roomService.list();
        res.status(200).json({ data: tasks });
    },

    async deactivate(req: Request, res: Response) {
        const { id } = req.params as { id: string }
        const deactivate = await roomService.deactivate(id)

        res.status(200).json({ data: deactivate, message: "Bla" })
    }

}