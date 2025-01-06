// import { RootState } from "@/redux/store";
// // import { v4 as uuidv4 } from "uuid";
// import { TTask } from "@/types/typs";
// import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
// import { deleteUser } from "../user/userSlice";
// type TInitialState = {
//   tasks: TTask[];
//   filter: "low" | "medium" | "high" | "all";
// };

// const initialState: TInitialState = {
//   tasks: [],
//   filter: "all",
// };
// type DraftData = Pick<
//   TTask,
//   "description" | "dueTime" | "priority" | "title" | "user"
// >;

// const createData = (data: DraftData): TTask => {
//   const id = nanoid();
//   return {
//     id,
//     ...data,
//     isComplete: false,
//     user: data?.user ? data.user : null,
//   };
// };
// const taskSlice = createSlice({
//   name: "task",
//   initialState,
//   reducers: {
//     addTask: (state, action: PayloadAction<DraftData>) => {
//       const addTaskData = createData(action.payload);
//       state.tasks.push(addTaskData);
//     },

//     toggleCompletedState: (state, action: PayloadAction<string>) => {
//       console.log(action);
//       state.tasks.forEach((task) =>
//         task.id === action.payload ? (task.isComplete = !task.isComplete) : task
//       );
//     },
//     deleteState: (state, action: PayloadAction<string>) => {
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload);
//     },
//     filterTask: (
//       state,
//       action: PayloadAction<"all" | "high" | "medium" | "low">
//     ) => {
//       state.filter = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(deleteUser, (state, action) => {
//       state.tasks.forEach((task) =>
//         task.user === action.payload ? (task.user = null) : task
//       );
//     });
//   },
// });
// export const selectTask = (state: RootState) => {
//   const filter = state.todo.filter;
//   if (filter === "low") {
//     return state.todo.tasks.filter((task) => task.priority === "low");
//   } else if (filter === "medium") {
//     return state.todo.tasks.filter((task) => task.priority === "medium");
//   } else if (filter === "high") {
//     return state.todo.tasks.filter((task) => task.priority === "high");
//   } else {
//     return state.todo.tasks;
//   }
// };
// export const selectFilter = (state: RootState) => {
//   return state.todo.filter;
// };
// export const { addTask, toggleCompletedState, deleteState, filterTask } =
//   taskSlice.actions;
// export default taskSlice.reducer;
