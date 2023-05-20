import BackgroundCardFlower from "../assets/tool/cardflower.svg";
import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CancelButton from "../assets/tool/cancel_button.svg";




function CardFlower({ src, title, show, setShow }) {
  let subtitle;



  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#808080";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div
      onClick={()=>setShow(true)}

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
        <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

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
