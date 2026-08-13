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

        if (input.email !== undefined) user.email = input.email;
        if (input.name !== undefined) user.name = input.name;
        if (input.password !== undefined) user.password = input.password;
        
    }




}

export const userRepository = new UserRepository()