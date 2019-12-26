import React from "react";

const WhiteElephant = ({ handleGameChange }) => {
  return (
    <div>
      <img
        id="white-elephant"
        src={require("../../santa-dab.png")}
        alt="white-elephant"
        onClick={handleGameChange}
      />
    </div>
  );
};

export default WhiteElephant;
