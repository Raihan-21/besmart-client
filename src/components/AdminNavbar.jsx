import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
const AdminNavbar = () => {
  return (
    <div className={styles.adminNavbar}>
      <Link to="/">
        <h3>Admin</h3>
      </Link>
      <div></div>
    </div>
  );
};

export default AdminNavbar;
