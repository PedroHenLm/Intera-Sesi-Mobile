import { randomUUID } from 'node:crypto';
import type { CreateTaskInput, Task, UpdateTaskInput } from '../types/task.js';

class TaskRepository {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  findById(id: string): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  create(input: CreateTaskInput): Task {
    const task: Task = {
      id: randomUUID(),
      title: input.title,
      done: false,
      createdAt: new Date().toISOString(),
    };
    this.tasks.push(task);
    return task;
  }

  update(id: string, input: UpdateTaskInput): Task | undefined {
    const task = this.findById(id);
    if (!task) return undefined;

    if (input.title !== undefined) task.title = input.title;
    if (input.done !== undefined) task.done = input.done;

    return task;
  }

  delete(id: string): boolean {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1) return false;
    this.tasks.splice(index, 1);
    return true;
  }
}

export const taskRepository = new TaskRepository();
