import React from "react";

const WhiteElephant = ({ handleGameChange }) => {
  return (
    <div className="my-3">
      <img
        id="white-elephant"
        src={require("../../elephant.png")}
        alt="white-elephant"
        onClick={handleGameChange}
      />
    </div>
  );
};

export default WhiteElephant;
