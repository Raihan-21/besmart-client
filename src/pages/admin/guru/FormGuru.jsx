import styles from "../../../assets/styles/Admin.module.scss";
import { Button, Grid, TextField } from "@mui/material";
import { useState, useEffect } from "react";
const FormGuru = ({ formData, onSubmit }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(formData);
  }, [formData]);
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
                label="Username"
                variant="outlined"
                margin="normal"
                fullWidth
                value={data ? (data.username ? data.username : "") : ""}
                onChange={(e) => {
                  setData((prevState) => {
                    return { ...prevState, username: e.target.value };
                  });
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Nama"
                variant="outlined"
                margin="normal"
                fullWidth
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
                value={data ? (data.no_hp ? data.no_hp : "") : ""}
                onChange={(e) => {
                  setData((prevState) => {
                    return { ...prevState, no_hp: e.target.value };
                  });
                }}
              />
            </Grid>
          </Grid>

          <Button type="submit" color="primary" variant="contained">
            Save
          </Button>
        </form>
      </div>
    </>
  );
};

export default FormGuru;
