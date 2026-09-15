import type { User, CreateUser, UpdateUser, LoginUser } from "../types/user.js";
import sql from "../db.js";
import { CriarHash } from "../utils/bcrypt.js";
 

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
        const hash = await CriarHash(input.password, 10)

        const userCreation = {
            name: input.name,
            email: input.email,
            role: input.role,
            nif: input.nif,
            password: hash
        }


        const criar = await sql`INSERT INTO usuario(email, nome, cargo, nif, senha ) values(${userCreation.email}, ${userCreation.name}, ${userCreation.role}, ${userCreation.nif}, ${userCreation.password} )`
        return criar;
    }

    async delete(id: string) {
        const deletar = await sql`Delete from usuario where id_usuario=${id}`
        return deletar
    }

 async update(id: string, input: UpdateUser): Promise<User | undefined> {
  const user = await this.findById(id);
  if (!user) return undefined;

  const updateData: Record<string, any> = {};

  if (input.email !== undefined) updateData.email = input.email;
  if (input.nif !== undefined) updateData.nif = input.nif;
  if (input.name !== undefined) updateData.nome = input.name;
  if (input.role !== undefined) updateData.cargo = input.role;
  if (input.password !== undefined) updateData.senha = input.password;

  if (Object.keys(updateData).length === 0) {
    return user;
  }

  const [updatedUser] = await sql<User[]>`
    UPDATE usuario 
    SET ${sql(updateData, Object.keys(updateData))} 
    WHERE id_usuario = ${id}
    RETURNING *
  `;

  return updatedUser;
}


    async login(input: LoginUser): Promise<User | undefined> {
        const [user] = await sql<User[]>`
        SELECT * FROM usuario 
        WHERE email = ${input.email}
    `;

        return user

    }
}

export const userRepository = new UserRepository()