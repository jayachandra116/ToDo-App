import "./App.css";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <div>
          <NewTodo />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
