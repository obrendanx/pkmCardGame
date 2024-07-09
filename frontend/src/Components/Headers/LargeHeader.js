import React from 'react'

function LargeHeader({text}) {
  return (
    <div>
        <h2
        className='font-sans h-8 w-full mt-5 mb-5 p-5 text-[#8b2900] text-2xl font-bold'>
            {text}
        </h2>
    </div>
  )
}

export default LargeHeader