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
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
const AdminGuru = () => {
  const [data, isLoading] = useFetch("/api/admin/guru");
  const navigate = useNavigate();
  const deleteHandler = useCallback(
    async (username) => {
      const res = await fetch(`/api/admin/guru/${username}`, {
        method: "DELETE",
      });
      const resData = await res.json();
      if (resData.error) {
        console.log(resData.error);
        return;
      }
      navigate(0);
    },
    [navigate]
  );
  return (
    <div className={`${style.adminContainer} ${style.tabelAdmin}`}>
      <div className={style.heading}>
        <h3>Guru</h3>
        <Link to="tambah">
          <Button color="secondary" variant="contained">
            Tambah
          </Button>
        </Link>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#c9c9c9" }}>
            <TableRow>
              <TableCell>Nama</TableCell>
              <TableCell>Alamat</TableCell>
              <TableCell>No hp</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!isLoading &&
              data.map((item, i) => (
                <TableRow key={i}>
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.alamat}</TableCell>
                  <TableCell>{item.no_hp}</TableCell>
                  <TableCell sx={{ width: 200 }}>
                    <Link to={item.username || ""}>
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
                        deleteHandler(item.username);
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
    </div>
  );
};

export default AdminGuru;
