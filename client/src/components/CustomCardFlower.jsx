import BackgroundCardFlower from "../assets/tool/cardflower.svg";
function CustomCardFlower({
  src,
  title,
  setListFlower,
  listFlower,
  image,
  disableButton,
}) {
  return (
    <div
      onClick={() => {
        setListFlower([...listFlower, image]);
      }}
      style={{
        pointerEvents: disableButton ? "none" : "",
        width: "200px",
        height: "250px",
        backgroundImage: `url(${BackgroundCardFlower})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "relative",
        cursor: "pointer",
      }}
    >
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

export default CustomCardFlower;
