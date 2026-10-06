export interface Count{
    id: string;
    count: number;
    status: number;
    user: string;
    classroom: string;
}

export type CreateCount = {
    count: number;
    status: number;
    user: string;
    classroom: string;
}

export type UpdateCount={
    count: number;
}

