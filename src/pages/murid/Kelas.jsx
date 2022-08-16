import styles from "../../assets/styles/User.module.scss";
import { useState, useEffect } from "react";
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  TodayButton,
  DateNavigator,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { Button, Tab, Tabs } from "@mui/material";
import { useCallback } from "react";
import axios from "axios";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Kelas = () => {
  const user = useSelector((state) => state.user.user);
  const [data, isLoading] = useFetch(`/api/kelas/${user.username}`);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tabValue, setTabValue] = useState(0);
  const [validLog, setValidLog] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [chartData, setChartData] = useState({
    labels: ["Januari", "Februari"],
    datasets: [{}],
  });

  useEffect(() => {
    if (data.jadwal)
      setValidLog(
        data.jadwal.some((kelas) =>
          kelas.startDate.includes(
            new Date("2022-08-09").toISOString().slice(0, 10)
          )
        )
      );
    setIsLogged(data.isLogged);
    if (data.statistics)
      setChartData({
        labels: data.statistics.map((item) => item.bulan),
        datasets: [
          {
            label: "kehadiran",
            borderColor: "#64b5f6",
            data: data.statistics.map((item) => item.total),
          },
        ],
      });
  }, [data]);
  const absenHandler = useCallback(async () => {
    try {
      const res = await axios.put(`/absen/${user.username}`, {
        date: new Date().toISOString().slice(0, 10),
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }
  }, [user.username]);
  const absenComponent = () => {
    if (validLog && !isLogged)
      return (
        <Button variant="contained" color="primary" onClick={absenHandler}>
          Klik untuk absen
        </Button>
      );
    else if (isLogged)
      return <div className="text-center">Kamu sudah absen hari ini</div>;
    else return <div className="text-center">Hari ini bukan jadwal kamu</div>;
  };
  return (
    <div className={styles.userContainer}>
      <h3 className="text-left">Kelas</h3>
      <Tabs
        value={tabValue}
        onChange={(e, value) => {
          setTabValue(value);
        }}
      >
        <Tab label="Jadwal" />
        <Tab label="Absen" />
      </Tabs>
      {tabValue === 0 ? (
        <Scheduler data={!isLoading ? data.jadwal : []}>
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
      ) : (
        <div className="space-y-8">
          {absenComponent()}
          {/* {validLog ? (
            <Button variant="contained" color="primary" onClick={absenHandler}>
              Klik untuk absen
            </Button>
          ) : (
            <div className="text-center">Hari ini bukan jadwal kamu</div>
          )} */}
          <div className="space-y-4">
            <h4>Statistik kehadiran</h4>
            <Line
              data={chartData}
              options={{
                responsive: true,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Kelas;
