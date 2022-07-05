import { ThemeProvider, createTheme } from "@mui/material";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import { AdminLayout, MainLayout } from "./layout/Layout";
import Home from "./pages/Home";
import AdminMurid from "./pages/AdminMurid";
import AdminDashboard from "./pages/AdminDashboard";
import AdminGuru from "./pages/AdminGuru";

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
            </Route>
            <Route path="/admin/" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="login" element={<AdminLogin />} />
              <Route path="murid" element={<AdminMurid />} />
              <Route path="guru" element={<AdminGuru />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
