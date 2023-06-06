import React from 'react';
import { css } from '@emotion/css';

function ArrowBtn({ handleClick, text, left, top }) {
  return (
    <button
      onClick={handleClick}
      className={css`
            height:50px;
            width:50px;
            border:none;
            border-radius:5px;
            padding:1% 2.5% 2.5% 2.5%;
            font-size:1em;
            font-family:Roboto, sans-serif;
            color:#fff;
            position:absolute;
            background:rgba(0, 0, 0, 0.6);
            ${left ? 'left: 0;' : 'right: 0;'}
            top:${top};
            margin:0 25px 0 25px;
            padding:5px;
      `}
    >
      {text}
    </button>
  );
}

export default ArrowBtn;