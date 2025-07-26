'use client';

import { useState } from 'react';
import { Task } from '../../types/Todo';
import AddTaskForm from '../../components/AddTaskForm';
import TodoList from '../../components/TodoList';
import Link from 'next/link';

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text: taskText,
      completed: false,
      createdAt: new Date(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleComplete = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="bg-blue-950 shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">To-do App</h1>
            <Link
              href="/about"
              className="text-white hover:text-red-500 font-medium transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              My Tasks
            </h2>
            {totalCount > 0 && (
              <p className="text-gray-400">
                {completedCount} of {totalCount} tasks completed
              </p>
            )}
          </div>

          <AddTaskForm onAddTask={addTask} />
          
          <TodoList
            tasks={tasks}
            onComplete={toggleComplete}
            onRemove={removeTask}
          />
        </div>
      </main>
    </div>
  );
}