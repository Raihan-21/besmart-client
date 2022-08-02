import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.scss";
import FormClass from "./FormClass";
import axios from "axios";

const AddClass = () => {
  const navigate = useNavigate();
  const formSubmit = useCallback(
    async (data) => {
      const payload = {
        ...data,
        id_kategori: data.kategori._id,
        id_guru: data.guru.username,
      };
      delete payload.guru;
      delete payload.kategori;
      try {
        const res = await axios.post(`/admin/kelas`, payload);
        console.log(res.data);
        navigate("/admin/kelas");
      } catch (error) {
        console.log(error);
      }
    },
    [navigate]
  );
  return (
    <div
      className={`${styles.adminContainer} ${styles.formAdmin} ${styles.guru}`}
    >
      <h3>Tambah Kelas</h3>
      <FormClass onSubmit={formSubmit} />
    </div>
  );
};

export default AddClass;
