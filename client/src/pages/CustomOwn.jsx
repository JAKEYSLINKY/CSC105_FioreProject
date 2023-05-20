import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import BackgroundCardFlower from "../assets/tool/flower_show_case.svg";
import NavBackgroundButton from "../assets/tool/navbutton.svg";
import CustomCardFlower from "../components/CustomCardFlower";
import PositionImage from "../components/PositionImage";
import ButtonPink from "../assets/tool/ButtonPinkk.svg";
import WhiteButtonShadow from "../assets/tool/Whitebuttonwithshadow.svg";



function CustomOwn() {
  const [condition, setCondition] = useState(3);
  const [listFlower, setListFlower] = useState([]);
  const [disableButton, setDisableButton] = useState(false);
  const dataFlowerHome = [
    {
      title: "Tulip",
      src: "src/assets/flowergif/gif7.gif",
      image: "src/assets/createown/co4.PNG",
    },
    {
      title: "Jasmine",
      src: "src/assets/flowergif/gif1.gif",
      image: "src/assets/createown/co3.PNG",
    },
    {
      title: "Sunflower",
      src: "src/assets/flowergif/gif4.gif",
      image: "src/assets/createown/co6.PNG",
    },
    {
      title: "Rose",
      src: "src/assets/flowergif/gif6.gif",
      image: "src/assets/createown/co5.PNG",
    },
    {
      title: "Lavender",
      src: "src/assets/flowergif/gif3.gif",
      image: "src/assets/createown/co7.PNG",
    },
    {
      title: "Mytrus",
      src: "src/assets/flowergif/gif5.gif",
      image: "src/assets/createown/co1.PNG",
    },
    {
      title: "Forgetmenot",
      src: "src/assets/flowergif/gif2.gif",
      image: "src/assets/createown/co2.PNG",
    },
  ];
  useEffect(() => {
    if (listFlower.length === condition) {
      setDisableButton(true);
    }
    if (condition !== condition) {
      setListFlower([]);
    }
  }, [listFlower, condition]);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-center",
          gap: "200px",
        }}
      >
        <div style={{ marginLeft: "49px" }}>
          <h1
            className="fontSwanky"
            style={{
              color: "#CD7D20",
              fontWeight: 400,
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            Your Bouqet
          </h1>
          <div
            style={{
              width: "380px",
              height: "477px",
              backgroundImage: `url(${BackgroundCardFlower})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              position: "relative",
            }}
          >
            <img
              src="src/assets/createown/bou.PNG"
              alt=""
              style={{
                width: "350px",
                height: "380px",
                top: "25%",
                left: "5%",
                position: "absolute",
              }}
            />
            <PositionImage listFlower={listFlower} />
          </div>
          {/* <div style={{width:"65px",height:"150px"}}> */}
          <div>
            {condition}
            <br />
            {/* <div style={{backgroundImage: `url(${ButtonPink})`}}>{listFlower.length}</div> */}
            {/* <div style={{backgroundImage:`url(${WhiteButtonShadow})`}}>{listFlower.length}</div> */}
            {listFlower.length}
            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50px",
                height: "50px",
                backgroundImage: `url(${BackgroundCardFlower})`,
                color: "#CD7D20",
                objectFit: "contain",
              }}
            ></div> */}
          </div>
        </div>
        <div style={{ width: "750px" }}>
          <h1
            className="fontSwanky"
            style={{
              color: "#A6801F",
              fontWeight: 400,
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            Select Your Bouqet Size
          </h1>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <div
              onClick={() => {
                setCondition(3);
                if (condition !== 3) {
                  setListFlower([]);
                  setDisableButton(false);
                }
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "153px",
                height: "61px",
                marginBottom:"7px",
                backgroundImage: `url(${WhiteButtonShadow})`,
                color: "#CD7D20",
                cursor: "pointer",
              }}
            >
              Size S (3 flowers)
            </div>
            <div
              onClick={() => {
                setCondition(5);
                if (condition !== 5) {
                  setListFlower([]);
                  setDisableButton(false);
                }
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "153px",
                height: "61px",
                marginBottom:"7px",
                backgroundImage: `url(${WhiteButtonShadow})`,
                color: "#CD7D20",
                cursor: "pointer",
              }}
            >
              Size M (5 flowers)
            </div>
            <div
              onClick={() => {
                setCondition(7);
                if (condition !== 7) {
                  setListFlower([]);
                  setDisableButton(false);
                }
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "153px",
                height: "61px",
                marginBottom:"7px",
                backgroundImage: `url(${WhiteButtonShadow})`,
                color: "#CD7D20",
                cursor: "pointer",
              }}
            >
              Size L (7 flowers)
            </div>
          </div>

          <h1
            className="fontSwanky"
            style={{
              color: "#A6801F",
              fontWeight: 400,
              fontSize: "40px",
              textAlign: "start",
            }}
          >
            Select Your Flower
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
            }}
          >
            {dataFlowerHome.map((data, index) => {
              return (
                <CustomCardFlower
                  disableButton={disableButton}
                  image={data.image}
                  listFlower={listFlower}
                  setListFlower={setListFlower}
                  src={data.src}
                  key={index}
                  title={data.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CustomOwn;
