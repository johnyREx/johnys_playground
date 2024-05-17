import React from 'react';
import holbertonLogo from './holberton-logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
        </header>
        <body className='App-body'>
          <div>
            <p>Login to access the full dashboard</p>
          </div>
        </body>
        <footer className='App-footer'>
          <div>
            <p>Copyright 2020 - Holberton School</p>
          </div>
        </footer>
    </div>
  );
}

export default App;
