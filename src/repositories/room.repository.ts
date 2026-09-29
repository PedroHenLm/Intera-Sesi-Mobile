import sql from "../db.js";
import { room, CreateRoom } from "../types/room.js";

class RoomRepository{
    async createRoom(input: CreateRoom){

    }

    async List(): Promise<room[] | undefined> {
        const list = await sql<room[]>`SELECT * FROM sala`
        return list
      }
}

export const roomRepository = new RoomRepository()