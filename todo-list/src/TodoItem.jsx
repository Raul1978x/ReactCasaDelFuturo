import React from "react";

function TodoItem({ task, deleteTask, completeTask }) {
  return (
    <li
      className={`list-group-item d-flex justify-content-rigth align-items-centerm-0  ${
        task.completed ? "bg-success" : "bg-warning"
      }`}
      onClick={() => completeTask(task.id)}
    >
      <p>{task.text}</p>
      {/* <div > */}
        <button
          className={`btn btn-offline-danger `}
          onClick={() => deleteTask(task.id)}
          disabled={!task.completed}
          style={{ display: task.completed ? 'block' : 'none' }} 
        >
          ❌
        </button>
        <button
          className={`btn btn-offline-danger `}
          onClick={() => deleteTask(task.id)}
          disabled={!task.completed}
          style={{ display: task.completed ? 'block' : 'none' }} 
        >
          ✒️
        </button>
      {/* </div> */}
    </li>
  );
}

export default TodoItem;
