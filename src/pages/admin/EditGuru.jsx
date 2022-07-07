import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useCallback } from "react";
import useFetchDetail from "../../hooks/useFetchDetail";
import { useParams } from "react-router-dom";
import styles from "../../styles/Admin.module.css";
const EditGuru = () => {
  const params = useParams();
  const [data, isLoading] = useFetchDetail(`/admin/guru/${params.id}`);
  const [formData, setFormData] = useState({
    username: "",
    nama: "",
    alamat: "",
    noHp: "",
  });
  useEffect(() => {
    setFormData((prevState) => {
      return {
        ...prevState,
        username: data.username,
        nama: data.nama,
        alamat: data.alamat,
        noHp: data.no_hp,
      };
    });
  }, [data]);
  const formSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const res = await fetch(`/admin/guru/${params.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const resData = await res.json();
      console.log(resData.data);
    },
    [formData, params.id]
  );
  return (
    <div
      className={`${styles.adminContainer} ${styles.formAdmin} ${styles.guru}`}
    >
      <h3>Edit Guru</h3>
      {!isLoading && (
        <form onSubmit={formSubmit}>
          <div className={styles.inputs}>
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              className={styles.input}
              value={formData.username || ""}
              onChange={(e) => {
                setFormData((prevState) => {
                  return { ...prevState, username: e.target.value };
                });
              }}
            />
            <TextField
              label="Nama"
              variant="outlined"
              margin="normal"
              className={styles.input}
              value={formData.nama || ""}
              onChange={(e) => {
                setFormData((prevState) => {
                  return { ...prevState, nama: e.target.value };
                });
              }}
            />
            <TextField
              label="Alamat"
              variant="outlined"
              margin="normal"
              className={styles.input}
              value={formData.alamat || ""}
              onChange={(e) => {
                setFormData((prevState) => {
                  return { ...prevState, alamat: e.target.value };
                });
              }}
            />
            <TextField
              label="No Hp"
              variant="outlined"
              margin="normal"
              className={styles.input}
              value={formData.noHp || ""}
              onChange={(e) => {
                setFormData((prevState) => {
                  return { ...prevState, noHp: e.target.value };
                });
              }}
            />
          </div>
          <Button type="submit" color="primary" variant="contained">
            Save
          </Button>
        </form>
      )}
    </div>
  );
};

export default EditGuru;
