import { MenuItem, Select } from "@mui/material";
import styled from "styled-components";

export const CustomSelectQDS = styled(Select)(({ customWidth, customHeight, customMinWidth }) => ({
  minWidth: customMinWidth ? customMinWidth : "100px",
  width: customWidth ? customWidth : "100%",
  fontFamily: "BriDigitalText !important",
  height: customHeight ? customHeight : "44px",
  gap: "8px",
  fontSize: "14px",
  borderRadius: "8px",
  "& .MuiSelect-outlined": {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    justifyContent: "start",
  },
  "& .MuiSelect-icon": {
    color: "#777777",
    paddingLeft: "1px",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #B5B6B6",
  },
  "& .MuiSelect-select": {
    paddingRight: "28px",
  },
}));

export const createMenuPropsQDS = (menuWidth = "194px") => ({
  PaperProps: {
    sx: {
      width: menuWidth,
      justifySelf: "end",
      fontFamily: "BriDigitalText",
      padding: "16px",
      marginTop: "12px",
      borderRadius: "8px",
      boxShadow: " 0px 4px 10px 0px #7777771A",
      border: "1px solid #EAEBEB",
      backgroundColor: "#fff",
      overflow: "scroll",
      scrollbarWidth: "none",
    },
  },
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "right",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "right",
  },
  sx: {
    transform: "translateX(-2px)",
  },
  MenuListProps: {
    sx: {
      gap: "4px",
      padding: "0px",
      display: "flex",
      maxHeight: "250px",
      fontFamily: "BriDigitalText",
      overflow: "auto",
      flexDirection: "column",
    },
  },
});

export const MenuItemQDS = styled(MenuItem)({
  gap: "8px",
  fontWeight: 400,
  fontSize: "14px",
  fontFamily: "BriDigitalText !important",
  borderRadius: "4px",
  color: "#292929",
  "&:hover": {
    backgroundColor: "#DDEFFC",
  },
  "&.Mui-selected": {
    backgroundColor: "#DDEFFC",
    color: "#1078CA",
    fontWeight: 600,
  },
  ".MuiTypography-root": {
    fontFamily: "BriDigitalText !important",
    fontSize: "14px",
  },
});
