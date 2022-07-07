import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "../styles/Navbar.module.css";
const AdminSidebar = () => {
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();
  useEffect(() => {
    const menus = ["dashboard", "murid", "guru"];
    const route = location.pathname.split("/");
    route.forEach((path) => {
      menus.forEach((menu) => {
        if (menu === path) setActiveTab(menu);
      });
    });
  }, [location.pathname]);
  return (
    <div className={style.sidebar}>
      <Link
        to="/admin/dashboard"
        className={activeTab === "dashboard" ? style.active : ""}
        onClick={() => {
          setActiveTab("dashboard");
        }}
      >
        Dashboard
      </Link>
      <Link
        to="/admin/murid"
        className={activeTab === "murid" ? style.active : ""}
        onClick={() => {
          setActiveTab("murid");
        }}
      >
        Murid
      </Link>
      <Link
        to="/admin/guru"
        className={activeTab === "guru" ? style.active : ""}
        onClick={() => {
          setActiveTab("guru");
        }}
      >
        Guru
      </Link>
    </div>
  );
};

export default AdminSidebar;
