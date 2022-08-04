import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.scss";
import FormNews from "./FormNews";
import axios from "axios";

const AddNews = () => {
  const navigate = useNavigate();
  const formSubmit = useCallback(
    async (data) => {
      const tanggal_buat = new Date().toISOString().slice(0, 10);
      try {
        const res = await axios.post(`/admin/berita`, {
          ...data,
          tanggal_buat,
        });
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
