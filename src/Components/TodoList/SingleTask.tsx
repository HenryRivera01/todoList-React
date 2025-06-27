import type { Task } from "./TaskType"

type SingleTaskProps = {
    task:Task
    checkTask: (id:number) => void
    deleteTask: (id:number) => void
}

export const SingleTask = ({task, checkTask, deleteTask}:SingleTaskProps) => {
    const {id, name} = task
  return (
    
    <div className="task-container">
        <input type="checkbox" onChange={()=>checkTask(id)}/>
        <p>{name}</p>
        <button className="deleteTaskButton" onClick={()=>deleteTask(id)}>Delete</button>
    </div>
    
  )
}
