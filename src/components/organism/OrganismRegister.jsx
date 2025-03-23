import React from "react";
import RightComponent from "../molecule/LoginPage/RightComponent";
import LeftComponentRegister from "../molecule/RegisterPage/LeftComponentRegister";
import UseResponsive from "../../hooks/UseResponsive";
import useDarkMode from "../../zustand/useDarkmode";

export default function OrganismRegister() {
  const {screenSizeRevamp} = UseResponsive();
  const {darkMode} = useDarkMode();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#121212" : "#ffffff",
      }}
    >
      <LeftComponentRegister darkMode={darkMode} />
      {screenSizeRevamp.medium || screenSizeRevamp.small ? null : <RightComponent darkMode={darkMode} />}
    </div>
  );
}
