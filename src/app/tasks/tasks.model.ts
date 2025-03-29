export interface NewTask {
  userId: string;
  title: string;
  summary: string;
}

export interface Task extends NewTask {
  id: string;
  dueDate: string;
}