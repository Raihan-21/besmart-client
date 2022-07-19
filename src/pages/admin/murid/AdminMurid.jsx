import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { CircularProgress } from "@mui/material";
import { Button } from "@mui/material";
import style from "../../../assets/styles/Admin.module.css";
import { Link } from "react-router-dom";
const AdminMurid = () => {
  const [murid, setMurid] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/admin/murid");
      const data = await res.json();
      setMurid(data.data);
    };
    getData();
  }, []);
  const navigate = useNavigate();
  const deleteHandler = useCallback(
    async (username) => {
      const res = await fetch(`/admin/murid/${username}`, {
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
        <h3>Murid</h3>
        <Link to="/admin/murid/tambah">
          <Button color="secondary" variant="contained">
            Tambah
          </Button>
        </Link>
      </div>
      {murid ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nama</TableCell>
                <TableCell>Alamat</TableCell>
                <TableCell>No hp</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {murid.map((item, i) => (
                <TableRow key={i}>
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.alamat}</TableCell>
                  <TableCell>{item.no_hp}</TableCell>
                  <TableCell>
                    <Link to={item.username}>
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
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default AdminMurid;
