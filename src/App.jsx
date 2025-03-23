import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import DashboardPage from "@/pages/DashboardPage.jsx";
import TransferPage from "@/pages/TransferPage.jsx";
import TopupPage from "@/pages/TopupPage.jsx";
import LoginPage from "@/pages/Login.jsx";
import RegisterPage from "@/pages/Register.jsx";
import NavbarCustom from "@/components/atom/Navbar";

function Layout() {
  return (
    <div style={{ backgroundColor: "#F8FAFD" }}>
      <NavbarCustom />
      <Outlet />
    </div>
  );
}

function App() {

  return (
    <Router>
      <Routes>
        {/* Halaman dengan Navbar */}
        <Route element={<Layout/>}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/transfer" element={<TransferPage/>} />
          <Route path="/topup" element={<TopupPage/>} />
        </Route>

        {/* Halaman Login & Register */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
