import "./App.css";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo/NewTodo";
import SearchBox from "./components/SearchBox";
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
          <SearchBox />
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
