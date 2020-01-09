import React from "react";
import FoolItem from "./FoolItem";
import PropTypes from "prop-types";
import Mando from "./Mando";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const S = {
  FoolGroup: styled.div`
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 1rem;
    border: #ccc 1px dotted;
    margin: 0.7rem auto;
    max-width: 500px;
  `,
  Error: styled.div`
    color: #dc3545;
    fontsize: 1rem;
  `,
  Submit: styled.input`
    width: 80%;
    font-size: 1.2rem;
    padding: 0.6rem 1rem;
    max-width: 500px;
  `
};

const Fools = ({ amount, fools, setFools, history, error, setError }) => {
  const handleFools = (number, e) => {
    let arr = [...fools];
    arr[number] = e.target.value;

    setFools(arr);
  };

  const submitFools = e => {
    e.preventDefault();

    if (fools.length < amount || fools.includes("")) {
      return setError("No blanks allowed Jabroni");
    }
    setError("");
    history.push("/santaresults");
  };

  return (
    <div className="text-center">
      <Mando />
      <form onSubmit={submitFools}>
        <S.FoolGroup>
          <h2>Names of Contestants</h2>
          <S.Error>{error}</S.Error>
          {Array(Number(amount))
            .fill()
            .map((num, idx) => (
              <FoolItem key={idx} number={idx} handleFools={handleFools} />
            ))}
        </S.FoolGroup>
        <div>
          <S.Submit
            type="submit"
            value="This is the way."
            className="btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

Fools.propTypes = {
  amount: PropTypes.string.isRequired,
  fools: PropTypes.array.isRequired,
  setFools: PropTypes.func.isRequired
};

export default withRouter(Fools);
