import {z} from "zod";

export const createCountSchema = z.object({
    count: z.number(),

    status: z.number(),

    user: z.string(),

    Class: z.string()
})

export const updateCountSchema= z.object({
    count: z.number()
})