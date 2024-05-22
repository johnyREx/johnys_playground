import React, { useState } from 'react';
import { saveReminder } from '../../utils/api';

const ReminderEditor = ({ reminder = {}, onSave }) => {
  const [title, setTitle] = useState(reminder.title || '');
  const [date, setDate] = useState(reminder.date || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedReminder = await saveReminder({ title, date });
    onSave(updatedReminder);
  };

  return (
    <div>
      <h2>{reminder.id ? 'Edit Reminder' : 'Create Reminder'}</h2>
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
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ReminderEditor;
