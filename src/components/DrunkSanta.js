import React from "react";

const DrunkSanta = ({ handleGameChange }) => {
  return (
    <div>
      <img
        id="drunk-santa"
        src={require("../drunk-santa.png")}
        alt="drunk-santa"
        onClick={handleGameChange}
      />
    </div>
  );
};

export default DrunkSanta;
