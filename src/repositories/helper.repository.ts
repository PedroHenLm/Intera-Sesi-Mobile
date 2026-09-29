import { Sql } from "postgres"
import sql from "../db.js"
import { roles } from "../types/helper.js"


class HelperRepository{
    async getRoles():Promise<roles[] | undefined>{
        const roles = await sql<roles[]>`SELECT DISTINCT cargo FROM usuario;`
        return roles
    }
}

export const helperRepository = new HelperRepository()