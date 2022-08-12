import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loggedIn: false,
  user: {},
  guru: {},
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
    guruLogin: (state, { payload }) => {
      state.guru.loggedIn = true;
      localStorage.setItem("guru", JSON.stringify(payload));
      state.guru = {
        ...state.guru,
        username: payload.username,
        nama: payload.nama,
      };
    },
    guruLogout: (state) => {
      state.guru.loggedIn = false;
      localStorage.removeItem("guru");
    },
    getUser: (state) => {
      localStorage.getItem("user");
    },
    setName: (state, { payload }) => {
      state.user.name = payload;
    },
  },
});
export const {
  login,
  logout,
  guruLogin,
  guruLogout,
  setToken,
  getUser,
  setName,
} = userSlice.actions;
export default userSlice.reducer;
