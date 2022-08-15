import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.scss";
import FormGuru from "./FormGuru";
import axios from "axios";
const AddGuru = () => {
  const navigate = useNavigate();
  const formSubmit = useCallback(
    async (data) => {
      try {
        const res = await axios.post(`/api/admin/guru`, data);
        console.log(res.data);
        navigate("/admin/guru");
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
      <h3>Tambah Guru</h3>
      {<FormGuru onSubmit={formSubmit} />}
    </div>
  );
};

export default AddGuru;
