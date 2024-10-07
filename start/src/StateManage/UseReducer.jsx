import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";

const userSlice = createSlice({
  name: "users",
  initialState: { userList: userList },
  reducers: {
    addUser: (state, action) => {
      state.userList.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const user = state.userList.find((user) => user.id === id);
      if (user) {
        user.name = name;
        user.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      state.userList = state.userList.filter((user) => user.id !== id);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
