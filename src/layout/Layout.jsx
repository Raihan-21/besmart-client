import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
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
      <div>
        <AdminSidebar />
        <Outlet />
      </div>
    </div>
  );
};

export { MainLayout, AdminLayout };
