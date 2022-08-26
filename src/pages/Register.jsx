import { TextField, Button, Autocomplete } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import styles from "../assets/styles/Register.module.css";
import { Grid } from "@mui/material";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [kategori, isLoading] = useFetch("/api/admin/kategori");
  const [formData, setFormData] = useState({
    password: "",
    kategori: { _id: "" },
  });
  const [error, setError] = useState({
    username: "",
  });
  const [hari, setHari] = useState([]);
  const navigate = useNavigate();
  const register = useCallback(
    async (e) => {
      e.preventDefault();
      setError({ username: "" });
      try {
        const res = await axios.post("/api/register", {
          ...formData,
          status: "diproses",
        });
        console.log(res.data);
        navigate("/login");
      } catch (error) {
        setError((prevState) => {
          return { ...prevState, username: "Username sudah digunakan" };
        });
        console.log(error.response);
      }
    },
    [formData, navigate]
  );
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `/api/admin/kelas?filter[id_kategori]=${formData.kategori._id}&filter[open]=true`
        );
        setHari(
          res.data.data.map((jadwal) => {
            return {
              _id: jadwal._id,
              hari: `${jadwal.keterangan}, ${jadwal.hari
                .map((hari) => hari.label)
                .join(" & ")}`,
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
    <div className={`${styles.registerContainer}`}>
      <div className={`auth-form ${styles.register}`}>
        <form onSubmit={register} className="space-y-4">
          <h2 className={styles.h2}>Daftar</h2>
          <Grid container columnSpacing={2}>
            <Grid item sm={6} xs={12}>
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
            <Grid item sm={6} xs={12}>
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
                error={error.username ? true : false}
                helperText={error.username ? error.username : ""}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
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

            <Grid item sm={6} xs={12}>
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
            <Grid item sm={6} xs={12}>
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
              <h3 className="text-left">Pilih Kelas</h3>
            </Grid>
            <Grid item sm={6} xs={12}>
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
                isOptionEqualToValue={(option, value) =>
                  option._id === value._id
                }
                renderInput={(param) => (
                  <TextField {...param} label="Kategori" required />
                )}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
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
                isOptionEqualToValue={(option, value) =>
                  option._id === value._id
                }
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
            Daftar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
