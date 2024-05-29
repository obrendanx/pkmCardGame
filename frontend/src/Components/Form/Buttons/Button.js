import React from 'react'
import { css } from '@emotion/css'

function Button({ handleClick, text, primary, sm, h, w }) {
  return (
    <div>
        <button
        onClick={handleClick}
        className="
                  ${primary ? bg-[#31acee] : bg-[#ffd57b]}
                  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                  "
        >
        {text}
        </button>
    </div>
  )
}

export default Button
