import React from 'react'

function Submit({ small, left, value, form }) {
  return (
    <div>
        <input 
        className="${primary ? bg-[#31acee] : bg-[#ffd57b]}
        hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 mb-3"
        type='submit' 
        value={value} 
        form={form}
        />
    </div>
  )
}

export default Submit