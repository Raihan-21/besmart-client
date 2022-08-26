import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loggedIn: false,
};
const adminSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log(action);
    },
    adminLogin: (state) => {
      state.loggedIn = true;
    },
    adminLogout: (state) => {
      state.loggedIn = false;
      localStorage.removeItem("admin");
    },
  },
});
export const { adminLogin, adminLogout, setToken } = adminSlice.actions;
export default adminSlice.reducer;
