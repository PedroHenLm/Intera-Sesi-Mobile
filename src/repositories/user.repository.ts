import { randomUUID } from "node:crypto";
import type { User, CreateUser, UpdateUser } from "../types/user.js";
import sql from "../db.js";

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
        const user = await this.findById(id)
        if (!user) return undefined

        const userUpdate = {
            name: input.name,
            email: input.email,
            role: input.role,
            nif: input.nif,
            password: input.password
        }

        // if (input.email !== undefined) user.email = input.email;
        // if (input.name !== undefined) user.name = input.name;
        // if (input.password !== undefined) user.password = input.password;
        // if (input.nif !== undefined) user.nif = input.nif
        // if (input.role !== undefined) user.role = input.role

        let query = `UPDATE usuario`
        if (userUpdate.name) {
            query.concat(` SET name = ${userUpdate.name} `)
            if (userUpdate.email || userUpdate.role || userUpdate.nif || userUpdate.password) {
                query.concat(`,`)
            }
        }

        if (userUpdate.email) {
            query.concat(` SET email = ${userUpdate.email} `)
            if (userUpdate.role || userUpdate.nif || userUpdate.password) {
                query.concat(`,`)
            }
        }

        if (userUpdate.role) {
            query.concat(` SET role = ${userUpdate.role} `)
            if (userUpdate.nif || userUpdate.password) {
                query.concat(` , `)
            }
        }

        if (userUpdate.nif) {
            query.concat(` SET nif = ${userUpdate.nif} `)
            if (userUpdate.password) {
                query.concat(` , `)
            }
        }

        if (userUpdate.password) {
            query.concat(` SET password = ${userUpdate.password} `)
        }

        query.concat(` where id_usuario = ${id}`)

        console.log("query final: " + query);
        const update = await sql`${query}`;
        return update

    }
}

export const userRepository = new UserRepository()