import { Link } from "react-router-dom";
import illustration from "../assets/img/illustration.png";
import highschool from "../assets/img/sma.png";
import styles from "../assets/styles/Home.module.css";
const Home = () => {
  return (
    <div className={`container  ${styles.home}`}>
      <div className={`${styles.banner} flex justify-between`}>
        <div className={`${styles.bigText} text-left `}>
          <h1>
            Belajar bersama di
            <br />
            <span className="text-primary"> Be Smart</span>
          </h1>
          <p className="text-gray">
            Bimbingan belajar terpercaya untuk membantu akademik anak. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Modi, cumque.
          </p>
          <Link to="/kelas" className="bg-primary text-white">
            Telusuri kursus
            <i className="icon-arrow-thin-right"></i>
          </Link>
        </div>
        <img src={illustration} alt="" />
      </div>
      <div className={styles.courseHome}>
        <h2 className="text-center">Telusuri kelas-kelas kami</h2>
        <div className="flex justify-between">
          <div className={styles.card}>
            <img src={highschool} alt="" />
            <h3>Sekolah Menengah Atas</h3>
          </div>
          <div className={styles.card}>
            <img src={highschool} alt="" />
            <h3>Sekolah Menengah Atas</h3>
          </div>
          <div className={styles.card}>
            <img src={highschool} alt="" />
            <h3>Sekolah Menengah Atas</h3>
          </div>
          <div className={styles.card}>
            <img src={highschool} alt="" />
            <h3>Sekolah Menengah Atas</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
