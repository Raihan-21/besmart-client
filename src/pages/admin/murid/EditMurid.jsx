import { useCallback } from "react";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.scss";
import FormMurid from "./FormMurid";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EditMurid = () => {
  const params = useParams();
  const [data, isLoading] = useFetch(`/api/admin/murid/${params.id}`);
  const navigate = useNavigate();
  const formSubmit = useCallback(
    async (data) => {
      try {
        const res = await axios.put(`/api/admin/murid/${params.id}`, {
          ...data,
          kategori: {
            _id: data.kategori._id,
            nama_kategori: data.kategori.nama_kategori,
          },
        });
        console.log(res.data);
        navigate("/admin/murid");
      } catch (error) {
        console.log(error.response);
      }
    },
    [params.id, navigate]
  );
  const statusHandler = useCallback(
    async (status) => {
      try {
        const res = await axios.put(`/api/admin/murid/${params.id}/status`, {
          status,
          id_kelas: data.kelas._id,
        });
        console.log(res.data);
        navigate("/admin/murid");
      } catch (error) {
        console.log(error.response);
      }
    },
    [params.id, data.kelas, navigate]
  );
  return (
    <div
      className={`${styles.adminContainer} ${styles.formAdmin} ${styles.guru} space-y-4`}
    >
      <div>
        <h3>Edit Murid</h3>
        {!isLoading && <FormMurid formData={data} onSubmit={formSubmit} />}
      </div>
      {data.status === "diproses" && (
        <div>
          <h3>Status</h3>
          <div className={`${styles.formContainer} space-x-4`}>
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
