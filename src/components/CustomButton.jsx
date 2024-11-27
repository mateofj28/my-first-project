import React from 'react';

const CustomButton = ({ texto, onClick }) => {
  return (
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" onClick={onClick}>
      {texto}
    </button>
  );
};

export default CustomButton;
