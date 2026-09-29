import { Request, Response } from "express"
import { helperService } from "../services/helper.service.js"

export const helperController = {
    async getRoles(_req: Request, res:Response){
        const roles = await helperService.GetRoles()
        res.status(200).json({data: roles, message: "Oi"})
    }
}