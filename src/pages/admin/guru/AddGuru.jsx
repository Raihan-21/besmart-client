import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.css";
import FormGuru from "./FormGuru";
const AddGuru = () => {
  const navigate = useNavigate();
  const formSubmit = useCallback(
    async (data) => {
      const res = await fetch(`/admin/guru`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (resData.error) {
        console.log(resData.error);
      } else {
        navigate("/admin/guru");
      }
    },
    [navigate]
  );
  return (
    <div
      className={`${styles.adminContainer} ${styles.formAdmin} ${styles.guru}`}
    >
      <h3>Tambah Guru</h3>
      {<FormGuru onSubmit={formSubmit} />}
    </div>
  );
};

export default AddGuru;
