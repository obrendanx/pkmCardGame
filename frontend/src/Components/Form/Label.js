import React from 'react'
import { css } from '@emotion/css'

function Label({htmlfor, text, primary}) {
  return (
    <div>
        <label 
            htmlFor={htmlfor}
            className="block text-sm font-medium mb-2 dark:text-black"
        >
            {text}
        </label>
    </div>
  )
}

export default Label