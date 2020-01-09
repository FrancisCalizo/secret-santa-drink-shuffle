import React from "react";
import styled from "styled-components";

const S = {
  DrunkSantaImage: styled.img`
    width: 17rem;
    cursor: pointer;
  `
};

const DrunkSanta = ({ handleGameChange }) => {
  return (
    <div>
      <S.DrunkSantaImage
        src={require("../drunk-santa.png")}
        alt="drunk-santa"
        onClick={handleGameChange}
      />
    </div>
  );
};

export default DrunkSanta;
