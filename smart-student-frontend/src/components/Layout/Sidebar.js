import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li><Link to="/notes">Notes</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/reminders">Reminders</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
