import React from "react";

// components
import { ToDo } from "../../models/Todo";

// styling
import classes from "./TodoItem.module.css";

// redux
import { useAppDispatch } from "../../hooks";
import {
  markComplete,
  markInComplete,
  removeToDo,
} from "../../store/todos-slice";
import Button from "../UI/Button";

// props type
type todoItemProps = {
  item: ToDo;
};

const TodoItem = ({ item }: todoItemProps) => {
  const dispatch = useAppDispatch();

  const onRemoveHandler = () => {
    dispatch(removeToDo(item.id));
  };

  const toggleToDoCompletionState = () => {
    item.complete
      ? dispatch(markInComplete(item.id))
      : dispatch(markComplete(item.id));
  };

  return (
    <li className={classes["todo-item"]}>
      <p className={item.complete ? classes["completed"] : ""}>{item.text}</p>
      <div className={classes["todo-actions"]}>
        <Button
          onClick={toggleToDoCompletionState}
          title={`Mark as ${item.complete ? "undone" : "done"}`}
        >
          {item.complete ? (
            <span className="material-symbols-outlined">check_circle</span>
          ) : (
            <span className="material-symbols-outlined">
              radio_button_unchecked
            </span>
          )}
        </Button>
        <Button onClick={onRemoveHandler} title="Remove the item from the list">
          <span className="material-symbols-outlined">Delete</span>
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
