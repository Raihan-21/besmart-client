import { TextField, Button, Autocomplete } from "@mui/material";
import { useState, useCallback } from "react";
import styles from "../assets/styles/Register.module.css";
import { Grid } from "@mui/material";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    kategori: "",
  });
  const register = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/register", formData);
        console.log(res.data);
      } catch (error) {
        console.log(error.response);
      }
    },
    [formData]
  );
  return (
    <div className={`auth-form ${styles.register}`}>
      <form onSubmit={register}>
        <h2 className={styles.h2}>Daftar</h2>
        <Grid container columnSpacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Nama Lengkap"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setFormData((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }));
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setFormData((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }));
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setFormData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              onChange={(e) => {
                setFormData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Alamat"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <h2>Pilih Kursus</h2>
        <Grid container columnSpacing={2}>
          <Grid item xs={6}>
            <Autocomplete
              options={[
                { label: "Sekolah Menengah Atas", value: "sma" },
                { label: "Sekolah Menengah Pertama", value: "smp" },
              ]}
              onChange={(event, value) => {
                setFormData((prevState) => ({
                  ...prevState,
                  kategori: value.value,
                }));
              }}
              isOptionEqualToValue={(option, value) =>
                option.value === value.value
              }
              renderInput={(param) => <TextField {...param} label="Kategori" />}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          className={styles.registerBtn}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
