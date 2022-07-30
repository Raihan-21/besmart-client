import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../slices/userSlice";
const MuridRoute = ({ children }) => {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const dispatch = useDispatch();
  if (localStorage.getItem("user")) dispatch(login());
  if (!loggedIn) return <Navigate to="/login" replace />;
  return children;
};

export default MuridRoute;
