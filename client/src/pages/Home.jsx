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
    { title: "Tulip", src: "src/assets/flowergif/gif7.gif", des:"hi" },
    { title: "Jasmine", src: "src/assets/flowergif/gif1.gif",des:"hi" },
    { title: "Sunflower", src: "src/assets/flowergif/gif4.gif",des:"hi" },
    { title: "Rose", src: "src/assets/flowergif/gif6.gif",des:"hi"},
    { title: "Lavender", src: "src/assets/flowergif/gif3.gif",des:"hi"},
    { title: "Mytrus", src: "src/assets/flowergif/gif5.gif",des:"hi"},
    { title: "Forgetmenot", src: "src/assets/flowergif/gif2.gif",des:"hi" },
  ];

  function Buynow() {
    const [tag, setTag] = useState("");
    const ButtonCategory = [
      { text: "All", tag: "" },
      { text: "For Him/Her", tag: "For Him/Her" },
      { text: "Decoration", tag: "Decoration" },
      { text: "Colorful", tag: "Colorful" },
      { text: "Graduation", tag: "Graduation" },
    ];
    const dataBouquet = [
      {
        title: "RabbitNote",
        price: "999 Baht",
        image: `url(${flo1})`,
        // image: "src/assets/bouquet/bou03.PNG",
        tag: "Graduation",
      },
      {
        title: "TripleSun",
        price: "789 Baht",
        image: "src/assets/bouquet/bou15.PNG",
        tag: "Decoration",
      },
      {
        title: "MixGarden",
        price: "879 Baht",
        image: "src/assets/bouquet/bou01.PNG",
        tag: "Graduation",
      },
      {
        title: "Scalet",
        price: "989 Baht",
        image: "src/assets/bouquet/bou10.PNG",
        tag: "For Him/Her",
      },
      {
        title: "Bearry",
        price: "1,129 Baht",
        image: "src/assets/bouquet/bou12.PNG",
        tag: "Graduation",
      },
      {
        title: "Mink",
        price: "999 Baht",
        image: "src/assets/bouquet/bou13.PNG",
        tag: "Decoration",
      },
      {
        title: "MonoKai",
        price: "1,099 Baht",
        image: "src/assets/bouquet/bou09.PNG",
        tag: "Colorful",
      },
      {
        title: "Joluno",
        price: "789 Baht",
        image: "src/assets/bouquet/bou07.PNG",
        tag: "Colorful",
      },
      {
        title: "Nattha",
        price: "1,199 Baht",
        image: "src/assets/bouquet/bou05.PNG",
        tag: "Decoration",
      },
      {
        title: "Cotton",
        price: "1,209 Baht",
        image: "src/assets/bouquet/bou04.PNG",
        tag: "Decoration",
      },
      {
        title: "OnlyYou",
        price: "999 Baht",
        image: "src/assets/bouquet/bou14.PNG",
        tag: "For Him/Her",
      },
      {
        title: "FlowerFull",
        price: "549 Baht",
        image: "src/assets/bouquet/bou02.PNG",
        tag: "For Him/Her",
      },
      {
        title: "Prema",
        price: "1,299 Baht",
        image: "src/assets/bouquet/bou08.PNG",
        tag: "For Him/Her",
      },
      {
        title: "WonderDay",
        price: "799 Baht",
        image: "src/assets/bouquet/bou06.PNG",
        tag: "Colorful",
      },
      {
        title: "Mr.Sunshine",
        price: "1,098 Baht",
        image: "src/assets/bouquet/bou11.PNG",
        tag: "Decoration",
      },
    ];

    console.log("I'm working, dont blame me mtfk");
  }



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
      {/* <h1>HO</h1> */}



      <Footer />
    </Layout>
  );
}

export default Home;
