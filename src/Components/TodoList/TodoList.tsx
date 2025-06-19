import { useState } from "react"
import { Input } from "./Input"


type Task = {
    id: number;
    name: string,
    isEditing: boolean,
    isComplete: boolean
}


export const TodoList = () => {

    const [tasks, setTasks] = useState<Task[]>([])
    
    function addTask(taskName:string){
        const newTask: Task = {
            id: Date.now(),
            name: taskName,
            isEditing: false,
            isComplete: false
        };
        setTasks(prev => [...prev, newTask])
    }

  return (
    <div>
        < Input onAddTask={addTask}/>
    </div>
  )
}
