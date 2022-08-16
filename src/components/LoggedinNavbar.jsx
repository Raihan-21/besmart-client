import styles from "../assets/styles/Navbar.module.scss";
import { useEffect, useCallback, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Menu, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../slices/userSlice";
import { useRef } from "react";

const LoggedinNavbar = () => {
  const location = useLocation();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState("");
  const ref = useRef(null);
  const open = Boolean(anchorEl);
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);
  const logoutHandler = useCallback(() => {
    handleClose();
    dispatch(logout());
    navigate("/login");
  }, [dispatch, navigate, handleClose]);

  useEffect(() => {}, [location.pathname]);
  return (
    <div className={`${styles.loggedinNavbar} align-center`}>
      <Button
        ref={ref}
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
      >
        {user.name}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          style: { width: ref.current ? ref.current.offsetWidth : "" },
        }}
      >
        <Link to="profil">
          <MenuItem>Profile</MenuItem>
        </Link>
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default LoggedinNavbar;
