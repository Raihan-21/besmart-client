import { useCallback } from "react";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import styles from "../../../assets/styles/Admin.module.scss";
import FormKategori from "./FormKategori";
import axios from "axios";
const EditKategori = () => {
  const params = useParams();
  const [data, isLoading] = useFetch(`/api/admin/kategori/${params.slug}`);
  const formSubmit = useCallback(
    async (data) => {
      const formData = new FormData();
      formData.append("nama_kategori", data.nama_kategori);
      formData.append("deskripsi", data.deskripsi);
      formData.append("image", data.image);
      try {
        const res = await axios.put(
          `/api/admin/kategori/${params.slug}`,
          formData,
          {
            headers: {
              "content-type": "multipart/form-data",
            },
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error.response);
      }
    },
    [params.slug]
  );
  return (
    <div
      className={`${styles.adminContainer}  ${styles.formAdmin} ${styles.guru}`}
    >
      <h3>Edit Kategori</h3>
      {!isLoading && <FormKategori formData={data} onSubmit={formSubmit} />}
    </div>
  );
};

export default EditKategori;
