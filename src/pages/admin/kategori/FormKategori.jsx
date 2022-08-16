import styles from "../../../assets/styles/Admin.module.scss";
import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { Grid, Input } from "@mui/material";
import { useParams } from "react-router-dom";

const FormKategori = ({ formData, onSubmit }) => {
  const [data, setData] = useState({});
  const params = useParams();
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
          <Grid container columnSpacing={2} rowSpacing={3}>
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
            <Grid item xs={12} sm={6}>
              <Input
                name="image"
                type="file"
                fullWidth
                inputProps={{
                  accept: ["image/png", " image/gif", "image/jpeg"],
                }}
                onChange={(e) => {
                  setData((prevState) => {
                    return { ...prevState, image: e.target.files[0] };
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
