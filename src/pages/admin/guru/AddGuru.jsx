import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.scss";
import FormGuru from "./FormGuru";
import axios from "axios";
const AddGuru = () => {
  const [error, setError] = useState({
    username: "",
  });
  const navigate = useNavigate();
  const formSubmit = useCallback(
    async (data) => {
      try {
        const res = await axios.post(`/api/admin/guru`, data);
        console.log(res.data);
        navigate("/admin/guru");
      } catch (error) {
        if (error.response.data.error.includes("duplicate"))
          setError({ username: "Username sudah digunakan" });
      }
    },
    [navigate]
  );
  return (
    <div
      className={`${styles.adminContainer} ${styles.formAdmin} ${styles.guru}`}
    >
      <h3>Tambah Guru</h3>
      {<FormGuru onSubmit={formSubmit} error={error} />}
    </div>
  );
};

export default AddGuru;
