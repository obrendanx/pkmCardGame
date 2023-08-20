import React from 'react'
import { css } from '@emotion/css'

function TextArea({ width, type, textname, value, onValueChange }) {
   const handleInputChange = (event) => {
    const newValue = event.target.value;
    onValueChange(newValue);
    // Call the provided callback function with the new value
  };

  return (
    <div>
        <textarea
        className={css`
            height: 125px;
            width: ${width};
            margin: 2.5px 2.5px 7.5px 2.5px;
            padding: 2.5px;
            border-radius: 5px;
            border: solid 3px #f44336;
            color: #1c1c1c;
            outline:none;
            @media (max-width: 770px) {
                width:100%;
              }
        `}
        type={type}
        value={value}
        onChange={handleInputChange}
        name={textname}
      />
    </div>
  )
}

export default TextArea