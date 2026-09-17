import {z} from "zod"

export const doClose = z.object({
    
    observation: z.string().optional(),
    id_req: z.string(),
    id_user: z.string(),
    date: z.string()
})