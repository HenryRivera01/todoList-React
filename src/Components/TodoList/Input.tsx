import { useState } from "react";

type InputProps = {
  onAddTask: (taskName: string) => void;
};

export const Input = ({ onAddTask } : InputProps) => {
  const [task, setTask] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onAddTask(task);
    console.log("enviaste la tarea: ", task);
    setTask("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="submit">
        <input className="search-input" placeholder="Run, homework..." value={task} onChange={(e) => setTask(e.target.value)} required type="text" />
      </form>
    </div>
  );
};
