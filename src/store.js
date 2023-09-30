import { configureStore } from "@reduxjs/toolkit";
import elementsReducer from "./features/elements/elementsSlice";
import lookupsSlice from "./features/lookups/lookupsSlice";
import lookupValuesSlice from "./features/lookupsValue/lookupValuesSlice";

const store = configureStore({
  reducer: {
    elements: elementsReducer,
    lookups: lookupsSlice,
    lookupValues: lookupValuesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
