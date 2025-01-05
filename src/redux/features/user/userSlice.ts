import { RootState } from "@/redux/store";
import { TUser } from "@/types/typs";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
interface IInitialState {
  users: TUser[];
}
const initialState: IInitialState = {
  users: [],
};
type DraftUser = Pick<TUser, "name">;
const createUser = (data: DraftUser): TUser => {
  return {
    id: nanoid(),
    ...data,
  };
};
export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<TUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.users;

export default userSlice.reducer;
