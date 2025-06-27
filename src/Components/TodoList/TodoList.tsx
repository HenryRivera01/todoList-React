import { useState } from "react"
import { Input } from "./Input"
import { TaskView } from "./TaskView";
import type { Task } from "./TaskType";

//TodoList manage the tasks array


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

    function checkTask(id:number){
        const taskComplete = tasks.find((task)=>{
            return task.id === id
        })
        if(taskComplete){
            taskComplete.isComplete = !taskComplete.isComplete
        }
        console.log(taskComplete);
    }

    function deleteTask(id:number){
        const filteredTasks = tasks.filter((task) => task.id !== id)
        setTasks(filteredTasks)
    }

//Insert the Input component and send the addTask function
  return (
    <div>
        <h2 className="todolist-tittle">To-do List</h2>
        < Input onAddTask={addTask}/>
        <div className="tasks-container">
        < TaskView tasks={tasks} checkTask={checkTask} deleteTask={deleteTask}/>
        </div>
    </div>
  )
}
