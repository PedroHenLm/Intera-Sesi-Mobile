export type setor = 'direction' | 'teacher' | 'inspector' | 'coordination' | 'kitchen';
export type status = 'aberta' | 'concluida';
export type urgencia = 'Não urgente'|'Normal'| 'Urgente' ;

export interface Task {
  id_requisicao: number;
  data_criacao: string;
  prazo_estipulado: string;
  id_origem_fk: number;
  setor_responsavel: setor;
  descricao: string;
  status_req: status;
  urgencia: urgencia;
}

export type CreateTask = {
  data_criacao: string;
  prazo_estipulado: string;
  setor_responsavel: setor;
  descricao: string;
  urgencia: urgencia;
};

export type UpdateTask = {
  prazo_estipulado: string;
  setor_responsavel: setor;
  descricao: string;
  status_req: status;
};
