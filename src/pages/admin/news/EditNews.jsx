import { useCallback } from "react";
import useFetchDetail from "../../../hooks/useFetchDetail";
import { useParams } from "react-router-dom";
import styles from "../../../styles/Admin.module.css";
import FormNews from "./FormNews";
const EditNews = () => {
  const params = useParams();
  const [data, isLoading] = useFetchDetail(`/admin/berita/${params.slug}`);
  const formSubmit = useCallback(
    async (data) => {
      const res = await fetch(`/admin/berita/${params.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (resData.error) {
        console.log(resData.error);
      }
    },
    [params.slug]
  );
  return (
    <div
      className={`${styles.adminContainer} ${styles.formAdmin} ${styles.guru}`}
    >
      <h3>Edit Berita</h3>
      {!isLoading && <FormNews formData={data} onSubmit={formSubmit} />}
    </div>
  );
};

export default EditNews;
