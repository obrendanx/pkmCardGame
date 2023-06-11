import React from 'react'
import { css } from '@emotion/css'
import { keyframes } from '@emotion/react'
import PikachuRunImage from '../../Images/pikachu.gif'

function PikachuRun({width, left, top}) {
  const run = keyframes`
    0{
        left:-7.5%;
    }
    7.5%{
        left:7.5%;
    }
    15%{
        left:15%;
    }
    22.5{
        left:22.5%;
    }
    30%{
        left:30%;
    }
    37.5%{
        left:37.5%:
    }
    45%{
        left:45%;
    }
    52.5%{
        left:52.5%;
    }
    60%{
        left:60%;
    }
    67.5%{
        left:67.5%;
    }
    75%{
        left:75%;
    }
    82.5%{
        left:82.5%;
    }
    90%{
        left:90%;
    }
    100%{
        left:97.5%%;
    }
  `

  return (
    <div className={css`
        position:absolute;
        width:${width};
        margin-left:${left};
        top:${top};
        height:50px;
        @media only screen and (max-width: 770px){
            width:100%;
            margin-left:0;
        }
    `}>
        <span
            className={css`
                height:100%;
                width:10%;
            `}
        >
            <img 
                src={PikachuRunImage}
                alt='pikachu running'
                className={css`
                    position:relative;
                    height:100%;
                    width:7.5%;
                    left:0;
                    animation: ${run} 5s ease infinite;
                    @media only screen and (max-width: 770px){
                        width:10%;
                    }
                `}
            />
        </span>
    </div>
  )
}

export default PikachuRun