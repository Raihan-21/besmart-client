import { Button, TextField } from "@mui/material";
// import { useState, useEffect } from "react";
import useFetchDetail from "../../hooks/useFetchDetail";
import { useParams } from "react-router-dom";
import styles from "../../styles/Admin.module.css";
const EditGuru = () => {
  const params = useParams();
  const [data, isLoading] = useFetchDetail(`/admin/guru/${params.id}`);
  //   useEffect(() => {}, []);
  return (
    <div className={`${styles.adminContainer} ${styles.editAdmin}`}>
      <h3>Edit Guru</h3>
      {!isLoading && (
        <form>
          <div className={styles.inputs}>
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              value={data.username}
            />
            <TextField
              label="Nama"
              variant="outlined"
              margin="normal"
              value={data.nama}
            />
            <TextField
              label="Alamat"
              variant="outlined"
              margin="normal"
              value={data.alamat}
            />
            <TextField
              label="No Hp"
              variant="outlined"
              margin="normal"
              value={data.no_hp}
            />
          </div>
          <Button color="primary" variant="contained">
            Save
          </Button>
        </form>
      )}
    </div>
  );
};

export default EditGuru;
