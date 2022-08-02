import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../../assets/styles/Admin.module.scss";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import axios from "axios";

const Class = () => {
  const [data, isLoading] = useFetch("/admin/kelas");
  const navigate = useNavigate();
  const deleteHandler = useCallback(
    async (slug) => {
      try {
        const res = await axios.delete(`/admin/kelas/${slug}`);
        console.log(res.data);
        navigate(0);
      } catch (error) {
        console.log(error.response);
      }
    },
    [navigate]
  );
  return (
    <div className={`${style.adminContainer} ${style.tabelAdmin}`}>
      <div className={style.heading}>
        <h3>Kelas</h3>
        <Link to="tambah">
          <Button color="secondary" variant="contained">
            Tambah
          </Button>
        </Link>
      </div>

      {!isLoading && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Kategori</TableCell>
                <TableCell>Guru</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell>{item.kategori.nama_kategori}</TableCell>
                    <TableCell>{item.guru.nama}</TableCell>
                    <TableCell>
                      <Link to={item._id || ""}>
                        <Button
                          className={style.actionBtn}
                          color="primary"
                          variant="contained"
                        >
                          Edit
                        </Button>
                      </Link>

                      <Button
                        className={style.actionBtn}
                        color="error"
                        variant="contained"
                        onClick={() => {
                          deleteHandler(item._id);
                        }}
                      >
                        Hapus
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Class;
