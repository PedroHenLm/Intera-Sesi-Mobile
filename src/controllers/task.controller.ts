import type { Request, Response } from 'express';
import { taskService } from '../services/task.service.js';

export const taskController = {
  list(_req: Request, res: Response): void {
    const tasks = taskService.list();
    res.status(200).json({ data: tasks });
  },

  getById(req: Request, res: Response): void {
    const { id } = req.params as { id: string };
    const task = taskService.getById(id);
    res.status(200).json({ data: task });
  },

  create(req: Request, res: Response): void {
    const task = taskService.create(req.body);
    res.status(201).json({ data: task });
  },

  // update(req: Request, res: Response): void {
  //   const { id } = req.params as { id: string };
  //   const task = taskService.update(id, req.body);
  //   res.status(200).json({ data: task });
  // },

  remove(req: Request, res: Response): void {
    const { id } = req.params as { id: string };
    taskService.remove(id);
    res.status(204).send();
  },
};
