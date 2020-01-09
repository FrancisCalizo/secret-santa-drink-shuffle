import React from "react";
import styled from "styled-components";
import mandoImage from "../mando.png";

const S = {
  MandoImage: styled.div`
    background-image: url(${mandoImage});
    background-position: -20% 180%;
    background-size: 110%;
    width: 180px;
    height: 180px;
    border-radius: 100px;
    color: #fff;
    font-size: 1rem;
    padding-top: 6rem;
    border: 4px solid #bdc3c7;
    margin: 1rem auto;
  `
};

const Mando = () => {
  return <S.MandoImage />;
};

export default Mando;
