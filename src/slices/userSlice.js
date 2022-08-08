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
      console.log(payload);
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
  },
});
export const { login, logout, setToken, getUser } = userSlice.actions;
export default userSlice.reducer;
