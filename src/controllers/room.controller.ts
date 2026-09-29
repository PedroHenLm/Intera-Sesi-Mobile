import { roomService } from "../services/room.service.js";
import type { Request, Response } from 'express';



export const roomControler = {
    async list(_req: Request, res: Response): Promise<void> {
        const tasks = await roomService.list();
        res.status(200).json({ data: tasks });
    }


}