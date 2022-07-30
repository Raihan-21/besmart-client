import styles from "../assets/styles/Navbar.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [tab, setTab] = useState("");
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname.split("/");
    if (path.every((item) => !item)) setTab("home");
  }, [location.pathname]);
  return (
    <div className={`${styles.navbar} align-center`}>
      <Link to="/">
        <h3>Be Smart</h3>
      </Link>
      <div>
        <Link
          to="/"
          className={tab === "home" ? styles.active : ""}
          onClick={() => setTab("home")}
        >
          Home
        </Link>
      </div>
      <div>
        <Link to="/login" className={styles.loginBtn}>
          Masuk
        </Link>
        <Link to="/register" className={styles.registerBtn}>
          Daftar
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
