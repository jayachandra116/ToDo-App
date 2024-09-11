import React from "react";
import { ToDo } from "../../models/Todo";

import classes from "./TodoItem.module.css";

type todoItemProps = {
  item: ToDo;
};

const TodoItem = ({ item }: todoItemProps) => {
  return (
    <div className={classes["todo-item"]}>
      <li>{item.text}</li>
    </div>
  );
};

export default TodoItem;
