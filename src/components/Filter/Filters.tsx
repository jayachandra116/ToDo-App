import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Button from "../UI/Button";
import { changeFilterState } from "../../store/todos-slice";

import classes from "./Filters.module.css";

const Filters = () => {
  const dispatch = useAppDispatch();
  const currentFilterState = useAppSelector((state) => state.todos.filterState);

  const toggleFilterState = (state: "all" | "active" | "done") => {
    dispatch(changeFilterState(state));
  };

  return (
    <div className={classes["filter-states"]}>
      <Button
        onClick={() => toggleFilterState("all")}
        className={currentFilterState === "all" ? "active" : ""}
      >
        All
      </Button>
      <Button
        onClick={() => toggleFilterState("active")}
        className={currentFilterState === "active" ? "active" : ""}
      >
        Active
      </Button>
      <Button
        onClick={() => toggleFilterState("done")}
        className={currentFilterState === "done" ? "active" : ""}
      >
        Completed
      </Button>
    </div>
  );
};

export default Filters;
