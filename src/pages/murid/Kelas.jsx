import styles from "../../assets/styles/Murid.module.scss";
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
const Kelas = () => {
  const user = useSelector((state) => state.user.user);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [data, isLoading] = useFetch(`/kelas/${user.username}`);
  return (
    <div className={styles.muridContainer}>
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
    </div>
  );
};

export default Kelas;
