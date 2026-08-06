export interface Task {
  id: string;
  title: string;
  done: boolean;
  createdAt: string;
}

export type CreateTaskInput = {
  title: string;
};

export type UpdateTaskInput = {
  title?: string;
  done?: boolean;
};
