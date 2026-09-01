export type UserRoles = 'direction'| 'teacher'| 'inspector'| 'coordination'| 'Kitchen'

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRoles;
    nif: string;
    createdAt: string;
    password?: string;
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