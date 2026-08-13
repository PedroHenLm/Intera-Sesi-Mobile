import { taskRepository } from '../repositories/task.repository.js';
import type { CreateTask, Task, UpdateTask } from '../types/task.js';
import { NotFoundError } from '../utils/http-error.js';

export const taskService = {
  async list(): Promise<Task[]> {
    return taskRepository.findAll();
  },

  async getById(id: string): Promise<Task[]> {
    const task = await taskRepository.findById(id);
    if (!task) throw new NotFoundError(`Task with id "${id}" not found`);
    return task;
  },

  create(input: CreateTask){
    return taskRepository.create(input);
  },

  // update(id: string, input: UpdateTask): Task {
  //   const task = taskRepository.update(id, input);
  //   if (!task) throw new NotFoundError(`Task with id "${id}" not found`);
  //   return task;
  // },

  remove(id: string){
    const deleted = taskRepository.delete(id);
    if (!deleted) throw new NotFoundError(`Task with id "${id}" not found`);
  },
};
