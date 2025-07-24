import { TodoListProps } from '../types/Todo';
import TodoItem from './TodoItem';

export default function TodoList({ tasks, onComplete, onRemove }: TodoListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-950 text-lg mb-2">No tasks yet!</div>
        <div className="text-gray-950 text-sm">Add a task above to get started.</div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}