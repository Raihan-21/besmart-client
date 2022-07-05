import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "../styles/Navbar.module.css";
const AdminSidebar = () => {
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();
  useEffect(() => {
    const route = location.pathname.split("/");
    setActiveTab(route[route.length - 1]);
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
