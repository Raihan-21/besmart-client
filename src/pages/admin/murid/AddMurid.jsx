import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.scss";
import FormMurid from "./FormMurid";
import axios from "axios";

const AddMurid = () => {
  const [error, setError] = useState({
    username: "",
  });
  const navigate = useNavigate();
  const formSubmit = useCallback(
    async (data) => {
      setError({ username: "" });
      try {
        const res = await axios.post(`/api/admin/murid`, {
          ...data,
          kategori: {
            _id: data.kategori._id,
            nama_kategori: data.kategori.nama_kategori,
          },
        });
        console.log(res.data);
        navigate("/admin/murid");
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
      <h3>Tambah Murid</h3>
      <FormMurid onSubmit={formSubmit} error={error} />
    </div>
  );
};

export default AddMurid;
