import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({tasks,onDelete,onToggle}) => {
    
    return (
        <>
           <div className={`task ${tasks.reminder?'reminder':''}`}onDoubleClick={(e)=>onToggle(tasks.id)}>
              <h3>{tasks.text} <FaTimes style={{color:'red',cursor:'pointer'}} onClick={(e)=>onDelete(tasks.id)} /></h3>
              <p>{tasks.day}</p>
           </div>
        </>
    )
}

export default Task
