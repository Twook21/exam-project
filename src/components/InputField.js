import React from 'react';

const InputField = ({ label, type, placeholder, value, onChange, icon }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            {icon}
          </span>
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    );
  };
  
  export default InputField;
  