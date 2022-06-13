import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import Navbar from "../components/Navbar";

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
      <Outlet />
    </div>
  );
};

export { MainLayout, AdminLayout };
