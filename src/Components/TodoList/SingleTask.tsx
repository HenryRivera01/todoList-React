import type { Task } from "./TaskType"

type SingleTaskProps = {
    task:Task
    checkTask: (id:number) => void
    deleteTask: (id:number) => void
}

export const SingleTask = ({task, checkTask, deleteTask}:SingleTaskProps) => {
    const {id, name} = task
  return (
    <div>
        <p>{name}</p>
        <input type="checkbox" onChange={()=>checkTask(id)}/>
        <button onClick={()=>deleteTask(id)}>Delete</button>
    </div>
  )
}
