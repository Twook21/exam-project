import React from 'react';

const Checkbox = ({ id, label }) => {
    return (
      <div className="flex items-center mb-4">
        <input
          id={id}
          type="checkbox"
          className="form-checkbox text-blue-500 w-4 h-4"
        />
        <label htmlFor={id} className="ml-2 text-sm text-gray-600">
          {label}
        </label>
      </div>
    );
  };
  
  export default Checkbox;
  
  