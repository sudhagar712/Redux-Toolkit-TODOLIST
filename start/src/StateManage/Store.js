import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../StateManage/UseReducer"


export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});


