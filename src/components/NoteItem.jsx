import React from "react";

const NoteItem = ({ note, onEdit, onDelete }) => {
  return (
    <div className="note-card">
      <p>{note.text}</p>
      <button onClick={() => onEdit(note.id)}>✏️ Edit</button>
      <button onClick={() => onDelete(note.id)}>❌ Delete</button>
    </div>
  );
};

export default NoteItem;
