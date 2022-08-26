import styles from "../../../assets/styles/Admin.module.scss";
import { Button, Grid, TextField, Autocomplete } from "@mui/material";
import { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";

const FormMurid = ({ formData, onSubmit, error }) => {
  const [data, setData] = useState({});
  const [kategori, isLoading] = useFetch("/api/admin/kategori");

  const [hari, setHari] = useState([]);
  useEffect(() => {
    if (formData) setData(formData);
  }, [formData]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `/api/admin/kelas?filter[id_kategori]=${data.kategori._id}`
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
    if (data.kategori) getData();
  }, [data.kategori]);
  return (
    <>
      <div className={styles.formContainer}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(data);
          }}
        >
          <Grid container columnSpacing={2}>
            <Grid item xs={6}>
              <TextField
                disabled={formData ? true : false}
                label="Username"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                value={data ? (data.username ? data.username : "") : ""}
                onChange={(e) => {
                  setData((prevState) => {
                    return { ...prevState, username: e.target.value };
                  });
                }}
                error={error ? (error.username ? true : false) : false}
                helperText={error ? (error.username ? error.username : "") : ""}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Nama"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                value={data ? (data.nama ? data.nama : "") : ""}
                onChange={(e) => {
                  setData((prevState) => {
                    return { ...prevState, nama: e.target.value };
                  });
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Alamat"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                value={data ? (data.alamat ? data.alamat : "") : ""}
                onChange={(e) => {
                  setData((prevState) => {
                    return { ...prevState, alamat: e.target.value };
                  });
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="No Hp"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                value={data ? (data.no_hp ? data.no_hp : "") : ""}
                onChange={(e) => {
                  setData((prevState) => {
                    return { ...prevState, no_hp: e.target.value };
                  });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <h3 className="text-left">Kelas</h3>
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                disableClearable={true}
                options={!isLoading ? kategori : []}
                value={data.kategori ? data.kategori : { nama_kategori: "" }}
                onChange={(event, value) => {
                  setData((prevState) => ({
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
            <Grid item xs={6}>
              <Autocomplete
                disabled={!data.kategori ? true : false}
                options={hari}
                value={data.kelas ? data.kelas : { hari: "" }}
                onChange={(event, value) => {
                  setData((prevState) => ({
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

          <Button type="submit" color="primary" variant="contained">
            Simpan
          </Button>
        </form>
      </div>
    </>
  );
};

export default FormMurid;
