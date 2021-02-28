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
          .map((item) => (
            <CollectionItem
              key={item.id}
              item={item}
            />
          ))
      }
      </div>
    </div>
  );
};

export default CollectionPreview;
