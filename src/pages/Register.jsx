import { TextField, Button } from "@mui/material";
import { useState, useCallback } from "react";
import styles from "../assets/styles/Register.module.css";

const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const register = useCallback(async () => {
    const res = await fetch("/murid/register", {
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
    <div className={`container ${styles.register}`}>
      <h2 className={styles.h2}>Register</h2>
      <TextField
        label="Nama Lengkap"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
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
        variant="outlined"
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
      <TextField label="Alamat" variant="outlined" fullWidth margin="normal" />

      <Button
        variant="contained"
        className={styles.registerBtn}
        onClick={register}
      >
        Register
      </Button>
    </div>
  );
};

export default Register;
