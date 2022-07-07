import { useState, useEffect } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import style from "../../styles/Admin.module.css";
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
  return (
    <div className={`${style.adminContainer} ${style.tabelAdmin}`}>
      <h3>Murid</h3>
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
            {murid &&
              murid.map((item, i) => (
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

export default AdminMurid;
