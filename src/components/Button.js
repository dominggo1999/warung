import React from 'react';

const Button = ({ title, blue }) => {
  return (
    <>
      <button className={`btn ${blue ? 'blue' : ''}`}>{title}</button>
    </>
  );
};

export default Button;
