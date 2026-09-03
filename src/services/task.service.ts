import { taskRepository } from '../repositories/task.repository.js';
import type { CreateTask, Task, UpdateTask } from '../types/task.js';
import { NotFoundError } from '../utils/http-error.js';

export const taskService = {
  async list(): Promise<Task[] | undefined> {
    return taskRepository.findAll();
  },

  async getById(id: string): Promise<Task | undefined> {
    const task = await taskRepository.findById(id);
    if (!task) throw new NotFoundError(`Task with id "${id}" not found`);
    return task;
  },

  async create(input: CreateTask) {
    return taskRepository.create(input);
  },

  async update(id: string, input: UpdateTask){
    const updatedTask = taskRepository.update(id, input);
    if (!updatedTask) throw new NotFoundError(`Task with id "${id}" not found`);
    return updatedTask;
  },

  async delete(id: string) {
    const deleted = taskRepository.delete(id);
    if (!deleted) throw new NotFoundError(`Task with id "${id}" not found`);
  },
};
