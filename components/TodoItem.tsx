// components/TodoItem.tsx
import { TodoItemProps } from '../types/Todo';

export default function TodoItem({ task, onComplete, onRemove }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3 flex-1">
        <button
          onClick={() => onComplete(task.id)}
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
            task.completed
              ? 'bg-green-white border-blue-950 text-black'
              : 'border-gray-300 hover:border-blue-950 hover:bg-blue-50'
          }`}
        >
          {task.completed && (
            <svg
              className="w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        
        <span
          className={`flex-1 text-lg ${
            task.completed
              ? 'text-gray-900 line-through'
              : 'text-gray-800'
          }`}
        >
          {task.text}
        </span>
      </div>
      
      <button
        onClick={() => onRemove(task.id)}
        className="ml-4 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
        aria-label="Remove task"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}