import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.scss";
import FormNews from "./FormNews";
import axios from "axios";

const AddNews = () => {
  const navigate = useNavigate();
  const formSubmit = useCallback(
    async (data) => {
      try {
        const res = await axios.post(`/admin/berita`, data);
        console.log(res.data);
        navigate("/admin/berita");
      } catch (error) {
        console.log(error.response);
      }
    },
    [navigate]
  );
  return (
    <div
      className={`${styles.adminContainer} ${styles.formAdmin} ${styles.guru}`}
    >
      <h3>Tambah Berita</h3>
      <FormNews onSubmit={formSubmit} />
    </div>
  );
};

export default AddNews;
