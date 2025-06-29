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
    <section className="main-container">
      <h1 className="search-tittle">Search a component</h1>
      <InputText onsubmit={changeComponent} />
      <article className="component-container">
        {component === "tabs" && <Tabs />}{" "}
        {component === "todolist" && <TodoList />}
        {component != "tabs" && component != "todolist" && (
          <p>Componente no encontrado</p>
        )}
      </article>
    </section>
  );
}

export default App;
