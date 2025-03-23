import React from "react";
import LayoutGlobal from "../../atom/Layout";
import Typography from "../../atom/Typography";
import { InputAdornment, MenuItem, Select, TextField } from "@mui/material";
import InputCustom from "../../atom/Input";
import { ButtomCustom } from "../../atom/Button";
import UseResponsive from "../../../hooks/UseResponsive";

export default function Transfer({ darkMode }) {
  const {screenSizeRevamp} = UseResponsive();
    const defaultStyle = {
      margin: "40px auto",
      width: "50%",
      boxShadow: darkMode 
  ? "0px 4px 10px rgba(255, 255, 255, 0.1)" 
  : "0px 4px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "20px",
      marginTop: "25px",
    }
    const manipulateStyle = (screenSizeRevamp, defaultStyle ) => {
      let newStyle = {...defaultStyle};
      if (screenSizeRevamp.small) {
        newStyle.margin = "0";
        newStyle.width = "100%";
        newStyle.boxShadow = "none";
        newStyle.borderRadius = 0;
        newStyle.marginTop = 0;
      }
      return newStyle
    }
  const commonSelectStyles = {
    borderRadius: "8px",
     color:darkMode ? "#B0B0B0" : "rgba(0, 0, 0, 1)",
    backgroundColor: darkMode ? "#2a2a2a" : "rgba(255, 255, 255, 1)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ccc",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#aaa",
    },
    boxShadow: darkMode 
  ? "0px 4px 10px rgba(255, 255, 255, 0.1)" 
  : "0px 4px 10px rgba(0, 0, 0, 0.1)",
  };
  return (
    <LayoutGlobal
      style={{ colors: "rgba(0, 0, 0, 1)", width: manipulateStyle(screenSizeRevamp, defaultStyle).width, margin: manipulateStyle(screenSizeRevamp, defaultStyle).margin }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 29,
          padding: "54px",
          boxShadow: manipulateStyle(screenSizeRevamp, defaultStyle).boxShadow,
          borderRadius: manipulateStyle(screenSizeRevamp, defaultStyle).borderRadius,
          marginTop: manipulateStyle(screenSizeRevamp, defaultStyle).marginTop,
        }}
      >
        {/* Select */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            borderRadius: "20px",
            boxShadow: darkMode 
  ? "0px 4px 10px rgba(255, 255, 255, 0.1)" 
  : "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              backgroundColor: darkMode ? "#2a2a2a" : "rgba(255, 255, 255, 1)",
              padding: "13px 20px",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
            }}
          >
            <Typography type="label-lg" style={{ fontWeight: "bold" }} color= {darkMode ? "#B0B0B0" : "rgba(0, 0, 0, 1)"}>
              To
            </Typography>
          </div>
          <Select
            value="900782139 (Giz)"
            onChange={(e) => console.log(e)}
            displayEmpty
            fullWidth
            variant="outlined"
            sx={{
              ...commonSelectStyles,
              width: "100%",
              border: "none",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
              "& fieldset": { border: "none" },
            }}
          >
            <MenuItem value="900782139 (Giz)">900782139 (Giz)</MenuItem>
            <MenuItem value="900782140 (Giz)">900782140 (Giz)</MenuItem>
          </Select>
        </div>

        {/* Input */}
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: false,
            startAdornment: (
              <InputAdornment position="start">
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: darkMode ? "#2a2a2a" : "#7a7a7a",
                  }}
                >
                  IDR
                </Typography>
              </InputAdornment>
            ),
            sx: {
              fontSize: "24px",
              fontWeight: "bold",
                color:darkMode ? "#B0B0B0" : "rgba(0, 0, 0, 1)",
            },
          }}
          sx={{
            "& .MuiInput-underline:before": {
              borderBottomColor: "rgba(0, 0, 0, 0.2)",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "rgba(0, 0, 0, 0.5)", 
            },
            "& .MuiInputBase-input": {
              fontSize: "24px",
              fontWeight: "bold",
            },
          }}
          defaultValue="150.000,00"
        />

        {/* Balance */}
        <div style={{ display: "flex", gap: 10 }}>
          <Typography type="label-sm" style={{ fontWeight: "400" }}>
            Balance:
          </Typography>
          <Typography
            type="label-sm"
            color="rgba(38, 170, 153, 1)"
            style={{ fontWeight: "400" }}
          >
            IDR 10.000.000
          </Typography>
        </div>

        {/* Notes */}
        <div>
          <InputCustom placeholder="Notes" darkMode={darkMode} />
        </div>

        {/* Button */}

         <ButtomCustom
            color="rgba(0, 97, 255, 1)"
            padding="12px 16px"
            borderRadius="8px"
          >
            <Typography type="label-lg" color="white">
              Transfer
            </Typography>
          </ButtomCustom>
      </div>
    </LayoutGlobal>
  );
}
