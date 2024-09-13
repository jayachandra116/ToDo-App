import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ToDo } from "../models/Todo";

// type for the slice state
interface ToDoState {
  toDos: ToDo[];
  filterText: string;
}

// define the initial state
const toDosSliceInitialState: ToDoState = {
  toDos: [],
  filterText: "",
};

// slice
export const toDosSlice = createSlice({
  name: "todos",
  initialState: toDosSliceInitialState,
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      state.toDos.push({
        id: new Date().toISOString(),
        text: action.payload,
        complete: false,
      });
    },
    removeToDo: (state, action: PayloadAction<string>) => {
      state.toDos = state.toDos.filter((todo) => todo.id !== action.payload);
    },
    markComplete: (state, action: PayloadAction<string>) => {
      let toDoIndex = state.toDos.findIndex(
        (item) => item.id === action.payload
      );
      if (toDoIndex === -1) {
        return state;
      }
      let todo = state.toDos[toDoIndex];
      todo.complete = true;
      state.toDos[toDoIndex] = todo;
    },
    markInComplete: (state, action: PayloadAction<string>) => {
      let toDoIndex = state.toDos.findIndex(
        (item) => item.id === action.payload
      );
      if (toDoIndex === -1) {
        return state;
      }
      let todo = state.toDos[toDoIndex];
      todo.complete = false;
      state.toDos[toDoIndex] = todo;
    },
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filterText = action.payload;
    },
  },
});

// actions
export const {
  addToDo,
  removeToDo,
  markComplete,
  markInComplete,
  changeFilter,
} = toDosSlice.actions;

// reducer
export default toDosSlice.reducer;
