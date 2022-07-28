import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login } from "../slices/adminSlice";
// import { useNavigate } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <div>
        <AdminSidebar />
        <Outlet />
      </div>
    </div>
  );
};
const AdminBlankLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(login());
    }
  }, [dispatch]);
  return (
    <div>
      <AdminNavbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export { MainLayout, AdminLayout, AdminBlankLayout };
