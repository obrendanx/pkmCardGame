import React from 'react'
import { css } from '@emotion/css'

function Label({htmlfor, text, primary}) {
  return (
    <div>
        <label 
            htmlFor={htmlfor}
            className={css`
                ${primary ? 'color: #fff;' : 'color: #8b2900;'}
                height:35px;
                padding:5px;
                margin:5px;
            `}
        >
            {text}
        </label>
    </div>
  )
}

export default Label