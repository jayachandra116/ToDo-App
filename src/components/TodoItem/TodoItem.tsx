import React from "react";

// components
import { ToDo } from "../../models/Todo";

// styling
import classes from "./TodoItem.module.css";

// redux
import { useAppDispatch } from "../../hooks";
import { removeToDo } from "../../store/todos-slice";

// props type
type todoItemProps = {
  item: ToDo;
};

const TodoItem = ({ item }: todoItemProps) => {
  const dispatch = useAppDispatch();

  const onRemoveHandler = () => {
    dispatch(removeToDo(item.id));
  };

  return (
    <div className={classes["todo-item"]} onClick={() => onRemoveHandler()}>
      <li>{item.text}</li>
    </div>
  );
};

export default TodoItem;
