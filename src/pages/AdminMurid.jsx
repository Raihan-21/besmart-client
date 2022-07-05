import { useState, useEffect } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import style from "../styles/Admin.module.css";
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
    <div className={`${style.adminContainer} ${style.tabelMurid}`}>
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
                    <Button
                      className={style.actionBtn}
                      color="primary"
                      variant="contained"
                    >
                      Edit
                    </Button>
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
      {/* <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Alamat</th>
            <th>No Hp</th>
          </tr>
        </thead>
        <tbody>
          {murid &&
            murid.map((item) => (
              <tr>
                <td>{item.nama}</td>
                <td>{item.alamat}</td>
                <td>{item.no_hp}</td>
              </tr>
            ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default AdminMurid;
