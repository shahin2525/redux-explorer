import { RootState } from "@/redux/store";
import { TTask } from "@/types/typs";
import { createSlice } from "@reduxjs/toolkit";
type TInitialState = {
  task: TTask[];
  filter: "low" | "medium" | "high" | "all";
};

const initialState: TInitialState = {
  task: [
    {
      id: "dd2",
      title: "next level",
      description: "next level is super power",
      dueTime: "2025-11",
      isComplete: false,
      priority: "medium",
    },
    {
      id: "dd3",
      title: "programming",
      description: "programming is super power",
      dueTime: "2025-11",
      isComplete: false,
      priority: "low",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});
export const selectTask = (state: RootState) => {
  return state.todo.task;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
export default taskSlice.reducer;
