'use client';

import { useState } from 'react';
import { AddtaskformProps } from '../types/Todo';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from 'lucide-react'; 

export default function Addtaskform({ onAddTask }: AddtaskformProps) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputText.trim()) {
      onAddTask(inputText.trim());
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-3">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm text-black"
        />

        <Button
          type="submit"
          disabled={!inputText.trim()}
          className="px-6 py-3"
        >
          Add Task
          <ChevronRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
