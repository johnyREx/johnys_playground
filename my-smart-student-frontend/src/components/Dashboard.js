// Dashboard.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      {user ? (
        <h1 className={styles.title}>Welcome, {user.name}!</h1>
      ) : (
        <p>Loading...</p>
      )}
      {/* Other dashboard content */}
    </div>
  );
};

export default Dashboard;
