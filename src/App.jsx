// src/App.js
import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = task => {
    setTodos([
      ...todos,
      { id: Date.now(), task, completed: false }
    ]);
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
