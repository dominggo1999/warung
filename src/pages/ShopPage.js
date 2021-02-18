import React, { useState } from 'react';
import CollectionPreview from '../components/CollectionPreview';
import { SHOP_DATA } from '../static';

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page-container">
      {
        collections
          .map(({
            id,
            ...collections
          }) => (
            <CollectionPreview
              key={id}
              {...collections}
            />
          ))
      }
    </div>
  );
};

export default ShopPage;
