import React from "react";
import styled from "styled-components";

const S = {
  Div: styled.div`
    margin: 1rem 0;
  `
};

const Yoda = () => {
  return (
    <S.Div>
      <img id="yoda" src={require("../Yoda-L.gif")} alt="Yoda-handing-L's" />
    </S.Div>
  );
};

export default Yoda;
