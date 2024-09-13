import React, { useRef } from "react";

import classes from "./SearchBox.module.css";
import { useAppDispatch, useAppSelector } from "../hooks";
import { changeFilter } from "../store/todos-slice";

const SearchBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  let filterText = useAppSelector((state) => state.todos.filterText);
  const dispatch = useAppDispatch();

  const onInputChangeHandler = () => {
    dispatch(changeFilter(inputRef.current!.value));
  };

  return (
    <div className={classes["search-box"]}>
      <input
        type="search"
        name="q"
        placeholder="Filter items by text"
        onChange={onInputChangeHandler}
        ref={inputRef}
        value={filterText}
      />
    </div>
  );
};

export default SearchBox;
