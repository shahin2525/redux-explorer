import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
// import counterSlice from "./features/counter/counterSlice";
// import taskSlice from "./features/task/taskSlice";
// import userSlice from "./features/user/userSlice";
export const store = configureStore({
  reducer: {
    // counter: counterSlice,
    // todo: taskSlice,
    // user: userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
