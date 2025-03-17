import React, { useState } from "react";
import Container from "../../atom/Container";
import LayoutGlobal from "../../atom/Layout";
import Typography from "../../atom/Typography";
import { Avatar } from "@mui/material";
import { RemoveRedEyeOutlined, AddSharp, SendSharp } from "@mui/icons-material";
import { convertUsds2, dataTable } from "../../atom/Table/helper";
import { ButtomCustom } from "../../atom/Button";
import TableCustom from "../../atom/Table";

export default function DashboardComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

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
      <LayoutGlobal style={{ marginBottom: "40px", colors: "rgba(0, 0, 0, 1)" }}>
        {/* Profile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 11,
            paddingTop: "40px",
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
            <div
              style={{
                border: "5px solid rgba(0, 97, 255, 1)",
                borderRadius: "50%",
              }}
            >
              <Avatar src="/image/image-user.svg" alt="Chelsea Immanuela" />
            </div>
          </div>
        </div>

        {/* Rekening */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 46,
            marginTop: "73px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 97, 255, 1)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: "30px",
              borderRadius: "20px",
              color: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
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
              padding: "30px",
              borderRadius: "20px",
              color: "white",
              width: "80%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography type="body-lg" color="rgba(0, 0, 0, 1)">
              Balance
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: "rgba(0, 0, 0, 1)",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 70 }}>
                <span>{`Rp ${convertUsds2(10000000)}`}</span>
                <RemoveRedEyeOutlined />
              </div>
              <div style={{ display: "flex", flexDirection: "row", gap: 26 }}>
                <ButtomCustom
                  color="rgba(0, 97, 255, 1)"
                  borderRadius="8px"
                  padding="8px 0"
                >
                  <AddSharp />
                </ButtomCustom>
                <ButtomCustom
                  color="rgba(0, 97, 255, 1)"
                  borderRadius="8px"
                  padding="8px 0"
                >
                  <SendSharp style={{ transform: "rotate(-30deg)" }} />
                </ButtomCustom>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div style={{ margin: "40px 0", }}>
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
        </div>
      </LayoutGlobal>
    </Container>
  );
}
