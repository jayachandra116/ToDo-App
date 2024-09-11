import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";

import { ToDo } from "./models/Todo";

const initialToDos: ToDo[] = [
  {
    text: "Item 1",
    id: "t1",
  },
  {
    text: "Item 2",
    id: "t2",
  },
];

function App() {
  const [toDos, setToDos] = useState<ToDo[]>(initialToDos);

  const addTodoHandler = (text: string) => {
    setToDos((prevToDos) => [
      { text: text, id: new Date().toISOString() },
      ...prevToDos,
    ]);
  };

  return (
    <>
      <Header />
      <div className="app">
        <div>
          <NewTodo onAdd={addTodoHandler} />
        </div>
        <div>
          <TodoList toDos={toDos} />
        </div>
      </div>
    </>
  );
}

export default App;
