import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const S = {
  Input: styled.input`
    margin: 0.5rem;
    display: block;
    width: 70%;
    padding: 0.6rem;
    font-size: 1.1rem;
    border: 2px solid #ccc;
    margin-left: auto;
    margin-right: auto;
  `
};

const FoolItem = ({ number, handleFools }) => {
  return (
    <Fragment>
      <S.Input
        type="name"
        name="fool"
        onChange={e => handleFools(number, e)}
        placeholder={`Fool #${number + 1} Name`}
      />
    </Fragment>
  );
};

FoolItem.propTypes = {
  number: PropTypes.number.isRequired,
  handleFools: PropTypes.func.isRequired
};

export default FoolItem;
