import React from 'react';

const ReminderItem = ({ reminder }) => {
  return (
    <div>
      <h3>{reminder.title}</h3>
      <p>{reminder.date}</p>
    </div>
  );
};

export default ReminderItem;
