import { z } from 'zod';


export const taskIdSchema = z.object({
  id: z.string().uuid('id must be a valid uuid'),
});

export const createTaskSchema = z.object({
  data_criacao: z.string(),

  prazo_estipulado: z.string(),

  setor_responsavel: z.enum(['direction', 'teacher', 'inspector', 'coordination', 'Kitchen']),

  descricao: z.string(),
});

export const updateTaskSchema = z.object({
  prazo_estipulado: z.string(),

  setor_responsavel: z.enum(['direction', 'teacher', 'inspector', 'coordination', 'Kitchen']),

  descricao: z.string(),

  status_req: z.coerce.number().refine((val) => val === 0 || val === 1, {
    message: 'O número deve ser 0 ou 1',
  }),
});
