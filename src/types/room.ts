export interface room{
    id: string;
    name: string;
    quantity: number;
}

export type CreateRoom = {
    name: string;
    quantity: number;
}