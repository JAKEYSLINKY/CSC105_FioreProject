import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Ads01 from "../assets/ads/Ads01.png";
import Ads02 from "../assets/ads/Ads02.png";
import Ads03 from "../assets/ads/Ads03.png";

function Ads() {
  return (
    <div
      style={{
        height: "270px",
        width: "100vw",
        marginBottom: "50px",
      }}
    >
      {/* zIndex: "-2", */}
      <Carousel style={{ position: "relative" }}>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={Ads01} alt="First Ads" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={Ads02} alt="Second Ads" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={Ads03} alt="Third Ads" />
        </Carousel.Item>
      </Carousel>
      <div />
    </div>
  );
}

export default Ads;
