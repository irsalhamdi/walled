import React from "react";
import LeftComponent from "../molecule/LoginPage/LeftComponent";
import RightComponent from "../molecule/LoginPage/RightComponent";
import UseResponsive from "../../hooks/UseResponsive";

export default function OrganismLogin({ darkMode }) {
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
      <LeftComponent darkMode={darkMode}/>
      {screenSizeRevamp.medium || screenSizeRevamp.small ? null : <RightComponent darkMode={darkMode} />}
    </div>
  );
}
