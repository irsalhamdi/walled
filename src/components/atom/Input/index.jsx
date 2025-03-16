import { TextField } from "@mui/material";
import React from "react";

export default function InputCustom({placeholder}) {
  const commonTextFieldStyles = {
    fontFamily: "WalledRegular",
    boxShadow: "0px 0px 5px rgba(91, 91, 91, 0.1)",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      backgroundColor: "rgba(250, 251, 253, 1)",
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
    />
  );
}
