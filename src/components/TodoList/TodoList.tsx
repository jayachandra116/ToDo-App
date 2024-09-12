import React from "react";

// components
import TodoItem from "../TodoItem/TodoItem";

// styling
import classes from "./TodoList.module.css";

// redux
import { useAppSelector } from "../../hooks";

const TodoList = (): React.JSX.Element => {
  const toDos = useAppSelector(state => state.todos.toDos);
  
  return (
    <div className={classes["todo-list"]}>
      <ul>
        {toDos.length === 0 && (
          <p style={{ color: "black", fontSize: "1.5rem" }}>
            No to-do items yet!
          </p>
        )}
        {toDos.length > 0 &&
          toDos.map((toDo) => (
            <TodoItem key={toDo.id} item={toDo}/>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
