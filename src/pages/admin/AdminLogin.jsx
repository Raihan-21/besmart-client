import { TextField, Button } from "@mui/material";
import styles from "../../styles/Admin.module.css";
import { useState, useCallback } from "react";
import axios from "axios";
const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const login = useCallback(async () => {
    try {
      const res = await axios.post("/admin/login", formData);
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
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
