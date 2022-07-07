import styles from "../../styles/Admin.module.css";
import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
const FormMurid = ({ formData, onSubmit }) => {
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
            value={data.username || ""}
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
            value={data.nama || ""}
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
            value={data.alamat || ""}
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
            value={data.noHp || ""}
            onChange={(e) => {
              setData((prevState) => {
                return { ...prevState, noHp: e.target.value };
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

export default FormMurid;
