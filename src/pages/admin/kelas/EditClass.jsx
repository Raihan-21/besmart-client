import { useCallback } from "react";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.scss";
import FormClass from "./FormClass";
import axios from "axios";
const EditClass = () => {
  const params = useParams();
  const [data, isLoading] = useFetch(`/admin/kelas/${params.id}`);
  const formSubmit = useCallback(
    async (data) => {
      const payload = {
        ...data,
        id_kategori: data.kategori._id,
        id_guru: data.guru.username,
      };
      delete payload.guru;
      delete payload.kategori;
      try {
        const res = await axios.put(`/admin/kelas/${params.id}`, payload);
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
      <h3>Edit Kelas</h3>
      {!isLoading && <FormClass formData={data} onSubmit={formSubmit} />}
    </div>
  );
};

export default EditClass;
