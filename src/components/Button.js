import React from 'react';

const Button = ({ title, blue, clickHandler }) => {
  return (
    <>
      <button
        className={`btn ${blue ? 'blue' : ''}`}
        onClick={clickHandler}
      >{title}
      </button>
    </>
  );
};

export default Button;
