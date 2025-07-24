// src/app/about/page.tsx
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="bg-blue-950 shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">To-do App</h1>
            <Link
              href="/"
              className="text-white hover:text-red-500 font-medium transition-colors"
            >
              Back to Tasks
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            About This To-do App
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              This is a simple yet powerful to-do application built with modern web technologies.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6">Features:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Add new tasks with a simple, intuitive interface</li>
              <li>Mark tasks as completed with a single click</li>
              <li>Remove tasks you no longer need</li>
              <li>Track your progress with completion statistics</li>
              <li>Responsive design that works on all devices</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6">Built With:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Next.js 14</strong> - React framework with App Router</li>
              <li><strong>TypeScript</strong> - Type-safe development</li>
              <li><strong>Tailwind CSS</strong> - Utility-first styling</li>
              <li><strong>React Hooks</strong> - Modern state management</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6">How to Use:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Type your task in the input field</li>
              <li>Click "Add Task" or press Enter</li>
              <li>Click the circle to mark a task as complete</li>
              <li>Click the trash icon to remove a task</li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}