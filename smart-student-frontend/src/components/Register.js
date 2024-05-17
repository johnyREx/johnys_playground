import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onRegisterClick = async () => {
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setError('');
    setLoading(true);

    // Validate inputs
    if (!email) {
      setEmailError('Please enter your email');
      setLoading(false);
      return;
    }
    if (!password) {
      setPasswordError('Please enter your password');
      setLoading(false);
      return;
    }
    if (password.length < 8) {
      setPasswordError('Password must be 8 characters or longer');
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      // Send registration request to backend
      const response = await fetch('your-register-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Registration successful, handle accordingly (e.g., redirect to login)
        navigate('/login');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('Something went wrong, please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <h2>Register</h2>
      </div>
      <div className="inputContainer">
        <input
          value={email}
          placeholder="Enter your email"
          onChange={(ev) => setEmail(ev.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <div className="inputContainer">
        <input
          value={password}
          type="password"
          placeholder="Enter your password"
          onChange={(ev) => setPassword(ev.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <div className="inputContainer">
        <input
          value={confirmPassword}
          type="password"
          placeholder="Confirm your password"
          onChange={(ev) => setConfirmPassword(ev.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{confirmPasswordError}</label>
      </div>
      {error && <div className="errorLabel">{error}</div>}
      <div className="inputContainer">
        <input
          className="inputButton"
          type="button"
          onClick={onRegisterClick}
          value={loading ? 'Registering...' : 'Register'}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default Register;
