import { TextField, Button } from "@mui/material";
import styles from "../assets/styles/Login.module.scss";
import { useState, useCallback } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: "", password: "" });
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/login", formData);
        setError({ username: "", password: "" });
        if (res.data.data.status === "diproses")
          setStatus(res.data.data.status);
        else {
          dispatch(login(res.data.data));
          navigate("/murid");
        }
      } catch (error) {
        setError(error.response.data);
      }
    },
    [formData, dispatch, navigate]
  );
  const renderForm = useCallback(() => {
    if (status === "diproses") return <h4>Pendaftaran anda sedang diproses</h4>;
    else if (status === "ditolak")
      return <h4>Mohon maaf, pendaftaran anda ditolak.</h4>;
    else
      return (
        <form onSubmit={loginHandler}>
          <h2 className={styles.h2}>Masuk</h2>
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
          <div className={`${styles.loginHelper} text-left`}>
            Jika anda guru, klik <Link to="/guru/login"> disini </Link> untuk
            masuk
          </div>
          <Button type="submit" variant="contained" className={styles.loginBtn}>
            Masuk
          </Button>
        </form>
      );
  }, [
    error.password,
    error.username,
    formData.password,
    formData.username,
    loginHandler,
    status,
  ]);
  return (
    <div className={`auth-form ${styles.login}`}>
      {renderForm()}
      {/* <form onSubmit={loginHandler}>
        <h2 className={styles.h2}>Masuk</h2>
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
          Login
        </Button>
      </form> */}
    </div>
  );
};

export default Login;
