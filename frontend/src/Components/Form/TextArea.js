import React from 'react'

function TextArea({ width, type, textname, value, onValueChange }) {
   const handleInputChange = (event) => {
    const newValue = event.target.value;
    onValueChange(newValue);
    // Call the provided callback function with the new value
  };

  return (
    <div>
        <textarea
        className={`h-20 w-full p-2 rounded text-[#8b2900] outline-none mt-4`}
        type={type}
        value={value}
        onChange={handleInputChange}
        name={textname}
      />
    </div>
  )
}

export default TextArea