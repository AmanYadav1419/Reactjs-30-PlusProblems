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
    const updatedToDos = todos.filter((_, i) => i !== index);
    setTodos(updatedToDos);

  };
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-md mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col gap-6">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Task List</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && AddToDoList()}
            placeholder="Add a new task..."
            className="flex-1 bg-[#18181c] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 transition-all"
          />
          <button onClick={AddToDoList} className="px-5 py-3 bg-blue-500 hover:bg-blue-600 active:scale-95 rounded-xl text-sm font-semibold text-white transition-all">
            Add
          </button>
        </div>
        {todos.length === 0 ? (
          <p className="text-center text-zinc-600 text-sm py-6">No tasks yet. Add one above.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {todos.map((todo, index) => (
              <li key={index} className="flex items-center justify-between px-4 py-3 bg-[#18181c] border border-white/5 rounded-xl group">
                <span className="text-sm text-zinc-200">{todo}</span>
                <button onClick={() => RemoveToDoList(index)} className="text-xs text-zinc-600 hover:text-red-400 font-medium transition-colors opacity-0 group-hover:opacity-100">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ToDoListApp;
