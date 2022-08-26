import { TextField, Button } from "@mui/material";
import styles from "../../assets/styles/Admin.module.scss";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adminLogin } from "../../slices/adminSlice";
const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState({});
  const loggedIn = useSelector((state) => state.admin.loggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn) navigate("/admin/murid");
  }, [navigate, loggedIn]);
  const loginHandler = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        // eslint-disable-next-line
        const res = await axios.post("/admin/login", formData);
        setError({});
        dispatch(adminLogin());
        localStorage.setItem("admin", res.data.data.username);
        navigate("/admin/murid");
      } catch (error) {
        setError(error.response.data);
      }
    },
    [formData, dispatch, navigate]
  );
  return (
    <div className={`auth-form ${styles.login}`}>
      <h2 className={`${styles.h2} text-left`}>Masuk</h2>
      <form onSubmit={loginHandler}>
        <TextField
          label="Username"
          variant="outlined"
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
          error={error.password ? true : false}
          helperText={error.password}
        />
        <Button type="submit" variant="contained" className={styles.loginBtn}>
          Masuk
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
