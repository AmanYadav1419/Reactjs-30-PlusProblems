// problem statment / Question :-
// Implement a simple to-do list application with add and remove functionality

import React, { useState } from "react";

const ToDoListApp = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const AddToDoList = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const RemoveToDoList = (index) => {
    const updatedToDos = todos.filter((_,i)=> i !== index);
    setTodos(updatedToDos);

  };
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={AddToDoList}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={()=> RemoveToDoList(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoListApp;
