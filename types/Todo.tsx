export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoItemProps {
  task: Task;
  onComplete: (id: string) => void;
  onRemove: (id: string) => void;
}

export interface TodoListProps {
  tasks: Task[];
  onComplete: (id: string) => void;
  onRemove: (id: string) => void;
}

export interface AddtaskformProps {
  onAddTask: (taskText: string) => void;
}
