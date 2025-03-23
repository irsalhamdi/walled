import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import DashboardPage from "@/pages/DashboardPage.jsx";
import TransferPage from "@/pages/TransferPage.jsx";
import TopupPage from "@/pages/TopupPage.jsx";
import LoginPage from "@/pages/Login.jsx";
import RegisterPage from "@/pages/Register.jsx";
import NavbarCustom from "@/components/atom/Navbar";

function Layout({ darkMode, setDarkMode }) {
  return (
    <div style={{ backgroundColor: "#F8FAFD" }}>
      <NavbarCustom darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet />
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Halaman dengan Navbar */}
        <Route element={<Layout darkMode={darkMode} setDarkMode={setDarkMode} />}>
          <Route path="/" element={<DashboardPage darkMode={darkMode} />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/topup" element={<TopupPage />} />
        </Route>

        {/* Halaman Login & Register */}
        <Route path="/login" element={<LoginPage darkMode={darkMode} />} />
        <Route path="/register" element={<RegisterPage darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
