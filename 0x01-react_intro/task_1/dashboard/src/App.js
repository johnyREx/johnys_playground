import React from 'react';
import holbertonLogo from './holberton-logo.jpeg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  const handleLabelClick = (inputId) => {
    document.getElementById(inputId).focus();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
        </header>
        <body className='App-body'>
          <div>
            <p>Login to access the full dashboard</p>
            <label htmlFor='email'>Email:</label>
            <input type='text' id='email' />
            <br />
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' />
            <br />
            <button>OK</button>
          </div>
        </body>
        <footer className='App-footer'>
          <div>
            <p>Copyright 2020 {getFullYear()} - {getFooterCopy(true)}</p>
          </div>
        </footer>
    </div>
  );
}

export default App;
