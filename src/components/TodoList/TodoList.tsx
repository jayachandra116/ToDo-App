import React from "react";
import TodoItem from "../TodoItem/TodoItem";

import { ToDo } from "../../models/Todo";

import classes from "./TodoList.module.css";

type todoListProps = {
  toDos: ToDo[];
  onRemove: (id: string) => void;
};

const TodoList = ({ toDos, onRemove }: todoListProps): React.JSX.Element => {
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
            <TodoItem key={toDo.id} item={toDo} onRemove={onRemove} />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
