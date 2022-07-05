import { TextField, Button } from "@mui/material";
import styles from "../styles/Login.module.css";
import { useState, useCallback } from "react";
const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const login = useCallback(async () => {
    const res = await fetch("/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    });
    const data = await res.json();
    if (!data.error) console.log(data.match);
  }, [formData]);
  return (
    <div className={`container ${styles.login}`}>
      <h2 className={styles.h2}>Login</h2>
      <TextField
        label="Username"
        variant="standard"
        fullWidth
        margin="normal"
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

export default AdminLogin;
