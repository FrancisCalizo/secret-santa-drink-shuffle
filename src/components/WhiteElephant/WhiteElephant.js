import React from "react";
import styled from "styled-components";

const WhiteElephantImage = styled.img`
  cursor: pointer;
  width: 18rem;
`;

const WhiteElephant = ({ handleGameChange }) => {
  return (
    <div>
      <WhiteElephantImage
        src={require("../../santa-dab.png")}
        alt="white-elephant"
        onClick={handleGameChange}
      />
    </div>
  );
};

export default WhiteElephant;
