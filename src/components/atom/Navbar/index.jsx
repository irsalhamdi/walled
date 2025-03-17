import React from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { NightlightRound, WbSunny } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function NavbarCustom({ darkMode, setDarkMode}) {
  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Transfer", path: "/transfer" },
    { label: "Topup", path: "/topup" },
    { label: "Sign Out", path: "/login" },
  ];

  return (
    <AppBar position="static" elevation={0}  sx={{
        backgroundColor: darkMode ? "#1e1e1e" : "white",
        boxShadow: "none",
        color: darkMode ? "white" : "black",
      }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 1, width: "100px" }}>
          <img src="/image/logo.svg" alt="logo" style={{ width: "100%" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 60 }}>
          {menuItems.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              style={({ isActive }) => ({
                color: isActive ? "blue" : "inherit",
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: "none",
                cursor: "pointer",
              })}
            >
              {label}
            </NavLink>
          ))}
           <IconButton onClick={() => setDarkMode(!darkMode)} sx={{ color: darkMode ? "orange" : "black" }}>
            {darkMode ? <WbSunny /> : <NightlightRound />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
