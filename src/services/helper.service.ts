import { helperRepository } from "../repositories/helper.repository.js"
import { UnauthorizedError } from "../utils/http-error.js";


export const helperService = {
    async GetRoles() {
        const roles = await helperRepository.getRoles();
        if (!roles) throw new UnauthorizedError(`not found`)

        return roles
    },  
}