import { MDBFooter } from "mdb-react-ui-kit";
import React from "react";

function Footer() {
  return (
    <>
      <div
        className="text-center text-lg-left"
        style={{
          width: "100%",
          height: "96px",
          position: "fixed",
          bottom: "0%",
          backgroundColor: "pink",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <h1 style={{ color: "white", fontSize: "20px" }}>
            ©2023 Fiore All Rights Reserved |{" "}
            <span style={{ textDecoration: "under" }}>About</span> /{" "}
            <span>Contact Us</span>
          </h1>
        </div>
      </div>
    </>
  );
}
export default Footer;
