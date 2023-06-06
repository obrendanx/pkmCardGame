import React from 'react'
import { css } from '@emotion/css'

function Submit({ small, left }) {
  return (
    <div>
        <input 
        className={css`
            ${small ? 'width: 50%;' : 'width: 70%;'}
            height:45px;
            border:none;
            line-height:10px;
            margin-top:10px;
            color:#fff;
            background:#f44034;
            margin-left:${left};
            border-radius:10px;
            margin-bottom:50px;
            &:hover{
                border:
                solid 1px #1C1C1C;
            }
            @media (max-width: 770px) {
            }
        `}
        type='submit' 
        value='Submit' 
        />
    </div>
  )
}

export default Submit