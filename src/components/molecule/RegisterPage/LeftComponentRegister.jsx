import React from "react";
import InputCustom from "../../atom/Input";
import { ButtomCustom } from "../../atom/Button";
import Typography from "../../atom/Typography";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../../zustand/useRegister";

export default function LeftComponentRegister({ darkMode }) {
  const navigate = useNavigate();
  const { inputs, setInput, handleSubmitRegister } = useRegister();
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputs.email !== "" && inputs.password !== "" && inputs.fullName !== "" && inputs.numberPhone !== "") {
      handleSubmitRegister(inputs, navigate);
    }
  };

  return (
    <div style={{ width: "100%", display: "block" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <img src="/image/logo.svg" alt="logo" style={{ filter: darkMode ? "invert(1)" : "none" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ width: "60%", margin: "0 auto" }}>
          <InputCustom placeholder="Nama Lengkap" darkMode={darkMode} name="fullName" value={inputs.fullName} onChange={(e) => setInput(e.target.name, e.target.value)} />
        </div>
        <div style={{ width: "60%", margin: "0 auto" }}>
          <InputCustom placeholder="Email" darkMode={darkMode} name="email" value={inputs.email} onChange={(e) => setInput(e.target.name, e.target.value)} />
        </div>
         <div style={{ width: "60%", margin: "0 auto" }}>
          <InputCustom placeholder="Password" darkMode={darkMode} name="password" value={inputs.password} onChange={(e) => setInput(e.target.name, e.target.value)} />
        </div>
         <div style={{ width: "60%", margin: "0 auto" }}>
          <InputCustom placeholder="No Hp" darkMode={darkMode} name="numberPhone" value={inputs.numberPhone} onChange={(e) => setInput(e.target.name, e.target.value)} />
        </div>
        <div
          tabIndex={0}
          style={{
            width: "60%",
            margin: "0 auto",
            boxShadow: darkMode ? "0 4px 10px rgba(0, 0, 0, 0.5)" : "5px 5px 5px rgba(25, 145, 143, 0.1)",
          }}
           onKeyDown={(e) => handleKeyDown(e)}
        >
          <ButtomCustom
            color="rgba(0, 97, 255, 1)"
            padding="12px 16px"
            borderRadius="8px"
            disabled={inputs.email === "" || inputs.password === "" || inputs.fullName === "" || inputs.numberPhone === ""}
            onClick={() => handleSubmitRegister(inputs, navigate)}
          >
            <Typography type="label-lg" color="white">
              Daftar
            </Typography>
          </ButtomCustom>
        </div>
        <div style={{ width: "60%", margin: "0 auto", display: "flex", alignItems: "center" }}>
         <div>
           <Typography type="body-sm" color= {darkMode ? "#B0B0B0" : "rgba(0, 0, 0, 1)"}>
            Belum punya akun?{" "}
          </Typography>
         </div>
          <div onClick={() => navigate("/login")}>
          <Typography type="body-sm" color="rgba(0, 97, 255, 1)" style={{ marginLeft: "5px", cursor: "pointer" }}>
            Login di sini
          </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
