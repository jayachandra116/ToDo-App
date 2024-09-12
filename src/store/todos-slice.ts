import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ToDo } from "../models/Todo";

// type for the slice state
interface ToDoState {
  toDos: ToDo[];
}

// define the initial state 
const toDosSliceInitialState: ToDoState = {
  toDos: [],
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
      });
    },
    removeToDo: (state, action: PayloadAction<string>) => {
      state.toDos = state.toDos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// actions
export const { addToDo, removeToDo } = toDosSlice.actions;

// reducer
export default toDosSlice.reducer;
