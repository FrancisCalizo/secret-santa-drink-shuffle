import React from 'react';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';
import WhiteElephant from './WhiteElephant';

const Amount = ({
  history,
  elephantAmount,
  setElephantAmount,
  handleElephantAmount,
  setJabronis,
  setIsWhiteElephant
}) => {
  useEffect(() => {
    setElephantAmount('0');
    setJabronis([]);
    // eslint-disable-next-line
  }, []);

  const submitAmount = e => {
    e.preventDefault();

    if (Number(elephantAmount) < 1) {
      alert('Input a Number you Jabroni');
    } else {
      history.push('/elephantpicking');
    }
  };

  const handleGameChange = () => {
    setIsWhiteElephant(false);
    history.push('/');
  };

  const amountFocus = e => e.target.select();

  return (
    <div className="text-center">
      <WhiteElephant handleGameChange={handleGameChange} />
      <form onSubmit={submitAmount}>
        <div className="card amount-fools-card">
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
                style={{ margin: '0' }}
              />
            </div>
          </label>
        </div>
        <div>
          <input type="submit" value="Yikes." className="btn-elephant spoken" />
        </div>
      </form>
    </div>
  );
};

export default withRouter(Amount);
