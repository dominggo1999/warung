import React from 'react';
import MenuItem from './MenuItem';
import sections from '../data';

console.log(sections);

const DirectoryMenu = () => {
  return (
    <div className="directory-menu">
      {
        sections.map(({
          title, id, imageUrl, size,
        }) => {
          return (
            <MenuItem
              key={id}
              title={title}
              imageUrl={imageUrl}
              size={size}
            />
          );
        })
      }
    </div>
  );
};

export default DirectoryMenu;
