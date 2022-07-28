import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../slices/adminSlice";
const Protected = ({ children }) => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(login());
    }
  }, [dispatch, loggedIn]);

  if (loggedIn) return children;
  return <Navigate to="/admin/login" />;
};

export default Protected;
