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
    <div>
      <h2>ToDo List using useReducer</h2>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add New Task"
      />
      <button onClick={addTaskToDo}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              onClick={() =>
                dispatch({ type: "TOGGLE_TASK", payload: task.id })
              }
            >
              {task.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_TASK", payload: task.id })
              }
            >
              REMOVE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDowithReducer;
