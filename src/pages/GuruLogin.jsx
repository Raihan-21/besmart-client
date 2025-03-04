import { TextField, Button } from "@mui/material";
import styles from "../assets/styles/Login.module.scss";
import { useState, useCallback } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { guruLogin } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";
const GuruLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/guru/login", formData);
        setError({ username: "", password: "" });
        dispatch(guruLogin(res.data.data));
        navigate("/guru");
      } catch (error) {
        setError(error.response.data);
      }
    },
    [formData, dispatch, navigate]
  );
  return (
    <div className={`auth-form ${styles.login}`}>
      <form onSubmit={loginHandler}>
        <h2 className={styles.h2}>Masuk (Guru)</h2>
        <TextField
          label="Username"
          variant="outlined"
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
          variant="outlined"
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
          Masuk
        </Button>
      </form>
    </div>
  );
};

export default GuruLogin;
