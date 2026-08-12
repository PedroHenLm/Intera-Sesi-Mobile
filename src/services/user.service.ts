
import { NotFoundError } from '../utils/http-error.js';
import type { User, CreateUser, UpdateUser } from '../types/user.js';
import { userRepository } from '../repositories/user.repostory.js';

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
    }
}