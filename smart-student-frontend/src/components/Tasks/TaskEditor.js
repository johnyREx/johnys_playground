import React, { useState } from 'react';
import { saveTask } from '../../utils/api';

const TaskEditor = ({ task = {}, onSave }) => {
  const [title, setTitle] = useState(task.title || '');
  const [description, setDescription] = useState(task.description || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = await saveTask({ title, description });
    onSave(updatedTask);
  };

  return (
    <div>
      <h2>{task.id ? 'Edit Task' : 'Create Task'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TaskEditor;
