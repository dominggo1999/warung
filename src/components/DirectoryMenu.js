import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { SECTIONS } from '../static';

const DirectoryMenu = () => {
  const [sections, setSections] = useState(SECTIONS);

  return (
    <div className="directory-menu">
      {
        sections.map(({
          id,
          ...sections
        }) => (
          <MenuItem
            key={id}
            {...sections}
          />
        ))
      }
    </div>
  );
};

export default DirectoryMenu;
