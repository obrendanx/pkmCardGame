import React from 'react'

function SmallHeader({text, xsm}) {
  return (
    <div>
        <h4 className='font-sans h-5 w-full mt-5 mb-5 p-5 text-white text-xs font-bold'>
            {text}
        </h4>
    </div>
  )
}

export default SmallHeader