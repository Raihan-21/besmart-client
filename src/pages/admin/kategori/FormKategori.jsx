import styles from "../../../assets/styles/Admin.module.scss";
import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { Grid, Input } from "@mui/material";

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
          <Grid container columnSpacing={2} rowSpacing={3}>
            <Grid item sm={6} xs={12}>
              <TextField
                label="Nama Kategori"
                variant="outlined"
                margin="normal"
                fullWidth
                required
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
                required
                value={data ? (data.deskripsi ? data.deskripsi : "") : ""}
                onChange={(e) => {
                  setData((prevState) => {
                    return { ...prevState, deskripsi: e.target.value };
                  });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container>
                <Grid item xs={3}>
                  {" "}
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      // width={"100%"}
                      name="image"
                      type="file"
                      accept="image/*"
                      required
                      // fullWidth
                      // inputProps={{
                      //   accept: ["image/png", " image/gif", "image/jpeg"],
                      // }}
                      // value={{
                      //   name: "admin.drawio.png",
                      //   type: "image/png",
                      // }}
                      onChange={(e) => {
                        setData((prevState) => {
                          console.log(e.target.files[0]);
                          return { ...prevState, image: e.target.files[0] };
                        });
                      }}
                    />
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  {data && data.image && (
                    <div className="text-left">{data.image.name}</div>
                  )}
                </Grid>
              </Grid>
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

export default FormKategori;
