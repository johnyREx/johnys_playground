// Login.js
import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    // Call backend API to authenticate user
    // Assuming API response contains user data upon successful login
    const userData = { name: 'John Doe' }; // Replace with actual user data
    login(userData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button type="button" onClick={handleLogin} className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
