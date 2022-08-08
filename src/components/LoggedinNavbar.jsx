import styles from "../assets/styles/Navbar.module.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const LoggedinNavbar = () => {
  const location = useLocation();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {}, [location.pathname]);
  return (
    <div className={`${styles.loggedinNavbar} align-center`}>
      <div className="text-right">{user.name}</div>
    </div>
  );
};

export default LoggedinNavbar;
