import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/cunterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
