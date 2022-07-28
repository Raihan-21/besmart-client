import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import { logout } from "../slices/adminSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "../assets/styles/Navbar.module.css";
const AdminNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.pathname.split("/");
  const path = url[url.length - 1];
  const logoutHandler = useCallback(() => {
    dispatch(logout());
    navigate("/admin/login");
    console.log();
  }, [dispatch, navigate]);
  return (
    <div
      className={`${styles.adminNavbar} flex ${
        path === "login" ? styles.fullNav : ""
      }`}
    >
      <Link to="/">
        <h3>Admin</h3>
      </Link>
      <Button onClick={logoutHandler}>Logout</Button>
    </div>
  );
};

export default AdminNavbar;
