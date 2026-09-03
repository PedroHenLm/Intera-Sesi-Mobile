export interface Count{
    id: string;
    contagem: number;
    status: boolean;
}

export type CreateCount = {
    contagem: number;
    status: boolean;
}

export type UpdateCount={
    contagem: number;
}

