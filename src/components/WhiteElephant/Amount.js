import React from "react";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";
import WhiteElephant from "./WhiteElephant";
import styled from "styled-components";
import { GS, colors } from "../Styles";

const S = {};

S.Submit = styled(GS.SubmitAmountButton)`
  background: ${colors.elephant}
  color: #fff;
`;

const Amount = ({
  history,
  elephantAmount,
  setElephantAmount,
  handleElephantAmount,
  setIsWhiteElephant,
  error,
  setError
}) => {
  useEffect(() => {
    setElephantAmount("0");
    setError("");
    // eslint-disable-next-line
  }, []);

  const submitAmount = e => {
    e.preventDefault();

    if (Number(elephantAmount) < 1) {
      setError("Input a Number you Jabroni!");
    } else {
      setError("");
      history.push("/elephantpicking");
    }
  };

  const handleGameChange = () => {
    setIsWhiteElephant(false);
    history.push("/");
  };

  const amountFocus = e => e.target.select();

  return (
    <div className="text-center">
      <h6 style={{ marginTop: "1rem" }}>
        Click Santa to change the game to Secret Santa!
      </h6>
      <WhiteElephant handleGameChange={handleGameChange} />
      <div style={{ color: "#dc3545", fontSize: "1.2rem" }}>{error}</div>
      <form onSubmit={submitAmount}>
        <GS.AmountFoolsCard>
          <label>
            Jabroni Count:
            <div>
              <input
                type="number"
                name="amount"
                min="0"
                onFocus={amountFocus}
                onChange={handleElephantAmount}
                value={Number(elephantAmount)}
                style={{ margin: "0" }}
              />
            </div>
          </label>
        </GS.AmountFoolsCard>
        <div>
          <S.Submit type="submit" value="Yikes." />
        </div>
      </form>
    </div>
  );
};

export default withRouter(Amount);
