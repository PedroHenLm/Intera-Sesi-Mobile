import { randomUUID } from 'node:crypto';
import type { Task, CreateTask, UpdateTask } from '../types/task.js';
import sql from '../db.js';

class TaskRepository {
  //visualizar todas as tarefas
  async findAll(): Promise<Task[] | undefined> {
    const task = await sql<Task[]>`SELECT * FROM requisicao`;
    return task;
  }

  //visualizar tarefa especifica
  async findById(id: string): Promise<Task | undefined> {
    const task = await sql<Task[]>`SELECT * FROM requisicao WHERE id_requisicao = ${id}`;
    return task[0];
  }

  //criar nova tarefa
  async create(input: CreateTask) {
    const taskCreation = {
      data_criacao: input.data_criacao,
      prazo_estipulado: input.prazo_estipulado,
      setor_responsavel: input.setor_responsavel,
      descricao: input.descricao,
    };

    const criar =
      await sql`INSERT INTO requisicao (data_criacao, prazo_estipulado, setor_responsavel, descricao) 
    VALUES (
    ${taskCreation.data_criacao},
    ${taskCreation.prazo_estipulado},
    ${taskCreation.setor_responsavel},
    ${taskCreation.descricao}
    )`;

    return criar;
  }

  async update(id: string, input: UpdateTask) {
    const task = await this.findById(id);
    if (!task) return undefined;

    const atualizar = await sql`UPDATE requisicao SET 
    prazo_estipulado = ${input.prazo_estipulado},
    setor_responsavel = ${input.setor_responsavel},
    descricao = ${input.descricao},
    status_req = ${input.status_req}`;

    return atualizar;
  }

  async delete(id: string) {
    const deletar = await sql`DELETE FROM requisicao WHERE id_requisicao = ${id}`;
    return deletar;
  }
}

export const taskRepository = new TaskRepository();
