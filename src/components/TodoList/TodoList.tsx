import React from "react";

// components
import TodoItem from "../TodoItem/TodoItem";

// styling
import classes from "./TodoList.module.css";

// redux
import { useAppSelector } from "../../hooks";
import { ToDo } from "../../models/Todo";

const TodoList = (): React.JSX.Element => {
  const toDos = useAppSelector((state) => state.todos.toDos);
  const filterText = useAppSelector((state) => state.todos.filterText);
  const filterState = useAppSelector((state) => state.todos.filterState);

  let filteredToDosByText = filterText
    ? toDos.filter((item) => item.text.toLowerCase().includes(filterText))
    : toDos;

  let filteredToDosByState: ToDo[];
  switch (filterState) {
    case "active":
      filteredToDosByState = filteredToDosByText.filter(
        (item) => item.complete === false
      );
      break;
    case "done":
      filteredToDosByState = filteredToDosByText.filter(
        (item) => item.complete === true
      );
      break;
    default:
      filteredToDosByState = filteredToDosByText;
      break;
  }

  return (
    <div className={classes["todo-list"]}>
      {filteredToDosByState.length > 0 && (
        <p>
          Filtered {filteredToDosByState.length} out of {toDos.length} total
          items
        </p>
      )}
      <ul>
        {filteredToDosByState.length === 0 && (
          <p style={{ color: "black", fontSize: "1.5rem" }}>
            No to-do items for this filter!
          </p>
        )}
        {filteredToDosByState.length > 0 &&
          filteredToDosByState.map((toDo) => (
            <TodoItem key={toDo.id} item={toDo} />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
