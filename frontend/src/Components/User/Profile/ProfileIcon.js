import React from 'react'
import { css } from '@emotion/css'

function ProfileIcon({ h, w }) {
  return (
    <div className={css`
        height:${h};
        width:${w};
        border-radius:100%;
        background: pink;
        font-size:0.7em;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    `}>
        be
    </div>
  )
}

export default ProfileIcon