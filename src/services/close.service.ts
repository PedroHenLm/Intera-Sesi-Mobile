import { NetworkResources } from "inspector/promises";
import { CloseRepository } from "../repositories/close.repository.js";
import { close, DoClose } from "../types/close.js";
import { UnauthorizedError } from "../utils/http-error.js";
import { taskRepository } from "../repositories/task.repository.js";

export const closeService = {
    async close(input: DoClose){
        const req = await taskRepository.findById(input.id_req)
        if (!req) throw new UnauthorizedError(`Req with id = ${input.id_req} not found`)
        
        return CloseRepository.doClose(input)
    },
}