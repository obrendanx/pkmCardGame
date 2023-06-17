import React from 'react'
import { css } from '@emotion/css'

function Button({ handleClick, text, primary, sm }) {
  return (
    <div>
        <button
        onClick={handleClick}
        className={css`
                font-size:0.8em;
                color:#fff;
                height:35px;
                ${sm ? 'width: 75px;' : 'width:100px;'}
                padding:5px;
                border:none;
                border-radius:10px;
                font-weight:900;
                text-transform:uppercase;
                ${primary ? 'background: #369143;' : 'background: #CC0000;'}
                @media (max-width: 770px){
                  width:100%;
                }
        `}
        >
        {text}
        </button>
    </div>
  )
}

export default Button