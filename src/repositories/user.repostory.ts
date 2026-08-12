import { randomUUID } from "node:crypto";
import type { User, CreateUser, UpdateUser } from "../types/user.js";
import sql from "../db.js";

class UserRepository{
    
    async findAll(): Promise<User[]>{
        const usuarios =  await sql<User[]>`select * from usuario`
        return usuarios;
    }

    async findById(id: string): Promise<User | undefined>{
        const [usuario] = await sql<User[]>`Select * from usuario where id_usuario=${id}`
        return usuario;
    }

    async create(input: CreateUser){
        const userCreation = {
            name: input.name,
            email: input.email,
            role: input.role,
            nif: input.nif,
            password: input.password
        }

        
        const criar = await sql`INSERT INTO usuario(email, nome, cargo, nif, senha ) values(${userCreation.email}, ${userCreation.name}, ${userCreation.role}, ${userCreation.nif}, ${userCreation.password} )`
        return  criar;
    }

    async delete(id: string){
        const deletar = await sql`Delete * from usuarios where id=${id}`
        return deletar
    }

    


}

export const userRepository = new UserRepository()