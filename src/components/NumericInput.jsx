import React from 'react';

const NumericInput = ({ placeholder, value, onChange }) => {
    const handleChange = (e) => {
        const newValue = e.target.value;
        // Solo permitir números y hasta 2 dígitos
        if (/^\d{0,2}$/.test(newValue)) {
            onChange(e);
        }
    };

    return (
        <input
            type="text" 
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className="bg-gray-200 text-black font-bold w-full py-2 px-4 rounded focus:outline-none"
        />
    );
};

export default NumericInput;
