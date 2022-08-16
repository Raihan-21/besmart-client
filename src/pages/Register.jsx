import { TextField, Button, Autocomplete } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import styles from "../assets/styles/Register.module.css";
import { Grid } from "@mui/material";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const Register = () => {
  const [kategori, isLoading] = useFetch("/api/admin/kategori");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    kategori: { _id: "" },
  });
  const [hari, setHari] = useState([]);
  const register = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/register", {
          ...formData,
          status: "diproses",
        });
        console.log(res.data);
      } catch (error) {
        console.log(error.response);
      }
    },
    [formData]
  );
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `/api/admin/kelas?filter[id_kategori]=${formData.kategori._id}`
        );
        setHari(
          res.data.data.map((jadwal) => {
            return {
              _id: jadwal._id,
              hari: jadwal.hari.map((hari) => hari.label).join(" & "),
            };
          })
        );
      } catch (error) {
        console.log(error.response);
      }
    };
    getData();
  }, [formData.kategori]);
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
                  nama: e.target.value,
                }));
              }}
              required
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
              required
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
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="No Hp"
              type="number"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setFormData((prevState) => ({
                  ...prevState,
                  no_hp: e.target.value,
                }));
              }}
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Alamat"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setFormData((prevState) => ({
                  ...prevState,
                  alamat: e.target.value,
                }));
              }}
              required
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
              required
            />
          </Grid>
        </Grid>

        <Grid container columnSpacing={2} rowSpacing={3}>
          <Grid item xs={12}>
            <h2 className="text-left">Pilih Kelas</h2>
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              disableClearable={true}
              options={!isLoading ? kategori : []}
              onChange={(event, value) => {
                setFormData((prevState) => ({
                  ...prevState,
                  kategori: value,
                }));
              }}
              getOptionLabel={(opt) => opt.nama_kategori}
              isOptionEqualToValue={(option, value) => option._id === value._id}
              renderInput={(param) => (
                <TextField {...param} label="Kategori" required />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              disabled={!formData.kategori._id ? true : false}
              options={hari}
              onChange={(event, value) => {
                setFormData((prevState) => ({
                  ...prevState,
                  kelas: value,
                }));
              }}
              getOptionLabel={(opt) => {
                return opt.hari;
              }}
              isOptionEqualToValue={(option, value) => option._id === value._id}
              renderInput={(param) => (
                <TextField {...param} label="Jadwal" required />
              )}
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
