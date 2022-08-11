import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { guruLogin } from "../slices/userSlice";
const GuruRoute = ({ children }) => {
  const loggedIn = useSelector((state) => state.user.guru.loggedIn);
  const dispatch = useDispatch();
  if (localStorage.getItem("guru") && !loggedIn) {
    dispatch(guruLogin(JSON.parse(localStorage.getItem("guru"))));
  }
  if (!loggedIn) return <Navigate to="/guru/login" replace />;
  return children;
};

export default GuruRoute;
