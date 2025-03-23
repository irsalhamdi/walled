import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";
import { Menu, NightlightRound, WbSunny } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import UseResponsive from "../../../hooks/UseResponsive";
import Typography from "../Typography";

export default function NavbarCustom({ darkMode, setDarkMode }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { screenSizeRevamp } = UseResponsive();
  const location = useLocation();
  const hideProfile = location.pathname === "/";
  console.log(hideProfile, "cek hideProfile");

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Transfer", path: "/transfer" },
    { label: "Topup", path: "/topup" },
    { label: "Sign Out", path: "/login" },
  ];

  const formatPath = (pathname) => {
    if (pathname === "/") return "Dashboard";

    const lastSegment = pathname.split("/").filter(Boolean).pop();
    const mapping = {
      topup: "Top Up",
      transfer: "Transfer",
    };

    return (
      mapping[lastSegment] ||
      lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
    );
  };

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
        {screenSizeRevamp.small && hideProfile ? (
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                border: "5px solid rgba(0, 97, 255, 1)",
                borderRadius: "50%",
              }}
            >
              <Avatar src="/image/image-user.svg" alt="Chelsea Immanuela" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography type="label-sm" style={{ fontWeight: "bold" }}>
                Chelsea Immanuela
              </Typography>
              <Typography
                type="label-xs"
                style={{ fontFamily: "WalledRegular" }}
              >
                Personal Account
              </Typography>
            </div>
          </div>
        ) : (
          <div
            style={{ display: "flex", alignItems: "center", width: "100px" }}
          >
            <img
              src="/image/logo.svg"
              alt="logo"
              style={{ width: "100%", filter: darkMode ? "invert(1)" : "none" }}
            />
          </div>
        )}

        {screenSizeRevamp.small ? (
          <>
            {!hideProfile && <p>{formatPath(location.pathname)}</p>}
            <IconButton
              onClick={() => setOpenDrawer(true)}
              sx={{ color: darkMode ? "white" : "black" }}
            >
              <Menu />
            </IconButton>
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              PaperProps={{
                sx: {
                  backgroundColor: darkMode ? "#121212" : "#fff",
                  color: darkMode ? "#E0E0E0" : "#000",
                },
              }}
            >
              <List
                sx={{
                  width: 200,
                  backgroundColor: darkMode ? "#1e1e1e" : "white",
                  color: darkMode ? "white" : "black",
                }}
              >
                {menuItems.map(({ label, path }) => (
                  <ListItem
                    button
                    key={label}
                    component={NavLink}
                    to={path}
                    onClick={() => setOpenDrawer(false)}
                  >
                    <ListItemText primary={label} />
                  </ListItem>
                ))}
                <ListItem button onClick={() => setDarkMode(!darkMode)}>
                  <ListItemText
                    primary={darkMode ? "Light Mode" : "Dark Mode"}
                  />
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
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              sx={{ color: darkMode ? "orange" : "black" }}
            >
              {darkMode ? <WbSunny /> : <NightlightRound />}
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
