import { useCallback } from "react";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.scss";
import FormGuru from "./FormGuru";
import axios from "axios";

const EditGuru = () => {
  const params = useParams();
  const [data, isLoading] = useFetch(`/api/admin/guru/${params.id}`);
  const formSubmit = useCallback(
    async (data) => {
      try {
        const res = await axios.put(`/api/admin/guru/${params.id}`, data);
        console.log(res.data);
      } catch (error) {
        console.log(error.response);
      }
    },
    [params.id]
  );
  return (
    <div
      className={`${styles.adminContainer} ${styles.formAdmin} ${styles.guru}`}
    >
      <h3>Edit Guru</h3>
      {!isLoading && <FormGuru formData={data} onSubmit={formSubmit} />}
    </div>
  );
};

export default EditGuru;
