import { roomRepository } from "../repositories/room.repository.js"
import { room } from "../types/room.js"
import { NotFoundError } from "../utils/http-error.js"

export const roomService = {
    async list(): Promise<room[] | undefined> {
        return roomRepository.List()
    },

    async deactivate(id: string) {
        const deactivate = await roomRepository.deactivate(id)
        if (!deactivate) throw new NotFoundError(`User with id "${id}" not found`);
        return deactivate
    }
}