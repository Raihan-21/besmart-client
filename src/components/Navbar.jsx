import { Link } from "react-router-dom";
import styles from "../assets/styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={`${styles.navbar} align-center`}>
      <Link to="/">
        <h3>Be Smart</h3>
      </Link>
      <div>
        <Link to="/">Home</Link>
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
