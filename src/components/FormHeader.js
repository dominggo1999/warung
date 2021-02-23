import React from 'react';

const FormHeader = ({ title, description }) => {
  return (
    <div className="form-header">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FormHeader;
