import React from 'react'
import { css } from '@emotion/css'

function MediumHeader({text}) {
  return (
    <div>
        <h3
        className={css`
            font-family: 'Oswald', sans-serif;
            height:50px;
            width:97%;
            margin:10px;
            padding:10px;
            font-size:1.2em;
            color:#fff;
        `}
        >
            {text}
        </h3>
    </div>
  )
}

export default MediumHeader