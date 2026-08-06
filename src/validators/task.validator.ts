import { z } from 'zod';

export const createTaskSchema = z.object({
  title: z.string().trim().min(1, 'title is required'),
});

export const updateTaskSchema = z
  .object({
    title: z.string().trim().min(1, 'title cannot be empty').optional(),
    done: z.boolean().optional(),
  })
  .refine((data) => data.title !== undefined || data.done !== undefined, {
    message: 'at least one field (title, done) must be provided',
  });

export const taskIdSchema = z.object({
  id: z.string().uuid('id must be a valid uuid'),
});
