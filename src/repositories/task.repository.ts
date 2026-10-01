import { randomUUID } from 'node:crypto';
import type { Task, CreateTask, UpdateTask } from '../types/task.js';
import sql from '../db.js';
import { userRepository } from './user.repository.js';
import { NotFoundError } from '../utils/http-error.js';

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
  
  async findByRole(role: string): Promise<Task[] | undefined>{
    const task = await sql<Task[]>`SELECT * FROM requisicao WHERE setor_responsavel = ${role} `
        console.log(task)

    return task
  }

  //criar nova tarefa
  async create(input: CreateTask, id: string) {
    const taskCreation = {
      data_criacao: input.data_criacao,
      prazo_estipulado: input.prazo_estipulado,
      setor_responsavel: input.setor_responsavel,
      descricao: input.descricao,
      urgencia: input.urgencia
    };

    const origem = await userRepository.findById(id)

    if(!origem){
      throw new NotFoundError(`Usuario com id ${id} não foi encontrado`)
    }

    console.log('taskCreation:', taskCreation);
console.log('id:', id);

    const criar =
      await sql`INSERT INTO requisicao (data_criacao, prazo_estipulado, setor_responsavel, descricao,urgencia , id_origem_fk, status_req)
    VALUES (
    ${taskCreation.data_criacao},
    ${taskCreation.prazo_estipulado},
    ${taskCreation.setor_responsavel},
    ${taskCreation.descricao},
    ${taskCreation.urgencia},
    ${id},
    1
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
    status_req = ${input.status_req} WHERE id_requisicao = ${id}`;

    return atualizar;
  }

  async delete(id: string) {
    const deletar = await sql`DELETE FROM requisicao WHERE id_requisicao = ${id}`;
    return deletar;
  }
}

export const taskRepository = new TaskRepository();
