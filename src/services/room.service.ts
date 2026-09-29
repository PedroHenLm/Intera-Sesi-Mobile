import { roomRepository } from "../repositories/room.repository.js"
import { room } from "../types/room.js"

export const roomService = {
    async list(): Promise<room[] | undefined> {
        return roomRepository.List()
    },
}