import { useCallback } from "react";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.scss";
import FormKategori from "./FormKategori";
import axios from "axios";
const EditKategori = () => {
  const params = useParams();
  const [data, isLoading] = useFetch(`/admin/kategori/${params.id}`);
  const formSubmit = useCallback(
    async (data) => {
      try {
        const res = await axios.put(`/admin/kategori/${params.id}`, data);
        console.log(res.data);
      } catch (error) {
        console.log(error.response);
      }
    },
    [params.id]
  );
  return (
    <div
      className={`${styles.adminContainer}  ${styles.formAdmin} ${styles.guru}`}
    >
      <h3>Edit Kategori</h3>
      {!isLoading && <FormKategori formData={data} onSubmit={formSubmit} />}
    </div>
  );
};

export default EditKategori;
