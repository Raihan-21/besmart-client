import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loggedIn: false,
};
const authSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
  },
});
export const { login } = authSlice.actions;
export default authSlice.reducer;
