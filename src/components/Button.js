import React from 'react';

const Button = ({ onClick, label, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
