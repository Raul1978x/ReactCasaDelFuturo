import React, { useState } from "react";

const TodoItem = ({ task, deleteTask }) => {
  const [isComplete, setIsComplete] = useState(task.isComplete);

  const completeTask = () => {
    setIsComplete(!isComplete);
  };

  const itemClasses = "text-decoration-none justify-content-between align-items-center";
  const taskClasses = `d-flex justify-content-between align-items-left w-100 p-3 my-1  ${
    isComplete ? "bg-success text-decoration-line-through" : "bg-warning"
  }`;

  return (
    <li className={itemClasses}>
      <div className="d-flex">
        <div className={taskClasses} onClick={completeTask}>
          {task.name}
        </div>
        <button className="btn btn-light bg-dark my-1 " onClick={() => deleteTask(task.id)}>
          ❌
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
