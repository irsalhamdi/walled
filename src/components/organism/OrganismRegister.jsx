import React from "react";
import RightComponent from "../molecule/LoginPage/RightComponent";
import LeftComponentRegister from "../molecule/RegisterPage/LeftComponentRegister";
import UseResponsive from "../../hooks/UseResponsive";

export default function OrganismRegister({ darkMode }) {
  const {screenSizeRevamp} = UseResponsive();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
         backgroundColor: darkMode ? "#121212" : "#ffffff",
      }}
    >
      <LeftComponentRegister darkMode={darkMode} />
      {screenSizeRevamp.medium || screenSizeRevamp.small ? null : <RightComponent darkMode={darkMode} />}
    </div>
  );
}
