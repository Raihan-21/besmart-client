import { Button } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { logout } from "../slices/userSlice";
import styles from "../assets/styles/Navbar.module.scss";
import { setSidebar } from "../slices/userSlice";
import CloseIcon from "@mui/icons-material/Close";

const MuridSidebar = () => {
  const [tab, setTab] = useState("");
  const isSidebarOpen = useSelector((state) => state.user.isSidebarOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const tabs = ["dashboard", "kelas", "profil"];
    tabs.forEach((tab) => {
      if (location.pathname.includes(tab)) setTab(tab);
    });
  }, [location.pathname]);
  const logoutHandler = useCallback(() => {
    dispatch(logout());
    navigate("/");
  }, [dispatch, navigate]);
  return (
    <div
      className={`${styles.sidebar} ${styles.sidebarMurid} ${
        isSidebarOpen ? styles.opened : ""
      }`}
    >
      <div className={`flex justify-between ${styles.header}`}>
        <h3>Be Smart</h3>
        <div
          className="mobile-view"
          onClick={() => {
            dispatch(setSidebar("close"));
          }}
        >
          <CloseIcon />
        </div>
      </div>

      <Link
        to="/murid/dashboard"
        onClick={() => {
          setTab("dashboard");
          dispatch(setSidebar("close"));
        }}
        className={tab === "dashboard" ? "active" : ""}
      >
        {" "}
        Dashboard
      </Link>
      <Link
        to="/murid/kelas"
        onClick={() => {
          setTab("kelas");
          dispatch(setSidebar("close"));
        }}
      >
        Kelas
      </Link>
      <Link
        to="/murid/profil"
        onClick={() => {
          setTab("profil");
          dispatch(setSidebar("close"));
        }}
        className={tab === "profil" ? "active" : ""}
      >
        {" "}
        Profil
      </Link>
      <Button onClick={logoutHandler}>Logout</Button>
    </div>
  );
};

export default MuridSidebar;
