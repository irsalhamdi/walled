import React from "react";
import RightComponent from "../molecule/LoginPage/RightComponent";
import LeftComponentRegister from "../molecule/RegisterPage/LeftComponentRegister";
import UseResponsive from "../../hooks/UseResponsive";

export default function OrganismRegister() {
  const {screenSizeRevamp} = UseResponsive();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <LeftComponentRegister />
      {screenSizeRevamp.medium || screenSizeRevamp.small ? null : <RightComponent />}
    </div>
  );
}
