import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../slices/userSlice";
const MuridRoute = ({ children }) => {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const dispatch = useDispatch();
  if (localStorage.getItem("user") && !loggedIn) {
    console.log(JSON.parse(localStorage.getItem("user")));
    dispatch(login(JSON.parse(localStorage.getItem("user"))));
  }
  if (!loggedIn) return <Navigate to="/login" replace />;
  return children;
};

export default MuridRoute;
