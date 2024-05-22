import React from 'react';
import './App.css';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes App</h1>
      </header>
      <main className="App-main">
        <NoteEditor />
        <NoteList />
      </main>
    </div>
  );
}

export default App;
