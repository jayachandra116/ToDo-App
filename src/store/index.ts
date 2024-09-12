import { configureStore } from "@reduxjs/toolkit";

import todosSliceReducer from "./todos-slice";

const store = configureStore({
  reducer: {
    todos: todosSliceReducer,
  },
});

export default store;

// Get the type of our store variable
export type AppStore = typeof store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {todos: toDos}
export type AppDispatch = typeof store.dispatch;
