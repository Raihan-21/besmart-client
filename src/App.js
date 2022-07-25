import { ThemeProvider, createTheme } from "@mui/material";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import "./assets/styles/icon.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminBlankLayout, AdminLayout, MainLayout } from "./layout/Layout";
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
              <Route path="/kelas" element={<Classes />} />
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
            </Route>
            <Route path="/admin/" element={<AdminBlankLayout />}>
              <Route path="login" element={<AdminLogin />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
