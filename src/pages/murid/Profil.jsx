import styles from "../../assets/styles/Murid.module.scss";
import { Grid, TextField, Button } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";

const Profil = () => {
  const user = useSelector((state) => state.user.user);
  const [data, isLoading] = useFetch(`/profile/${user.username}`);
  return (
    <div className={`${styles.muridContainer}`}>
      <h3 className="text-left">Profil</h3>
      <div className=" form__container">
        {!isLoading && (
          <form className="space-y-4">
            <Grid container columnSpacing={2} rowSpacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="Username"
                  fullWidth
                  value={data ? data.username : ""}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Nama Lengkap"
                  fullWidth
                  value={data ? data.nama : ""}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Alamat"
                  fullWidth
                  value={data ? data.alamat : ""}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="No Hp"
                  fullWidth
                  value={data ? data.no_hp : ""}
                />
              </Grid>
            </Grid>
            <Button variant="contained" color="primary">
              Simpan
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profil;
