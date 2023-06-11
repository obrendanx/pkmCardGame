import React from 'react'
import { css } from '@emotion/css'
//Images
import SplashscreenLg from '../Images/splashscreen-lg.png'

function Splashscreen() {
  return (
    <div className={css`
      height:100vh;
      width:100vw;
      background-image: url(${SplashscreenLg});
      background-attachment: fixed;
      background-position: center;
      background-size: cover;
    `}>

    </div>
  )
}

export default Splashscreen