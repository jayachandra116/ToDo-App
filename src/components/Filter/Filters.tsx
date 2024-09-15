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
        classes={currentFilterState === "all" ? classes["active"] : ""}
        title="Show all the items"
      >
        All
      </Button>
      <Button
        onClick={() => toggleFilterState("active")}
        classes={currentFilterState === "active" ? classes["active"] : ""}
        title="Show in-progress items"
      >
        Active
      </Button>
      <Button
        onClick={() => toggleFilterState("done")}
        classes={currentFilterState === "done" ? classes["active"] : ""}
        title="Show only done issues"
      >
        Completed
      </Button>
    </div>
  );
};

export default Filters;
