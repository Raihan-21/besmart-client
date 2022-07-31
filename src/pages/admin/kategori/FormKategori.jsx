import styles from "../../../assets/styles/Admin.module.scss";
import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";

const FormKategori = ({ formData, onSubmit }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(formData);
  }, [formData]);
  return (
    <>
      <div className={` ${styles.formContainer}`}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(data);
          }}
        >
          <Grid container columnSpacing={2}>
            <Grid item sm={6} xs={12}>
              <TextField
                label="Nama Kategori"
                variant="outlined"
                margin="normal"
                fullWidth
                value={
                  data ? (data.nama_kategori ? data.nama_kategori : "") : ""
                }
                onChange={(e) => {
                  setData((prevState) => {
                    return { ...prevState, nama_kategori: e.target.value };
                  });
                }}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                label="Deskripsi"
                variant="outlined"
                margin="normal"
                multiline
                maxRows={4}
                fullWidth
                value={data ? (data.deskripsi ? data.deskripsi : "") : ""}
                onChange={(e) => {
                  setData((prevState) => {
                    return { ...prevState, deskripsi: e.target.value };
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

export default FormKategori;
