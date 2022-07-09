import styles from "../../../styles/Admin.module.css";
import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
const FormNews = ({ formData, onSubmit }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(formData);
  }, [formData]);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(data);
        }}
      >
        <div className={styles.inputs}>
          <TextField
            label="Judul"
            variant="outlined"
            margin="normal"
            className={styles.input}
            value={data ? (data.judul ? data.judul : "") : ""}
            onChange={(e) => {
              setData((prevState) => {
                return { ...prevState, judul: e.target.value };
              });
            }}
          />
          <TextField
            label="Deskripsi"
            variant="outlined"
            margin="normal"
            className={styles.input}
            value={data ? (data.deskripsi ? data.deskripsi : "") : ""}
            onChange={(e) => {
              setData((prevState) => {
                return { ...prevState, deskripsi: e.target.value };
              });
            }}
          />
        </div>
        <Button type="submit" color="primary" variant="contained">
          Save
        </Button>
      </form>
    </>
  );
};

export default FormNews;
