import { RootState } from "@/redux/store";
import { TTask } from "@/types/typs";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
type TInitialState = {
  task: TTask[];
  filter: "low" | "medium" | "high" | "all";
};

const initialState: TInitialState = {
  task: [],
  filter: "all",
};
type DraftData = Pick<TTask, "description" | "dueTime" | "priority" | "title">;
const id = nanoid();
const createData = (data: DraftData): TTask => {
  return {
    id,
    isComplete: false,
    ...data,
  };
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftData>) => {
      const addTaskData = createData(action.payload);
      state.task.push(addTaskData);
    },
  },
});
export const selectTask = (state: RootState) => {
  return state.todo.task;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
