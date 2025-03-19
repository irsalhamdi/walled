import React from "react";
import LayoutGlobal from "../../atom/Layout";
import Typography from "../../atom/Typography";
import { InputAdornment, MenuItem, Select, TextField } from "@mui/material";
import InputCustom from "../../atom/Input";
import { ButtomCustom } from "../../atom/Button";
import UseResponsive from "../../../hooks/UseResponsive";

export default function Transfer() {
  const {screenSizeRevamp} = UseResponsive();
    const defaultStyle = {
      margin: "40px auto",
      width: "50%",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
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
    backgroundColor: "rgba(250, 251, 253, 1)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ccc",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#aaa",
    },
    boxShadow: "0px 0px 5px rgba(91, 91, 91, 0.1)",
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
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(237, 237, 237, 1)",
              padding: "13px 20px",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
            }}
          >
            <Typography type="label-lg" style={{ fontWeight: "bold" }}>
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
                    color: "#7A7A7A",
                  }}
                >
                  IDR
                </Typography>
              </InputAdornment>
            ),
            sx: {
              fontSize: "24px",
              fontWeight: "bold",
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
          <InputCustom placeholder="Notes" />
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
