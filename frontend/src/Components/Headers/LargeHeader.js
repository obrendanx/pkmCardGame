import React from 'react'
import { css } from '@emotion/css'

function LargeHeader({text}) {
  return (
    <div>
        <h2
        className={css`
            font-family: 'Oswald', sans-serif;
            height:75px;
            width:97%;
            border-bottom:solid 1px rgb(37, 38, 39);
            margin:10px;
            padding:10px;
            font-size:2em;
            color:#fff;
        `}
        >
            {text}
        </h2>
    </div>
  )
}

export default LargeHeader