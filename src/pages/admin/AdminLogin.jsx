import { TextField, Button } from "@mui/material";
import styles from "../../styles/Admin.module.css";
import { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../slices/authSlice";
const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        // eslint-disable-next-line
        const res = await axios.post("/admin/login", formData);
        setError({});
        dispatch(login());
        navigate("/admin/dashboard");
      } catch (error) {
        setError(error.response.data);
      }
    },
    [formData, dispatch, navigate]
  );
  return (
    <div className={`container ${styles.login}`}>
      <h2 className={styles.h2}>Login</h2>
      <form onSubmit={loginHandler}>
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
          error={error.username ? true : false}
          helperText={error.username}
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
          error={error.password ? true : false}
          helperText={error.password}
        />
        <Button type="submit" variant="contained" className={styles.loginBtn}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
