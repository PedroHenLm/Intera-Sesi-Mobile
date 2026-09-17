import sql from "../db.js";
import { close, DoClose } from "../types/close.js";

class closeRepository{
    async findByReq(id: string){
        const find = await sql`SELECT * FROM baixa WHERE id_requisicao = ${id}`
        return find
    }

    async doClose(input: DoClose){
        const doClose= {
            observation : input.observation,
            id_req: input.id_req,
            id_user: input.id_user,
            img: input.img,
            date: input.date
        }

       const close = await sql`INSERT INTO baixa(observacao, id_requisicao, id_user_baixa, data_baixa, img_baixa) VALUES (${doClose.observation ?? null}, ${doClose.id_req}, ${doClose.id_user}, ${doClose.date}, ${doClose.img ?? null} )`
        
       return close

    }
}

export const CloseRepository = new closeRepository()