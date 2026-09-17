// question :- Create a simple to-do list using useReducer to manage tasks..

import React, { useReducer, useState } from "react";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];

    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);

    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    default:
      return state;
  }
};

const ToDowithReducer = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const [taskText, setTaskText] = useState("");

  // add to task function
  const addTaskToDo = () => {
    dispatch({ type: "ADD_TASK", payload: taskText });
    setTaskText("");
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-md mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col gap-6">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Reducer Tasks</h2>

        <div className="flex gap-2">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTaskToDo()}
            placeholder="Add new task..."
            className="flex-1 bg-[#18181c] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 transition-all"
          />
          <button onClick={addTaskToDo} className="px-5 py-3 bg-blue-500 hover:bg-blue-600 active:scale-95 rounded-xl text-sm font-semibold text-white transition-all">
            Add
          </button>
        </div>

        {tasks.length === 0 ? (
          <p className="text-center text-zinc-600 text-sm py-6">No tasks added yet.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {tasks.map((task) => (
              <li key={task.id} className="flex items-center justify-between px-4 py-3 bg-[#18181c] border border-white/5 rounded-xl group">
                <span
                  className={`text-sm cursor-pointer transition-colors ${task.completed ? "text-zinc-500 line-through" : "text-zinc-200 hover:text-blue-400"}`}
                  onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}
                  className="text-xs text-zinc-600 hover:text-red-400 font-medium transition-colors opacity-0 group-hover:opacity-100"
                >
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

export default ToDowithReducer;
