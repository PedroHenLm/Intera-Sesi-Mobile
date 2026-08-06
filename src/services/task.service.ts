import { taskRepository } from '../repositories/task.repository.js';
import type { CreateTaskInput, Task, UpdateTaskInput } from '../types/task.js';
import { NotFoundError } from '../utils/http-error.js';

export const taskService = {
  list(): Task[] {
    return taskRepository.findAll();
  },

  getById(id: string): Task {
    const task = taskRepository.findById(id);
    if (!task) throw new NotFoundError(`Task with id "${id}" not found`);
    return task;
  },

  create(input: CreateTaskInput): Task {
    return taskRepository.create(input);
  },

  update(id: string, input: UpdateTaskInput): Task {
    const task = taskRepository.update(id, input);
    if (!task) throw new NotFoundError(`Task with id "${id}" not found`);
    return task;
  },

  remove(id: string): void {
    const deleted = taskRepository.delete(id);
    if (!deleted) throw new NotFoundError(`Task with id "${id}" not found`);
  },
};
