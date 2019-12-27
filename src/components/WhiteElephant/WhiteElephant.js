import React from "react";

const WhiteElephant = ({ handleGameChange }) => {
  return (
    <div>
      <img
        id="white-elephant"
        src={require("../../santa-dab.png")}
        alt="white-elephant"
        onClick={handleGameChange}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default WhiteElephant;
