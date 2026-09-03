import type { Request, Response } from 'express';
import { taskService } from '../services/task.service.js';

export const taskController = {
  async list(_req: Request, res: Response): Promise<void> {
    const tasks = await taskService.list();
    res.status(200).json({ data: tasks });
  },

  async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    const task = await taskService.getById(id);
    res.status(200).json({ data: task });
  },

  async create(req: Request, res: Response): Promise<void> {
    const newTask = await taskService.create(req.body);
    res.status(201).json({ data: newTask });
  },

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    taskService.delete(id);
    res.status(204).send();
  },

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    const updatedTask = await taskService.update(id, req.body);
    res.status(200).json({ data: updatedTask });
  },
};
