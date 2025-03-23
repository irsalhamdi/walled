import React from "react";
import InputCustom from "../../atom/Input";
import { ButtomCustom } from "../../atom/Button";
import Typography from "../../atom/Typography";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../zustand/useLogin";

export default function LeftComponent({ darkMode }) {
  const navigate = useNavigate();
  const { inputs, setInput, handleSubmitLogin } = useLogin();
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputs.email !== "" && inputs.password !== "") {
      handleSubmitLogin(inputs, navigate);
    }
  };
  return (
    <div style={{ width: "100%", display: "block" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <img
          src="/image/logo.svg"
          alt="logo"
          style={{ filter: darkMode ? "invert(1)" : "none" }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ width: "60%", margin: "0 auto" }}>
          <InputCustom
            placeholder="Email"
            darkMode={darkMode}
            name="email"
            value={inputs.email}
            onChange={(e) => setInput(e.target.name, e.target.value)}
          />
        </div>
        <div style={{ width: "60%", margin: "0 auto" }}>
          <InputCustom
            placeholder="Password"
            darkMode={darkMode}
            name="password"
            value={inputs.password}
            onChange={(e) => setInput(e.target.name, e.target.value)}
          />
        </div>
        <div
          tabIndex={0}
          style={{
            width: "60%",
            margin: "0 auto",
            boxShadow: darkMode
              ? "0 4px 10px rgba(0, 0, 0, 0.5)"
              : "5px 5px 5px rgba(25, 145, 143, 0.1)",
          }}
          onKeyDown={(e) => handleKeyDown(e)}
        >
          <ButtomCustom
            color="rgba(0, 97, 255, 1)"
            padding="12px 16px"
            borderRadius="8px"
            onClick={() => handleSubmitLogin(inputs, navigate)}
            disabled={inputs.email === "" || inputs.password === ""}
          >
            <Typography type="label-lg" color="white">
              Login
            </Typography>
          </ButtomCustom>
        </div>
        <div
          style={{
            width: "60%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <Typography
              type="body-sm"
              color={darkMode ? "#B0B0B0" : "rgba(0, 0, 0, 1)"}
            >
              Belum punya akun?{" "}
            </Typography>
          </div>
          <div onClick={() => navigate("/register")}>
            <Typography
              type="body-sm"
              color="rgba(0, 97, 255, 1)"
              style={{ marginLeft: "5px", cursor: "pointer" }}
            >
              Daftar di sini
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
