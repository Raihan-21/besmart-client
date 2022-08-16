import styles from "../assets/styles/Navbar.module.scss";
import { useEffect, useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Menu, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { guruLogout } from "../slices/userSlice";
import { useRef } from "react";

const GuruNavbar = () => {
  const location = useLocation();
  const guru = useSelector((state) => state.user.guru);
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
    dispatch(guruLogout());
    navigate("/guru/login");
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
        {guru.nama}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          style: { width: ref.current ? ref.current.offsetWidth : "" },
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default GuruNavbar;
