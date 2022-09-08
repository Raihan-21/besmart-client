import styles from "../assets/styles/Classes.module.scss";
import useFetch from "../hooks/useFetch";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useCallback } from "react";
const Classes = () => {
  const renderClass = useCallback((data, i) => {
    if (i % 2 === 0)
      return (
        <>
          <img src={data.image ? `/images/${data.image.name}` : ""} alt="" />
          <div
            className={`${styles.content} space-y-4 flex flex-column align-left`}
          >
            <h3>{data.nama_kategori}</h3>
            <p className="text-left">{data.deskripsi}</p>
            <h4>
              Biaya:
              <span className={styles.harga}>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(data.biaya)}
              </span>
            </h4>
            <Link to="/register" className={styles.btnBeli}>
              <Button variant="contained"> Ambil Kelas</Button>
            </Link>
          </div>
        </>
      );
    else
      return (
        <>
          <div
            className={`${styles.content} space-y-4 flex flex-column align-left`}
          >
            <h3>{data.nama_kategori}</h3>
            <p className="text-left">{data.deskripsi}</p>
            <h4>
              Biaya:
              <span className={styles.harga}>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(data.biaya)}
              </span>
            </h4>
            <Link to="/register" className={styles.btnBeli}>
              <Button variant="contained"> Ambil Kelas</Button>
            </Link>
          </div>
          <img src={data.image ? `/images/${data.image.name}` : ""} alt="" />
        </>
      );
  }, []);
  const [data, isLoading] = useFetch("/api/kategori");
  return (
    <div className={`container ${styles.classContainer}`}>
      <h2 className="text-left">Seluruh Kelas Kami</h2>
      <div className={styles.classes}>
        <Grid container justifyContent="center" rowSpacing={7}>
          {!isLoading &&
            data.map((item, i) => (
              <Grid item xs={8} key={i}>
                <Box
                  className={` ${styles.class} flex justify-between align-center space-x-8`}
                  // sx={{
                  //   flexDirection: `${i % 2 === 0 ? "row-reverse" : "row"}`,
                  // }}
                >
                  {renderClass(item, i)}
                  {/* <img
                    src={item.image ? `/images/${item.image.name}` : ""}
                    alt=""
                  />
                  <div className="space-y-4">
                    <h3>{item.nama_kategori}</h3>
                    <p>{item.deskripsi}</p>
                    <Link to="/register">
                      <Button variant="contained"> Ambil Kelas</Button>
                    </Link>
                  </div> */}
                </Box>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default Classes;
