import React from 'react'
import { css } from '@emotion/css'
import { keyframes } from '@emotion/react'
import PikachuRunImage from '../../Images/pikachu.gif'

function PikachuRun({width, left, top}) {
  return (
    <div
      className={`absolute ${width} ${left} ${top} h-12 md:w-full md:ml-0`}
      style={{ top }}
    >
      <span className="h-full w-[10%]">
        <img
          src={PikachuRunImage}
          alt="pikachu running"
          className="relative h-full w-[7.5%] left-0 animate-run md:w-[10%]"
        />
      </span>
    </div>
  )
}

export default PikachuRun