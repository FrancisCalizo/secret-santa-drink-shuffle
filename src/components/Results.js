import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Yoda from "./Yoda";
import styled from "styled-components";
import { GS, colors } from "./Styles";

const S = {};

S.H1 = styled.div`
  color: #dc3545;
  font-size: 3rem;
`;
S.ResultsCard = styled(GS.Card)`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
S.ButtonDiv = styled(GS.Grid2)`
  justify-content: center;
  justify-items: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;
S.Reshuffle = styled.button`
  width: 80%;
  font-size: 1.2rem;
  padding: 0.6rem 1rem;
  max-width: 500px;
  margin: 1rem 0;
  cursor: pointer;
  background: ${colors.dark};
  color: #fff;
`;
S.PlayAgain = styled(S.Reshuffle).attrs({ as: Link })`
  color: red;
  border: 1px solid #8e8e8e;
  background: ${colors.primary};
  color: #fff;
  &:hover {
    color: white;
  }
`;

const Results = ({ amount, fools }) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    shuffle();
    // eslint-disable-next-line
  }, []);

  const handleRedo = () => {
    shuffle();
  };

  const shuffle = () => {
    let numbers = [];

    while (numbers.length < Number(amount)) {
      let num = Math.floor(Math.random() * Number(amount)) + 1;

      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }

    setOrder(numbers);
  };

  return (
    <div className="text-center">
      <Yoda />
      <S.H1>Results</S.H1>
      <S.ResultsCard>
        {fools.map((fool, idx) => {
          return (
            <div key={idx + 1}>
              <h2>
                <span style={{ color: colors.primary }}>{fool}</span> gets drink{" "}
                <span style={{ color: "#2ecc71" }}>#{order[idx]}</span>
              </h2>
            </div>
          );
        })}
      </S.ResultsCard>
      <S.ButtonDiv>
        <S.Reshuffle onClick={handleRedo}>Reshuffle</S.Reshuffle>
        <S.PlayAgain to="/">Play Again</S.PlayAgain>
      </S.ButtonDiv>
    </div>
  );
};

Results.propTypes = {
  amount: PropTypes.string.isRequired,
  fools: PropTypes.array.isRequired
};

export default Results;
