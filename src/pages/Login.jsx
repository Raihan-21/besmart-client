import { TextField, Button } from "@mui/material";
import styles from "../styles/Login.module.css";
import { useState, useCallback } from "react";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const login = useCallback(async () => {
    const res = await fetch("/murid/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });
    console.log(res);
  }, [formData]);
  return (
    <div className={`container ${styles.login}`}>
      <h2 className={styles.h2}>Login</h2>
      <TextField
        label="Email"
        variant="standard"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={(e) => {
          setFormData((prevState) => ({
            ...prevState,
            email: e.target.value,
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
        onChange={(e) => {
          setFormData((prevState) => ({
            ...prevState,
            password: e.target.value,
          }));
        }}
      />
      <Button variant="contained" className={styles.loginBtn} onClick={login}>
        Login
      </Button>
    </div>
  );
};

export default Login;
