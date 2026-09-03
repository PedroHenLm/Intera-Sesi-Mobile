export type setor = 'direction' | 'teacher' | 'inspector' | 'coordination' | 'Kitchen';
export type status = 'aberta' | 'concluida';

export interface Task {
  id_requisicao: number;
  data_criacao: string;
  prazo_estipulado: string;
  id_origem_fk: number;
  setor_responsavel: setor;
  descricao: string;
  status_req: status;
}

export type CreateTask = {
  data_criacao: string;
  prazo_estipulado: string;
  setor_responsavel: setor;
  descricao: string;
  imagen?: Blob
};

export type UpdateTask = {
  prazo_estipulado: string;
  setor_responsavel: setor;
  descricao: string;
  status_req: status;
  imagem?: Blob
};
