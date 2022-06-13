import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
const AdminNavbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h3>Dashboard</h3>
      </Link>
      <div></div>
    </div>
  );
};

export default AdminNavbar;
