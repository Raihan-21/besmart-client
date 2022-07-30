import { Button } from "@mui/material";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../slices/userSlice";
import styles from "../assets/styles/Navbar.module.scss";

const MuridSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = useCallback(() => {
    dispatch(logout());
    navigate("/");
  }, [dispatch, navigate]);
  return (
    <div>
      <div className={`${styles.sidebar} ${styles.sidebarMurid}`}>
        <h3>Be Smart</h3>
        <Link to="/murid/dashboard"> Dashboard</Link>
        <Button onClick={logoutHandler}>Logout</Button>
      </div>
    </div>
  );
};

export default MuridSidebar;
