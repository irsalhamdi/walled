import React, { useState } from "react";
import { AppBar, IconButton, Toolbar, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu, NightlightRound, WbSunny } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import UseResponsive from "../../../hooks/UseResponsive";

export default function NavbarCustom({ darkMode, setDarkMode }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const {screenSizeRevamp} = UseResponsive();

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Transfer", path: "/transfer" },
    { label: "Topup", path: "/topup" },
    { label: "Sign Out", path: "/login" },
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: darkMode ? "#1e1e1e" : "white",
        boxShadow: "none",
        color: darkMode ? "white" : "black",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", width: "100px" }}>
          <img src="/image/logo.svg" alt="logo" style={{ width: "100%" }} />
        </div>
        {screenSizeRevamp.small || screenSizeRevamp.medium ? (
          <>
            <IconButton onClick={() => setOpenDrawer(true)} sx={{ color: darkMode ? "white" : "black" }}>
              <Menu />
            </IconButton>
            <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
              <List sx={{ width: 200, backgroundColor: darkMode ? "#1e1e1e" : "white", color: darkMode ? "white" : "black" }}>
                {menuItems.map(({ label, path }) => (
                  <ListItem button key={label} component={NavLink} to={path} onClick={() => setOpenDrawer(false)}>
                    <ListItemText primary={label} />
                  </ListItem>
                ))}
                <ListItem button onClick={() => setDarkMode(!darkMode)}>
                  <ListItemText primary={darkMode ? "Light Mode" : "Dark Mode"} />
                  {darkMode ? <WbSunny /> : <NightlightRound />}
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
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
        )}
      </Toolbar>
    </AppBar>
  );
}