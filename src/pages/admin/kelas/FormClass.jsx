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
const appointments = [
  {
    title: "hari 1",
    startDate: new Date(2022, 7, 1, 9, 45),
    endDate: new Date(2022, 7, 1, 11, 0),
    id: 0,
  },
];
const FormClass = ({ formData, onSubmit }) => {
  const [data, setData] = useState({});
  const [currentDate, setCurrentDate] = useState(new Date());
  const [appointData, setAppointData] = useState(appointments);
  //eslint-disable-next-line
  const [guru, guruLoading] = useFetch("/admin/guru");
  //eslint-disable-next-line
  const [kategori, kategoriLoading] = useFetch("/admin/kategori");
  const commitChanges = useCallback(
    ({ added, changed }) => {
      let currentData = [...appointData];
      if (added) {
        const startingAddedId =
          appointData.length > 0
            ? appointData[appointData.length - 1].id + 1
            : 0;
        currentData = [...currentData, { id: startingAddedId, ...added }];
      }
      if (changed) {
        currentData = currentData.map((appointments) =>
          changed[appointments.id]
            ? { ...appointments, ...changed[appointments.id] }
            : appointments
        );
      }
      setAppointData(currentData);
    },
    [appointData]
  );
  useEffect(() => {
    setData(formData);
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
          <Grid container columnSpacing={2}>
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

          <Scheduler data={appointData}>
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
