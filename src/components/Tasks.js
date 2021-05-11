import React from 'react'
import Task from './Task'
const Tasks = ({tasks,onDelete,onToggle}) => {
    return (
      <>
      {
          tasks.map((obj,i)=>
          <Task key={i} tasks={obj} onDelete={onDelete} onToggle={onToggle}/>
          )
      }
      </>
    )
}

export default Tasks
