import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AppWrapper = () => {
  const navigate = useNavigate();
  
  return (
    <AuthProvider navigate={navigate}>
      <App />
    </AuthProvider>
  );
};

ReactDOM.render(
  <Router>
    <AppWrapper />
  </Router>,
  document.getElementById('root')
);
