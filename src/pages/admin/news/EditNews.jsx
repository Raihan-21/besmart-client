import { useCallback } from "react";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.scss";
import FormNews from "./FormNews";
import axios from "axios";
const EditNews = () => {
  const params = useParams();
  const [data, isLoading] = useFetch(`/api/admin/berita/${params.slug}`);
  const formSubmit = useCallback(
    async (data) => {
      try {
        const res = await axios.put(`/api/admin/berita/${params.slug}`, data);
        console.log(res.data);
      } catch (error) {
        console.log(error.response);
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
