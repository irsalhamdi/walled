import React from "react";
import LeftComponent from "../molecule/LoginPage/LeftComponent";
import RightComponent from "../molecule/LoginPage/RightComponent";
import UseResponsive from "../../hooks/UseResponsive";
import useDarkMode from "../../zustand/useDarkmode";

export default function OrganismLogin() {
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
      <LeftComponent darkMode={darkMode}/>
      {screenSizeRevamp.medium || screenSizeRevamp.small ? null : <RightComponent darkMode={darkMode} />}
    </div>
  );
}
