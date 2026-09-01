
import { NotFoundError, UnauthorizedError } from '../utils/http-error.js';
import type { User, CreateUser, UpdateUser, LoginUser } from '../types/user.js';
import { userRepository } from '../repositories/user.repository.js';



export const userService = {
    async list(): Promise<User[]>{
        return await userRepository.findAll()
    },

    async getById(id: string): Promise<User>{
        const usuario = await userRepository.findById(id)
        if (!usuario) throw new NotFoundError(`User with id "${id}" not found`);
        return usuario
    },

    async create(input: CreateUser){
        return await userRepository.create(input)
    },

    async delete(id: string){
        return await userRepository.delete(id)
    },

    async update(id: string, input: UpdateUser): Promise<User> {
    const updatedUser = await userRepository.update(id, input);
    if (!updatedUser) {
      throw new NotFoundError(`User with id "${id}" not found`);
    }
    return updatedUser;
  },

    async login(input: LoginUser): Promise<User>{
        const user = await userRepository.login(input)

        if(!user){
            throw new UnauthorizedError('Verify your email or password')
        }


        return

    }
}