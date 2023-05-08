import BackgroundCardFlower from "../assets/tool/cardflower.svg";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import CancelButton from "../assets/tool/cancel_button.svg";
function CardFlower({ src, title }) {
  let subtitle;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  function openModal() {
    setIsOpen(true);
  }
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
      onClick={() => {
        openModal();
      }}
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
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ width: "470px", height: "350px" }}>
          <button onClick={() => closeModal()}>dwqdqw</button>
          <img
            onClick={() => {
              closeModal();
            }}
            src={CancelButton}
            style={{
              position: "absolute",
              top: "5%",
              left: "90%",
              zIndex: 50,
              cursor: "pointer",
            }}
            alt=""
          />
        </div>
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
