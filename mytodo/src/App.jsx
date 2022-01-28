import React from "react";
import "./App.css";
import TodoApp from "./Components/TodoApp";

function App() {
  return (
    <div className="App">
      <span className="title">my To-do List</span> <br />
      <TodoApp />
    </div>
  );
}

export default App;