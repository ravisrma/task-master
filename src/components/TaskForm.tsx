import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { TaskFormData } from '../types/task';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface TaskFormProps {
  onSubmit: (task: TaskFormData) => void;
}

export function TaskForm({ onSubmit }: TaskFormProps) {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
    dueDate: '',
    notificationTime: '',
    priority: 'Medium', // New field for priority
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      toast.error('Task title is required!');
      return;
    }
    
    onSubmit(formData);
    toast.success('Task submitted successfully!');
    setFormData({
      title: '',
      description: '',
      dueDate: '',
      notificationTime: '',
      priority: 'Medium',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div>
        <input
          type="text"
          placeholder="Task title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Description (optional)"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          rows={3}
        />
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm text-gray-600 mb-1">Due Date</label>
          <input
            type="date"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm text-gray-600 mb-1">Priority</label>
          <select
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value as 'High' | 'Medium' | 'Low' })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
      >
        <PlusCircle size={20} />
        Add Task
      </button>
      <ToastContainer />
    </form>
  );
}