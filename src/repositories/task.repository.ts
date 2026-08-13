import { randomUUID } from 'node:crypto';
import type { Task, CreateTask, UpdateTask } from '../types/task.js';
import sql from '../db.js';

class TaskRepository {
  //visualizar todas as tarefas
  async findAll(): Promise<Task[]> {
    const task = await sql<Task[]>`SELECT * FROM requisicao`;
    return task;
  }
  
  //visualizar tarefa especifica
  async findById(id: string): Promise<Task[] | undefined> {
    const task = await sql<Task[]>`SELECT * FROM requisicao WHERE id_requisicao = ${id}`;
    return task;
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

  // update(id: string, input: UpdateTaskInput): Task | undefined {
  //   const task = this.findById(id);
  //   if (!task) return undefined;

  //   if (input.title !== undefined) task.title = input.title;
  //   if (input.done !== undefined) task.done = input.done;

  //   return task;
  // }

  async delete(id: string) {
    const deletar = await sql`DELETE FROM requisicao WHERE id_requisicao = ${id}`;
    return deletar;
  }
}

export const taskRepository = new TaskRepository();
