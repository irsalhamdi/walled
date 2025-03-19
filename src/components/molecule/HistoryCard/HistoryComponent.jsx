import React from "react";
import Typography from "../../atom/Typography";
import { Avatar, Divider } from "@mui/material";

export default function HistoryComponent() {
  const transactions = [
    {
      name: "Adityo Gizwanda",
      type: "Transfer",
      amount: -75000,
      date: "08 December 2024",
    },
    {
      name: "Adityo Gizwanda",
      type: "Topup",
      amount: 75000,
      date: "08 December 2024",
    },
    {
      name: "Adityo Gizwanda",
      type: "Transfer",
      amount: -75000,
      date: "08 December 2024",
    },
    {
      name: "Adityo Gizwanda",
      type: "Transfer",
      amount: -75000,
      date: "08 December 2024",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: "30px 15px",
        borderRadius: "10px",
        width: "auto",
        boxShadow: "none",
      }}
    >
      <Typography type="title-lg" style={{ fontWeight: "bold" }}>
        Transaction History
      </Typography>
      <Divider />
      {transactions.map((tx, index) => (
        <div key={index}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Avatar sx={{ width: 40, height: 40 }} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography type="body-lg">{tx.name}</Typography>
                <Typography type="body-lg">{tx.type}</Typography>
                <Typography type="body-lg">{tx.date}</Typography>
              </div>
            </div>
            <Typography style={{ color: tx.amount > 0 ? "rgba(45, 192, 113, 1)" : "rgba(37, 43, 66, 1)" }}>
              {tx.amount > 0
                ? `+ ${tx.amount.toLocaleString("id-ID")},00`
                : `- ${Math.abs(tx.amount).toLocaleString("id-ID")},00`}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
}
