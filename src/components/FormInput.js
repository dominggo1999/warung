import React from 'react';

const FormInput = ({
  title, type, label,
}) => {
  return (
    <div className="form-input">
      <label htmlFor={label}>{title}</label>
      <input
        name={label}
        id={label}
        type={type}
        required
      />
    </div>
  );
};

export default FormInput;
