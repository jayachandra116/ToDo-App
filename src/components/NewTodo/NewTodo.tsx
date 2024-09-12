import React, { useRef } from "react";

// components
import Button from "../UI/Button";

// styling
import classes from "./NewTodo.module.css";

// redux
import { useAppDispatch } from "../../hooks";
import { addToDo } from "../../store/todos-slice";

const NewTodo = () => {
  const dispatch = useAppDispatch();

  const todoTextRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    // extract values
    let enteredTodoText = todoTextRef.current!.value;

    // validation
    if (!enteredTodoText) {
      return;
    }
    console.log(`New to-do item text: ${enteredTodoText}`);

    // update state
    dispatch(addToDo(enteredTodoText));

    // resetting form
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
