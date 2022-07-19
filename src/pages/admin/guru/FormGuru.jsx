import styles from "../../../assets/styles/Admin.module.css";
import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
const FormGuru = ({ formData, onSubmit }) => {
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
            label="Username"
            variant="outlined"
            margin="normal"
            className={styles.input}
            value={data ? (data.username ? data.username : "") : ""}
            onChange={(e) => {
              setData((prevState) => {
                return { ...prevState, username: e.target.value };
              });
            }}
          />
          <TextField
            label="Nama"
            variant="outlined"
            margin="normal"
            className={styles.input}
            value={data ? (data.nama ? data.nama : "") : ""}
            onChange={(e) => {
              setData((prevState) => {
                return { ...prevState, nama: e.target.value };
              });
            }}
          />
          <TextField
            label="Alamat"
            variant="outlined"
            margin="normal"
            className={styles.input}
            value={data ? (data.alamat ? data.alamat : "") : ""}
            onChange={(e) => {
              setData((prevState) => {
                return { ...prevState, alamat: e.target.value };
              });
            }}
          />
          <TextField
            label="No Hp"
            variant="outlined"
            margin="normal"
            className={styles.input}
            value={data ? (data.no_hp ? data.no_hp : "") : ""}
            onChange={(e) => {
              setData((prevState) => {
                return { ...prevState, no_hp: e.target.value };
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

export default FormGuru;
