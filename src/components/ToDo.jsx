// src/ToDo.js
import React from 'react';
import './ToDo.css';

const ToDo = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(todo.id)}>{todo.task}</span>
      <button onClick={() => removeTodo(todo.id)}>X</button>
    </div>
  );
};

export default ToDo;
