export type UserRoles = 'direction'| 'teacher'| 'inspector'| 'coordination'| 'Kitchen'

export type User = {
    id_usuario: string;
    name: string;
    email: string;
    cargo: UserRoles;
    nif: string;
    createdAt: string;
    password?: string;
}

export type UserLogin = {
    id_usuario: string;
    cargo: UserRoles;
}

export type CreateUser = {
    name: string;
    email: string;
    password: string;
    role: string;
    nif: string;
}

export type UpdateUser = {
    name?: string;
    email?: string;
    password?: string;
    role?: UserRoles;
    nif?: string;
}

export type LoginUser ={
    email: string
    password: string
}