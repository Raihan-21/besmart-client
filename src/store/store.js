import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "../slices/adminSlice";
import userSlice from "../slices/userSlice";
const store = configureStore({
  reducer: {
    admin: adminSlice,
    user: userSlice,
  },
});

export default store;
