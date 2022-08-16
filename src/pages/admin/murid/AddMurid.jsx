import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.scss";
import FormMurid from "./FormMurid";
import axios from "axios";

const AddMurid = () => {
  const navigate = useNavigate();
  const formSubmit = useCallback(
    async (data) => {
      try {
        const res = await axios.post(`/api/admin/murid`, data);
        console.log(res.data);
        navigate("/admin/murid");
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
      <h3>Tambah Murid</h3>
      <FormMurid onSubmit={formSubmit} />
    </div>
  );
};

export default AddMurid;
