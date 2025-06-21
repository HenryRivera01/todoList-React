import { useState } from "react"
import { Input } from "./Input"

//TodoList manage the tasks array

//create the type of tasks with her attributes
type Task = {
    id: number;
    name: string,
    isEditing: boolean,
    isComplete: boolean
}


export const TodoList = () => {

    //Create the useState hook, an array of tasks and set empty
    const [tasks, setTasks] = useState<Task[]>([])
    
    //Create a function to add a Task with the name written in the input
    function addTask(taskName:string){
        const newTask: Task = {
            id: Date.now(), //unique id
            name: taskName,
            isEditing: false,
            isComplete: false
        };
        setTasks(prev => [...prev, newTask]) //Add the task after the last in the array
        console.log(tasks);
    }

  return (
    <div>
        < Input onAddTask={addTask}/> //Insert the Input component and send the addTask function
    </div>
  )
}
