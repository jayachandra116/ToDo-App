import React from "react";
import { ToDo } from "../../models/Todo";

import classes from "./TodoItem.module.css";

type todoItemProps = {
  item: ToDo;
  onRemove: (id: string) => void;
};

const TodoItem = ({ item, onRemove }: todoItemProps) => {
  return (
    <div className={classes["todo-item"]} onClick={() => onRemove(item.id)}>
      <li>{item.text}</li>
    </div>
  );
};

export default TodoItem;
