import { configureStore } from "@reduxjs/toolkit";
import elementsReducer from "./features/elements/elementsSlice";

const store = configureStore({
  reducer: {
    elements: elementsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
