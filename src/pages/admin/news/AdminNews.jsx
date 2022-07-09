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
import style from "../../../styles/Admin.module.css";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
const AdminNews = () => {
  const [data, isLoading] = useFetch("/admin/berita");
  const navigate = useNavigate();
  const deleteHandler = useCallback(
    async (slug) => {
      const res = await fetch(`/admin/berita/${slug}`, {
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
        <h3>Berita</h3>
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
                <TableCell>judul</TableCell>
                <TableCell>Deskripsi</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell>{item.judul}</TableCell>
                    <TableCell>{item.deskripsi}</TableCell>
                    <TableCell>
                      <Link to={item.slug || ""}>
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
                          deleteHandler(item.slug);
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

export default AdminNews;
