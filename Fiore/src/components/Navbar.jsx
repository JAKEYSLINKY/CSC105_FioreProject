import React from "react";
import "../css/navbar.module.css";
import NavBackgroundButton from "../assets/tool/navbutton.svg";
import NavBackgroundButtonCustomOwn from "../assets/tool/navbutton_custom_own.svg";
import NewNavBackgroundButton from "../assets/tool/newbutton.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100vw",
        height: "97px",
        position: "fixed",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1 className="fontStyleScript" style={{ color: "#804A0B" }}>
        Fiore
      </h1>
      <div style={{ display: "flex", gap: "18px" }}>
        <div
          onClick={() => {
            navigate("/");
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "145px",
            height: "54px",
            backgroundImage: `url(${NewNavBackgroundButton})`,
            color: "#CD7D20",
            cursor: "pointer",
            boxShadow: "7px 6px 6px rgba(0, 0, 0, 0.25)",
          }}
        >
          HOMEPAGE
        </div>

        <div
          onClick={() => {
            navigate("/custom");
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "228px",
            height: "54px",
            backgroundImage: `url(${NavBackgroundButtonCustomOwn})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "#CD7D20",
            cursor: "pointer",
          }}
        >
          CUSTOM YOUR OWN
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "145px",
            height: "54px",
            backgroundImage: `url(${NavBackgroundButton})`,
            color: "#CD7D20",
          }}
        >
          BUY NOW
        </div>
        <img
          src="src/assets/tool/Cart.png"
          alt=""
          style={{ width: "58px", height: "58px", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

export default Navbar;
