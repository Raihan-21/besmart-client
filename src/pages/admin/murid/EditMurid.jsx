import { useCallback } from "react";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.scss";
import FormMurid from "./FormMurid";
import axios from "axios";
import { Button } from "@mui/material";

const EditMurid = () => {
  const params = useParams();
  const [data, isLoading] = useFetch(`/admin/murid/${params.id}`);
  const formSubmit = useCallback(
    async (data) => {
      try {
        const res = await axios.put(`/admin/murid/${params.id}`, data);
        console.log(res.data);
      } catch (error) {
        console.log(error.response);
      }
    },
    [params.id]
  );
  const statusHandler = useCallback(
    async (status) => {
      try {
        const res = await axios.put(`/api/admin/murid/${params.id}/status`, {
          status,
          id_kelas: data.kelas._id,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error.response);
      }
    },
    [params.id, data.kelas]
  );
  return (
    <div
      className={`${styles.adminContainer} ${styles.formAdmin} ${styles.guru}`}
    >
      <h3>Edit Murid</h3>
      {!isLoading && <FormMurid formData={data} onSubmit={formSubmit} />}
      {data.status === "diproses" && (
        <div>
          <h3>Status</h3>
          <div className={styles.formContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                statusHandler("diterima");
              }}
            >
              Terima
            </Button>
            <Button
              color="error"
              variant="contained"
              onClick={() => {
                statusHandler("ditolak");
              }}
            >
              Tolak
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditMurid;
