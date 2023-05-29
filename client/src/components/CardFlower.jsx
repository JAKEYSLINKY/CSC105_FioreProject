import BackgroundCardFlower from "../assets/tool/cardflower.svg";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CancelButton from "../assets/tool/cancel_button.svg";
import BackgroundModal from "../assets/tool/background_modal.svg";
import {data} from "jquery";


function CardFlower({ src, title }) {
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div
      onClick={() => setShow(true)}
      style={{
        width: "200px",
        height: "250px",
        backgroundImage: `url(${BackgroundCardFlower})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          backdrop="static"
          keyboard={false}
          onExit={() => setShow(false)}
          style={{}}
        >
          <Modal.Body
            style={{
              backgroundImage: `url(${BackgroundModal})`,
              backgroundSize: "contain",
              position: "absolute",
              overflow: "visible",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
              height: "500px",
              width: "500px",
              padding: "50px",
              border: "0px",
            }}
          >
            <img
              onClick={() => setShow(false)}
              style={{
                position: "absolute",
                top: "10%",
                left: "80%",
                cursor: "pointer",
              }}
              src={CancelButton}
              alt=""
            />
            {title}

          </Modal.Body>
        </Modal>
      </div>

      <img
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "70%",
          height: "150px",
          objectFit: "contain",
        }}
        src={src}
      />
      <h1
        className="fontSwanky"
        style={{
          width: "85%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
          fontSize: "24px",
          fontWeight: "400",
          color: "#804A0BF0",
        }}
      >
        {title}
      </h1>
    </div>
  );
}

export default CardFlower;
