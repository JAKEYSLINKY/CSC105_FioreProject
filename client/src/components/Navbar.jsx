import React, { useState } from "react";
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
  const [showPopup, setShowPopup] = useState(false);
  const CartPopup = () => {
    return (
      <div
        style={{
          width: "500px",
          height: "300px",
          backgroundColor: "pink",
          position: "absolute",
          zIndex: "10",
          top: "50%",
          left: "-800%",
        }}
      >
        Login
        
      </div>
    );
  };
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
      <h1
        className="fontStyleScript"
        style={{ color: "#804A0B", padding: "10px" }}
      >
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
            navigate("/Buynow");
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
        <div
          style={{ position: "relative" }}
          onClick={() => {
            setShowPopup(!showPopup);
          }}
        >
          <img
            style={{ width: "58px", height: "58px", objectFit: "contain" }}
            src="src/assets/tool/Cart.png"
            alt=""
          />
          {showPopup && <CartPopup />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
