import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './components/Dashboard';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    // Perform authentication logic here
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic here
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        {/* Render Navbar and Sidebar here */}
        <Navbar />
        <Sidebar />
        {/* Routes */}
        <Routes>
          {/* Render sign-in/sign-up forms if not authenticated */}
          {!isAuthenticated && (
            <>
              <Route path="/" element={<SignIn onLogin={handleLogin} />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          )}

          {/* Render dashboard if authenticated */}
          {isAuthenticated && (
            <Route path="/" element={<Dashboard onLogout={handleLogout} />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
