import React, { useState, useEffect } from "react";
import { Editor, EditorState, convertToRaw, convertFromRaw } from "draft-js";
import axios from "axios";
import './note.css';

function NoteEditor({ selectedNote }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (selectedNote) {
      const contentState = convertFromRaw(JSON.parse(selectedNote.content));
      setEditorState(EditorState.createWithContent(contentState));
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [selectedNote]);

  const handleSave = () => {
    const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    if (selectedNote) {
      axios
        .put(`/api/notes/${selectedNote._id}`, { title: selectedNote.title, content })
        .then((response) => console.log("Note updated:", response.data))
        .catch((error) => console.error(error));
    } else {
      const title = prompt("Enter note title:");
      axios
        .post("/api/notes", { title, content })
        .then((response) => console.log("Note created:", response.data))
        .catch((error) => console.error(error));
    }
  };

  const handleDelete = () => {
    if (selectedNote) {
      axios
        .delete(`/api/notes/${selectedNote._id}`)
        .then((response) => console.log("Note deleted:", response.data))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <Editor editorState={editorState} onChange={setEditorState} />
      <button onClick={handleSave}>Save</button>
      {selectedNote && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
}

export default NoteEditor;
