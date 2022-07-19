import { Link } from "react-router-dom";
import illustration from "../assets/img/illustration.png";
import styles from "../assets/styles/Home.module.css";
const Home = () => {
  return (
    <div className={`container flex justify-even ${styles.home}`}>
      <div className="big-text text-left ">
        <h1>
          Belajar bersama di
          <br />
          <span className="text-primary"> Be Smart</span>
        </h1>
        <p className="text-gray">
          Bimbingan belajar terpercaya untuk membantu akademik anak
        </p>
        <Link to="/" className="bg-primary text-white">
          Telusuri
        </Link>
      </div>
      <img src={illustration} alt="" />
    </div>
  );
};

export default Home;
