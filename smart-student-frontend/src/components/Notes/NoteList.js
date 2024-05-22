import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NoteList({ selectNote }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('/api/notes')
      .then(response => setNotes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map(note => (
          <li key={note._id} onClick={() => selectNote(note)}>
            {note.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;