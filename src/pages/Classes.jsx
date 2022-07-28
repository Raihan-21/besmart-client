import styles from "../assets/styles/Classes.module.scss";
import img from "../assets/img/sma.png";
import useFetch from "../hooks/useFetch";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
const Classes = () => {
  const [data, isLoading] = useFetch("/mapel");
  return (
    <div className={`container ${styles.classContainer}`}>
      <h2 className="text-left">Seluruh Kelas Kami</h2>
      <div className={styles.classes}>
        <Grid container justifyContent="center">
          {!isLoading &&
            data.map((item, i) => (
              <Grid item xs={8}>
                <Box
                  className={` ${styles.class} flex align-center`}
                  sx={{
                    flexDirection: `${i % 2 === 0 ? "row-reverse" : "row"}`,
                  }}
                >
                  <img src={img} alt="" />
                  <div className="space-y-4">
                    <h3>{item.nama_mapel}</h3>
                    <p>{item.deskripsi}</p>
                    <Link to="/register">
                      <Button variant="contained"> Ambil Kelas</Button>
                    </Link>
                  </div>
                </Box>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default Classes;
