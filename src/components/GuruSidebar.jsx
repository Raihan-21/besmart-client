import { Button } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { guruLogout } from "../slices/userSlice";
import styles from "../assets/styles/Navbar.module.scss";

const GuruSidebar = () => {
  const [tab, setTab] = useState("");
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
    dispatch(guruLogout());
    navigate("/guru/login");
  }, [dispatch, navigate]);
  return (
    <div className={`${styles.sidebar} ${styles.sidebarMurid}`}>
      <h3>Be Smart</h3>
      <Link
        to="/guru/dashboard"
        onClick={() => {
          setTab("dashboard");
        }}
        className={tab === "dashboard" ? "active" : ""}
      >
        {" "}
        Dashboard
      </Link>
      <Link
        to="/guru/kelas"
        onClick={() => {
          setTab("kelas");
        }}
      >
        Kelas
      </Link>
      <Link
        to="/guru/profil"
        onClick={() => {
          setTab("profil");
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

export default GuruSidebar;
