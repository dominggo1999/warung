import React from 'react';
import CollectionItem from './CollectionItem';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h4 className="title">{title}</h4>
      <div className="items">
        {
        items
          .filter((item, id) => id < 4)
          .map(({ id, ...restItemProps }) => (
            <CollectionItem
              key={id}
              {...restItemProps}
            />
          ))
      }
      </div>
    </div>
  );
};

export default CollectionPreview;
