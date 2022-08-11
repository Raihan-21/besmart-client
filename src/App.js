import { ThemeProvider, createTheme } from "@mui/material";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.scss";
import "./assets/styles/icon.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  AdminBlankLayout,
  AdminLayout,
  GuruBlankLayout,
  GuruLayout,
  MainLayout,
  MuridLayout,
} from "./layout/Layout";
import Home from "./pages/Home";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminMurid from "./pages/admin/murid/AdminMurid";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminGuru from "./pages/admin/guru/AdminGuru";
import EditGuru from "./pages/admin/guru/EditGuru";
import EditMurid from "./pages/admin/murid/EditMurid";
import AddMurid from "./pages/admin/murid/AddMurid";
import AddGuru from "./pages/admin/guru/AddGuru";
import AdminNews from "./pages/admin/news/AdminNews";
import EditNews from "./pages/admin/news/EditNews";
import AddNews from "./pages/admin/news/AddNews";
import Protected from "./components/Protected";
import Classes from "./pages/Classes";
import Dashboard from "./pages/murid/Dashboard";
import MuridRoute from "./components/MuridRoute";
import Kagetori from "./pages/admin/kategori/Kategori";
import AddKategori from "./pages/admin/kategori/AddKategori";
import EditKategori from "./pages/admin/kategori/EditKategori";
import Class from "./pages/admin/kelas/Class";
import AddClass from "./pages/admin/kelas/AddClass";
import EditClass from "./pages/admin/kelas/EditClass";
import Profil from "./pages/murid/Profil";
import Kelas from "./pages/murid/Kelas";
import GuruRoute from "./components/GuruRoute";
import GuruLogin from "./pages/GuruLogin";

function App() {
  const theme = createTheme({
    palette: {
      danger: "red",
    },
  });
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="kelas" element={<Classes />} />
            </Route>
            <Route
              path="/murid/"
              element={
                <MuridRoute>
                  <MuridLayout />
                </MuridRoute>
              }
            >
              <Route
                index
                element={<Navigate to="/murid/dashboard" replace />}
              />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profil" element={<Profil />} />
              <Route path="kelas" element={<Kelas />} />
            </Route>
            <Route
              path="/guru/"
              element={
                <GuruRoute>
                  <GuruLayout />
                </GuruRoute>
              }
            >
              <Route index element={<Navigate to="dashboard"></Navigate>} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/guru/" element={<GuruBlankLayout />}>
              <Route index element={<Navigate to="login" replace />} />
              <Route path="login" element={<GuruLogin />} />
            </Route>
            <Route
              path="/admin/"
              element={
                <Protected>
                  <AdminLayout />
                </Protected>
              }
            >
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="murid" element={<AdminMurid />} />
              <Route path="murid/tambah" element={<AddMurid />} />
              <Route path="murid/:id" element={<EditMurid />} />
              <Route path="guru" element={<AdminGuru />} />
              <Route path="guru/tambah" element={<AddGuru />} />
              <Route path="guru/:id" element={<EditGuru />} />
              <Route path="berita" element={<AdminNews />} />
              <Route path="berita/tambah" element={<AddNews />} />
              <Route path="berita/:slug" element={<EditNews />} />
              <Route path="kategori" element={<Kagetori />} />
              <Route path="kategori/tambah" element={<AddKategori />} />
              <Route path="kategori/:id" element={<EditKategori />} />
              <Route path="kelas" element={<Class />} />
              <Route path="kelas/tambah" element={<AddClass />} />
              <Route path="kelas/:id" element={<EditClass />} />
            </Route>
            <Route path="/admin/" element={<AdminBlankLayout />}>
              <Route index element={<Navigate to="login" replace />} />
              <Route path="login" element={<AdminLogin />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
