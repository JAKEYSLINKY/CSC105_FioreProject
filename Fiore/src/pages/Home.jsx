import React from "react";
// import Ads from "./Ads";
import Footer from "../components/Footer";
import CardFlower from "../components/CardFlower";
import Layout from "../components/Layout";

function Home() {
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
    <div style={{ height: "270px", width: "100vw" }}> inside box maii</div>
      <div>
        <div style={{ marginLeft: "45px" }}>
          <h1
            className="fontStyleScript"
            style={{ fontSize: "40px", color: "#804A0B" }}
          >
            Card list
          </h1>
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
