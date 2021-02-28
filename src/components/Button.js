import React from 'react';

const Button = ({
  title, blue, clickHandler, type, className,
}) => {
  return (
    <>
      <button
        className={`btn ${blue ? 'blue' : ''} ${className}`}
        onClick={clickHandler}
        type={type}
      >{title}
      </button>
    </>
  );
};

export default Button;
