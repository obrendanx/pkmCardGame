import React from 'react';
import { css } from '@emotion/css';

function Input({ small, type, placeholder, value, onValueChange, left }) {
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    onValueChange(newValue);
    // Call the provided callback function with the new value
  };

  return (
    <div>
      <input
      className={css`
          height: 35px;
          margin-top: 2%;
          margin-bottom: 2%;
          margin-left: ${left};
          padding: 10px;
          border: 0;
          border-radius: 10px;
          box-shadow: 0 0 15px 4px #000;
          font-size: 1em;
          font-weight: normal;
          font-family: Roboto, sans-serif;
          color: #f44034;
          transition: 1s;
          outline:none;
          ${small ? 'width: 50%;' : 'width: 70%;'}
           @media (max-width: 770px) {
          }
      `}
      type={type}
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      />
    </div>
  );
}

export default Input;