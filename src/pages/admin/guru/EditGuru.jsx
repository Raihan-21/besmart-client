import { useCallback } from "react";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.css";
import FormGuru from "./FormGuru";
const EditGuru = () => {
  const params = useParams();
  const [data, isLoading] = useFetch(`/admin/guru/${params.id}`);
  const formSubmit = useCallback(
    async (data) => {
      const res = await fetch(`/admin/guru/${params.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      console.log(resData.data);
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
