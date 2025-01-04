import { RootState } from "@/redux/store";
// import { v4 as uuidv4 } from "uuid";
import { TTask } from "@/types/typs";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
type TInitialState = {
  tasks: TTask[];
  filter: "low" | "medium" | "high" | "all";
};

const initialState: TInitialState = {
  tasks: [],
  filter: "all",
};
type DraftData = Pick<TTask, "description" | "dueTime" | "priority" | "title">;

const createData = (data: DraftData): TTask => {
  const id = nanoid();
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
      state.tasks.push(addTaskData);
    },

    toggleCompletedState: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id === action.payload ? (task.isComplete = !task.isComplete) : task
      );
    },
    deleteState: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});
export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
export const { addTask, toggleCompletedState, deleteState } = taskSlice.actions;
export default taskSlice.reducer;
