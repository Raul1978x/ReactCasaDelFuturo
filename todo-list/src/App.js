import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: tasks.length, completed: false, text: newTask }]);
      setNewTask('');
    }
  };

  const completeTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
    });
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Todo List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nueva tarea"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Agregar tarea
        </button>
      </div>
      <TodoList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
    </div>
  );
}

export default App;
