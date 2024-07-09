import React from 'react'

function MediumHeader({text}) {
  return (
    <div>
        <h3 className='font-sans h-5 w-full mt-5 mb-5 p-5 text-[#8b2900] text-sm font-bold'>
            {text}
        </h3>
    </div>
  )
}

export default MediumHeader
