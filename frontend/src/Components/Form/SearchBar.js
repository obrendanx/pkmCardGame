import React from 'react'

function SearchBar({ small, type, placeholder, value, onValueChange }) {
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    onValueChange(newValue);
    // Call the provided callback function with the new value
  };

  return (
    <div>
        <input
        type={type}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        />
    </div>
  )
}

export default SearchBar