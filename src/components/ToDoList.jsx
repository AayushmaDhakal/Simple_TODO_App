// src/ToDoList.js
import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <ToDo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default ToDoList;
