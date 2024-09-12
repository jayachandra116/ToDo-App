import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, RootState, AppStore } from "../store";

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// Store
export const useAppStore = useStore.withTypes<AppStore>;
