import React from 'react';

function Input({ small, type, placeholder, value, onValueChange, left }) {
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    onValueChange(newValue);
    // Call the provided callback function with the new value
  };

  return (
  <div class="w-full">
    <div class="relative w-full min-w-[200px] h-10 mb-5">
      <input
        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleInputChange}
        />
    </div>
  </div>  
  );
}

export default Input;