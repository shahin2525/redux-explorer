import { TTask } from "@/types/typs";
import { createSlice } from "@reduxjs/toolkit";
type TInitialState = {
  task: TTask[];
};

const initialState: TInitialState = {
  task: [
    {
      id: "dd",
      title: "next level",
      description: "next level is super power",
      dueTime: "2025-11",
      isComplete: false,
      priority: "medium",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
