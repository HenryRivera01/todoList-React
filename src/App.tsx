import { useState } from "react";
import "./App.css";
import { Tabs } from "./Components/Tabs";
import { TodoList } from "./Components/TodoList/TodoList";
import { InputText } from "./Components/SearchBar/InputText";

function App() {
  const [component, setComponent] = useState("");

  function changeComponent(search: string) {
    setComponent(search.toLocaleLowerCase().trim());
  }

  return (
    <>
      <InputText onsubmit={changeComponent} />
      {component === "tabs" ? (
        <Tabs />
      ) : component === "todolist" ? (
        <TodoList />
      ) : (
        <p>Componente no encontrado</p>
      )}
    </>
  );
}

export default App;
