import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { adminLogin } from "../slices/adminSlice";
const Protected = ({ children }) => {
  const loggedIn = useSelector((state) => state.admin.loggedIn);
  const dispatch = useDispatch();
  if (localStorage.getItem("admin")) {
    dispatch(adminLogin());
  }
  if (loggedIn) return children;
  return <Navigate to="/admin/login" />;
};

export default Protected;
