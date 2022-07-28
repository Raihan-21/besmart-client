import { TextField, Button } from "@mui/material";
import styles from "../assets/styles/Login.module.css";
import { useState, useCallback } from "react";
import axios from "axios";
const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: "", password: "" });
  const login = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/login", formData);
        console.log(res);
        setError({ username: "", password: "" });
      } catch (error) {
        setError(error.response.data);
      }
    },
    [formData]
  );
  return (
    <div className={`auth-form ${styles.login}`}>
      <form onSubmit={login}>
        <h2 className={styles.h2}>Login</h2>
        <TextField
          label="Username"
          variant="standard"
          fullWidth
          margin="normal"
          error={error.username ? true : false}
          helperText={error.username ? error.username : ""}
          value={formData.username}
          onChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              username: e.target.value,
            }));
          }}
        />
        <TextField
          label="Password"
          variant="standard"
          fullWidth
          margin="normal"
          type="password"
          value={formData.password}
          error={error.password ? true : false}
          helperText={error.password ? error.password : ""}
          onChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              password: e.target.value,
            }));
          }}
        />
        <Button type="submit" variant="contained" className={styles.loginBtn}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
