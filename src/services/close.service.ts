import { CloseRepository } from "../repositories/close.repository.js";
import { close, DoClose } from "../types/close.js";

export const closeService = {
    async close(input: DoClose){
        return CloseRepository.doClose(input)
    }
}