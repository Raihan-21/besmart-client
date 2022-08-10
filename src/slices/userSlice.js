import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loggedIn: false,
  user: {},
};
const userSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log(action);
    },
    login: (state, { payload }) => {
      state.loggedIn = true;
      localStorage.setItem("user", JSON.stringify(payload));
      state.user = payload;
    },
    logout: (state) => {
      state.loggedIn = false;
      localStorage.removeItem("user");
    },
    getUser: (state) => {
      localStorage.getItem("user");
    },
    setName: (state, { payload }) => {
      state.user.name = payload;
    },
  },
});
export const { login, logout, setToken, getUser, setName } = userSlice.actions;
export default userSlice.reducer;
