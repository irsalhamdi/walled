import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { WbSunny } from "@mui/icons-material";
import Typography from "../Typography";

export default function NavbarCustom() {
  const menuItems = ["Dashboard", "Transfer", "Topup", "Sign Out"];
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{ display: "flex", alignItems: "center", gap: 1, width: "100px" }}
        >
          <img src="/image/logo.svg" alt="logo" style={{ width: "100%" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 60 }}>
          {menuItems.map((item) => (
            <Typography
              key={item}
              color="rgba(0, 0, 0, 1)"
              style={{ cursor: "pointer" }}
            >
              {item}
            </Typography>
          ))}
          <div style={{ borderLeft: "1px solid #ddd", paddingLeft:"10px", height: "24px" }}>
            <WbSunny sx={{ color: "orange" }} />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
