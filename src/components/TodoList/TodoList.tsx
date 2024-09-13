import React from "react";

// components
import TodoItem from "../TodoItem/TodoItem";

// styling
import classes from "./TodoList.module.css";

// redux
import { useAppSelector } from "../../hooks";

const TodoList = (): React.JSX.Element => {
  const toDos = useAppSelector((state) => state.todos.toDos);
  const filterText = useAppSelector((state) => state.todos.filterText);

  const filteredToDos = filterText
    ? toDos.filter((item) => item.text.toLowerCase().includes(filterText))
    : toDos;

  return (
    <div className={classes["todo-list"]}>
      <ul>
        {filteredToDos.length === 0 && (
          <p style={{ color: "black", fontSize: "1.5rem" }}>
            No to-do items for this filter!
          </p>
        )}
        {filteredToDos.length > 0 &&
          filteredToDos.map((toDo) => <TodoItem key={toDo.id} item={toDo} />)}
      </ul>
    </div>
  );
};

export default TodoList;
