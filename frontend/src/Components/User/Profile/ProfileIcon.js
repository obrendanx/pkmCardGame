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
    `}>
        be
    </div>
  )
}

export default ProfileIcon