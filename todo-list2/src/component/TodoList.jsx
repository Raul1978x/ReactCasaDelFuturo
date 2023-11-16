import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({tasks, completeTasks, deleteTasks}) => {
  return (
    <ul>
    {tasks.map((task) => (
      <TodoItem 
      key={task.id} 
      task={task} 
      completeTasks={completeTasks(task.id)} 
      deleteTasks={deleteTasks(task.id)} 
      />
    ))}
  </ul>

  )
}

export default TodoList
