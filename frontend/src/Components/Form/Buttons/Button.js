import React from 'react'
import { css } from '@emotion/css'

function Button({ handleClick, text, primary, sm }) {
  return (
    <div>
        <button
        onClick={handleClick}
        className={css`
                font-size:1em;
                color:#F36644;
                height:35px;
                ${sm ? 'width: 75px;' : 'width:100px;'}
                padding:5px;
                border:none;
                font-weight:600;
                ${primary ? 'background:#252627;' : 'background:#fff;'}
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