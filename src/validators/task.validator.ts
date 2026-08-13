import { z } from 'zod';

const setor = ['direction', 'teacher', 'inspector', 'coordination', 'Kitchen'];
const status = ['aberta', 'concluida']

export const taskIdSchema = z.object({
  id: z.string().uuid('id must be a valid uuid'),
});

export const createTaskSchema = z.object({
  data_criacao: z.string(),

  prazo_estipulado: z.string(),

  setor_responsavel: z.string.refine((val) => setor.includes(val), {
    message: 'Setor inválido',
  }),

  descricao: z.string()
  
});

export const updateTaskSchema = z
  .object({
    title: z.string().trim().min(1, 'title cannot be empty').optional(),
    done: z.boolean().optional(),
  })
  .refine((data) => data.title !== undefined || data.done !== undefined, {
    message: 'at least one field (title, done) must be provided',
  });
