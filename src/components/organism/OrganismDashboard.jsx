import React from "react";
import DashboardComponent from "../molecule/DashboardPage/DashboardComponent";
import useDarkMode from "../../zustand/useDarkmode";

export default function OrganismDashboard() {
  const { darkMode } = useDarkMode();
  return (
    <div
      style={{
        padding: "20px 0 50px 0",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#121212" : "#ffffff",
      }}
    >
      <DashboardComponent darkMode={darkMode} />
    </div>
  );
}
