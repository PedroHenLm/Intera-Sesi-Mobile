import { z } from 'zod';

const roles = ['direction','teacher', 'inspector','coordination','Kitchen']
 
export const createUserSchema = z.object({
  name: z.string().trim().min(3, 'A name is required'),

  email: z.string().email('Email Invalido'),

  password: z.string().regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])^[\x21-\x7e]{8,255}$/).min(8),

  role: z.string().refine(
    (val) => roles.includes(val), {
        message: 'Cargo Invalido'
    }
  ),

  nif: z.string(), // sei la qual o padrão do nif, perguntar dps
});

export const updateUserSchema = z.object({
  name: z.string(),

  email: z.string().email()
})
