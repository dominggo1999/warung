import React from 'react';

const FormInput = ({
  title, type, label, value, handleChange,
}) => {
  return (
    <div className="form-input">
      <input
        name={label}
        id={label}
        type={type}
        value={value}
        required
        onChange={handleChange}
        autoComplete={type === 'password' ? 'new-password' : ''}
      />
      <label htmlFor={label}>{title}</label>
    </div>
  );
};

export default FormInput;
