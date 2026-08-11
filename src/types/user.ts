export type UserRoles = 'direction'| 'teacher'| 'inspector'| 'coordination'| 'Kitchen'

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: UserRoles;
    nif: string;
    createdAt: string;
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