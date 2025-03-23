import React from "react";

export default function RightComponent() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", position: "relative" }}>
      <img
        src="/image/image-login.svg"
        alt="login"
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "auto",
          filter: "brightness(0.8) contrast(1.1)",
        }}
      />
    </div>
  );
}
