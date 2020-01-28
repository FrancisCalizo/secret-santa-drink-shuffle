import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';
import DrunkSanta from './DrunkSanta';
import styled from 'styled-components';
import { GS, colors } from './Styles';

const S = {};

S.H6 = styled.h6`
  margin-top: 1rem;
`;

S.Error = styled.div`
  font-size: 1.2rem;
  color: ${colors.primary};
`;

S.Submit = styled(GS.SubmitAmountButton)`
  background: ${colors.primary}
  color: #fff;
  cursor: pointer;
`;

const Amount = ({
  history,
  amount,
  setAmount,
  handleAmount,
  setFools,
  setIsWhiteElephant,
  error,
  setError
}) => {
  useEffect(() => {
    setAmount('0');
    setFools([]);
    setError('');
    // eslint-disable-next-line
  }, []);

  const submitAmount = e => {
    e.preventDefault();

    if (Number(amount) < 1) {
      setError('Input a Number you bafoon!');
    } else {
      setError('');
      history.push('/foolnames');
    }
  };

  const handleGameChange = () => {
    setIsWhiteElephant(true);
    history.push('/whiteelephant');
  };

  const amountFocus = e => e.target.select();

  return (
    <div className="text-center">
      <S.H6>Click Santa to change the game to White Elephant!</S.H6>
      <DrunkSanta handleGameChange={handleGameChange} />
      <S.Error>{error}</S.Error>
      <form onSubmit={submitAmount}>
        <GS.AmountFoolsCard>
          <label>
            Fool Count:
            <div>
              <input
                type="number"
                name="amount"
                min="0"
                onFocus={amountFocus}
                onChange={handleAmount}
                value={Number(amount)}
                style={{ margin: '0' }}
              />
            </div>
          </label>
        </GS.AmountFoolsCard>
        <div>
          <S.Submit type="submit" value="I have spoken." />
        </div>
      </form>
    </div>
  );
};

Amount.propTypes = {
  amount: PropTypes.string.isRequired,
  handleAmount: PropTypes.func.isRequired
};

export default withRouter(Amount);
