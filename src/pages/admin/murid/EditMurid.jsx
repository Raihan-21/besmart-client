import { useCallback } from "react";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.scss";
import FormMurid from "./FormMurid";
import axios from "axios";

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
  return (
    <div
      className={`${styles.adminContainer} ${styles.formAdmin} ${styles.guru}`}
    >
      <h3>Edit Murid</h3>
      {!isLoading && <FormMurid formData={data} onSubmit={formSubmit} />}
    </div>
  );
};

export default EditMurid;
