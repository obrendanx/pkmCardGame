import React from 'react'
import { css } from '@emotion/css'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

function Splashscreen() {
  return (
    <div>
        <h1>Splashscreen</h1>
        <MouseParallaxContainer className={css`
            height:100%;
            width:100%;
        `}>
            <MouseParallaxChild factorX={0.03} factorY={0.05} >
                <img src="../Images/splashscreen-lg.png" alt="" />
            </MouseParallaxChild>
        </MouseParallaxContainer>
    </div>
  )
}

export default Splashscreen