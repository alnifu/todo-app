import React from 'react';
import TodoList from './components/ToDoList.js';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <TodoList />
    </div>
  );
}

export default App;
