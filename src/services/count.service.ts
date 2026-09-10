import { countRepository } from "../repositories/count.repository.js";
import { Count, CreateCount, UpdateCount } from "../types/count.js";
import { NotFoundError } from "../utils/http-error.js";

export const countService = {
    async list():Promise<Count[] | undefined>{
        return countRepository.findAll()
    },

    async getById(id: string): Promise<Count[]>{
        const count = await countRepository.findById(id)
        if(!count) throw new NotFoundError(`User with id "${id}" not found`);
        return count
    },
    
    async create(input: CreateCount){
        return countRepository.Create(input)
    },

    async update(input: UpdateCount, id: string){
        const updateCount = await countRepository.Update(input, id)
        if(!updateCount) throw new NotFoundError(`User with id "${id}" not found`);
        return updateCount
    }
}