import React from 'react';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      className={`menu-item ${size}`}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;