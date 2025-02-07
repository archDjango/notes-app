import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import NoteList from "./components/NoteList";
import "./styles/styles.css";

const App = () => {
  return (
    <div className="container">
      <h1>🗒️ Note-Taking App</h1>
      <ThemeToggle />
      <NoteList />
    </div>
  );
};

export default App;
