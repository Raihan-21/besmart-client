import styles from "../../../assets/styles/Admin.module.scss";
import useFetch from "../../../hooks/useFetch";
import { Button, TextField, Autocomplete } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import { Grid } from "@mui/material";
import {
  Scheduler,
  MonthView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  Toolbar,
  TodayButton,
  DateNavigator,
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";

const hari = [
  { label: "Senin", value: "senin" },
  { label: "Selasa", value: "selasa" },
  { label: "Rabu", value: "rabu" },
  { label: "Kamis", value: "kamis" },
  { label: "Jumat", value: "jumat" },
  { label: "Sabtu", value: "sabtu" },
  { label: "Minggu", value: "minggu" },
];
const FormClass = ({ formData, onSubmit }) => {
  const [data, setData] = useState({ hari: [] });
  const [currentDate, setCurrentDate] = useState(new Date());
  // const [appointData, setAppointData] = useState([]);
  //eslint-disable-next-line
  const [guru, guruLoading] = useFetch("/api/admin/guru");
  //eslint-disable-next-line
  const [kategori, kategoriLoading] = useFetch("/api/admin/kategori");
  const commitChanges = useCallback(
    ({ added, changed, deleted }) => {
      let { jadwal } = data;
      if (added) {
        const startingAddedId =
          data.jadwal.length > 0
            ? data.jadwal[data.jadwal.length - 1].id + 1
            : 0;
        jadwal = [...jadwal, { id: startingAddedId, ...added }];
      }
      if (changed) {
        jadwal = jadwal.map((appointments) =>
          changed[appointments.id]
            ? { ...appointments, ...changed[appointments.id] }
            : appointments
        );
      }
      if (deleted) {
        jadwal = jadwal.filter((appointment) => appointment.id !== deleted);
      }
      setData((prevState) => {
        return {
          ...prevState,
          jadwal,
        };
      });
    },
    [data]
  );
  useEffect(() => {
    if (formData) setData(formData);
    else {
      setData({ jadwal: [], hari: ["", ""] });
    }
  }, [formData]);
  return (
    <>
      <div className={` ${styles.formContainer} space-y-8`}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(data);
          }}
        >
          <Grid container columnSpacing={2} rowSpacing={3}>
            <Grid item sm={6} xs={12}>
              <Autocomplete
                getOptionLabel={(opt) => opt.nama_kategori || ""}
                isOptionEqualToValue={(opt, value) =>
                  value ? opt._id === value._id : true
                }
                options={kategori.map((opt) => {
                  return { _id: opt._id, nama_kategori: opt.nama_kategori };
                })}
                value={data ? (data.kategori ? data.kategori : "") : ""}
                onChange={(e, value) => {
                  setData((prevState) => {
                    return {
                      ...prevState,
                      kategori: value,
                    };
                  });
                }}
                renderInput={(param) => (
                  <TextField
                    {...param}
                    label="Kategori"
                    variant="outlined"
                    fullWidth
                    required
                  />
                )}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Autocomplete
                options={guru.map((opt) => {
                  return { username: opt.username, nama: opt.nama };
                })}
                getOptionLabel={(opt) => opt.nama || ""}
                isOptionEqualToValue={(opt, value) =>
                  value ? opt.username === value.username : true
                }
                value={data ? (data.guru ? data.guru : "") : ""}
                onChange={(e, value) => {
                  setData((prevState) => {
                    return {
                      ...prevState,
                      guru: value,
                    };
                  });
                }}
                renderInput={(param) => (
                  <TextField
                    {...param}
                    label="Nama Guru"
                    variant="outlined"
                    fullWidth
                    required
                  />
                )}
              />
            </Grid>
            <Grid item sm={3} xs={12}>
              <Autocomplete
                getOptionLabel={(opt) => opt.label || ""}
                isOptionEqualToValue={(opt, value) =>
                  value ? opt.value === value.value : true
                }
                options={hari}
                value={
                  data.hari.length ? (data.hari[0] ? data.hari[0] : "") : ""
                }
                onChange={(e, value) => {
                  setData((prevState) => {
                    return {
                      ...prevState,
                      hari: prevState.hari.map((data, i) => {
                        if (i === 0) return value;
                        return data;
                      }),
                    };
                  });
                }}
                renderInput={(param) => (
                  <TextField
                    {...param}
                    label="Hari ke-1"
                    variant="outlined"
                    fullWidth
                    required
                  />
                )}
              />
            </Grid>
            <Grid item sm={3} xs={12}>
              <Autocomplete
                getOptionLabel={(opt) => opt.label || ""}
                isOptionEqualToValue={(opt, value) =>
                  value ? opt.value === value.value : true
                }
                options={hari}
                value={
                  data.hari.length ? (data.hari[1] ? data.hari[1] : "") : ""
                }
                onChange={(e, value) => {
                  setData((prevState) => {
                    return {
                      ...prevState,
                      hari: prevState.hari.map((data, i) => {
                        if (i === 1) return value;
                        return data;
                      }),
                    };
                  });
                }}
                renderInput={(param) => (
                  <TextField
                    {...param}
                    label="Hari ke-2"
                    variant="outlined"
                    fullWidth
                    required
                  />
                )}
              />
            </Grid>
          </Grid>
          <Button type="submit" color="primary" variant="contained">
            Save
          </Button>
        </form>
        <div>
          <h3>Jadwal</h3>

          <Scheduler data={data.jadwal}>
            <ViewState
              currentDate={currentDate}
              onCurrentDateChange={(currentDate) => {
                setCurrentDate(currentDate);
              }}
            />
            <EditingState onCommitChanges={commitChanges} />
            <Toolbar />

            <DateNavigator />
            <TodayButton />
            <MonthView />
            <EditRecurrenceMenu />
            <Appointments />
            <AppointmentTooltip showOpenButton showDeleteButton />
            <AppointmentForm />
          </Scheduler>
        </div>
      </div>
    </>
  );
};

export default FormClass;
