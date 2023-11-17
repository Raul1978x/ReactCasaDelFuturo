import React, { useState } from 'react';
import './App.css';
import TodoList from './component/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: tasks.length, name: newTask, isComplete: false }]);
      setNewTask(""); 
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className='container bg-gradient '>
      <h1 className='text-center'>Todo List</h1>
      <input className="form-control " value={newTask} type="text" placeholder="Nueva Tarea" onChange={(e) => setNewTask(e.target.value)} />
      <button className='btn btn-secondary mt-1 ' onClick={() => addTask(newTask)}>Agregar tarea</button>
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
