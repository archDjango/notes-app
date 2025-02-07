import React, { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import Pagination from "./Pagination";

const NoteList = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleSave = () => {
    if (editId) {
      setNotes(notes.map(note => (note.id === editId ? { ...note, text } : note)));
      setEditId(null);
    } else {
      setNotes([...notes, { id: Date.now(), text }]);
    }
    setText("");
  };

  const handleEdit = (id) => {
    const noteToEdit = notes.find(note => note.id === id);
    setText(noteToEdit.text);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const totalPages = Math.ceil(notes.length / itemsPerPage);
  const paginatedNotes = notes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <h2>📝 Notes</h2>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a note..." />
      <button onClick={handleSave}>{editId ? "Update" : "Save"}</button>

      {paginatedNotes.map(note => (
        <NoteItem key={note.id} note={note} onEdit={handleEdit} onDelete={handleDelete} />
      ))}

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default NoteList;
