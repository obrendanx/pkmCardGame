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
            padding: 2.5px;
            border-radius: 5px;
            color: #8b2900;
            outline:none;
            
            @media (max-width: 770px) {
                width:98%;
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