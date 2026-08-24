import { randomUUID } from "node:crypto";
import type { User, CreateUser, UpdateUser } from "../types/user.js";
import sql from "../db.js";
import { email } from "zod/v4";

class UserRepository {

    async findAll(): Promise<User[]> {
        const usuarios = await sql<User[]>`select * from usuario`
        return usuarios;
    }

    async findById(id: string): Promise<User | undefined> {
        const [usuario] = await sql<User[]>`Select * from usuario where id_usuario=${id}`
        return usuario;
    }

    async create(input: CreateUser) {
        const userCreation = {
            name: input.name,
            email: input.email,
            role: input.role,
            nif: input.nif,
            password: input.password
        }


        const criar = await sql`INSERT INTO usuario(email, nome, cargo, nif, senha ) values(${userCreation.email}, ${userCreation.name}, ${userCreation.role}, ${userCreation.nif}, ${userCreation.password} )`
        return criar;
    }

    async delete(id: string) {
        const deletar = await sql`Delete from usuario where id_usuario=${id}`
        return deletar
    }

    async update(id: string, input: UpdateUser): Promise<User | undefined> {
        console.log(input.email)
        const user = await this.findById(id)
        if (!user) return undefined

        const values: any[] = []
        const updates: string[]= []

        if(input.email !== undefined){
            values.push(input.email)
            updates.push(`email = $${values.length}`)
            
        }

        if(input.nif !== undefined){
            values.push(input.nif)
            updates.push(`nif = $${values.length}`)
        }

        if(input.name !== undefined){
            values.push(input.name)
            updates.push(`nome = $${values.length}`)
        }

        if(input.role !== undefined){
            values.push(input.role)
            updates.push(`cargo = $${values.length}`)
        }

        if(input.password !== undefined){
            values.push(input.password)
            updates.push(`senha = $${values.length}`)
        }

        if(updates.length === 0){
            return user
        }

        //Mesma ideia daquele concat, porem a logica de como a gente usava ele estava errada, agora ele junta toda a array de updates colocando a virgula entre os valores e gerando a string do set de uma vez
        

        

        values.push(id)


        /*
            Não sabia dessa parada mas essa função "sql" dentro dos teamplates literais forçam a string a ser lida como sql puro, ent nn vem entre aspas pelo oq entendi
        */
        const [update] = await sql<any[]>`UPDATE usuario SET ${sql(updates.join(', '))} WHERE id_usuario = $${values.length}`

        if (update.length === 0) return undefined;

        return update



        // if (input.email !== undefined) user.email = input.email;
        // if (input.name !== undefined) user.name = input.name;
        // if (input.password !== undefined) user.password = input.password;
        // if (input.nif !== undefined) user.nif = input.nif
        // if (input.role !== undefined) user.role = input.role




    }
}

export const userRepository = new UserRepository()