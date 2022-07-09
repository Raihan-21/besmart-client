import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/Admin.module.css";
import FormNews from "./FormNews";
const AddNews = () => {
  const navigate = useNavigate();
  const formSubmit = useCallback(
    async (data) => {
      const res = await fetch(`/admin/berita`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (resData.error) {
        console.log(resData.error);
      } else {
        navigate("/admin/berita");
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
