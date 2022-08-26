import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import illustration from "../assets/img/illustration.png";
import styles from "../assets/styles/Home.module.css";
import useFetch from "../hooks/useFetch";
const Home = () => {
  const [data, isLoading] = useFetch("/api/admin/kategori?page[size]=4");
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
        <Grid container columnSpacing={2} rowSpacing={3}>
          {!isLoading &&
            data.map((kategori, i) => (
              <Grid item xs={12} sm={12} md={6} lg={3} key={i}>
                <div className={styles.card}>
                  <img
                    src={kategori.image ? `/images/${kategori.image.name}` : ""}
                    alt=""
                  />
                  <h3>{kategori.nama_kategori}</h3>
                </div>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
