import sql from "../db.js";
import { Count, CreateCount, UpdateCount } from "../types/count.js";

class CountRepository{
    async findAll(): Promise<Count[] | undefined>{
        const counts = await sql<Count[]>`SELECT * FROM contagem`
        return counts
    }

    async findById(id: string): Promise<Count[] | undefined>{
        const count = await sql<Count[]>`Select * FROM contagem WHERE id_contagem = ${id}`
        return count
    }

    async Create(input: CreateCount){
        const countCreation = {
            count : input.count,
            status: input.status,
            Class: input.Class,
            user: input.user
        }

        const create = await sql`INSERT INTO contagem(contagem, status, id_usuario, sala_id) VALUES (${countCreation.count}, ${countCreation.status}, ${countCreation.user}, ${countCreation.Class})`

        return create

    }

    async Update(input:UpdateCount, id:string) {
        console.log(input, id)
        const update = await sql`UPDATE contagem SET contagem = ${input.count} where id_contagem = ${id}`
        return update
    }


}

export const countRepository = new CountRepository()