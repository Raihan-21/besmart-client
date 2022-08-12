import styles from "../../assets/styles/User.module.scss";
import { useState } from "react";
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  TodayButton,
  DateNavigator,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
// import { Button } from "@mui/material";
// import { useCallback } from "react";
// import axios from "axios";
const KelasGuru = () => {
  const guru = useSelector((state) => state.user.guru);
  const [data, isLoading] = useFetch(`/api/guru/kelas/${guru.username}`);
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <div className={styles.userContainer}>
      <h3 className="text-left">Kelas</h3>

      <Scheduler data={!isLoading ? data : []}>
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={(date) => setCurrentDate(date)}
        />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <MonthView />
        <Appointments />
        <AppointmentTooltip />
      </Scheduler>

      {/* <div className="space-y-8">
          {absenComponent()}
          {validLog ? (
            <Button variant="contained" color="primary" onClick={absenHandler}>
              Klik untuk absen
            </Button>
          ) : (
            <div className="text-center">Hari ini bukan jadwal kamu</div>
          )}
          <div className="space-y-4">
            <h4>Statistik kehadiran</h4>
            <Line
              data={chartData}
              options={{
                responsive: true,
              }}
            />
          </div>
        </div> */}
    </div>
  );
};

export default KelasGuru;
