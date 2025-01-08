export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  notificationTime: string;
  priority: 'High' | 'Medium' | 'Low';
  createdAt: string;
  completed: boolean;
}

export type TaskFormData = Omit<Task, 'id' | 'createdAt' | 'completed'>;