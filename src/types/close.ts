import fileUpload from "express-fileupload"

export interface close{
    id: string
    observation: string
    id_req: string
    id_user: string
    date: string
    img: Blob
}


export type DoClose ={
    observation?: string
    id_req: string
    id_user: string
    date:string
    img?: Buffer
}