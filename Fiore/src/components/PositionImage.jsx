import React from "react";

function PositionImage({ listFlower }) {
  const PositionIndex = {
    [0]: {
      top: "40%",
      left: "20%",
    },
    [1]: {
      top: "40%",
      left: "45%",
    },
    [2]: {
      top: "30%",
      left: "30%",
    },
    [3]: {
      top: "50%",
      left: "30%",
    },
    [4]: {
      top: "25%",
      left: "15%",
    },
    [5]: {
      top: "25%",
      left: "45%",
    },
    [6]: {
      top: "15%",
      left: "35%",
    },
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {listFlower?.map((flower, index) => {
        console.log(flower);
        return (
          <img
            src={flower}
            style={{
              width: "140px",
              height: "140px",
              position: "absolute",
              top: PositionIndex[index].top,
              left: PositionIndex[index].left,
            }}
            alt=""
          />
        );
      })}
    </div>
  );
}

export default PositionImage;
