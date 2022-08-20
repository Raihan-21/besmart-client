import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.scss";
import FormKategori from "./FormKategori";
import axios from "axios";

const AddKategori = () => {
  const navigate = useNavigate();
  const formSubmit = useCallback(
    async (data) => {
      const formData = new FormData();
      formData.append("nama_kategori", data.nama_kategori);
      formData.append("deskripsi", data.deskripsi);
      formData.append("image", data.image);
      try {
        const res = await axios.post(`/api/admin/kategori`, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        console.log(res.data);
        navigate("/admin/kategori");
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
      <h3>Tambah Kategori</h3>
      <FormKategori onSubmit={formSubmit} />
    </div>
  );
};

export default AddKategori;
