import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Search } from "@mui/icons-material";

import { convertUsds2, loadingSkeleton } from "./helper.js";
import { styles } from "../../../styles/index.js";
import UiDataEmpty from "../UiEmpty/index.jsx";
import PaginationExample from "../Pagination/index.jsx";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { format } from "date-fns";
import UseResponsive from "../../../hooks/UseResponsive.jsx";
import Typography from "../Typography/index.jsx";

const MerchantTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    borderColor: "red",
    textAlign: "center",
    border: "1px solid #EDEDED !important",
    color: "#252B42",
    fontFamily: "WalledRegular",
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "white",
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontFamily: "WalledRegular",
    border: "1px solid #EDEDED !important",
    color: "#777777",
    whiteSpace: "nowrap",
  },
  "&.MuiTableCell-root": {
    borderWidth: "0px 1px 1px 0px",
    borderStyle: "solid",
    borderColor: "#EAEBEB",
  },
}));

const optionPagination = [10, 20, 50, 100];

const TableCustom = (props) => {
  const {
    data,
    columns,
    page,
    rowsPerPage,
    prevDisabled,
    onClickPrev,
    nextDisabled,
    onClickNext,
    onChangeRowsPerPage,
    total_items,
    darkMode,
  } = props;

  const { screenSizeRevamp } = UseResponsive();
  const defaultStyle = {
    flexWrap: "nowrap",
    gap: 0,
    widthFilter: "auto",
  };
  const manipulateStyle = (screenSizeRevamp, defaultStyle) => {
    let newStyle = { ...defaultStyle };
    if (screenSizeRevamp.medium) {
      newStyle.flexWrap = "wrap";
      newStyle.gap = 20;
      newStyle.widthFilter = "40%";
    }
    return newStyle;
  };

  const isLoadingDataFetch = {
    dataTable: false,
  };

  const handleChangeRowsPerPage = (e) => {
    console.log(e);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const manipulateColumnData = (row, value, isLoading, fullValue) => {
    let newValue = value;
    if (row === "amount") {
      newValue = `IDR ${convertUsds2(value)}`;
    }
    if (row === "fromTo") {
      newValue = `${fullValue.from} ${fullValue.to}`;
    }
    if (row === "date_time") {
      newValue = formatDate(value);
    }
    return loadingSkeleton(isLoading, newValue);
  };

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = Math.min(page * rowsPerPage, total_items);

  const formatDate = (isoDate) => {
    return format(new Date(isoDate), "HH:mm - dd MMMM yyyy");
  };

  const commonTextFieldStyles = {
    fontFamily: "WalledRegular",
    borderRadius: "8px",
    boxShadow: "0px 0px 5px rgba(91, 91, 91, 0.1)",
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      backgroundColor: darkMode ? "#333" : "white",
      color: darkMode ? "#e0e0e0" : "black",
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

  const commonSelectStyles = {
    borderRadius: "8px",
    backgroundColor: darkMode ? "#333" : "white",
    color: darkMode ? "#e0e0e0" : "black",
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
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
          flexWrap: manipulateStyle(screenSizeRevamp, defaultStyle).flexWrap,
          gap: manipulateStyle(screenSizeRevamp, defaultStyle).gap,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            width: manipulateStyle(screenSizeRevamp, defaultStyle).widthFilter,
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search"
            fullWidth
            sx={commonTextFieldStyles}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            width: manipulateStyle(screenSizeRevamp, defaultStyle).widthFilter,
          }}
        >
          <Typography
            style={{ display: "flex", alignItems: "center" }}
            color={darkMode ? "#B0B0B0" : "rgba(0, 0, 0, 1)"}
          >
            Show
          </Typography>
          <Select
            value="Last 10 transactions"
            onChange={(e) => console.log(e)}
            displayEmpty
            fullWidth
            variant="outlined"
            sx={commonSelectStyles}
            // IconComponent={<></>} // Custom icon
          >
            <MenuItem value="Last 10 transactions">
              Last 10 transactions
            </MenuItem>
            <MenuItem value="Last 20 transactions">
              Last 20 transactions
            </MenuItem>
            <MenuItem value="Last 30 transactions">
              Last 30 transactions
            </MenuItem>
          </Select>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            alignItems: "center",
            width: manipulateStyle(screenSizeRevamp, defaultStyle).widthFilter,
          }}
        >
          <Typography
            style={{ display: "flex", alignItems: "center" }}
            color={darkMode ? "#B0B0B0" : "rgba(0, 0, 0, 1)"}
          >
            Sort
          </Typography>
          <Typography
            style={{ display: "flex", alignItems: "center" }}
            color={darkMode ? "#B0B0B0" : "rgba(0, 0, 0, 1)"}
          >
            By
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              slotProps={{
                textField: {
                  variant: "outlined",
                  sx: { ...commonTextFieldStyles, maxWidth: "180px" },
                },
              }}
            />
          </LocalizationProvider>
        </div>
        <div>
          <Select
            value="Assending"
            onChange={(e) => console.log(e)}
            displayEmpty
            fullWidth
            variant="outlined"
            sx={{ ...commonSelectStyles, width: "max-content" }}
            // IconComponent={<></>} // Custom icon
          >
            <MenuItem value="Assending">Assending</MenuItem>
            <MenuItem value="Descending">Descending</MenuItem>
          </Select>
        </div>
      </div>
      {data?.length > 0 ? (
        <>
          <TableContainerCustome>
            <Table sx={{ overflowX: "scroll" }}>
              <TableHead>
                <TableRow>
                  {columns.map((data, i) => (
                    <MerchantTableCell key={i}>
                      <div title={"column"} style={{ minWidth: "max-content" }}>
                        <Typography
                          color={darkMode ? "#B0B0B0" : "rgba(0, 0, 0, 1)"}
                        >
                          {loadingSkeleton(
                            isLoadingDataFetch.dataTable,
                            data.name
                          )}
                        </Typography>
                      </div>
                    </MerchantTableCell>
                  ))}
                </TableRow>
              </TableHead>
              {data?.length > 0 && (
                <TableBody>
                  {data.map((row, i) => (
                    <TableRow
                      key={i}
                      title="row"
                      sx={{
                        backgroundColor: darkMode
                          ? i % 2 === 0
                            ? "#1e1e1e"
                            : "#2a2a2a"
                          : i % 2 === 0
                          ? "#EDEDED"
                          : "white",
                        color: darkMode
                          ? i % 2 === 0
                            ? "#E5E5E5"
                            : "#CCCCCC"
                          : i % 2 === 0
                          ? "white"
                          : "#333333",
                      }}
                    >
                      {columns
                        ?.filter((column) => column.id !== "no")
                        .map((column, j) => (
                          <MerchantTableCell
                            key={j}
                            sx={{ textAlign: "center" }}
                          >
                            {manipulateColumnData(
                              column.id,
                              row[column.id],
                              isLoadingDataFetch.dataTable,
                              row
                            )}
                          </MerchantTableCell>
                        ))}
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainerCustome>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "start",
              alignItems: "center",
              gap: "16px",
              padding: "20px 0",
            }}
          >
            <PaginationExample />
          </Box>
        </>
      ) : (
        <div style={{ marginTop: "24px" }}>
          <UiDataEmpty
            title="Data Tidak Ditemukan"
            message="Data yang anda cari tidak ditemukan"
            style={{ textAlign: "center" }}
          />
        </div>
      )}
    </>
  );
};

export default TableCustom;

export const TableContainerCustome = styled(TableContainer)(() => ({
  borderRadius: "0",
}));

export const ContainerPagination = styled(Stack)(() => ({
  marginBottom: styles.padding.medium,
  paddingTop: "20px",
}));
