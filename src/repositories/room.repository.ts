import sql from "../db.js";
import { room, CreateRoom } from "../types/room.js";

class RoomRepository {
    async createRoom(input: CreateRoom) {

    }

    async List(): Promise<room[] | undefined> {
        const list = await sql<room[]>`SELECT * FROM sala`
        return list
    }

    async deactivate(id: string) {
        const deactivate = await sql`UPDATE sala SET status = 0 where id_sala = ${id}`
        return deactivate
    }
}

export const roomRepository = new RoomRepository()