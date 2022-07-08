import { useCallback } from "react";
import useFetchDetail from "../../../hooks/useFetchDetail";
import { useParams } from "react-router-dom";
import styles from "../../../styles/Admin.module.css";
import FormMurid from "./FormMurid";
const EditMurid = () => {
  const params = useParams();
  const [data, isLoading] = useFetchDetail(`/admin/murid/${params.id}`);
  const formSubmit = useCallback(
    async (data) => {
      const res = await fetch(`/admin/murid/${params.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (resData.error) {
        console.log(resData.error);
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
