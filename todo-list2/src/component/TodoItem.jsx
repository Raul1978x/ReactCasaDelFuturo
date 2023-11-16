import React from 'react'

const TodoItem = ({task, completeTasks, deleteTasks}) => {
  return (
    <li>
      <p>{task.name}</p>
      <button onClick={completeTasks(task.id)}>Completar</button>
      <button onClick={deleteTasks(task.id)}>Eliminar</button>
    </li>
  )
}

export default TodoItem
