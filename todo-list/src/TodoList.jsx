import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, deleteTask, completeTask }) {
  return (
    <ul className="list-group mt-3">
      {tasks.map((task) => (
        <TodoItem 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          completeTask={completeTask} 
        />
      ))}
    </ul>
  );
}

export default TodoList;


