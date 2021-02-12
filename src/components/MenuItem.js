import React from 'react';
import { withRouter } from 'react-router-dom';

const MenuItem = ({
  title, imageUrl, size, linkUrl, history, match,
}) => {
  return (
    <div
      className={`menu-item ${size}`}
      role="link"
      onClick={() => history.push(`${match.path}${linkUrl}`)}
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

export default withRouter(MenuItem);
