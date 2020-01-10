import React from "react";
import styled from "styled-components";

const S = {
  Div: styled.div`
    margin: 1rem 0;
  `,
  YodaImage: styled.img`
    width: 20rem;
  `
};

const Yoda = () => {
  return (
    <S.Div>
      <S.YodaImage src={require("../Yoda-L.gif")} alt="Yoda-handing-L's" />
    </S.Div>
  );
};

export default Yoda;
