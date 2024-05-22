import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ onLogout }) {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/reminders">Reminders</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
