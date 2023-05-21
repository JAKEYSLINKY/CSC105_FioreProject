import React from "react";
import Footer from "../components/Footer";
import CardFlower from "../components/CardFlower";
import Layout from "../components/Layout";
import Ads from "../components/Ads";
import { useState } from "react";
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import CancelButton from "../assets/tool/cancel_button.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Home() {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const dataFlowerHome = [
    { title: "Tulip", src: "src/assets/flowergif/gif7.gif" },
    { title: "Jasmine", src: "src/assets/flowergif/gif1.gif" },
    { title: "Sunflower", src: "src/assets/flowergif/gif4.gif" },
    { title: "Rose", src: "src/assets/flowergif/gif6.gif" },
    { title: "Lavender", src: "src/assets/flowergif/gif3.gif" },
    { title: "Mytrus", src: "src/assets/flowergif/gif5.gif" },
    { title: "Forgetmenot", src: "src/assets/flowergif/gif2.gif" },
  ];

  return (
    <Layout>
      <div>
        <Ads />
        <div />
      </div>
      <div>
        <div style={{ marginLeft: "45px" }}>
          <h1
            className="fontStyleScript"
            style={{ fontSize: "40px", color: "#804A0B" }}
          >
            Card list
          </h1>
          {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

          <h3
            className="fontDelius"
            style={{ color: "#A56113", fontSize: "16px" }}
          >
            Click the card for more information
          </h3>
        </div>
        <div style={{ display: "flex", marginTop: "23px", marginLeft: "30px" }}>
          {dataFlowerHome.map((data, index) => {
            return <CardFlower src={data.src} key={index} title={data.title} />;
          })}
        </div>
      </div>



      <Footer />
    </Layout>
  );
}

export default Home;
