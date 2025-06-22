import { SingleTask } from "./SingleTask";
import type { Task } from "./TaskType";

type TaskProps = {
  tasks: Task[];
  checkTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

export const TaskView = ({ tasks, checkTask, deleteTask}: TaskProps) => {
  {
    if (!tasks) {
      <p>Agrega una Tarea</p>;
    }
  }

  return (
    <div>
      {tasks.map((task) => {
        return ( 
            <SingleTask key={task.id} task={task} checkTask={checkTask} deleteTask={deleteTask}/>
        )
      })}
    </div>
  );
};
