import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "../assets/styles/Navbar.module.scss";
const AdminSidebar = () => {
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();
  useEffect(() => {
    const menus = ["murid", "guru", "berita", "kategori", "kelas"];
    const route = location.pathname.split("/");
    route.forEach((path) => {
      menus.forEach((menu) => {
        if (menu === path) setActiveTab(menu);
      });
    });
  }, [location.pathname]);
  return (
    <div className={`${style.sidebar} ${style.sidebarAdmin}`}>
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
      <Link
        to="/admin/berita"
        className={activeTab === "berita" ? style.active : ""}
        onClick={() => {
          setActiveTab("berita");
        }}
      >
        Berita
      </Link>
      <Link
        to="/admin/kategori"
        className={activeTab === "kategori" ? style.active : ""}
        onClick={() => {
          setActiveTab("kategori");
        }}
      >
        Kategori
      </Link>
      <Link
        to="/admin/kelas"
        className={activeTab === "kelas" ? style.active : ""}
        onClick={() => {
          setActiveTab("kelas");
        }}
      >
        Kelas
      </Link>
    </div>
  );
};

export default AdminSidebar;
