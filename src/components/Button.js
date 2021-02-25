import React from 'react';

const Button = ({
  title, blue, clickHandler, type,
}) => {
  return (
    <>
      <button
        className={`btn ${blue ? 'blue' : ''}`}
        onClick={clickHandler}
        type={type}
      >{title}
      </button>
    </>
  );
};

export default Button;
