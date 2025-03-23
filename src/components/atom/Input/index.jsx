import { TextField } from "@mui/material";
import React from "react";

export default function InputCustom({
  placeholder,
  darkMode,
  name = "",
  value = "",
  onChange = () => {},
}) {
  const commonTextFieldStyles = {
    fontFamily: "WalledRegular",
    boxShadow: "0px 0px 5px rgba(91, 91, 91, 0.1)",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      backgroundColor: darkMode ? "#333" : "white",
      color: darkMode ? "#B0B0B0" : "rgba(0, 0, 0, 1)",
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "#ccc",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#aaa",
      },
    },
  };
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      fullWidth
      sx={commonTextFieldStyles}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
