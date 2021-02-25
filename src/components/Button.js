import React from 'react';

const Button = ({ title, blue, clickHandler }) => {
  return (
    <>
      <button
        onClick={clickHandler}
        className={`btn ${blue ? 'blue' : ''}`}
      >{title}
      </button>
    </>
  );
};

export default Button;
