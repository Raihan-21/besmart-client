import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/Admin.module.css";
import FormMurid from "./FormMurid";
const AddMurid = () => {
  const navigate = useNavigate();
  const formSubmit = useCallback(
    async (data) => {
      const res = await fetch(`/admin/murid`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (resData.error) {
        console.log(resData.error);
      } else {
        navigate("/admin/murid");
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
