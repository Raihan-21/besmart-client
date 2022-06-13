import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import { AdminLayout, MainLayout } from "./layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/admin/" element={<AdminLayout />}>
            <Route path="login" element={<AdminLogin />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
