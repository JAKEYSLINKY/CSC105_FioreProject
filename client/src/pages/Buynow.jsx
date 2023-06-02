import CustomCardBouquet from "../components/CustomCardBouquet";
import React from "react";
import Layout from "../components/Layout";
import Searchbar from "./Searchbar";
import BrownButton from "../assets/tool/ButtonBrown.svg";
import { useState } from "react";
import SuperBrown from "../assets/tool/SuperBrown.svg";
import circle from "../assets/tool/circle.svg";
import BackgroundCardFlower from "../assets/tool/cardflower.svg";
import flo1 from "../assets/flowergif/gif4.gif";

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
      image: "src/assets/bouquet/bou3.PNG",
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
      image: "src/assets/bouquet/bou1.PNG",
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
      image: "src/assets/bouquet/bou9.PNG",
      tag: "Colorful",
    },
    {
      title: "Joluno",
      price: "789 Baht",
      image: "src/assets/bouquet/bou7.PNG",
      tag: "Colorful",
    },
    {
      title: "Nattha",
      price: "1,199 Baht",
      image: "src/assets/bouquet/bou5.PNG",
      tag: "Decoration",
    },
    // {
    //   title: "Cotton",
    //   price: "1,209 Baht",
    //   image: "src/assets/bouquet/bou04.PNG",
    //   tag: "Decoration",
    // },
    {
      title: "OnlyYou",
      price: "999 Baht",
      image: "src/assets/bouquet/bou14.PNG",
      tag: "For Him/Her",
    },
    {
      title: "FlowerFull",
      price: "549 Baht",
      image: "src/assets/bouquet/bou2.PNG",
      tag: "For Him/Her",
    },
    // {
    //   title: "Prema",
    //   price: "1,299 Baht",
    //   image: "src/assets/bouquet/bou08.PNG",
    //   tag: "For Him/Her",
    // },
    // {
    //   title: "WonderDay",
    //   price: "799 Baht",
    //   image: "src/assets/bouquet/bou06.PNG",
    //   tag: "Colorful",
    // },
    {
      title: "Mr.Sunshine",
      price: "1,098 Baht",
      image: "src/assets/bouquet/bou11.PNG",
      tag: "Decoration",
    },
  ];

  console.log("I'm working, dont blame me mtfk");

  return (
    <Layout>
      <div>
        <div style={{ marginLeft: "0px" }}>
          <h1
            className="fontStyleScript"
            style={{ fontSize: "40px", color: "#804A0B" }}
          >
            BuyNow
          </h1>
          <h3
            className="fontDelius"
            style={{ color: "#A56113", fontSize: "16px" }}
          >
            Pick your favourite Bouquet
          </h3>
        </div>

        <div
          style={{
            marginRight: "0px",
            display: "flex",
            justifyContent: "right",
            alignItems: "right",
            gap: "20px",
            position: "fixed",
            right: "20px",
          }}
        >
          {ButtonCategory.map((Button) => {
            return (
              <div style={{}}>
                {Button.tag === tag && (
                  // onClick={=>{()}}
                  <img
                    src={circle}
                    style={{ position: "absolute", top: "-18%" }}
                  />
                )}
                <div
                  style={{
                    display: "flex",
                    objectFit: "contian",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "120px",
                    height: "55px",
                    backgroundImage: `url(${SuperBrown})`,
                    color: "#CD7D20",
                  }}
                  onClick={() => setTag(Button.tag)}
                >
                  {Button.text}
                </div>
              </div>
            );
          })}

          {/* <div style={{backgroundImage: `url(${BrownButton})`}}>Hi </div>
			<div style={{backgroundImage: `url(${BrownButton})`}}>HO</div>
			<div style={{backgroundImage: `url(${BrownButton})`}}>HO</div>
			<div style={{backgroundImage: `url(${BrownButton})`}}>HO</div> */}
        </div>

        {/* <div style={{ display: "flex", marginTop: "23px", marginLeft: "30px" }}>
          {dataBouquet.map((data, index) => {
            return <CardBouquet src={data.src} key={index} title={data.title} />;
          })}
        </div> */}
      </div>
      <div>
        {/* displayflower */}
        <div
          style={{
            gap: "4",
            marginTop: "30px",
            display: "grid",
            overflow: "hidden",
            gridTemplateColumns: "repeat(6,1fr)",
          }}
        >
          {dataBouquet
            .filter((Bouquet) => Bouquet.tag.includes(tag))
            .map((item) => {
              
              return (
                <div
                  className="fontSwanky"
                  style={{
                    color: "#A6801F",
                    margin: "15px",
                    backgroundImage: `url(${BackgroundCardFlower})`,
                    width: "190px",
                    height: "250px",
                    gap: "10px",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "end",
                    position: "relative",

                    // wordBreak:"break-word"
                    // maxWidth: "100%"
                  }}
                >
                  {/* <div>
                    {item.title}
                    {item.price}
                    </div> */}
                  <div
                    style={{
                      fontSize: "30px",
                      top: "-30px",
                      alignItems: "center",
                      paddingBottom: "140px",
                      paddingRight: "30px",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        position: "absolute",
                        top: "-10px",
                        left: "0px",
                      }}
                      src={item.image}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      paddingBottom: "20px",
                      paddingRight: "40px",
                      lineHeight: "1",
                    }}
                  >
                    {item.title}
                    <br />
                    {item.price}
                  </div>

                  {/* {item.image} */}
                </div>
              );
            })}
        </div>

        {/* <img src={BrownButton} alt="" /> */}
      </div>
    </Layout>
  );
}

export default Buynow;
