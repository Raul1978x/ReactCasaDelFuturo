// import { useState } from 'react';
// import './App.css';
// import TodoList from './component/TodoList';

// function App() {

//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const addTasks=(newTask)=>{
//    console.log(newTask);
//     if(tasks.trim() !==""){
//       return setTasks([...tasks, {id: tasks.length, name: newTask, isComplete:false}]);
//     }
//     setTasks("");
//   }
//   // const completeTasks=(index)=>{}
//   // const deleteTasks=(index)=>{}

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <TodoList task={tasks} />
//       <input type="text" placeholder="Nueva Tarea" value={newTask} onChange={(e)=> setNewTask(e.target.value)} />
//       <button onClick={() => addTasks(newTask)}>Agregar tarea</button>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import TodoList from "./component/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: tasks.length, name: newTask, isComplete: isComplete },
      ]);
      setNewTask("");
    }
  };
  const completeTasks = (id) => {
    if(tasks.id === id)
    setIsComplete(!isComplete);
  console.log(isComplete);
  };
  const deleteTasks = (id) => {
    console.log('hola');
  };
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList tasks={tasks} completeTasks={completeTasks} deleteTasks={deleteTasks} />
      <input
        type="text"
        placeholder="Nueva Tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Agregar tarea</button>
    </div>
  );
}
export default App;
