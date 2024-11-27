import React from 'react';

const CustomInput = ({ placeholder, type = 'text', bgColor = 'bg-gray-200', textColor = 'text-black', fontWeight = 'font-bold', value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${bgColor} ${textColor} ${fontWeight} w-full py-2 px-4 rounded focus:outline-none`}
    />
  );
};

export default CustomInput;
