import React from "react";
import InputCustom from "../../atom/Input";
import { ButtomCustom } from "../../atom/Button";
import Typography from "../../atom/Typography";

export default function LeftComponent() {
  return (
    <div style={{ width: "100%", display: "block" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <img src="/image/logo.svg" alt="logo" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ width: "60%", margin: "0 auto" }}>
          <InputCustom placeholder="Email" />
        </div>
        <div style={{ width: "60%", margin: "0 auto" }}>
          <InputCustom placeholder="Password" />
        </div>
        <div
          style={{
            width: "60%",
            margin: "0 auto",
            boxShadow: "5px 5px 5px rgba(25, 145, 143, 0.1)",
          }}
        >
          <ButtomCustom
            color="rgba(0, 97, 255, 1)"
            padding="12px 16px"
            borderRadius="8px"
          >
            <Typography type="label-lg" color="white">
              Login
            </Typography>
          </ButtomCustom>
        </div>
        <div style={{ width: "60%", margin: "0 auto" }}>
          <Typography type="body-sm" color="rgba(0, 0, 0, 1)">
            Belum punya akun?{" "}
          </Typography>
          <Typography type="body-sm" color="rgba(0, 97, 255, 1)">
            Daftar di sini
          </Typography>
        </div>
      </div>
    </div>
  );
}
