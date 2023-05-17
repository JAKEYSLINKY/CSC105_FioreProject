import React from "react";
import "../css/navbar.module.css";
import NavBackgroundButton from "../assets/tool/navbutton.svg";
import NavBackgroundButtonCustomOwn from "../assets/tool/navbutton_custom_own.svg";
import NewNavBackgroundButton from "../assets/tool/newbutton.svg";
import Buttonwhite from "../assets/tool/Buttonwhite.svg";
import Buttonwhitenew from "../assets/tool/Buttonwhitenew.png";
import { useNavigate } from "react-router-dom";
import WhiteButtonShadow from "../assets/tool/Whitebuttonwithshadow.svg";

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
      <h1 className="fontStyleScript" style={{ color: "#804A0B", padding:"10px" }}>
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
            width: "155px",
            height: "60px",
            backgroundImage: `url(${WhiteButtonShadow})`,
            color: "#CD7D20",
          }}
        >
          HOMEPAGE
        </div>

        <div
          onClick={() => {
            navigate("/CustomOwn");
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
          onClick={() => {
            navigate("/Buynow")
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "155px",
            height: "60px",
            backgroundImage: `url(${WhiteButtonShadow})`,
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
