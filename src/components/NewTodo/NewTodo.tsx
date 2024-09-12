import React, { useRef } from "react";

import classes from "./NewTodo.module.css";
import Button from "../UI/Button";

type newTodoProps = {
  onAdd: (text: string) => void;
};

const NewTodo = ({ onAdd }: newTodoProps) => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    let enteredTodoText = todoTextRef.current!.value;
    console.log(enteredTodoText);
    onAdd(enteredTodoText);
    todoTextRef.current!.value = "";
  };

  return (
    <div className={classes["new-todo"]}>
      <form className={classes["new-todo--form"]} onSubmit={onSubmit}>
        <div className={classes["input-group"]}>
          <input
            ref={todoTextRef}
            className=""
            type="text"
            id="todoText"
            name="todoText"
            defaultValue=""
            minLength={1}
            placeholder="add new todo here"
            required
          />
        </div>
        <div className={classes["form-actions"]}>
          <Button type="submit" onClick={(event) => onSubmit(event)}>
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
