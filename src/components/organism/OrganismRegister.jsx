import React from "react";
import RightComponent from "../molecule/LoginPage/RightComponent";
import LeftComponentRegister from "../molecule/RegisterPage/LeftComponentRegister";

export default function OrganismRegister() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <LeftComponentRegister />
      <RightComponent />
    </div>
  );
}
