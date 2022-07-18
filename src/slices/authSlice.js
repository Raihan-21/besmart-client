import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loggedIn: false,
};
const authSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log(action);
    },
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
      localStorage.removeItem("user");
    },
  },
});
export const { login, logout, setToken } = authSlice.actions;
export default authSlice.reducer;
