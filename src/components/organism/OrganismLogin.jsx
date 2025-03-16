import React from "react";
import LeftComponent from "../molecule/LoginPage/LeftComponent";
import RightComponent from "../molecule/LoginPage/RightComponent";

export default function OrganismLogin() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    > 
      <LeftComponent />
      <RightComponent />
    </div>
  );
}
