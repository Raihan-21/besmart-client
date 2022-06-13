import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h3>Be Smart</h3>
      </Link>
      <div>
        {counter}
        <button
          onClick={() =>
            setCounter((prevState) => {
              return prevState + 1;
            })
          }
        >
          +
        </button>
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
