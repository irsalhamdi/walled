import React, { useState } from "react";
import Container from "../../atom/Container";
import LayoutGlobal from "../../atom/Layout";
import Typography from "../../atom/Typography";
import { RemoveRedEyeOutlined, AddSharp, SendSharp } from "@mui/icons-material";
import { convertUsds2, dataTable } from "../../atom/Table/helper";
import { ButtomCustom } from "../../atom/Button";
import UseResponsive from "../../../hooks/UseResponsive";
import HistoryComponent from "../HistoryCard/HistoryComponent";
import TableCustom from "../../atom/Table";
import { Avatar } from "@mui/material";

export default function DashboardComponent() {
  const {screenSizeRevamp} = UseResponsive();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  console.log(screenSizeRevamp, "cek screen size new");

  const defaultStyle = {
    alignItemsProfile: "center",
    justifyContentProfile: "space-between",
    displayProfil: "flex",
    flexDirectionAccount: "row",
    gapRekening: 46,
    flexDirectionAccountBlue: "column",
    paddingAccountBlue: "30px",
    boxShadowAccountBlue: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    justifyContentAccountBlue: "center",
    borderRadiusAcccountWhite: "20px",
    paddingAccountWhite: "30px",
    widthAccountWhite: "100%",
    boxShadowAccountWhite: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    flexDirectionButtonBlue: "row",
    marginTopButtonBlue: "0",
  }

  const customStyle = (screenSizeRevamp, defaultStyle) => {
    let newStyle = {...defaultStyle};
    if (screenSizeRevamp.small) {
      newStyle.alignItemsProfile = "start";
      newStyle.justifyContentProfile = "start";
      newStyle.displayProfil = "none";
      newStyle.flexDirectionAccount = "column";
      newStyle.gapRekening = 20;
      newStyle.flexDirectionAccountBlue = "row";
      newStyle.paddingAccountBlue = "15px";
      newStyle.boxShadowAccountBlue = "none";
      newStyle.borderRadiusAcccountWhite = "10px";
      newStyle.paddingAccountWhite = "15px";
      newStyle.widthAccountWhite = "auto";
      newStyle.boxShadowAccountWhite = "none";
      newStyle.justifyContentAccountBlue = "space-between";
      newStyle.flexDirectionButtonBlue = "column";
      newStyle.marginTopButtonBlue = "20px";
    }
    return newStyle;
  }

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
  };

  const handlePrevPage = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = (page) => {
    setCurrentPage(page);
  };

  const headerTable = [
    {
      id: "date_time",
      width: "auto",
      position: "center",
      name: "Data & Time",
    },
    {
      id: "type",
      width: "auto",
      position: "center",
      name: "Type",
    },
    {
      id: "fromTo",
      width: "auto",
      position: "center",
      name: "From / To",
    },
    {
      id: "description",
      width: "auto",
      position: "center",
      name: "Description",
    },
    {
      id: "amount",
      width: "auto",
      position: "center",
      name: "Amount",
    },
  ];
  return (
    <Container>
      <LayoutGlobal style={{ marginBottom: "40px", colors: "rgba(0, 0, 0, 1)", maxWidth: "100%" }}>
        {/* Profile */}
        <div
          style={{
            display: "flex",
            alignItems: customStyle(screenSizeRevamp, defaultStyle).alignItemsProfile,
            flexDirection: "row",
            justifyContent: customStyle(screenSizeRevamp, defaultStyle).justifyContentProfile,
            gap: 11,
            paddingTop: "20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Typography type="title-xl" style={{ fontWeight: "bold" }}>
              Good Morning, Chelsea
            </Typography>
            <Typography type="body-lg">
              Check all your incoming and outgoing transactions here
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 23,
              justifyContent: "end",
              alignItems: "center",
              textAlign: "right",
            }}
          >
            {screenSizeRevamp.small ? (
              <img src="/image/sun-dashboard.svg" alt="sun-dashboard" />
            ): (
              <>
              <div style={{ display: customStyle(screenSizeRevamp, defaultStyle).displayProfil, flexDirection: "column" }}>
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
              <div
                style={{
                  border: "5px solid rgba(0, 97, 255, 1)",
                  borderRadius: "50%",
                }}
              >
                <Avatar src="/image/image-user.svg" alt="Chelsea Immanuela" />
              </div>
            </>
            )}
          </div>
        </div>

        {/* Rekening */}
        <div
          style={{
            display: "flex",
            flexDirection: customStyle(screenSizeRevamp, defaultStyle).flexDirectionAccount,
            gap: customStyle(screenSizeRevamp, defaultStyle).gapRekening,
            marginTop: "15px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 97, 255, 1)",
              display: "flex",
              flexDirection: customStyle(screenSizeRevamp, defaultStyle).flexDirectionAccountBlue,
              gap: 12,
              padding: customStyle(screenSizeRevamp, defaultStyle).paddingAccountBlue,
              borderRadius: "20px",
              color: "white",
              boxShadow: customStyle(screenSizeRevamp, defaultStyle).boxShadowAccountBlue,
              justifyContent: customStyle(screenSizeRevamp, defaultStyle).justifyContentAccountBlue
            }}
          >
            <Typography type="body-lg">AccountNo</Typography>
            <Typography type="body-lg">100899</Typography>
          </div>
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: customStyle(screenSizeRevamp, defaultStyle).paddingAccountWhite,
              borderRadius: customStyle(screenSizeRevamp, defaultStyle).borderRadiusAcccountWhite,
              color: "white",
              width: customStyle(screenSizeRevamp, defaultStyle).widthAccountWhite,
              boxShadow: customStyle(screenSizeRevamp, defaultStyle).boxShadowAccountWhite,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: "rgba(0, 0, 0, 1)",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex",  flexDirection: "column",justifyContent: "space-between", width: "auto",}}>
               <div>
                  <Typography type="body-lg" color="rgba(0, 0, 0, 1)">
              Balance
            </Typography>
               </div>
               <div style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                <Typography type="title-lg" style={{ fontWeight: "bold" }}>{`Rp ${convertUsds2(10000000)}`} </Typography>
                <RemoveRedEyeOutlined />
               </div>
              </div>
              <div style={{ display: "flex", flexDirection: customStyle(screenSizeRevamp, defaultStyle).flexDirectionButtonBlue, gap: 26, marginTop: customStyle(screenSizeRevamp, defaultStyle).marginTopButtonBlue }}>
                <ButtomCustom
                  color="rgba(0, 97, 255, 1)"
                  borderRadius="8px"
                >
                  <AddSharp />
                </ButtomCustom>
                <ButtomCustom
                  color="rgba(0, 97, 255, 1)"
                  borderRadius="8px"
                >
                  <SendSharp style={{ transform: "rotate(-30deg)" }} />
                </ButtomCustom>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div style={{ margin: "20px 0", }}>
          {screenSizeRevamp.small ? (
            <HistoryComponent />
          ): (
           <TableCustom
            verticalLine
            onChangePage={handlePaginationChange}
            withPagination={dataTable.transactions.length > 0}
            withRowsPerPageOption={dataTable.transactions.length > 0}
            columns={headerTable}
            data={dataTable.transactions}
            page={currentPage}
            rowsPerPage={itemsPerPage}
            onChangeRowsPerPage={(val) => setItemsPerPage(val)}
            // screenSizeRevamp={ScreenSizeRevamp}
            total_items={dataTable?.total_items}
            onClickPrev={() => handlePrevPage(currentPage - 1)}
            onClickNext={() => handleNextPage(currentPage + 1)}
            prevDisabled={currentPage === 1}
            nextDisabled={currentPage === dataTable.total_items}
          />
          )}
        </div>
      </LayoutGlobal>
    </Container>
  );
}
