import styles from "../../assets/styles/Murid.module.scss";
import { Grid, TextField, Button } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Profil = () => {
  const user = useSelector((state) => state.user.user);
  const [data, isLoading] = useFetch(`/profile/${user.username}`);
  const [formData, setFormData] = useState({});
  const formHandler = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const res = axios.put("/profile", formData);
        console.log(res.data);
      } catch (error) {
        console.log(error.response);
      }
    },
    [formData]
  );
  useEffect(() => {
    setFormData(data);
  }, [data]);
  return (
    <div className={`${styles.muridContainer}`}>
      <h3 className="text-left">Profil</h3>
      <div className=" form__container">
        {!isLoading && (
          <form className="space-y-4" onSubmit={formHandler}>
            <Grid container columnSpacing={2} rowSpacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="Username"
                  fullWidth
                  value={
                    formData ? (formData.username ? formData.username : "") : ""
                  }
                  onChange={(e) => {
                    setFormData((prevState) => {
                      return { ...formData, username: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Nama Lengkap"
                  fullWidth
                  value={formData ? (formData.nama ? formData.nama : "") : ""}
                  onChange={(e) => {
                    setFormData((prevState) => {
                      return { ...formData, nama: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Alamat"
                  fullWidth
                  value={
                    formData ? (formData.alamat ? formData.alamat : "") : ""
                  }
                  onChange={(e) => {
                    setFormData((prevState) => {
                      return { ...formData, alamat: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="No Hp"
                  fullWidth
                  value={formData ? (formData.no_hp ? formData.no_hp : "") : ""}
                  onChange={(e) => {
                    setFormData((prevState) => {
                      return { ...formData, no_hp: e.target.value };
                    });
                  }}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary">
              Simpan
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profil;
