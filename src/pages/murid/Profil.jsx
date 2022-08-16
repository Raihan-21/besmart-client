import styles from "../../assets/styles/User.module.scss";
import {
  Grid,
  TextField,
  Button,
  Backdrop,
  CircularProgress,
  Alert,
} from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setName } from "../../slices/userSlice";

const Profil = () => {
  const user = useSelector((state) => state.user.user);
  const [data, isLoading] = useFetch(`/api/profile/${user.username}`);
  const [formData, setFormData] = useState({});
  const [submitLoading, setSubmitLoading] = useState(false);
  const [feedback, setFeedback] = useState({});
  const dispatch = useDispatch();
  const formHandler = useCallback(
    async (e) => {
      e.preventDefault();
      setSubmitLoading(true);
      try {
        const res = await axios.put(`/api/profile/${user.username}`, formData);
        setFeedback({
          isSuccess: true,
          message: res.data.message,
        });
        dispatch(setName(formData.nama));
      } catch (error) {
        console.log(error.response);
        setFeedback({
          isSuccess: false,
          message: error.response.data.error,
        });
      } finally {
        setSubmitLoading(false);
        console.log(feedback);
      }
    },
    [formData, user.username, feedback, dispatch]
  );
  useEffect(() => {
    setFormData(data);
  }, [data]);
  return (
    <div className={`${styles.userContainer}`}>
      <h3 className="text-left">Profil</h3>
      {feedback.message && (
        <Alert
          sx={{ mb: 2 }}
          severity={feedback.isSuccess ? "success" : "error"}
        >
          {feedback.message}
        </Alert>
      )}

      <Backdrop open={submitLoading}>
        <CircularProgress sx={{ color: "white" }} />
      </Backdrop>
      <div className=" form__container">
        {!isLoading && (
          <form className="space-y-4" onSubmit={formHandler}>
            <Grid container columnSpacing={2} rowSpacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="Username"
                  fullWidth
                  value={
                    formData ? (formData.username ? formData.username : "") : ""
                  }
                  onChange={(e) => {
                    setFormData((prevState) => {
                      return { ...formData, username: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Nama Lengkap"
                  fullWidth
                  value={formData ? (formData.nama ? formData.nama : "") : ""}
                  onChange={(e) => {
                    setFormData((prevState) => {
                      return { ...formData, nama: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Alamat"
                  fullWidth
                  value={
                    formData ? (formData.alamat ? formData.alamat : "") : ""
                  }
                  onChange={(e) => {
                    setFormData((prevState) => {
                      return { ...formData, alamat: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="No Hp"
                  fullWidth
                  value={formData ? (formData.no_hp ? formData.no_hp : "") : ""}
                  onChange={(e) => {
                    setFormData((prevState) => {
                      return { ...formData, no_hp: e.target.value };
                    });
                  }}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary">
              Simpan
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profil;
