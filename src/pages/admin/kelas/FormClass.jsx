import styles from "../../../assets/styles/Admin.module.scss";
import useFetch from "../../../hooks/useFetch";
import { Button, TextField, Autocomplete } from "@mui/material";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";

const FormClass = ({ formData, onSubmit }) => {
  const [data, setData] = useState({});
  //eslint-disable-next-line
  const [guru, guruLoading] = useFetch("/admin/guru");
  //eslint-disable-next-line
  const [kategori, kategoriLoading] = useFetch("/admin/kategori");
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
              <Autocomplete
                getOptionLabel={(opt) => opt.nama_kategori || ""}
                isOptionEqualToValue={(opt, value) =>
                  value ? opt._id === value._id : true
                }
                options={kategori.map((opt) => {
                  return { _id: opt._id, nama_kategori: opt.nama_kategori };
                })}
                value={data ? (data.kategori ? data.kategori : "") : ""}
                // value={data ? (data.kategori ? data.kategori._id : "") : ""}
                onChange={(e, value) => {
                  setData((prevState) => {
                    return {
                      ...prevState,
                      kategori: value,
                    };
                  });
                }}
                renderInput={(param) => (
                  <TextField
                    {...param}
                    label="Kategori"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Autocomplete
                options={guru.map((opt) => {
                  return { username: opt.username, nama: opt.nama };
                })}
                getOptionLabel={(opt) => opt.nama || ""}
                isOptionEqualToValue={(opt, value) =>
                  value ? opt.username === value.username : true
                }
                value={data ? (data.guru ? data.guru : "") : ""}
                onChange={(e, value) => {
                  setData((prevState) => {
                    return {
                      ...prevState,
                      guru: value,
                    };
                  });
                }}
                renderInput={(param) => (
                  <TextField
                    {...param}
                    label="Nama Guru"
                    variant="outlined"
                    fullWidth
                  />
                )}
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

export default FormClass;
