import React from 'react'
import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
       <React.Fragment>
       {tasks.map((task) => (
        <Task 
            key = {task.id} 
            task = {task} 
            onDelete = {() => onDelete(task.id)} 
            onToggle = {() => onToggle(task.id)}
       />
       ))}
       </React.Fragment>
    )
}

export default Tasks
