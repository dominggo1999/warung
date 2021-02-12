import React from 'react';
import MenuItem from './MenuItem';
import sections from '../data';

const DirectoryMenu = () => {
  return (
    <div className="directory-menu">
      {
        sections.map(({
          id,
          ...sections
        }) => {
          return (
            <MenuItem
              key={id}
              {...sections}
            />
          );
        })
      }
    </div>
  );
};

export default DirectoryMenu;
