import React, { useState } from 'react';
import { token } from '../../../declarations/token';

function Faucet() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Gimme Gimme');

  async function handleClick(event) {
    setIsDisabled(true);
    const result = await token.payOut();
    setIsDisabled(false);
    setButtonText(result);
  }

  return (
    <div className='blue window'>
      <h2>
        <span role='img' aria-label='tap emoji'>
          🚰
        </span>
        Faucet
      </h2>
      <label>
        Get your free DPAT tokens here! Add 100 DPAT coins to your account.
      </label>
      <p className='trade-buttons'>
        <button disabled={isDisabled} id='btn-payout' onClick={handleClick}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
