import React, { useState, useEffect } from 'react';
import { getReminders } from '../../utils/api';
import ReminderItem from './ReminderItem';

const ReminderList = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const fetchReminders = async () => {
      const response = await getReminders();
      setReminders(response.data);
    };
    fetchReminders();
  }, []);

  return (
    <div>
      <h2>Reminders</h2>
      {reminders.map(reminder => (
        <ReminderItem key={reminder.id} reminder={reminder} />
      ))}
    </div>
  );
};

export default ReminderList;
